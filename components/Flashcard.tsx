
import React, { useState, useEffect, useMemo } from 'react';
import type { FlashcardData } from '../types';
import { getLevelStyles } from '../utils/styles';

interface FlashcardProps {
  card: FlashcardData;
  isFavorite: boolean;
  onToggleFavorite: (cardId: number) => void;
}

const StarIcon: React.FC<React.SVGProps<SVGSVGElement> & { solid?: boolean }> = ({ solid, ...props }) => solid ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.31h5.418a.562.562 0 0 1 .321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-3.357a.562.562 0 0 0-.652 0l-4.725 3.357a.562.562 0 0 1-.84-.61l1.285-5.385a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988h5.418a.563.563 0 0 0 .475-.31L11.48 3.5Z" />
    </svg>
);

const SpeakerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
    </svg>
);

const Flashcard: React.FC<FlashcardProps> = ({ card, isFavorite, onToggleFavorite }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [bestVoice, setBestVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    setIsFlipped(false);
  }, [card]);

  useEffect(() => {
    const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        if (availableVoices.length > 0) {
            const voicesByLang = (lang: string) => availableVoices.filter(v => v.lang === lang);
            const enUSVoices = voicesByLang('en-US');
            const enGBVoices = voicesByLang('en-GB');
            
            const preferred = [
                ...enUSVoices.filter(v => v.name.includes('Google')),
                ...enUSVoices.filter(v => v.name.includes('Samantha') || v.name.includes('Alex')),
                ...enUSVoices,
                ...enGBVoices
            ];
            setBestVoice(preferred[0] || availableVoices.find(v => v.lang.startsWith('en-')) || null);
        }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => { window.speechSynthesis.onvoiceschanged = null; };
  }, []);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(card.id);
  };

  const handleSpeak = (e: React.MouseEvent) => {
      e.stopPropagation();
      if ('speechSynthesis' in window && card.word) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(card.word);
          if (bestVoice) utterance.voice = bestVoice;
          utterance.rate = 0.9;
          window.speechSynthesis.speak(utterance);
      }
  };

  const levelStyle = getLevelStyles(card.level);

  return (
    <div className="w-full max-w-3xl mx-auto perspective-1000" style={{ minHeight: '420px' }}>
      <div 
        className={`relative w-full h-full transform-style-3d transition-transform duration-700 cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
        onClick={() => setIsFlipped(prev => !prev)}
        role="button"
        tabIndex={0}
        aria-label="Flip card"
      >
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden bg-surface dark:bg-dark-surface rounded-2xl shadow-2xl p-8 flex flex-col">
            {card.level && (
                <div className={`absolute top-6 right-6 text-xs font-bold px-2.5 py-1 rounded-full ${levelStyle.bg} ${levelStyle.text}`}>
                    {card.level}
                </div>
            )}
            <button 
                onClick={handleFavoriteClick} 
                className={`absolute top-6 left-6 p-1 rounded-full transition-colors ${isFavorite ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-600 hover:text-yellow-400'}`}
                aria-label="Toggle favorite"
            >
                <StarIcon solid={isFavorite} className="h-6 w-6" />
            </button>
            <div className="flex-grow flex flex-col justify-center items-center text-center">
                <div className="flex items-center justify-center gap-x-4">
                    <h2 className="text-5xl md:text-7xl font-normal font-roman text-slate-700 dark:text-slate-300">
                        {card.word}
                    </h2>
                    <button 
                        onClick={handleSpeak} 
                        className="p-2 rounded-full text-slate-400 dark:text-slate-500 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        aria-label="Speak word"
                    >
                        <SpeakerIcon className="h-8 w-8" />
                    </button>
                </div>
                {(card.pronunciation || card.partOfSpeech) && (
                    <div className="text-lg text-slate-500 dark:text-slate-400 mt-3 flex items-center justify-center space-x-2">
                        {card.pronunciation && <span>{card.pronunciation}</span>}
                        {card.pronunciation && card.partOfSpeech && <span className="opacity-50">·</span>}
                        {card.partOfSpeech && <span className="italic">{card.partOfSpeech}</span>}
                    </div>
                )}
            </div>
             <div className="text-center mt-6">
                <p className="text-sm text-slate-400 dark:text-slate-500 italic">
                    (Chạm để xem nghĩa)
                </p>
            </div>
        </div>

        {/* Back Face */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-surface dark:bg-dark-surface rounded-2xl shadow-2xl p-8 flex flex-col justify-center">
            <div className="text-center w-full px-4 space-y-8">
                <div>
                    <h4 className="font-sans text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Definition</h4>
                    <p className="text-2xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed">{card.definition}</p>
                </div>
                <div className="mt-6">
                    <h4 className="font-sans text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Example</h4>
                    <p className="text-xl italic text-slate-600 dark:text-slate-400">"{card.example}"</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Flashcard);
