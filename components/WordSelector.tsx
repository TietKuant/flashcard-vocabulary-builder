
import React, { useState, useMemo } from 'react';
import type { FlashcardData, CustomPreset, MainTheme } from '../types';

const CheckBadgeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> </svg> );
const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /> </svg> );
const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /> </svg> );
const StarIcon: React.FC<React.SVGProps<SVGSVGElement> & { solid?: boolean }> = ({ solid, ...props }) => solid ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.31h5.418a.562.562 0 0 1 .321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-3.357a.562.562 0 0 0-.652 0l-4.725 3.357a.562.562 0 0 1-.84-.61l1.285-5.385a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988h5.418a.563.563 0 0 0 .475-.31L11.48 3.5Z" />
    </svg>
);

interface WordSelectorProps {
    preset: CustomPreset;
    allMainThemes: MainTheme[];
    favoriteCardIds: number[];
    onSave: (presetId: number, newCardIds: number[]) => void;
    onCancel: () => void;
}

const CategorySection: React.FC<{
    category: string;
    cards: FlashcardData[];
    selectedIds: Set<number>;
    isOpen: boolean;
    favoriteIdsSet: Set<number>;
    onToggleCategory: () => void;
    onToggleId: (id: number) => void;
    onSelectAll: (ids: number[], select: boolean) => void;
}> = ({ category, cards, selectedIds, isOpen, favoriteIdsSet, onToggleCategory, onToggleId, onSelectAll }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState<'id' | 'alphabetical'>('id');
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
    
    const filteredAndSortedCards = useMemo(() => {
        let filtered = cards.filter(card => 
            card.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
            card.definition.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (showFavoritesOnly) {
            filtered = filtered.filter(card => favoriteIdsSet.has(card.id));
        }

        return [...filtered].sort((a, b) => {
            if (sortBy === 'id') return b.id - a.id;
            return a.word.localeCompare(b.word);
        });
    }, [cards, searchTerm, sortBy, showFavoritesOnly, favoriteIdsSet]);

    const allInCategorySelected = filteredAndSortedCards.length > 0 && filteredAndSortedCards.every(c => selectedIds.has(c.id));

    const handleSelectAllClick = () => {
        onSelectAll(filteredAndSortedCards.map(c => c.id), !allInCategorySelected);
    };

    return (
        <div className="mb-2 bg-surface dark:bg-dark-surface rounded-lg shadow-sm transition-all">
            <button 
                onClick={onToggleCategory}
                className="w-full flex justify-between items-center p-4 text-left"
                aria-expanded={isOpen}
            >
                <h2 className="text-xl font-bold text-on-surface dark:text-dark-on-surface">{category}</h2>
                <ChevronDownIcon className={`h-6 w-6 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="mb-4 space-y-3">
                         <input
                            type="text"
                            placeholder="Tìm trong chủ đề này..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                             onClick={(e) => e.stopPropagation()} // Prevent accordion from closing
                            className="w-full px-4 py-2 bg-background dark:bg-dark-background border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-on-surface dark:text-dark-on-surface"
                        />
                         <div className="flex justify-between items-center">
                             <div className="flex space-x-2">
                                <button onClick={(e) => { e.stopPropagation(); setSortBy('id'); }} className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${sortBy === 'id' ? 'bg-primary dark:bg-dark-primary text-on-primary' : 'bg-slate-200 dark:bg-dark-surface hover:bg-slate-300 dark:hover:bg-slate-700/80'}`}>Mới nhất</button>
                                <button onClick={(e) => { e.stopPropagation(); setSortBy('alphabetical'); }} className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${sortBy === 'alphabetical' ? 'bg-primary dark:bg-dark-primary text-on-primary' : 'bg-slate-200 dark:bg-dark-surface hover:bg-slate-300 dark:hover:bg-slate-700/80'}`}>A-Z</button>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); setShowFavoritesOnly(!showFavoritesOnly); }} 
                                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${showFavoritesOnly ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 ring-1 ring-yellow-400' : 'bg-slate-200 dark:bg-dark-surface text-on-surface-variant dark:text-dark-on-surface-variant hover:bg-slate-300 dark:hover:bg-slate-700/80'}`}
                                    aria-label="Filter favorites"
                                >
                                    Yêu thích
                                </button>
                             </div>
                             <button 
                                onClick={(e) => { e.stopPropagation(); handleSelectAllClick(); }}
                                className="px-3 py-1.5 text-xs font-semibold rounded-md transition-colors bg-primary/10 text-primary dark:bg-dark-primary/20 dark:text-dark-primary hover:bg-primary/20 dark:hover:bg-dark-primary/30"
                            >
                                {allInCategorySelected ? 'Bỏ chọn tất cả' : 'Chọn tất cả'} ({filteredAndSortedCards.length})
                            </button>
                        </div>
                    </div>

                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {filteredAndSortedCards.map(card => {
                            const isFavorite = favoriteIdsSet.has(card.id);
                            return (
                                <li key={card.id}>
                                    <button 
                                        onClick={() => onToggleId(card.id)} 
                                        className={`w-full h-full p-3 rounded-lg text-center cursor-pointer transition-all duration-200 relative border-2 ${selectedIds.has(card.id) ? 'border-primary bg-primary/10 dark:bg-dark-primary/20' : 'border-transparent bg-slate-100 dark:bg-dark-surface hover:bg-slate-200 dark:hover:bg-slate-700/80'}`}
                                    >
                                        <span className="font-semibold text-on-surface dark:text-dark-on-surface">{card.word}</span>
                                        {selectedIds.has(card.id) && <CheckBadgeIcon className="h-5 w-5 text-primary dark:text-dark-primary flex-shrink-0 absolute top-1.5 right-1.5" />}
                                        {isFavorite && <StarIcon solid className="h-3 w-3 text-yellow-400 absolute bottom-1.5 right-1.5" />}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                     {filteredAndSortedCards.length === 0 && <p className="text-center text-on-surface-variant dark:text-dark-on-surface-variant py-4">Không tìm thấy từ nào.</p>}
                </div>
            )}
        </div>
    );
}

const WordSelector: React.FC<WordSelectorProps> = ({ preset, allMainThemes, favoriteCardIds, onSave, onCancel }) => {
    const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set(preset.cardIds));
    const [openCategory, setOpenCategory] = useState<string | null>(null);
    const [selectedTheme, setSelectedTheme] = useState<MainTheme | null>(null);
    
    const favoriteIdsSet = useMemo(() => new Set(favoriteCardIds), [favoriteCardIds]);

    const handleToggleId = (id: number) => {
        setSelectedIds(prev => {
            const newSet = new Set(prev);
            newSet.has(id) ? newSet.delete(id) : newSet.add(id);
            return newSet;
        });
    };

    const handleSelectAll = (ids: number[], select: boolean) => {
        setSelectedIds(prev => {
            const newSet = new Set(prev);
            if (select) {
                ids.forEach(id => newSet.add(id));
            } else {
                ids.forEach(id => newSet.delete(id));
            }
            return newSet;
        });
    }

    const handleToggleCategory = (category: string) => {
        setOpenCategory(prev => (prev === category ? null : category));
    };

    const handleSave = () => {
        onSave(preset.id, Array.from(selectedIds));
    }

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col h-full max-h-screen">
            <header className="text-center mb-4 w-full sticky top-0 bg-background dark:bg-dark-background py-4 z-20">
                <div className="flex items-center justify-center relative">
                    {selectedTheme && (
                         <button onClick={() => setSelectedTheme(null)} className="absolute left-0 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Back to themes">
                            <ArrowLeftIcon className="h-6 w-6" />
                        </button>
                    )}
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold text-on-surface dark:text-dark-on-surface">
                           {selectedTheme ? selectedTheme.name : `Thêm từ vào "${preset.name}"`}
                        </h1>
                         <p className="text-on-surface-variant dark:text-dark-on-surface-variant mt-1">{selectedTheme ? 'Chọn từ các chủ đề nhánh' : 'Chọn một chủ đề chính'}</p>
                    </div>
                </div>
            </header>
            
            <main className="flex-grow overflow-y-auto pb-4 px-1 hide-scrollbar">
                 {!selectedTheme ? (
                    <div className="space-y-3">
                        {allMainThemes.map(theme => (
                            <button key={theme.id} onClick={() => setSelectedTheme(theme)} className="w-full text-left bg-surface dark:bg-dark-surface rounded-lg shadow p-4 flex items-center justify-between transition-all hover:shadow-md hover:bg-primary/5 dark:hover:bg-dark-primary/10">
                                <div>
                                    <h3 className="font-bold text-lg text-on-surface dark:text-dark-on-surface">{theme.name}</h3>
                                    <p className="text-sm text-on-surface-variant dark:text-dark-on-surface-variant">{theme.subThemes.length} chủ đề nhánh</p>
                                </div>
                                <span className="text-2xl text-slate-400">→</span>
                            </button>
                        ))}
                    </div>
                 ) : (
                     <div>
                        {selectedTheme.subThemes.length > 0 ? selectedTheme.subThemes.map((subTheme) => (
                            <CategorySection 
                                key={subTheme.id}
                                category={subTheme.name}
                                cards={subTheme.cards}
                                selectedIds={selectedIds}
                                isOpen={openCategory === subTheme.name}
                                favoriteIdsSet={favoriteIdsSet}
                                onToggleCategory={() => handleToggleCategory(subTheme.name)}
                                onToggleId={handleToggleId}
                                onSelectAll={handleSelectAll}
                            />
                        )) : <p className="text-center text-on-surface-variant dark:text-dark-on-surface-variant mt-8">Chủ đề này không có bài học nào.</p>}
                     </div>
                 )}
            </main>

            <footer className="sticky bottom-0 w-full bg-background dark:bg-dark-background py-4 z-10 flex justify-end space-x-4 px-4 border-t border-slate-200 dark:border-slate-700">
                 <button onClick={onCancel} className="px-6 py-3 bg-slate-200 dark:bg-dark-surface text-on-surface-variant dark:text-dark-on-surface-variant font-semibold rounded-lg shadow-md hover:bg-slate-300 dark:hover:bg-slate-700/80 transition-all duration-200">
                    Hủy
                </button>
                <button 
                    onClick={handleSave} 
                    className="px-6 py-3 bg-primary dark:bg-dark-primary text-on-primary font-semibold rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-dark-background transition-all duration-200">
                    Lưu (Tổng cộng: {selectedIds.size} từ)
                </button>
            </footer>
        </div>
    );
};

export default WordSelector;
