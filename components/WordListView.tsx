
import React, { useState, useMemo } from 'react';
import type { FlashcardData } from '../types';
import { getLevelStyles } from '../utils/styles';

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /> </svg> );
const MagnifyingGlassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>);
const StarIcon: React.FC<React.SVGProps<SVGSVGElement> & { solid?: boolean }> = ({ solid, ...props }) => solid ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.31h5.418a.562.562 0 0 1 .321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-3.357a.562.562 0 0 0-.652 0l-4.725 3.357a.562.562 0 0 1-.84-.61l1.285-5.385a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988h5.418a.563.563 0 0 0 .475-.31L11.48 3.5Z" />
    </svg>
);


interface WordListViewProps {
    title: string;
    cards: FlashcardData[];
    memorizedIds: Set<number>;
    favoriteCardIds: number[];
    onToggleFavorite: (cardId: number) => void;
    onBack: () => void;
}

const WordListView: React.FC<WordListViewProps> = ({ title, cards, memorizedIds, favoriteCardIds, onToggleFavorite, onBack }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState<'all' | 'memorized' | 'not-memorized' | 'favorite'>('all');
    const [sort, setSort] = useState<'default' | 'alphabetical'>('default');
    
    const favoriteIdsSet = useMemo(() => new Set(favoriteCardIds), [favoriteCardIds]);

    const filteredAndSortedCards = useMemo(() => {
        let processedCards = [...cards];

        if (searchTerm) {
            processedCards = processedCards.filter(card =>
                card.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
                card.definition.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (filter === 'memorized') {
            processedCards = processedCards.filter(card => memorizedIds.has(card.id));
        } else if (filter === 'not-memorized') {
            processedCards = processedCards.filter(card => !memorizedIds.has(card.id));
        } else if (filter === 'favorite') {
            processedCards = processedCards.filter(card => favoriteIdsSet.has(card.id));
        }

        if (sort === 'alphabetical') {
            processedCards.sort((a, b) => a.word.localeCompare(b.word));
        }

        return processedCards;
    }, [cards, searchTerm, filter, sort, memorizedIds, favoriteIdsSet]);
    
    const FilterButton: React.FC<{
      label: string;
      value: typeof filter;
      count: number;
    }> = ({ label, value, count }) => (
      <button
        onClick={() => setFilter(value)}
        className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
          filter === value
            ? 'bg-primary dark:bg-dark-primary text-on-primary'
            : 'bg-slate-200 dark:bg-dark-surface hover:bg-slate-300 dark:hover:bg-slate-700/80'
        }`}
      >
        {label} ({count})
      </button>
    );

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col h-full max-h-screen">
            <header className="text-center w-full sticky top-0 bg-background/80 dark:bg-dark-background/80 backdrop-blur-sm py-4 z-10">
                <div className="flex justify-between items-center relative">
                    <button onClick={onBack} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Back">
                        <ArrowLeftIcon className="h-6 w-6" />
                    </button>
                    <h1 className="text-3xl font-extrabold text-on-surface dark:text-dark-on-surface truncate px-2">
                        {title}
                    </h1>
                    <div className="w-10"></div> {/* Spacer */}
                </div>
            </header>
            
             <div className="p-2 mx-2 mb-4 bg-slate-100 dark:bg-dark-surface/50 rounded-lg space-y-3">
                <div className="relative">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder={`Tìm trong ${cards.length} từ...`}
                        className="w-full pl-10 pr-4 py-2 bg-surface dark:bg-dark-surface border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary text-on-surface dark:text-dark-on-surface"
                    />
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant dark:text-dark-on-surface-variant" />
                </div>
                 <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                        <FilterButton label="Tất cả" value="all" count={cards.length} />
                        <FilterButton label="Đã nhớ" value="memorized" count={memorizedIds.size} />
                        <FilterButton label="Chưa nhớ" value="not-memorized" count={cards.length - memorizedIds.size} />
                        <FilterButton label="Yêu thích" value="favorite" count={cards.filter(c => favoriteIdsSet.has(c.id)).length} />
                    </div>
                    <div className="flex space-x-2">
                         <button onClick={() => setSort('default')} className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${sort === 'default' ? 'bg-primary dark:bg-dark-primary text-on-primary' : 'bg-slate-200 dark:bg-dark-surface hover:bg-slate-300 dark:hover:bg-slate-700/80'}`}>Mặc định</button>
                         <button onClick={() => setSort('alphabetical')} className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${sort === 'alphabetical' ? 'bg-primary dark:bg-dark-primary text-on-primary' : 'bg-slate-200 dark:bg-dark-surface hover:bg-slate-300 dark:hover:bg-slate-700/80'}`}>A-Z</button>
                    </div>
                </div>
            </div>

            <main className="flex-grow overflow-y-auto pb-4 px-2 hide-scrollbar">
                {filteredAndSortedCards.length > 0 ? (
                    <ul className="space-y-3">
                        {filteredAndSortedCards.map(card => {
                            const memorized = memorizedIds.has(card.id);
                            const isFavorite = favoriteIdsSet.has(card.id);
                            const levelStyle = getLevelStyles(card.level);
                            return (
                                <li key={card.id} className="bg-surface dark:bg-dark-surface rounded-lg p-3 flex justify-between items-center shadow-sm">
                                    <div className="flex items-start flex-1 min-w-0">
                                        <div className={`flex-shrink-0 w-2.5 h-2.5 rounded-full mr-3 mt-2 ${memorized ? 'bg-sky-500' : 'border border-slate-400'}`}></div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className={`font-bold text-lg ${memorized ? 'text-sky-600 dark:text-sky-400' : 'text-on-surface dark:text-dark-on-surface'}`}>{card.word}</p>
                                                    {card.pronunciation && <p className={`text-sm ${memorized ? 'text-sky-500 dark:text-sky-500' : 'text-on-surface-variant dark:text-dark-on-surface-variant'}`}>{card.pronunciation}</p>}
                                                </div>
                                                {card.level && <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${levelStyle.bg} ${levelStyle.text}`}>{card.level}</span>}
                                            </div>
                                            <p className={`text-sm italic mt-2 ${memorized ? 'text-sky-500 dark:text-sky-500' : 'text-slate-500 dark:text-slate-400'}`}>
                                                "{card.definition}"
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 ml-2">
                                        <button
                                            onClick={() => onToggleFavorite(card.id)}
                                            className={`p-2 rounded-full transition-colors ${isFavorite ? 'text-yellow-500 hover:text-yellow-600' : 'text-slate-400 hover:text-yellow-500'}`}
                                            aria-label={`Toggle favorite for ${card.word}`}
                                        >
                                            <StarIcon solid={isFavorite} className="h-6 w-6" />
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p className="text-center text-on-surface-variant dark:text-dark-on-surface-variant mt-8">
                        {cards.length > 0 ? 'Không tìm thấy từ nào.' : 'Bộ này không có từ nào.'}
                    </p>
                )}
            </main>
        </div>
    );
};

export default React.memo(WordListView);
