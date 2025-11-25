
import React, { useState } from 'react';
// FIX: Import centralized LearningSource and ActiveLearningSession types.
import type { MainTheme, SubTheme, LearningSource, FlashcardData } from '../types';
import { getThemeColors } from '../utils/styles';
// RankModal import is removed as it's no longer used here

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /> </svg> );
const ListBulletIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /> </svg> );
const ChartPieIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /> </svg> );
const ArrowPathIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0c3.221-3.221 3.221-8.456 0-11.667a8.25 8.25 0 0 0-11.667 0c-3.221-3.221-3.221 8.456 0 11.667Zm10.606-1.06-3.182-3.182m0 0-3.181 3.182m3.181-3.182L6.341 5.656l3.181 3.182" /> </svg> );
const PencilSquareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /> </svg> );

interface SubThemeSelectionProps {
    mainTheme: MainTheme;
    themedProgress: Record<string, number[]>;
    totalReviewProgress: Record<string, { deck: number[]; memorizedInDeck: number[] }>;
    allCardsMap: Map<number, FlashcardData>;
    onStartSession: (subTheme: SubTheme) => void;
    onStartPractice: (cards: FlashcardData[], mode: 'typing' | 'mcq', source: LearningSource) => void;
    onStartTotalReview: (mainThemeId: string, shuffle: boolean) => void;
    onViewWordList: (source: LearningSource) => void;
    onViewProgress: (source: LearningSource) => void;
    onBack: () => void;
}

const SubThemeSelection: React.FC<SubThemeSelectionProps> = ({ 
    mainTheme, themedProgress, totalReviewProgress, allCardsMap, onStartSession, onStartPractice, onStartTotalReview, onViewWordList, onViewProgress, onBack 
}) => {
    const [openPracticeMenu, setOpenPracticeMenu] = useState<string | null>(null);
    const hasAnyCards = mainTheme.subThemes.some(st => st.cards.length > 0);
    const themeColors = getThemeColors(mainTheme.name);

    const reviewSubTheme: SubTheme = {
        id: `${mainTheme.id}-review`,
        name: 'Tổng ôn',
        cards: [], 
        isReview: true,
    };

    const allSubThemes = hasAnyCards ? [...mainTheme.subThemes, reviewSubTheme] : [...mainTheme.subThemes];
    
    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col h-full max-h-screen">
            <header className="text-center mb-4 w-full sticky top-0 bg-background/90 dark:bg-dark-background/90 backdrop-blur-sm py-4 z-10">
                 <div className="flex justify-between items-center relative">
                    <button onClick={onBack} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Back">
                        <ArrowLeftIcon className="h-6 w-6" />
                    </button>
                    <h1 className="text-3xl font-extrabold text-on-surface dark:text-dark-on-surface truncate px-2">
                        {mainTheme.name}
                    </h1>
                     <div className="w-10 h-10" /> {/* Spacer to balance the back button */}
                </div>
                <p className="mt-2 text-on-surface-variant dark:text-dark-on-surface-variant">Chọn một bài học để bắt đầu.</p>
            </header>

            <main className="flex-grow overflow-y-auto pb-4 px-1 hide-scrollbar">
                <div className="space-y-4">
                    {allSubThemes.map((subTheme) => {
                        const isReviewTheme = subTheme.isReview ?? false;
                        
                        if (isReviewTheme) {
                            const reviewData = totalReviewProgress[mainTheme.id];
                            const deckSize = reviewData?.deck?.length || 0;
                            const memorizedCount = reviewData?.memorizedInDeck?.length || 0;
                            const progress = deckSize > 0 ? (memorizedCount / deckSize) * 100 : 0;
                            const isCompleted = deckSize > 0 && memorizedCount === deckSize;
                            const source: LearningSource = { type: 'total-review', id: mainTheme.id };
                            const practiceCards = (reviewData?.deck || []).map(id => allCardsMap.get(id)).filter((c): c is FlashcardData => !!c);

                            let buttonText: string;
                            if (isCompleted) {
                                buttonText = "Shuffle lại 30 từ khác";
                            } else if (deckSize > 0) {
                                buttonText = "Ôn tập tiếp";
                            } else {
                                buttonText = "Bắt đầu ôn tập (30 từ)";
                            }

                            return (
                                <div key={subTheme.id} className="bg-secondary/10 dark:bg-dark-secondary/20 rounded-xl shadow-md transition-all duration-300 p-4 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-3 bg-secondary/20 dark:bg-dark-secondary/30 rounded-lg">
                                                <ArrowPathIcon className="h-6 w-6 text-secondary dark:text-dark-secondary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-on-surface dark:text-dark-on-surface">{subTheme.name}</h3>
                                                <p className="text-sm text-on-surface-variant dark:text-dark-on-surface-variant">Đã ôn: {memorizedCount} / {deckSize > 0 ? deckSize : '30'} từ</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 flex-shrink-0">
                                            <button 
                                                onClick={() => onViewProgress(source)}
                                                disabled={deckSize === 0}
                                                className="p-2 rounded-full transition-colors bg-amber-400/20 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300 hover:bg-amber-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
                                                aria-label={`View progress for Total Review`}
                                            >
                                                <ChartPieIcon className="h-5 w-5"/>
                                            </button>
                                            <button 
                                                onClick={() => onViewWordList(source)}
                                                disabled={deckSize === 0}
                                                className="p-2 rounded-full transition-colors bg-sky-400/20 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300 hover:bg-sky-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
                                                aria-label={`View word list for Total Review`}
                                            >
                                                <ListBulletIcon className="h-5 w-5"/>
                                            </button>
                                        </div>
                                    </div>
                                     <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                        <div className="bg-secondary dark:bg-dark-secondary h-2 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
                                    </div>
                                    
                                    <div className="pt-2">
                                        {isCompleted && (
                                            <div className="bg-secondary/20 dark:bg-dark-secondary/30 p-3 rounded-lg text-center mb-3">
                                                <p className="font-semibold text-secondary-dark dark:text-dark-secondary">Tuyệt vời! Bạn đã hoàn thành bộ 30 từ này.</p>
                                            </div>
                                        )}
                                        <div className="flex items-center space-x-3">
                                            <button
                                                onClick={() => onStartTotalReview(mainTheme.id, isCompleted)}
                                                className="w-full px-4 py-2 text-sm font-semibold rounded-lg transition-colors shadow-sm text-center bg-secondary text-on-secondary hover:bg-secondary-dark"
                                            >
                                            {buttonText}
                                            </button>
                                            <div className="relative">
                                                <button 
                                                    onClick={() => setOpenPracticeMenu(openPracticeMenu === subTheme.id ? null : subTheme.id)} 
                                                    disabled={practiceCards.length === 0}
                                                    className="px-4 py-2 text-sm font-semibold rounded-lg transition-colors shadow-sm bg-slate-200 dark:bg-slate-700/80 text-on-surface-variant dark:text-dark-on-surface-variant hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    Luyện tập
                                                </button>
                                                {openPracticeMenu === subTheme.id && (
                                                     <div className="absolute bottom-full right-0 mb-2 flex flex-col gap-2 animate-fadeIn w-36">
                                                        <button onClick={() => onStartPractice(practiceCards, 'typing', source)} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-surface dark:bg-dark-surface text-sm text-on-surface-variant dark:text-dark-on-surface-variant font-semibold rounded-lg shadow-md hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200">
                                                            <PencilSquareIcon className="h-4 w-4"/> Điền từ
                                                        </button>
                                                        <button onClick={() => onStartPractice(practiceCards, 'mcq', source)} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-surface dark:bg-dark-surface text-sm text-on-surface-variant dark:text-dark-on-surface-variant font-semibold rounded-lg shadow-md hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200">
                                                            <ListBulletIcon className="h-4 w-4"/> Trắc nghiệm
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        const subThemeProgress = themedProgress[subTheme.id] || [];
                        const memorizedCount = subThemeProgress.length;
                        const totalCount = subTheme.cards.length;
                        const progress = totalCount > 0 ? (memorizedCount / totalCount) * 100 : 0;
                        const isCompleted = memorizedCount === totalCount && totalCount > 0;
                        const source: LearningSource = { type: 'themed', id: subTheme.id };
                        
                        return (
                            <div key={subTheme.id} className="bg-surface dark:bg-dark-surface rounded-xl shadow-md transition-all duration-300 p-4 space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-lg text-on-surface dark:text-dark-on-surface">{subTheme.name}</h3>
                                        <p className="text-sm text-on-surface-variant dark:text-dark-on-surface-variant">Đã nhớ {memorizedCount} / {totalCount} từ</p>
                                    </div>
                                     <div className="flex items-center space-x-2 flex-shrink-0">
                                        <button 
                                            onClick={() => onViewProgress(source)}
                                            className="p-2 rounded-full transition-colors bg-amber-400/20 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300 hover:bg-amber-400/30"
                                            aria-label={`View progress for ${subTheme.name}`}
                                        >
                                            <ChartPieIcon className="h-5 w-5"/>
                                        </button>
                                        <button 
                                            onClick={() => onViewWordList(source)}
                                            className="p-2 rounded-full transition-colors bg-sky-400/20 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300 hover:bg-sky-400/30"
                                            aria-label={`View word list for ${subTheme.name}`}
                                        >
                                            <ListBulletIcon className="h-5 w-5"/>
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                    <div className={`${themeColors.progressBar} h-2 rounded-full transition-all`} style={{ width: `${progress}%` }}></div>
                                </div>
                                
                                <div className="flex items-center space-x-3 pt-2">
                                    <button
                                        onClick={() => onStartSession(subTheme)}
                                        disabled={!isReviewTheme && isCompleted && memorizedCount > 0 && totalCount > 0}
                                        className={`w-full px-4 py-2 text-sm font-semibold rounded-lg transition-colors shadow-sm text-center ${isCompleted ? "bg-secondary/20 text-secondary-dark dark:bg-dark-secondary/20 dark:text-dark-secondary hover:bg-secondary/30" : `${themeColors.progressBar} text-on-primary hover:opacity-90`} disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                        {isCompleted ? 'Ôn lại' : (memorizedCount > 0 ? 'Học tiếp' : 'Bắt đầu học')}
                                    </button>
                                     <div className="relative">
                                        <button 
                                            onClick={() => setOpenPracticeMenu(openPracticeMenu === subTheme.id ? null : subTheme.id)} 
                                            disabled={totalCount === 0}
                                            className="px-4 py-2 text-sm font-semibold rounded-lg transition-colors shadow-sm bg-slate-200 dark:bg-slate-700/80 text-on-surface-variant dark:text-dark-on-surface-variant hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Luyện tập
                                        </button>
                                        {openPracticeMenu === subTheme.id && (
                                             <div className="absolute bottom-full right-0 mb-2 flex flex-col gap-2 animate-fadeIn w-36">
                                                <button onClick={() => onStartPractice(subTheme.cards, 'typing', source)} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-surface dark:bg-dark-surface text-sm text-on-surface-variant dark:text-dark-on-surface-variant font-semibold rounded-lg shadow-md hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200">
                                                    <PencilSquareIcon className="h-4 w-4"/> Điền từ
                                                </button>
                                                <button onClick={() => onStartPractice(subTheme.cards, 'mcq', source)} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-surface dark:bg-dark-surface text-sm text-on-surface-variant dark:text-dark-on-surface-variant font-semibold rounded-lg shadow-md hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200">
                                                    <ListBulletIcon className="h-4 w-4"/> Trắc nghiệm
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

export default SubThemeSelection;
