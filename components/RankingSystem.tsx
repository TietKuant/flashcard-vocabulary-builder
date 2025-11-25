
import React, { useState } from 'react';
import RankModal from './RankModal';
import { getRank } from '../utils/ranks';

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /> </svg> );
const CheckBadgeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> </svg> );
const QuestionMarkCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /> </svg> );
const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292" /> </svg> );

interface RankingSystemProps {
    totalWordsMemorized: number;
    totalThemedWords: number;
}

const RankingSystem: React.FC<RankingSystemProps> = ({ totalWordsMemorized, totalThemedWords }) => {
    const { name, icon: Icon, next, progress, minWords } = getRank(totalWordsMemorized);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isRankModalOpen, setIsRankModalOpen] = useState(false);

    const wordsNotMemorized = totalThemedWords - totalWordsMemorized;
    
    return (
        <>
            <div className="bg-surface dark:bg-dark-surface p-5 rounded-lg border-2 border-slate-200 dark:border-slate-700 shadow-lg w-full transition-all">
                <div className="flex items-center justify-between">
                    <button onClick={() => setIsRankModalOpen(true)} className="text-left group transition-transform hover:scale-[1.02]">
                        <h3 className="text-sm font-semibold text-on-surface-variant dark:text-dark-on-surface-variant font-roman tracking-wider">RANK</h3>
                        <div className="flex items-center text-2xl font-bold text-on-surface dark:text-dark-on-surface font-roman group-hover:text-secondary dark:group-hover:text-dark-secondary transition-colors">
                            <span className="mr-3 group-hover:scale-110 transition-transform"><Icon /></span>
                            <span>{name}</span>
                        </div>
                    </button>
                    <div className="flex items-center">
                        <div className="text-right">
                            <h3 className="text-sm font-semibold text-on-surface-variant dark:text-dark-on-surface-variant font-roman tracking-wider">WORDS MEMORIZED</h3>
                            <p className="text-2xl font-bold text-primary dark:text-dark-primary font-roman">{totalWordsMemorized}</p>
                        </div>
                        <button onClick={() => setIsExpanded(!isExpanded)} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 ml-2">
                            <ChevronDownIcon className={`h-6 w-6 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                        <div className="bg-secondary dark:bg-dark-secondary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="text-xs text-on-surface-variant dark:text-dark-on-surface-variant mt-1.5 text-right">
                        {next 
                            ? `${totalWordsMemorized - minWords} / ${next.minWords - minWords} words to reach ${next.name}` 
                            : "You have achieved the highest rank!"}
                    </div>
                </div>

                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-40 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700' : 'max-h-0'}`}>
                    <h3 className="font-bold text-lg mb-3 text-on-surface dark:text-dark-on-surface font-roman">Progress Overview</h3>
                    <div className="flex justify-around text-center">
                        <div className="flex items-center space-x-2">
                            <BookOpenIcon className="h-6 w-6 text-slate-500" />
                            <div>
                                <p className="font-bold text-xl text-on-surface dark:text-dark-on-surface">{totalThemedWords}</p>
                                <p className="text-xs text-on-surface-variant dark:text-dark-on-surface-variant">Total Words</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckBadgeIcon className="h-6 w-6 text-green-500" />
                            <div>
                                <p className="font-bold text-xl text-green-500">{totalWordsMemorized}</p>
                                <p className="text-xs text-on-surface-variant dark:text-dark-on-surface-variant">Memorized</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <QuestionMarkCircleIcon className="h-6 w-6 text-yellow-500" />
                            <div>
                                <p className="font-bold text-xl text-yellow-500">{wordsNotMemorized}</p>
                                <p className="text-xs text-on-surface-variant dark:text-dark-on-surface-variant">To Learn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isRankModalOpen && <RankModal currentRankName={name} onClose={() => setIsRankModalOpen(false)} />}
        </>
    );
};

export default RankingSystem;
