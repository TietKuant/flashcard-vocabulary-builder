
import React, { useState, useMemo } from 'react';
// FIX: Import centralized LearningSource and ActiveLearningSession types.
import type { CustomPreset, FlashcardData, LearningSource, ActiveLearningSession } from '../types';
import { getLevelStyles } from '../utils/styles';

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /> </svg> );
const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /> </svg> );
const ChartPieIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /> </svg> );
const PlusCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>);
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
const PencilSquareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /> </svg> );
const ListBulletIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /> </svg> );

interface PresetDetailProps {
    preset: CustomPreset;
    allCards: FlashcardData[];
    presetProgress: number[];
    favoriteCardIds: number[];
    onToggleFavorite: (cardId: number) => void;
    // FIX: Use centralized ActiveLearningSession type.
    activeLearningSession: ActiveLearningSession | null;
    onBack: () => void;
    onStartSession: (cards: FlashcardData[], sourceId: number) => void;
    onStartPractice: (cards: FlashcardData[], mode: 'typing' | 'mcq', source: LearningSource) => void;
    onAddExistingWords: () => void;
    onRemoveWordFromPreset: (presetId: number, cardId: number) => void;
    onResetProgress: (presetId: number) => void;
    onDeletePreset: () => void;
    onViewProgress: (source: LearningSource) => void;
    onResumeSession: () => void;
}

const PresetDetail: React.FC<PresetDetailProps> = ({ 
    preset, allCards, presetProgress, favoriteCardIds, onToggleFavorite, activeLearningSession, onBack, onStartSession, onStartPractice, onAddExistingWords, onRemoveWordFromPreset, onResetProgress, onDeletePreset, onViewProgress, onResumeSession
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState<'all' | 'memorized' | 'not-memorized' | 'favorite'>('all');
    const [sort, setSort] = useState<'default' | 'alphabetical'>('default');
    const [showPracticeOptions, setShowPracticeOptions] = useState(false);
    
    const isFavoritePreset = preset.id === -1;

    const presetCards = useMemo(() => {
        return preset.cardIds.map(id => allCards.find(card => card.id === id)).filter(Boolean) as FlashcardData[];
    }, [preset.cardIds, allCards]);

    const memorizedIds = useMemo(() => new Set(presetProgress), [presetProgress]);
    const favoriteIdsSet = useMemo(() => new Set(favoriteCardIds), [favoriteCardIds]);

    const filteredAndSortedCards = useMemo(() => {
        let cards = [...presetCards];

        if (searchTerm) {
            cards = cards.filter(card =>
                card.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
                card.definition.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (filter === 'memorized') {
            cards = cards.filter(card => memorizedIds.has(card.id));
        } else if (filter === 'not-memorized') {
            cards = cards.filter(card => !memorizedIds.has(card.id));
        } else if (filter === 'favorite') {
            cards = cards.filter(card => favoriteIdsSet.has(card.id));
        }

        if (sort === 'alphabetical') {
            cards.sort((a, b) => a.word.localeCompare(b.word));
        }
        
        return cards;
    }, [presetCards, searchTerm, filter, sort, memorizedIds, favoriteIdsSet]);

    const memorizedCount = memorizedIds.size;
    const totalCount = presetCards.length;
    const isCompleted = totalCount > 0 && memorizedCount === totalCount;

    const isSessionInProgress = activeLearningSession?.source.type === 'preset' && activeLearningSession.source.id === preset.id;

    const handleStart = () => {
        onStartSession(presetCards, preset.id);
    }
    
    const getButtonText = () => {
        if (isCompleted) return 'Đã hoàn thành';
        const remaining = totalCount - memorizedCount;
        if (memorizedCount > 0) return `Học tiếp (${remaining} từ)`;
        return `Bắt đầu học (${totalCount} từ)`;
    }
    
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

    const source: LearningSource = { type: 'preset', id: preset.id };

    return (
        <div className="w-full max-w-xl mx-auto flex flex-col h-full max-h-screen">
            <header className="text-center mb-4 w-full sticky top-0 bg-background/90 dark:bg-dark-background/90 backdrop-blur-sm py-4 z-10">
                <div className="flex justify-between items-center relative">
                    <button onClick={onBack} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Back to presets">
                        <ArrowLeftIcon className="h-6 w-6" />
                    </button>
                    <h1 className="text-3xl font-extrabold text-on-surface dark:text-dark-on-surface truncate px-2">
                        {preset.name}
                    </h1>
                    <div className="w-10"></div> {/* Spacer */}
                </div>
            </header>

            {presetCards.length > 0 ? (
                 <div className="px-2 mb-4">
                    <div className="bg-surface dark:bg-dark-surface p-4 rounded-lg shadow mb-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg text-on-surface dark:text-dark-on-surface">Tiến độ</h3>
                            <button onClick={() => onViewProgress({ type: 'preset', id: preset.id })} className="flex items-center space-x-2 px-3 py-1.5 bg-slate-200 dark:bg-slate-700/80 text-on-surface-variant dark:text-dark-on-surface-variant text-sm font-semibold rounded-lg shadow-sm hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200">
                                <ChartPieIcon className="h-5 w-5" />
                                <span>Chi tiết</span>
                            </button>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mt-2">
                            <div className={`${isFavoritePreset ? 'bg-yellow-500' : 'bg-secondary dark:bg-dark-secondary'} h-2.5 rounded-full`} style={{ width: `${totalCount > 0 ? (memorizedCount / totalCount) * 100 : 0}%` }}></div>
                        </div>
                        <p className="text-right text-sm font-medium text-on-surface-variant dark:text-dark-on-surface-variant mt-1">{memorizedCount} / {totalCount} từ đã nhớ</p>
                    </div>

                    <div className="flex flex-col space-y-3">
                        {isSessionInProgress ? (
                             <button 
                                onClick={onResumeSession}
                                className="w-full px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-dark-background transition-all duration-200">
                                Học tiếp
                            </button>
                        ) : (
                            <button 
                                onClick={handleStart}
                                disabled={isCompleted || totalCount === 0}
                                className="w-full px-6 py-3 bg-primary dark:bg-dark-primary text-on-primary text-lg font-semibold rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-dark-background transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                                {getButtonText()}
                            </button>
                        )}
                        {isCompleted && (
                             <button
                                onClick={() => onStartSession(presetCards, preset.id)}
                                className="w-full px-6 py-3 text-lg font-semibold bg-yellow-400/20 text-yellow-700 dark:bg-yellow-400/10 dark:text-yellow-300 rounded-md hover:bg-yellow-400/30 dark:hover:bg-yellow-400/20 transition-colors"
                            >
                                Học lại
                            </button>
                        )}
                        <div className="relative">
                            <button 
                                onClick={() => setShowPracticeOptions(prev => !prev)}
                                disabled={totalCount === 0}
                                className="w-full px-6 py-3 bg-secondary dark:bg-dark-secondary text-on-secondary text-lg font-semibold rounded-lg shadow-md hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary dark:focus:ring-offset-dark-background transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Luyện tập
                            </button>
                            {showPracticeOptions && (
                                <div className="absolute bottom-full w-full mb-2 flex flex-col gap-2 animate-fadeIn">
                                    <button onClick={() => onStartPractice(presetCards, 'typing', source)} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-surface dark:bg-dark-surface text-on-surface-variant dark:text-dark-on-surface-variant font-semibold rounded-lg shadow-md hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200">
                                        <PencilSquareIcon className="h-5 w-5"/> Điền từ
                                    </button>
                                    <button onClick={() => onStartPractice(presetCards, 'mcq', source)} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-surface dark:bg-dark-surface text-on-surface-variant dark:text-dark-on-surface-variant font-semibold rounded-lg shadow-md hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200">
                                        <ListBulletIcon className="h-5 w-5"/> Trắc nghiệm
                                    </button>
                                </div>
                            )}
                        </div>
                         {!isFavoritePreset && (
                            <button onClick={onAddExistingWords} className="w-full px-4 py-3 bg-slate-200 dark:bg-dark-surface text-on-surface-variant dark:text-dark-on-surface-variant font-semibold rounded-lg shadow-sm hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200">
                                Thêm từ
                            </button>
                         )}
                        <div className="flex justify-center items-center space-x-4 pt-2">
                            <button
                                onClick={() => onResetProgress(preset.id)}
                                className="text-center text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline"
                            >
                                Đặt lại tiến trình
                            </button>
                            {!isFavoritePreset && (
                                <button
                                    onClick={onDeletePreset}
                                    className="flex items-center justify-center space-x-1 text-center text-sm text-red-500 hover:text-red-700 dark:hover:text-red-400 underline"
                                >
                                    <TrashIcon className="h-4 w-4" />
                                    <span>Xóa bộ này</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ) : null}
           

            <main className="flex-grow overflow-y-auto pb-4 px-2 hide-scrollbar">
                {presetCards.length > 0 ? (
                    <>
                        <h2 className="text-xl font-bold mb-3 text-on-surface dark:text-dark-on-surface">Các từ trong bộ này:</h2>
                         <div className="p-2 mb-4 bg-slate-100 dark:bg-dark-surface/50 rounded-lg space-y-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Tìm từ trong bộ này..."
                                    className="w-full pl-10 pr-4 py-2 bg-background dark:bg-dark-background border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary text-on-surface dark:text-dark-on-surface"
                                />
                                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant dark:text-dark-on-surface-variant" />
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-2">
                                    <FilterButton label="Tất cả" value="all" count={presetCards.length} />
                                    <FilterButton label="Đã nhớ" value="memorized" count={memorizedCount} />
                                    <FilterButton label="Chưa nhớ" value="not-memorized" count={totalCount - memorizedCount} />
                                    {!isFavoritePreset && <FilterButton label="Yêu thích" value="favorite" count={presetCards.filter(c => favoriteIdsSet.has(c.id)).length} />}
                                </div>
                                <div className="flex space-x-2">
                                     <button onClick={() => setSort('default')} className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${sort === 'default' ? 'bg-primary dark:bg-dark-primary text-on-primary' : 'bg-slate-200 dark:bg-dark-surface hover:bg-slate-300 dark:hover:bg-slate-700/80'}`}>Mặc định</button>
                                     <button onClick={() => setSort('alphabetical')} className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${sort === 'alphabetical' ? 'bg-primary dark:bg-dark-primary text-on-primary' : 'bg-slate-200 dark:bg-dark-surface hover:bg-slate-300 dark:hover:bg-slate-700/80'}`}>A-Z</button>
                                </div>
                            </div>
                         </div>

                        {filteredAndSortedCards.length > 0 ? (
                            <ul className="space-y-2">
                                {filteredAndSortedCards.map(card => {
                                    const memorized = memorizedIds.has(card.id);
                                    const isFavorite = favoriteIdsSet.has(card.id);
                                    const levelStyle = getLevelStyles(card.level);
                                    return (
                                        <li key={card.id} className="bg-surface dark:bg-dark-surface rounded-lg p-3 flex justify-between items-center">
                                            <div className="flex items-center min-w-0 flex-1">
                                                <div className={`flex-shrink-0 w-2.5 h-2.5 rounded-full mr-3 ${memorized ? 'bg-sky-500' : 'border border-slate-400'}`}></div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center space-x-2">
                                                        <p className={`font-semibold text-lg truncate ${memorized ? 'text-sky-600 dark:text-sky-400' : 'text-on-surface dark:text-dark-on-surface'}`}>{card.word}</p>
                                                        {card.level && <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${levelStyle.bg} ${levelStyle.text}`}>{card.level}</span>}
                                                    </div>
                                                    <p className={`text-sm truncate mt-1 ${memorized ? 'text-sky-500 dark:text-sky-500' : 'text-slate-500 dark:text-slate-400'}`}>
                                                        {card.definition}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center flex-shrink-0 ml-2">
                                                <button
                                                    onClick={() => onToggleFavorite(card.id)}
                                                    className={`p-2 rounded-full transition-colors ${isFavorite ? 'text-yellow-500 hover:text-yellow-600' : 'text-slate-400 hover:text-yellow-500'}`}
                                                    aria-label={`Toggle favorite for ${card.word}`}
                                                >
                                                    <StarIcon solid={isFavorite} className="h-5 w-5" />
                                                </button>
                                                {!isFavoritePreset && (
                                                    <button
                                                        onClick={() => onRemoveWordFromPreset(preset.id, card.id)}
                                                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-100 dark:hover:bg-slate-700 rounded-full transition-all duration-200"
                                                        aria-label={`Remove ${card.word}`}
                                                    >
                                                        <TrashIcon className="h-5 w-5" />
                                                    </button>
                                                )}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                         ) : (
                            <p className="text-center text-on-surface-variant dark:text-dark-on-surface-variant mt-4">Không tìm thấy từ nào khớp.</p>
                         )}
                    </>
                ) : (
                    <div className="text-center text-on-surface-variant dark:text-dark-on-surface-variant mt-8 flex flex-col items-center p-4">
                        <h2 className="text-xl font-bold text-on-surface dark:text-dark-on-surface">Bộ này chưa có từ nào!</h2>
                        <p className="mt-2 mb-6">Hãy thêm các từ từ kho từ vựng để bắt đầu học.</p>
                         {!isFavoritePreset && (
                            <button onClick={onAddExistingWords} className="flex items-center space-x-2 px-6 py-3 bg-primary dark:bg-dark-primary text-on-primary font-semibold rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-dark-background transition-all duration-200">
                                <PlusCircleIcon className="h-6 w-6"/>
                                <span>Thêm từ</span>
                            </button>
                         )}
                    </div>
                )}
            </main>
        </div>
    );
};

export default PresetDetail;
