
import React, { useState } from 'react';
// FIX: Import centralized LearningSource type.
import type { CustomPreset, FlashcardData, LearningSource } from '../types';

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /> </svg> );
const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /> </svg> );
const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /> </svg> );
const ListBulletIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /> </svg> );


interface PresetListProps {
    presets: CustomPreset[];
    presetProgress: Record<number, number[]>;
    allCardsMap: Map<number, FlashcardData>;
    favoriteCardIds: number[];
    onSelectPreset: (preset: CustomPreset) => void;
    onCreatePreset: (name: string) => void;
    onViewWordList: (source: LearningSource) => void;
    onBack: () => void;
}

const PresetList: React.FC<PresetListProps> = ({ presets, presetProgress, allCardsMap, favoriteCardIds, onSelectPreset, onCreatePreset, onViewWordList, onBack }) => {
    const [isCreating, setIsCreating] = useState(false);
    const [newPresetName, setNewPresetName] = useState("");

    const handleCreate = () => {
        if (newPresetName.trim()) {
            onCreatePreset(newPresetName.trim());
            setNewPresetName("");
            setIsCreating(false);
        }
    }
    
    const favoritePreset: CustomPreset = {
        id: -1,
        name: '⭐ Yêu thích',
        cardIds: favoriteCardIds,
    };
    
    const allPresets = [favoritePreset, ...presets];

    return (
        <div className="w-full max-w-xl mx-auto flex flex-col h-full max-h-screen">
            <header className="text-center mb-4 w-full sticky top-0 bg-background dark:bg-dark-background py-4 z-10">
                <div className="flex justify-between items-center relative">
                    <button onClick={onBack} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Back">
                        <ArrowLeftIcon className="h-6 w-6" />
                    </button>
                    <h1 className="text-3xl font-extrabold text-on-surface dark:text-dark-on-surface flex items-center">
                        <SparklesIcon className="h-8 w-8 mr-2 text-secondary dark:text-dark-secondary" /> Học cá nhân
                    </h1>
                    <button onClick={() => setIsCreating(true)} className="p-2 bg-primary dark:bg-dark-primary text-on-primary rounded-full shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-dark-background transition-all duration-200" aria-label="Create new preset">
                        <PlusIcon className="h-6 w-6" />
                    </button>
                </div>
            </header>
            
            {isCreating && (
                <div className="p-4 mb-4 bg-surface dark:bg-dark-surface rounded-lg shadow-md">
                    <input
                        type="text"
                        value={newPresetName}
                        onChange={(e) => setNewPresetName(e.target.value)}
                        placeholder="Nhập tên bộ từ mới..."
                        className="w-full px-4 py-2 bg-background dark:bg-dark-background border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary text-on-surface dark:text-dark-on-surface"
                    />
                    <div className="flex justify-end space-x-2 mt-2">
                        <button onClick={() => setIsCreating(false)} className="px-4 py-2 text-sm font-medium text-on-surface-variant dark:text-dark-on-surface-variant rounded-md hover:bg-slate-200 dark:hover:bg-slate-700/80">Hủy</button>
                        <button onClick={handleCreate} className="px-4 py-2 text-sm font-medium text-on-primary bg-primary dark:bg-dark-primary rounded-md hover:bg-primary-dark disabled:opacity-50" disabled={!newPresetName.trim()}>Tạo</button>
                    </div>
                </div>
            )}

            <main className="flex-grow overflow-y-auto pb-4 px-1 hide-scrollbar">
                 {allPresets.length === 1 && favoriteCardIds.length === 0 && !isCreating ? (
                     <p className="text-center text-on-surface-variant dark:text-dark-on-surface-variant mt-8">Chưa có bộ từ nào. Nhấn dấu '+' để tạo bộ từ mới!</p>
                ) : (
                    <ul className="space-y-3">
                        {allPresets.map(preset => {
                            const memorizedCount = (presetProgress[preset.id] || []).length;
                            const totalCount = preset.cardIds.filter(id => allCardsMap.has(id)).length;
                            const progress = totalCount > 0 ? (memorizedCount / totalCount) * 100 : 0;
                            const isFavoritePreset = preset.id === -1;

                            return (
                                <li key={preset.id} className={`bg-surface dark:bg-dark-surface rounded-lg shadow transition-all hover:shadow-md ${isFavoritePreset ? 'hover:bg-yellow-400/10 dark:hover:bg-yellow-400/10' : 'hover:bg-primary/5 dark:hover:bg-dark-primary/10'} flex items-center`}>
                                    <div onClick={() => onSelectPreset(preset)} className="flex-grow p-4 cursor-pointer">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="font-bold text-lg text-on-surface dark:text-dark-on-surface">{preset.name}</h3>
                                            <span className="text-sm font-medium text-on-surface-variant dark:text-dark-on-surface-variant">{memorizedCount} / {totalCount} từ</span>
                                        </div>
                                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                                            <div className={`${isFavoritePreset ? 'bg-yellow-500' : 'bg-secondary dark:bg-dark-secondary'} h-2.5 rounded-full`} style={{ width: `${progress}%` }}></div>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => onViewWordList({ type: 'preset', id: preset.id })}
                                        className="p-4 text-on-surface-variant dark:text-dark-on-surface-variant rounded-full hover:bg-slate-200 dark:hover:bg-slate-700/80 hover:text-primary dark:hover:text-dark-primary transition-colors self-stretch"
                                        aria-label={`View word list for ${preset.name}`}
                                    >
                                        <ListBulletIcon className="h-6 w-6"/>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </main>
        </div>
    );
}

export default PresetList;