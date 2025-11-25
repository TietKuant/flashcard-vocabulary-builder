
import React, { useState, useEffect, useRef } from 'react';
import type { FlashcardData } from '../types';

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /> </svg> );
const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.06-1.06L11.25 12.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l3.75-3.75Z" clipRule="evenodd" /></svg> );
const XCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" /></svg> );


interface TypingPracticeProps {
    cards: FlashcardData[];
    onSessionEnd: () => void;
    title: string;
}

const TypingPractice: React.FC<TypingPracticeProps> = ({ cards: initialCards, onSessionEnd, title }) => {
    const [cards, setCards] = useState(() => [...initialCards].sort(() => Math.random() - 0.5));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [feedback, setFeedback] = useState<'correct' | 'incorrect' | 'none'>('none');
    const [showAnswer, setShowAnswer] = useState(false);
    const [stats, setStats] = useState({ correct: 0, incorrect: 0 });
    const [incorrectCards, setIncorrectCards] = useState<FlashcardData[]>([]);
    const [isFinished, setIsFinished] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [currentIndex]);

    const currentCard = cards[currentIndex];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (feedback !== 'none' || !userInput.trim()) return;

        const isCorrect = userInput.trim().toLowerCase() === currentCard.word.toLowerCase();

        if (isCorrect) {
            setFeedback('correct');
            setStats(prev => ({ ...prev, correct: prev.correct + 1 }));
        } else {
            setFeedback('incorrect');
            setShowAnswer(true);
            setStats(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
            setIncorrectCards(prev => [...prev, currentCard]);
        }

        setTimeout(() => {
            if (currentIndex < cards.length - 1) {
                setCurrentIndex(prev => prev + 1);
                setUserInput('');
                setFeedback('none');
                setShowAnswer(false);
            } else {
                setIsFinished(true);
            }
        }, 1500);
    };

    const handleRestart = (onlyIncorrect: boolean) => {
        const cardsToPractice = onlyIncorrect ? [...new Set(incorrectCards)] : initialCards;
        setCards([...cardsToPractice].sort(() => Math.random() - 0.5));
        setCurrentIndex(0);
        setUserInput('');
        setFeedback('none');
        setShowAnswer(false);
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
                    <h2 className="text-sm uppercase tracking-wider text-on-surface-variant dark:text-dark-on-surface-variant mb-2">Định nghĩa</h2>
                    <p className="text-2xl md:text-3xl font-semibold text-on-surface dark:text-dark-on-surface">{currentCard.definition}</p>
                </div>
                <form onSubmit={handleSubmit} className="mt-8">
                    <input
                        ref={inputRef}
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Nhập từ đúng..."
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        disabled={feedback !== 'none'}
                        className={`w-full text-center text-2xl px-4 py-4 bg-background dark:bg-dark-background border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all duration-300
                            ${feedback === 'correct' ? 'border-green-500 ring-green-500/50 text-green-700 dark:text-green-400' : ''}
                            ${feedback === 'incorrect' ? 'border-red-500 ring-red-500/50 text-red-700 dark:text-red-400' : ''}
                            ${feedback === 'none' ? 'border-slate-300 dark:border-slate-600 focus:ring-primary dark:focus:ring-dark-primary' : ''}
                        `}
                    />
                </form>
                <div className="h-20 mt-4 text-center">
                    {feedback === 'correct' && (
                        <div className="flex items-center justify-center text-green-500 animate-fadeIn">
                            <CheckCircleIcon className="h-8 w-8 mr-2"/>
                            <p className="text-xl font-semibold">Chính xác!</p>
                        </div>
                    )}
                    {showAnswer && (
                        <div className="flex items-center justify-center text-red-500 animate-fadeIn">
                            <XCircleIcon className="h-8 w-8 mr-2"/>
                            <div>
                                <p className="text-xl font-semibold">Không đúng.</p>
                                <p className="text-lg">Đáp án đúng là: <span className="font-bold">{currentCard.word}</span></p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default TypingPractice;
