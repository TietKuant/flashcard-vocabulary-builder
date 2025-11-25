
import React, { useRef } from 'react';
import type { MainTheme } from '../types';

interface DevToolsProps {
  isOpen: boolean;
  onClose: () => void;
  onImportThemes: (themes: MainTheme[]) => void;
  onClearImportedThemes: () => void;
}

const DevTools: React.FC<DevToolsProps> = ({ isOpen, onClose, onImportThemes, onClearImportedThemes }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Regex to handle quoted fields in CSV, as some definitions might contain commas
    const parseCsvLine = (line: string): string[] => {
        const regex = /("([^"]*)"|[^,]+)/g;
        const matches: string[] = [];
        let match;
        while ((match = regex.exec(line)) !== null) {
            if (match.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            matches.push(match[2] !== undefined ? match[2] : match[1]);
        }
        return matches.map(v => v.trim());
    };

    try {
      const text = await file.text();
      const lines = text.split('\n').filter(line => line.trim() !== '');
      if (lines.length <= 1) {
          alert("Error: CSV file is empty or contains only a header.");
          return;
      }
      lines.shift(); // remove header

      const themes: Record<string, MainTheme> = {};
      const cardIds = new Set<number>();

      for (const line of lines) {
        const values = parseCsvLine(line);
        if (values.length < 11) continue; // Skip malformed lines
        
        const [mainId, mainName, subId, subName, cardIdStr, word, pronunciation, definition, example, partOfSpeech, level] = values;

        if (!mainId || !mainName || !subId || !subName) continue; // Skip invalid lines

        if (!themes[mainId]) {
          themes[mainId] = { id: mainId, name: mainName, subThemes: [] };
        }
        
        const uniqueSubThemeId = `${mainId}-${subId}`;
        let subTheme = themes[mainId].subThemes.find(st => st.id === uniqueSubThemeId);
        if (!subTheme) {
          subTheme = { id: uniqueSubThemeId, name: subName, cards: [] };
          themes[mainId].subThemes.push(subTheme);
        }

        const cardId = parseInt(cardIdStr.replace(/-/g, ''), 10);
        if (word && cardId && !isNaN(cardId) && !cardIds.has(cardId)) {
          subTheme.cards.push({ id: cardId, word, pronunciation, definition, example, partOfSpeech, level });
          cardIds.add(cardId);
        }
      }
      onImportThemes(Object.values(themes));
    } catch (error) {
        console.error("Failed to parse CSV:", error);
        alert("An error occurred while parsing the CSV file. Check the console for details.");
    } finally {
        // Reset file input so the same file can be uploaded again
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose} role="dialog" aria-modal="true">
      <div className="bg-surface dark:bg-dark-surface rounded-lg shadow-xl p-6 w-full max-w-lg" onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4 text-on-surface dark:text-dark-on-surface">
          Thêm Dữ liệu từ Tệp
        </h2>
        <div className="space-y-4">
            <div className="bg-background dark:bg-dark-background p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-on-surface dark:text-dark-on-surface">Import Themes from CSV</h3>
                <p className="text-sm text-on-surface-variant dark:text-dark-on-surface-variant mb-3">Tải lên tệp .csv để thêm hoặc cập nhật các chủ đề học. Tệp phải có header và các cột theo thứ tự sau:</p>
                <code className="block text-xs bg-slate-200 dark:bg-slate-700 p-2 rounded font-mono text-on-surface-variant dark:text-dark-on-surface-variant break-words">
                    mainThemeId,mainThemeName,subThemeId,subThemeName,cardId,word,pronunciation,definition,example,partOfSpeech,level
                </code>
                 <ul className="text-xs list-disc list-inside mt-2 text-on-surface-variant dark:text-dark-on-surface-variant space-y-1">
                    <li><b>mainThemeId, subThemeId:</b> ID duy nhất cho chủ đề chính và nhánh (vd: `1`, `1`).</li>
                    <li><b>cardId:</b> ID duy nhất cho mỗi từ, có thể chứa dấu gạch nối (vd: `1-1-001`).</li>
                    <li>Nếu một trường (như definition) chứa dấu phẩy, hãy đặt nó trong dấu ngoặc kép.</li>
                </ul>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".csv"
                    className="mt-4 block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-primary/10 file:text-primary
                    dark:file:bg-dark-primary/20 dark:file:text-dark-primary
                    hover:file:bg-primary/20 dark:hover:file:bg-dark-primary/30"
                />
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-red-800 dark:text-red-200">Xóa Dữ liệu đã Import</h3>
                <p className="text-sm text-red-700 dark:text-red-300 mb-3">Hành động này sẽ xóa tất cả các chủ đề và tiến trình học được thêm từ tệp CSV. Dữ liệu mặc định sẽ không bị ảnh hưởng.</p>
                <button
                    onClick={onClearImportedThemes}
                    className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-offset-dark-surface transition-all duration-200"
                >
                    Xóa tất cả dữ liệu đã import
                </button>
            </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-on-surface-variant dark:text-dark-on-surface-variant font-semibold rounded-lg shadow-sm hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 dark:focus:ring-offset-dark-surface transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevTools;
