import React, { useMemo, useState } from 'react';
import type { FlashcardData } from '../types';

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /> </svg> );
const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> </svg> );
const QuestionMarkCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /> </svg> );
const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /> </svg> );


interface ProgressViewProps {
    title: string;
    cardsInSet: FlashcardData[];
    memorizedIds: Set<number>;
    onBack: () => void;
    onStartNewSession: (cards: FlashcardData[]) => void;
}

const AccordionSection: React.FC<{
    title: string;
    cards: FlashcardData[];
    colorClasses: { bg: string; text: string; border: string; };
    icon: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}> = ({ title, cards, colorClasses, icon, isOpen, onToggle }) => (
    <div className={`rounded-lg shadow-sm transition-all duration-300 overflow-hidden ${colorClasses.bg}`}>
        <button
            onClick={onToggle}
            className="w-full flex justify-between items-center p-4 text-left"
            aria-expanded={isOpen}
        >
            <div className="flex items-center">
                <span className={`mr-3 ${colorClasses.text}`}>{icon}</span>
                <h3 className={`font-semibold text-lg ${colorClasses.text}`}>{title} ({cards.length})</h3>
            </div>
            <ChevronDownIcon className={`h-6 w-6 transition-transform ${colorClasses.text} ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
            <div className={`p-4 border-t ${colorClasses.border} bg-surface dark:bg-dark-surface`}>
                <ul className="space-y-2 max-h-48 overflow-y-auto pr-2 hide-scrollbar">
                    {cards.map(card => (
                        <li key={card.id} className="text-sm p-2 rounded bg-background dark:bg-dark-background/50 text-on-surface-variant dark:text-dark-on-surface-variant">
                            {card.word} - <span className="italic">{card.definition}</span>
                        </li>
                    ))}
                    {cards.length === 0 && <li className="text-sm text-center text-on-surface-variant italic py-2">Không có từ nào</li>}
                </ul>
            </div>
        )}
    </div>
);


const ProgressView: React.FC<ProgressViewProps> = ({ title, cardsInSet, memorizedIds, onBack, onStartNewSession }) => {
    const [openSection, setOpenSection] = useState<string | null>('Chưa nhớ');

    const { memorizedCards, notMemorizedCards } = useMemo(() => {
        const memorized: FlashcardData[] = [];
        const notMemorized: FlashcardData[] = [];
        cardsInSet.forEach(card => {
            if (memorizedIds.has(card.id)) {
                memorized.push(card);
            } else {
                notMemorized.push(card);
            }
        });
        return { memorizedCards: memorized, notMemorizedCards: notMemorized };
    }, [cardsInSet, memorizedIds]);
    
    const totalCount = cardsInSet.length;
    const memorizedCount = memorizedCards.length;
    const percentage = totalCount > 0 ? Math.round((memorizedCount / totalCount) * 100) : 0;
    const isCompleted = notMemorizedCards.length === 0 && totalCount > 0;

    const handleToggleSection = (sectionId: string) => {
        setOpenSection(prev => prev === sectionId ? null : sectionId);
    };

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col h-full max-h-screen">
            <header className="text-center mb-6 w-full sticky top-0 bg-background/80 dark:bg-dark-background/80 backdrop-blur-sm py-4 z-10">
                <div className="flex justify-between items-center relative">
                    <button onClick={onBack} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Back">
                        <ArrowLeftIcon className="h-6 w-6" />
                    </button>
                    <h1 className="text-3xl font-extrabold text-on-surface dark:text-dark-on-surface truncate px-2">
                        {title}
                    </h1>
                    <div className="w-10"></div>
                </div>
            </header>

            <main className="flex-grow pb-4 px-1 overflow-y-auto hide-scrollbar">
                <div className="bg-surface dark:bg-dark-surface rounded-xl shadow-lg p-6 mb-6 text-center">
                    <h2 className="text-2xl font-bold text-on-surface dark:text-dark-on-surface">Tổng kết tiến độ</h2>
                    <p className="text-on-surface-variant dark:text-dark-on-surface-variant mt-1">{isCompleted ? "Bạn đã học thuộc tất cả các từ trong bộ này!" : `Bạn đã nhớ ${memorizedCount} trên ${totalCount} từ.`}</p>
                    
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 my-4 overflow-hidden">
                        <div className="bg-primary h-4 rounded-full transition-all duration-700 ease-out" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <p className="text-3xl font-bold text-primary dark:text-dark-primary">{percentage}%</p>
                </div>

                <div className="space-y-3 mb-8">
                    <AccordionSection 
                        title="Đã nhớ"
                        cards={memorizedCards}
                        colorClasses={{ bg: 'bg-teal-100/50 dark:bg-teal-900/30', text: 'text-primary dark:text-dark-primary', border: 'border-primary/20' }}
                        icon={<CheckCircleIcon className="h-6 w-6"/>}
                        isOpen={openSection === 'Đã nhớ'}
                        onToggle={() => handleToggleSection('Đã nhớ')}
                    />
                     <AccordionSection 
                        title="Chưa nhớ"
                        cards={notMemorizedCards}
                        colorClasses={{ bg: 'bg-orange-100/70 dark:bg-orange-900/30', text: 'text-secondary-dark dark:text-secondary', border: 'border-secondary/20' }}
                        icon={<QuestionMarkCircleIcon className="h-6 w-6"/>}
                        isOpen={openSection === 'Chưa nhớ'}
                        onToggle={() => handleToggleSection('Chưa nhớ')}
                    />
                </div>
                
                <div className="space-y-3">
                    {notMemorizedCards.length > 0 && (
                        <button
                            onClick={() => onStartNewSession(notMemorizedCards)}
                            className="w-full px-6 py-3 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary dark:focus:ring-offset-dark-background transition-all duration-200"
                        >
                            Học {notMemorizedCards.length} từ chưa nhớ
                        </button>
                    )}

                    <button
                        onClick={() => onStartNewSession(cardsInSet)}
                        className="w-full px-6 py-3 bg-primary dark:bg-dark-primary text-on-primary font-semibold rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-dark-background transition-all duration-200"
                    >
                        Học lại tất cả ({cardsInSet.length} từ)
                    </button>

                    <button
                        onClick={onBack}
                        className="w-full px-6 py-3 bg-slate-200 dark:bg-dark-surface text-on-surface-variant dark:text-dark-on-surface-variant font-semibold rounded-lg shadow-sm hover:bg-slate-300 dark:hover:bg-slate-700/80 transition-all duration-200"
                    >
                        Quay lại
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ProgressView;