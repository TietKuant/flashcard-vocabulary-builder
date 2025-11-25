
import React from 'react';
import RankingSystem from './RankingSystem';

const ScrollIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
);
const BookmarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.5 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
    </svg>
);


interface ModeSelectionProps {
    setView: (view: 'themed-learning' | 'custom-learning') => void;
    totalWordsMemorized: number;
    totalThemedWords: number;
}

const ModeSelection: React.FC<ModeSelectionProps> = ({ setView, totalWordsMemorized, totalThemedWords }) => {

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col h-full animate-fadeIn p-2 md:p-4 justify-center">
            <header className="text-center mb-6 w-full">
                <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface dark:text-dark-on-surface font-roman">
                    The Stoic's Lexicon
                </h1>
                <p className="text-on-surface-variant dark:text-dark-on-surface-variant mt-2">Forge your mind, one word at a time.</p>
            </header>
            
            <div className="px-1 mb-8">
                <RankingSystem totalWordsMemorized={totalWordsMemorized} totalThemedWords={totalThemedWords} />
            </div>

            <main className="flex-grow pb-4 px-1">
                <div className="grid grid-cols-1 gap-5">
                    <button 
                        onClick={() => setView('themed-learning')}
                        className="bg-surface dark:bg-dark-surface p-6 rounded-lg border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-secondary/50 dark:hover:border-dark-secondary/50 transition-all duration-300 text-left flex items-center space-x-5"
                    >
                        <div className="p-3 bg-primary/10 dark:bg-dark-primary/20 rounded-xl">
                             <ScrollIcon className="h-10 w-10 text-primary dark:text-dark-primary" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-on-surface dark:text-dark-on-surface font-roman">Study by Codex</h2>
                            <p className="text-on-surface-variant dark:text-dark-on-surface-variant">Explore curated word lists by theme.</p>
                        </div>
                    </button>
                    <button 
                        onClick={() => setView('custom-learning')}
                        className="bg-surface dark:bg-dark-surface p-6 rounded-lg border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-secondary/50 dark:hover:border-dark-secondary/50 transition-all duration-300 text-left flex items-center space-x-5"
                    >
                         <div className="p-3 bg-secondary/10 dark:bg-dark-secondary/20 rounded-xl">
                            <BookmarkIcon className="h-10 w-10 text-secondary dark:text-dark-secondary" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-on-surface dark:text-dark-on-surface font-roman">Personal Tablets</h2>
                            <p className="text-on-surface-variant dark:text-dark-on-surface-variant">Create and manage your own study sets.</p>
                        </div>
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ModeSelection;