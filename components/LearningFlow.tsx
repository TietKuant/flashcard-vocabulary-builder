
import React, { useState, useEffect, useRef } from 'react';
import type { ActiveLearningSession, FlashcardData, LearningSource } from '../types';
import Flashcard from './Flashcard';
import { shuffleArray } from '../utils/helpers';

const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /> </svg> );
const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" /> </svg> );

// --- Sub-components for challenges ---

const McqChallenge: React.FC<{ card: FlashcardData; allCards: FlashcardData[]; onResult: (correct: boolean) => void; }> = ({ card, allCards, onResult }) => {
    const [options, setOptions] = useState<string[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    useEffect(() => {
        const correctAnswer = card.word;
        const distractors = shuffleArray(allCards.filter(c => c.id !== card.id))
            .slice(0, 3)
            .map((c: FlashcardData) => c.word);
        
        // Fallback for small datasets
        while(distractors.length < 3) distractors.push("...");
        
        setOptions(shuffleArray([correctAnswer, ...distractors]));
        setSelectedAnswer(null);
    }, [card, allCards]);

    const handleSelectOption = (option: string) => {
        if (selectedAnswer) return;
        setSelectedAnswer(option);
        setTimeout(() => onResult(option === card.word), 1200);
    };
    
    const questionText = card.example.replace(new RegExp(`\\b${card.word}\\w*`, 'gi'), '_____');

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col justify-center p-4 animate-fadeIn">
            <div className="bg-surface dark:bg-dark-surface p-8 rounded-lg shadow-lg text-center mb-8">
                <h2 className="text-sm uppercase tracking-wider text-on-surface-variant dark:text-dark-on-surface-variant mb-2">Điền vào chỗ trống</h2>
                <p className="text-2xl md:text-3xl font-semibold text-on-surface dark:text-dark-on-surface italic">"{questionText}"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.map((option, index) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrect = option === card.word;
                    let buttonClass = "bg-surface dark:bg-dark-surface hover:bg-slate-200 dark:hover:bg-slate-700/80 border-slate-300 dark:border-slate-600";

                    if (selectedAnswer) {
                        if (isCorrect) {
                            buttonClass = "bg-green-100 dark:bg-green-900/40 border-green-500 text-green-800 dark:text-green-300 ring-2 ring-green-500";
                        } else if (isSelected) {
                            buttonClass = "bg-red-100 dark:bg-red-900/40 border-red-500 text-red-800 dark:text-red-300";
                        }
                    }

                    return (
                        <button key={index} onClick={() => handleSelectOption(option)} disabled={!!selectedAnswer}
                            className={`w-full text-lg p-4 font-semibold rounded-lg border-2 shadow-sm transition-all duration-300 ${buttonClass}`}>
                            {option}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

const TypingChallenge: React.FC<{ card: FlashcardData; onResult: (correct: boolean) => void; }> = ({ card, onResult }) => {
    const [userInput, setUserInput] = useState('');
    const [feedback, setFeedback] = useState<'none' | 'correct' | 'incorrect'>('none');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (feedback !== 'none' || !userInput.trim()) return;

        const isCorrect = userInput.trim().toLowerCase() === card.word.toLowerCase();
        setFeedback(isCorrect ? 'correct' : 'incorrect');
        setTimeout(() => onResult(isCorrect), 1200);
    };

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col justify-center p-4 animate-fadeIn">
            <div className="bg-surface dark:bg-dark-surface p-8 rounded-lg shadow-lg text-center mb-8">
                <h2 className="text-sm uppercase tracking-wider text-on-surface-variant dark:text-dark-on-surface-variant mb-2">Định nghĩa</h2>
                <p className="text-2xl md:text-3xl font-semibold text-on-surface dark:text-dark-on-surface">{card.definition}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef} type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Nhập từ đúng..." autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                    disabled={feedback !== 'none'}
                    className={`w-full text-center text-2xl px-4 py-4 bg-background dark:bg-dark-background border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all duration-300
                        ${feedback === 'correct' ? 'border-green-500 ring-green-500/50 text-green-700 dark:text-green-400' : ''}
                        ${feedback === 'incorrect' ? 'border-red-500 ring-red-500/50 text-red-700 dark:text-red-400' : ''}
                        ${feedback === 'none' ? 'border-slate-300 dark:border-slate-600 focus:ring-primary dark:focus:ring-dark-primary' : ''}
                    `}
                />
            </form>
        </div>
    );
};


// --- Main Learning Flow Component ---

interface LearningFlowProps {
    session: ActiveLearningSession;
    allCards: FlashcardData[];
    favoriteCardIds: number[];
    onToggleFavorite: (cardId: number) => void;
    onSessionEnd: () => void;
    onWordMemorized: (cardId: number, source: LearningSource) => void;
    onGoHome: () => void;
}

const LearningFlow: React.FC<LearningFlowProps> = ({ session, allCards, favoriteCardIds, onToggleFavorite, onSessionEnd, onWordMemorized, onGoHome }) => {
    // Use shuffleArray from utils
    const [queue, setQueue] = useState<FlashcardData[]>(() => shuffleArray(session.cards));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [retryQueue, setRetryQueue] = useState<FlashcardData[]>([]);
    const [stage, setStage] = useState<'flashcard' | 'mcq' | 'typing'>('flashcard');

    const currentCard = queue[currentIndex];

    const handleAdvance = () => {
        if (currentIndex < queue.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setStage('flashcard');
        } else {
            // End of round
            if (retryQueue.length > 0) {
                setQueue(shuffleArray(retryQueue));
                setRetryQueue([]);
                setCurrentIndex(0);
                setStage('flashcard');
            } else {
                // Session finished
                onSessionEnd();
            }
        }
    };

    const handleFlashcardDecision = (decision: 'memorized' | 'not-memorized') => {
        if (decision === 'not-memorized') {
            setRetryQueue(prev => [...prev, currentCard]);
            handleAdvance();
        } else {
            setStage('mcq');
        }
    };

    const handleMcqResult = (isCorrect: boolean) => {
        if (isCorrect) {
            setStage('typing');
        } else {
            setRetryQueue(prev => [...prev, currentCard]);
            handleAdvance();
        }
    };

    const handleTypingResult = (isCorrect: boolean) => {
        if (isCorrect) {
            onWordMemorized(currentCard.id, session.source);
        } else {
            setRetryQueue(prev => [...prev, currentCard]);
        }
        handleAdvance();
    };

    const renderStage = () => {
        if (!currentCard) return null;

        switch (stage) {
            case 'flashcard':
                return (
                    <div className="flex flex-col items-center justify-around flex-grow p-4 animate-fadeIn w-full max-w-5xl mx-auto">
                        <Flashcard
                            card={currentCard}
                            isFavorite={favoriteCardIds.includes(currentCard.id)}
                            onToggleFavorite={onToggleFavorite}
                        />
                        <div className="mt-8 flex w-full max-w-xl justify-center gap-6">
                            <button onClick={() => handleFlashcardDecision('not-memorized')} className="flex-1 px-6 py-4 bg-[#8D6E63] text-white rounded-xl shadow-lg hover:bg-[#795548] transition-transform active:scale-95 font-bold text-lg">
                                Chưa nhớ
                            </button>
                            <button onClick={() => handleFlashcardDecision('memorized')} className="flex-1 px-6 py-4 bg-[#5D4037] text-white rounded-xl shadow-lg hover:bg-[#4E342E] transition-transform active:scale-95 font-bold text-lg">
                                Đã nhớ
                            </button>
                        </div>
                    </div>
                );
            case 'mcq':
                return <McqChallenge card={currentCard} allCards={allCards} onResult={handleMcqResult} />;
            case 'typing':
                return <TypingChallenge card={currentCard} onResult={handleTypingResult} />;
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 bg-background dark:bg-dark-background z-40 flex flex-col">
            <header className="text-center w-full sticky top-0 bg-background/80 dark:bg-dark-background/80 backdrop-blur-sm py-4 z-10 px-4">
                <div className="flex justify-between items-center relative max-w-2xl mx-auto">
                     <div className="flex items-center space-x-2 border-2 border-[#8D6E63] rounded-lg p-1">
                        <button onClick={onSessionEnd} className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Exit session">
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                        <button onClick={onGoHome} className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Go Home">
                            <HomeIcon className="h-6 w-6" />
                        </button>
                    </div>
                    <h1 className="text-xl font-bold text-on-surface dark:text-dark-on-surface truncate px-2">{session.title}</h1>
                    <div className="text-lg font-semibold text-on-surface-variant dark:text-dark-on-surface-variant min-w-[60px] text-right">{currentIndex + 1} / {queue.length}</div>
                </div>
                <div className="w-full max-w-2xl mx-auto bg-slate-200 dark:bg-slate-700 h-1 mt-2">
                    <div className="bg-primary h-1 transition-all duration-300" style={{ width: `${((currentIndex) / queue.length) * 100}%` }} />
                </div>
            </header>
            <main className="flex-grow flex flex-col justify-center overflow-y-auto">
                {renderStage()}
            </main>
        </div>
    );
};

export default LearningFlow;
