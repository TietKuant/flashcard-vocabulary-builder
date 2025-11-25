
import React, { useState, useEffect } from 'react';
import type { FlashcardData } from '../types';
import { shuffleArray } from '../utils/helpers';

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /> </svg> );

interface McqPracticeProps {
    cards: FlashcardData[];
    onSessionEnd: () => void;
    title: string;
}

const McqPractice: React.FC<McqPracticeProps> = ({ cards: initialCards, onSessionEnd, title }) => {
    const [cards, setCards] = useState(() => shuffleArray(initialCards));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [options, setOptions] = useState<string[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<'correct' | 'incorrect' | 'none'>('none');
    const [stats, setStats] = useState({ correct: 0, incorrect: 0 });
    const [incorrectCards, setIncorrectCards] = useState<FlashcardData[]>([]);
    const [isFinished, setIsFinished] = useState(false);

    const currentCard = cards[currentIndex];

    useEffect(() => {
        if (currentCard) {
            const correctAnswer = currentCard.word;
            const distractors = shuffleArray(initialCards.filter(c => c.id !== currentCard.id))
                .slice(0, 3)
                .map((c: FlashcardData) => c.word);
            
            while(distractors.length < 3) {
                distractors.push("Distractor"); // Fallback for very small decks
            }

            setOptions(shuffleArray([correctAnswer, ...distractors]));
        }
    }, [currentIndex, cards, initialCards, currentCard]);

    const handleSelectOption = (option: string) => {
        if (selectedAnswer) return;

        setSelectedAnswer(option);
        const isCorrect = option === currentCard.word;

        if (isCorrect) {
            setFeedback('correct');
            setStats(prev => ({ ...prev, correct: prev.correct + 1 }));
        } else {
            setFeedback('incorrect');
            setStats(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
            setIncorrectCards(prev => [...prev, currentCard]);
        }

        setTimeout(() => {
            if (currentIndex < cards.length - 1) {
                setCurrentIndex(prev => prev + 1);
                setSelectedAnswer(null);
                setFeedback('none');
            } else {
                setIsFinished(true);
            }
        }, 1500);
    };

    const handleRestart = (onlyIncorrect: boolean) => {
        const cardsToPractice = onlyIncorrect ? [...new Set(incorrectCards)] : initialCards;
        setCards(shuffleArray(cardsToPractice));
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setFeedback('none');
        setStats({ correct: 0, incorrect: 0 });
        setIncorrectCards([]);
        setIsFinished(false);
    };

    if (isFinished) {
        return (
            <div className="w-full max-w-2xl mx-auto flex flex-col h-full animate-fadeIn p-4 justify-center text-center">
                <h1 className="text-3xl font-extrabold text-on-surface dark:text-dark-on-surface">Luyện tập hoàn tất!</h1>
                <div className="my-8 bg-surface dark:bg-dark-surface p-6 rounded-lg shadow-lg">
                    <p className="text-xl font-semibold text-on-surface dark:text-dark-on-surface mb-4">Kết quả</p>
                    <div className="flex justify-around">
                        <div className="text-green-500">
                            <p className="text-4xl font-bold">{stats.correct}</p>
                            <p className="font-semibold">Đúng</p>
                        </div>
                        <div className="text-red-500">
                            <p className="text-4xl font-bold">{stats.incorrect}</p>
                            <p className="font-semibold">Sai</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-3">
                    {incorrectCards.length > 0 && (
                        <button onClick={() => handleRestart(true)} className="w-full px-6 py-3 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-secondary-dark transition-colors">
                            Luyện tập lại {incorrectCards.length} từ sai
                        </button>
                    )}
                    <button onClick={() => handleRestart(false)} className="w-full px-6 py-3 bg-primary dark:bg-dark-primary text-on-primary font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-colors">
                        Luyện tập lại tất cả
                    </button>
                    <button onClick={onSessionEnd} className="w-full px-6 py-3 bg-slate-200 dark:bg-dark-surface text-on-surface-variant dark:text-dark-on-surface-variant font-semibold rounded-lg shadow-sm hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                        Hoàn thành
                    </button>
                </div>
            </div>
        );
    }
    
    if (!currentCard) return null;

    const questionText = currentCard.example.replace(new RegExp(`\\b${currentCard.word}\\w*`, 'gi'), '_____');


    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col h-full max-h-screen">
            <header className="text-center w-full sticky top-0 bg-background/80 dark:bg-dark-background/80 backdrop-blur-sm py-4 z-10">
                <div className="flex justify-between items-center relative">
                    <button onClick={onSessionEnd} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Back">
                        <ArrowLeftIcon className="h-6 w-6" />
                    </button>
                    <h1 className="text-2xl font-bold text-on-surface dark:text-dark-on-surface truncate px-2">{title}</h1>
                    <div className="text-lg font-semibold text-on-surface-variant dark:text-dark-on-surface-variant">{currentIndex + 1} / {cards.length}</div>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-1 mt-2">
                    <div className="bg-primary h-1" style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }} />
                </div>
            </header>
            <main className="flex-grow flex flex-col justify-center p-4">
                <div className="bg-surface dark:bg-dark-surface p-8 rounded-lg shadow-lg text-center animate-fadeIn">
                    <h2 className="text-sm uppercase tracking-wider text-on-surface-variant dark:text-dark-on-surface-variant mb-2">Điền vào chỗ trống</h2>
                    <p className="text-2xl md:text-3xl font-semibold text-on-surface dark:text-dark-on-surface italic">"{questionText}"</p>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {options.map((option, index) => {
                        const isSelected = selectedAnswer === option;
                        const isCorrect = option === currentCard.word;
                        let buttonClass = "bg-surface dark:bg-dark-surface hover:bg-slate-200 dark:hover:bg-slate-700/80 border-slate-300 dark:border-slate-600";

                        if (selectedAnswer) {
                            if (isCorrect) {
                                buttonClass = "bg-green-100 dark:bg-green-900/40 border-green-500 text-green-800 dark:text-green-300 ring-2 ring-green-500";
                            } else if (isSelected) {
                                buttonClass = "bg-red-100 dark:bg-red-900/40 border-red-500 text-red-800 dark:text-red-300";
                            }
                        }

                        return (
                            <button
                                key={index}
                                onClick={() => handleSelectOption(option)}
                                disabled={!!selectedAnswer}
                                className={`w-full text-lg p-4 font-semibold rounded-lg border-2 shadow-sm transition-all duration-300 ${buttonClass}`}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

export default McqPractice;
