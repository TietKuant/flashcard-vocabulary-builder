
import React, { useState, useMemo, useEffect, useCallback, Suspense } from 'react';
import ModeSelection from './components/ModeSelection'; // Keep Home critical path eager
import { THEMED_VOCABULARY, APP_DATA_STORAGE_KEY } from './constants';
import type { FlashcardData, CustomPreset, MainTheme, SubTheme, AppData, LearningSource, ActiveLearningSession } from './types';
import { getThemeColors } from './utils/styles';
import { shuffleArray } from './utils/helpers';

// --- LAZY LOADED COMPONENTS ---
const SubThemeSelection = React.lazy(() => import('./components/SubThemeSelection'));
const PresetList = React.lazy(() => import('./components/PresetList'));
const PresetDetail = React.lazy(() => import('./components/PresetDetail'));
const WordSelector = React.lazy(() => import('./components/WordSelector'));
const DevTools = React.lazy(() => import('./components/DevTools'));
const ProgressView = React.lazy(() => import('./components/ProgressView'));
const WordListView = React.lazy(() => import('./components/WordListView'));
const TypingPractice = React.lazy(() => import('./components/TypingPractice'));
const McqPractice = React.lazy(() => import('./components/McqPractice'));
const LearningFlow = React.lazy(() => import('./components/LearningFlow'));

// --- ICONS ---
const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" /> </svg> );
const AdjustmentsHorizontalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </svg>
);
const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292" /> </svg> );

// --- LOADING COMPONENT ---
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-full w-full min-h-[300px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary dark:border-dark-primary"></div>
  </div>
);

const defaultAppData: Omit<AppData, 'userCards'> = {
  customPresets: [],
  themedProgress: {},
  presetProgress: {},
  totalReviewProgress: {},
  userThemes: [],
  favoriteCardIds: [],
};

type View = 'home' | 'themed-learning' | 'sub-theme-selection' | 'practice' | 'progress-view' | 'word-list' | 'custom-learning' | 'preset-detail' | 'word-selector';
type PracticeMode = 'typing' | 'mcq';

// --- APP COMPONENT ---
function App() {
  
  // --- STATE ---
  const [view, setView] = useState<View>('home');
  const [lastView, setLastView] = useState<View>('home');
  
  const [appData, setAppData] = useState<Omit<AppData, 'userCards'>>(() => {
    try {
      const savedData = window.localStorage.getItem(APP_DATA_STORAGE_KEY);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        
        if (parsedData && typeof parsedData === 'object') {
            // Validate and migrate data structure if necessary
            const totalReviewProgress = (typeof parsedData.totalReviewProgress === 'object' && parsedData.totalReviewProgress !== null) ? parsedData.totalReviewProgress : {};
            
            // Clean up invalid review progress
            Object.keys(totalReviewProgress).forEach(key => {
                const entry = totalReviewProgress[key];
                if (!entry || !Array.isArray(entry.deck) || !Array.isArray(entry.memorizedInDeck)) {
                    delete totalReviewProgress[key];
                }
            });

            // Ensure presetProgress keys are numbers
            const rawPresetProgress = (typeof parsedData.presetProgress === 'object' && parsedData.presetProgress !== null) ? parsedData.presetProgress : {};
            const presetProgress: Record<number, number[]> = {};
            for (const key in rawPresetProgress) {
              if (Object.prototype.hasOwnProperty.call(rawPresetProgress, key)) {
                presetProgress[Number(key)] = rawPresetProgress[key];
              }
            }

            return {
              customPresets: Array.isArray(parsedData.customPresets) ? parsedData.customPresets : [],
              themedProgress: (typeof parsedData.themedProgress === 'object' && parsedData.themedProgress !== null) ? parsedData.themedProgress : {},
              presetProgress,
              totalReviewProgress,
              userThemes: Array.isArray(parsedData.userThemes) ? parsedData.userThemes : [],
              favoriteCardIds: Array.isArray(parsedData.favoriteCardIds) ? parsedData.favoriteCardIds : [],
            };
        }
      }
    } catch (error) {
      console.error("Failed to load or parse data from localStorage:", error);
    }
    return defaultAppData;
  });

  const [activeLearningSession, setActiveLearningSession] = useState<ActiveLearningSession | null>(null);
  const [practiceSession, setPracticeSession] = useState<{cards: FlashcardData[], mode: PracticeMode, source: LearningSource} | null>(null);
  const [activeMainTheme, setActiveMainTheme] = useState<MainTheme | null>(null);
  const [activePreset, setActivePreset] = useState<CustomPreset | null>(null);
  const [activeSource, setActiveSource] = useState<LearningSource | null>(null);
  
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

  // --- PERSISTENCE ---
  useEffect(() => {
    try {
      window.localStorage.setItem(APP_DATA_STORAGE_KEY, JSON.stringify(appData));
    } catch (error) {
      console.error("Failed to save data to localStorage:", error);
    }
  }, [appData]);

  // --- MEMOIZED DATA ---
  const allMainThemes = useMemo(() => {
      const userThemeIds = new Set(appData.userThemes.map(t => t.id));
      const baseThemes = THEMED_VOCABULARY.filter(t => !userThemeIds.has(t.id));
      return [...baseThemes, ...appData.userThemes];
  }, [appData.userThemes]);

  const allCards = useMemo(() => {
    return allMainThemes.flatMap(theme => theme.subThemes.flatMap(sub => sub.cards));
  }, [allMainThemes]);

  const allCardsMap = useMemo(() => {
    const map = new Map<number, FlashcardData>();
    allCards.forEach(card => map.set(card.id, card));
    return map;
  }, [allCards]);
  
  const totalThemedWords = useMemo(() => {
      return allMainThemes.flatMap(t => t.subThemes.flatMap(st => st.cards)).length;
  }, [allMainThemes]);

  const totalWordsMemorized = useMemo(() => {
      const memorizedIds = new Set<number>();
      Object.values(appData.themedProgress).forEach(ids => {
          if (Array.isArray(ids)) ids.forEach(id => memorizedIds.add(id));
      });
      return memorizedIds.size;
  }, [appData.themedProgress]);

  // --- VIEW HANDLERS (OPTIMIZED) ---
  const changeView = useCallback((newView: View) => {
    setLastView(prev => {
      if (prev !== view) return view;
      return prev;
    });
    setView(newView);
  }, [view]);
  
  const handleNavigate = useCallback((targetView: View) => {
    if (activeLearningSession) {
        if(window.confirm("Bạn có muốn thoát buổi học không? Tiến trình được lưu tự động.")) {
            setActiveLearningSession(null);
            changeView(targetView);
        }
    } else {
        changeView(targetView);
    }
  }, [activeLearningSession, changeView]);

  const handleViewProgress = useCallback((source: LearningSource) => {
    setActiveSource(source);
    changeView('progress-view');
  }, [changeView]);

  const handleViewWordList = useCallback((source: LearningSource) => {
    setActiveSource(source);
    changeView('word-list');
  }, [changeView]);

  // --- DATA HANDLERS (OPTIMIZED) ---
   const handleToggleFavorite = useCallback((cardId: number) => {
    setAppData(prevData => {
      const newFavorites = new Set(prevData.favoriteCardIds);
      if (newFavorites.has(cardId)) {
        newFavorites.delete(cardId);
      } else {
        newFavorites.add(cardId);
      }
      return { ...prevData, favoriteCardIds: Array.from(newFavorites) };
    });
  }, []);

  const handleCreatePreset = useCallback((name: string) => {
    setAppData(prevData => {
      const newPreset: CustomPreset = {
        id: Date.now(),
        name,
        cardIds: [],
      };
      return { ...prevData, customPresets: [...prevData.customPresets, newPreset] };
    });
  }, []);

  const handleDeletePreset = useCallback((presetId: number) => {
    // Note: We need appData here, but using functional update allows it to be stable if we extracted logic
    // However, we need `appData.customPresets` for the name. 
    // To keep useCallback effective, we rely on `appData` being fresh or use a ref if strictly needed.
    // Here we just accept `appData` dependency as it changes less frequently than other state.
    setAppData(prevData => {
        const presetToDelete = prevData.customPresets.find(p => p.id === presetId);
        if (!presetToDelete) return prevData;

        if (window.confirm(`Bạn có chắc chắn muốn xóa bộ "${presetToDelete.name}" không? Hành động này không thể hoàn tác.`)) {
             setActivePreset(null);
             changeView('custom-learning');
             
             const newPresets = prevData.customPresets.filter(p => p.id !== presetId);
             const newPresetProgress = { ...prevData.presetProgress };
             delete newPresetProgress[presetId];
             return {
                ...prevData,
                customPresets: newPresets,
                presetProgress: newPresetProgress,
            };
        }
        return prevData;
    });
  }, [changeView]);
  
   const handleRemoveWordFromPreset = useCallback((presetId: number, cardIdToRemove: number) => {
    setAppData(prevData => {
      const newPresets = prevData.customPresets.map(p => {
        if (p.id === presetId) {
          return { ...p, cardIds: p.cardIds.filter(id => id !== cardIdToRemove) };
        }
        return p;
      });
      const newPresetProgress = { ...prevData.presetProgress };
      if (newPresetProgress[presetId]) {
        newPresetProgress[presetId] = newPresetProgress[presetId].filter(id => id !== cardIdToRemove);
      }
      // Update active preset reference if it matches
      setActivePreset(prev => prev && prev.id === presetId ? newPresets.find(p => p.id === presetId) || null : prev);
      
      return { ...prevData, customPresets: newPresets, presetProgress: newPresetProgress };
    });
  }, []);

  const handleSavePresetWords = useCallback((presetId: number, newCardIds: number[]) => {
      setAppData(prevData => {
          const newPresets = prevData.customPresets.map(p => {
              if (p.id === presetId) {
                  return { ...p, cardIds: newCardIds };
              }
              return p;
          });
          setActivePreset(prev => prev && prev.id === presetId ? newPresets.find(p => p.id === presetId) || null : prev);
          return { ...prevData, customPresets: newPresets };
      });
      changeView('preset-detail');
  }, [changeView]);
  
  const handleImportThemes = useCallback((newThemes: MainTheme[]) => {
      setAppData(prevData => {
        const existingThemesMap = new Map<string, MainTheme>(prevData.userThemes.map(t => [t.id, JSON.parse(JSON.stringify(t))]));

        newThemes.forEach(newTheme => {
            const existingTheme = existingThemesMap.get(newTheme.id);
            if (existingTheme) {
                const existingSubThemesMap = new Map<string, SubTheme>(existingTheme.subThemes.map(st => [st.id, st]));
                newTheme.subThemes.forEach(newSubTheme => {
                    const existingSubTheme = existingSubThemesMap.get(newSubTheme.id);
                    if (existingSubTheme) {
                        const existingCardIds = new Set(existingSubTheme.cards.map(c => c.id));
                        const newCards = newSubTheme.cards.filter(c => !existingCardIds.has(c.id));
                        existingSubTheme.cards.push(...newCards);
                    } else {
                        existingTheme.subThemes.push(newSubTheme);
                    }
                });
            } else {
                existingThemesMap.set(newTheme.id, newTheme);
            }
        });

        return { ...prevData, userThemes: Array.from(existingThemesMap.values()) };
    });
    setIsDevToolsOpen(false);
  }, []);

  const handleClearImportedThemes = useCallback(() => {
    if (window.confirm("Bạn có chắc chắn muốn xóa tất cả các chủ đề đã import và tiến trình học của chúng không? Hành động này không thể hoàn tác.")) {
        setAppData(prevData => {
            const subThemeIdsToClear = new Set<string>();
            prevData.userThemes.forEach(theme => {
                theme.subThemes.forEach(subTheme => {
                    subThemeIdsToClear.add(subTheme.id);
                });
            });

            const newThemedProgress = { ...prevData.themedProgress };
            subThemeIdsToClear.forEach(id => {
                delete newThemedProgress[id];
            });
            
            const userThemeIds = new Set(prevData.userThemes.map(t => t.id));
            const newTotalReviewProgress = { ...prevData.totalReviewProgress };
            userThemeIds.forEach(id => {
                delete newTotalReviewProgress[id];
            });

            return {
                ...prevData,
                userThemes: [],
                themedProgress: newThemedProgress,
                totalReviewProgress: newTotalReviewProgress,
            };
        });
        
        setActiveMainTheme(null);
        setActiveLearningSession(null);
        setActiveSource(null);
        changeView('home');
        setIsDevToolsOpen(false);
    }
  }, [changeView]);

  // --- LEARNING SESSION HANDLERS (OPTIMIZED) ---
  const handleStartPractice = useCallback((cards: FlashcardData[], mode: PracticeMode, source: LearningSource) => {
    if (cards.length === 0) {
        alert("Không có từ nào để luyện tập!");
        return;
    }
    setPracticeSession({ cards, mode, source });
    changeView('practice');
  }, [changeView]);

  const handleEndPractice = useCallback(() => {
    setPracticeSession(prev => {
        const lastSource = prev?.source;
        if (lastSource) {
            if (lastSource.type === 'preset') {
                changeView('preset-detail');
            } else {
                changeView('sub-theme-selection');
            }
        } else {
            changeView('home'); // Fallback
        }
        return null;
    });
  }, [changeView]);

  // Optimized logic to start a session for both Themes and Presets
  const startSessionGeneric = useCallback((cards: FlashcardData[], source: LearningSource, title: string, memorizedIds: Set<number>) => {
      const notMemorized = cards.filter(c => !memorizedIds.has(c.id));
      const sessionCards = (notMemorized.length > 0) ? notMemorized : shuffleArray([...cards]);

      if (sessionCards.length > 0) {
          setActiveLearningSession({ cards: sessionCards, source, title });
      } else {
          alert("Không có từ nào để học!");
      }
  }, []);

  const handleStartSession = useCallback((subTheme: SubTheme) => {
      const source: LearningSource = { type: 'themed', id: subTheme.id };
      // Need current progress state, so we access it inside the function or pass as dependency
      // To keep useCallback stable, we rely on appData being a dependency
      const memorizedIds = new Set(appData.themedProgress[subTheme.id] || []);
      startSessionGeneric(subTheme.cards, source, subTheme.name, memorizedIds);
  }, [appData.themedProgress, startSessionGeneric]);
  
  const handleStartPresetSession = useCallback((cards: FlashcardData[], presetId: number) => {
      const isFavoritePreset = presetId === -1;
      const preset = isFavoritePreset
        ? { id: -1, name: '⭐ Yêu thích', cardIds: appData.favoriteCardIds }
        : appData.customPresets.find(p => p.id === presetId);
      
      if (!preset) {
        alert("Không tìm thấy bộ từ!");
        return;
      }
      
      const source: LearningSource = { type: 'preset', id: preset.id };
      const memorizedIds = new Set(appData.presetProgress[preset.id] || []);
      startSessionGeneric(cards, source, preset.name, memorizedIds);
   }, [appData.customPresets, appData.favoriteCardIds, appData.presetProgress, startSessionGeneric]);

  const handleStartTotalReview = useCallback((mainThemeId: string, shuffle: boolean) => {
    const mainTheme = allMainThemes.find(t => t.id === mainThemeId);
    if (!mainTheme) return;

    let deckIds: number[];
    const currentReviewProgress = appData.totalReviewProgress[mainThemeId];

    if (shuffle || !currentReviewProgress || currentReviewProgress.deck.length === 0) {
        const allCardIdsInTheme = mainTheme.subThemes.flatMap(st => st.cards.map(c => c.id));
        deckIds = shuffleArray([...allCardIdsInTheme]).slice(0, 30);
        
        setAppData(prev => ({
            ...prev,
            totalReviewProgress: {
                ...prev.totalReviewProgress,
                [mainThemeId]: { deck: deckIds, memorizedInDeck: [] }
            }
        }));
    } else {
        deckIds = currentReviewProgress.deck;
    }

    const memorizedInDeck = new Set(currentReviewProgress?.memorizedInDeck || []);
    const sessionCards = deckIds
        .map(id => allCardsMap.get(id))
        .filter((c): c is FlashcardData => !!c && !memorizedInDeck.has(c.id)); // Optimization: map then filter

    if (sessionCards.length === 0) {
        alert(shuffle ? "Không thể tạo bộ mới." : "Bạn đã học hết các từ trong bộ này!");
        return;
    }

    setActiveLearningSession({
        cards: sessionCards,
        source: { type: 'total-review', id: mainThemeId },
        title: `Tổng ôn: ${mainTheme.name}`
    });
  }, [allMainThemes, appData.totalReviewProgress, allCardsMap]);
   
  const handleSessionEnd = useCallback(() => {
    setActiveLearningSession(null);
  }, []);
  
  const handleWordMemorized = useCallback((cardId: number, source: LearningSource) => {
    setAppData(prevData => {
        const newData = { ...prevData };
        
        if (source.type === 'total-review') {
            const mainThemeId = source.id;
            const currentReviewData = newData.totalReviewProgress[mainThemeId] || { deck: [], memorizedInDeck: [] };
            const newMemorized = new Set(currentReviewData.memorizedInDeck);
            newMemorized.add(cardId);
            newData.totalReviewProgress = {
                ...newData.totalReviewProgress,
                [mainThemeId]: { ...currentReviewData, memorizedInDeck: Array.from(newMemorized) }
            };
        } else if (source.type === 'themed') {
            const progressData = { ...newData.themedProgress };
            const currentProgress = new Set(progressData[source.id] || []);
            currentProgress.add(cardId);
            progressData[source.id] = Array.from(currentProgress);
            newData.themedProgress = progressData;
        } else if (source.type === 'preset') {
            const progressData = { ...newData.presetProgress };
            const currentProgress = new Set(progressData[source.id] || []);
            currentProgress.add(cardId);
            progressData[source.id] = Array.from(currentProgress);
            newData.presetProgress = progressData;
        }
        return newData;
    });
  }, []);
  
  const handleResetProgress = useCallback((sourceId: string | number) => {
      if(window.confirm("Bạn có chắc muốn đặt lại tiến trình cho bộ này?")) {
          setAppData(prevData => {
              if (typeof sourceId === 'string') {
                  const newProgress = { ...prevData.themedProgress };
                  delete newProgress[sourceId];
                  return { ...prevData, themedProgress: newProgress };
              } else {
                  const newProgress = { ...prevData.presetProgress };
                  delete newProgress[sourceId];
                  return { ...prevData, presetProgress: newProgress };
              }
          });
      }
  }, []);

  // --- RENDER LOGIC ---

  const ThemedLearningView = () => {
        const isSubThemeCompleted = (subTheme: SubTheme, progress: number[]): boolean => {
            if (subTheme.isReview) return false;
            return progress.length === subTheme.cards.length && subTheme.cards.length > 0;
        };

        const getEmojiForTheme = (themeName: string): string => {
            const name = themeName.toLowerCase();
            if (name.includes('giáo dục')) return '🎓';
            if (name.includes('môi trường')) return '🌳';
            if (name.includes('công nghệ')) return '💻';
            if (name.includes('sức khỏe')) return '❤️‍🩹';
            if (name.includes('kinh tế')) return '📈';
            if (name.includes('xã hội')) return '🏛️';
            if (name.includes('du lịch')) return '✈️';
            if (name.includes('việc làm')) return '💼';
            if (name.includes('nhà ở')) return '🏠';
            return '📚';
        };

        return (
             <div className="w-full max-w-2xl mx-auto flex flex-col h-full animate-fadeIn p-2 md:p-4">
                 <header className="text-center mb-4 w-full sticky top-0 bg-background/80 dark:bg-dark-background/80 backdrop-blur-sm py-4 z-10">
                    <div className="flex justify-center items-center relative">
                         <button onClick={() => handleNavigate('home')} className="absolute left-0 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Back to home">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
                        </button>
                        <h1 className="text-3xl font-extrabold text-on-surface dark:text-dark-on-surface flex items-center">
                            <BookOpenIcon className="h-8 w-8 mr-2" /> Học theo Chủ đề
                        </h1>
                    </div>
                </header>
                <main className="flex-grow pb-4 px-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {allMainThemes.map((mainTheme) => {
                            const subThemesToCount = mainTheme.subThemes.filter(st => !st.isReview);
                            const completedSubThemes = subThemesToCount.filter(st => isSubThemeCompleted(st, appData.themedProgress[st.id] || [])).length;
                            const totalSubThemes = subThemesToCount.length;
                            const progress = totalSubThemes > 0 ? (completedSubThemes / totalSubThemes) * 100 : 0;
                            const themeColors = getThemeColors(mainTheme.name);

                            return (
                                <div key={mainTheme.id} onClick={() => { setActiveMainTheme(mainTheme); changeView('sub-theme-selection'); }} className={`bg-surface dark:bg-dark-surface rounded-xl shadow-md p-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:ring-2 ${themeColors.ring} flex flex-col justify-between h-36`}>
                                    <div>
                                        <div className="flex items-start justify-between">
                                            <h3 className="font-bold text-lg text-on-surface dark:text-dark-on-surface mb-1 pr-2">{mainTheme.name}</h3>
                                            <span className="text-4xl -mt-1">{getEmojiForTheme(mainTheme.name)}</span>
                                        </div>
                                        <span className="text-sm font-medium text-on-surface-variant dark:text-dark-on-surface-variant">Hoàn thành: {completedSubThemes} / {totalSubThemes}</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mt-2">
                                        <div className={`${themeColors.progressBar} h-2.5 rounded-full transition-all`} style={{ width: `${progress}%` }}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </main>
            </div>
        )
  }

  const getActiveSourceData = () => {
    if (!activeSource) return null;
    
    let title = '';
    let cards: FlashcardData[] = [];
    let onBackView: View = 'home';
    let memorizedIds = new Set<number>();
    
    if (activeSource.type === 'themed') {
        const theme = allMainThemes.find(t => t.subThemes.some(st => st.id === activeSource.id));
        const subTheme = theme?.subThemes.find(st => st.id === activeSource.id);
        if (subTheme) {
            title = subTheme.name;
            cards = subTheme.cards;
            memorizedIds = new Set(appData.themedProgress[subTheme.id] || []);
            onBackView = 'sub-theme-selection';
        }
    } else if (activeSource.type === 'preset') {
        const isFavoritePreset = activeSource.id === -1;
        const preset = isFavoritePreset 
            ? { id: -1, name: '⭐ Yêu thích', cardIds: appData.favoriteCardIds }
            : appData.customPresets.find(p => p.id === activeSource.id);
        
        if (preset) {
            title = preset.name;
            cards = preset.cardIds.map(id => allCardsMap.get(id)).filter((c): c is FlashcardData => !!c);
            memorizedIds = new Set(appData.presetProgress[preset.id] || []);
            onBackView = 'custom-learning';
        }
    } else if (activeSource.type === 'total-review') {
        const mainTheme = allMainThemes.find(t => t.id === activeSource.id);
        const reviewData = appData.totalReviewProgress[activeSource.id];
        if (mainTheme && reviewData) {
            title = `Tổng ôn: ${mainTheme.name}`;
            cards = reviewData.deck.map(id => allCardsMap.get(id)).filter((c): c is FlashcardData => !!c);
            memorizedIds = new Set(reviewData.memorizedInDeck || []);
            onBackView = 'sub-theme-selection';
        }
    }
    
    return { title, cards, memorizedIds, onBackView };
  };

  const renderContent = () => {
    switch (view) {
      case 'home':
        return <ModeSelection 
            setView={changeView}
            totalWordsMemorized={totalWordsMemorized}
            totalThemedWords={totalThemedWords}
        />;
      case 'themed-learning':
        return <ThemedLearningView />;
      case 'sub-theme-selection':
        if (activeMainTheme) {
            return <SubThemeSelection 
                mainTheme={activeMainTheme}
                themedProgress={appData.themedProgress}
                totalReviewProgress={appData.totalReviewProgress}
                allCardsMap={allCardsMap}
                onStartSession={handleStartSession}
                onStartPractice={handleStartPractice}
                onStartTotalReview={handleStartTotalReview}
                onViewWordList={handleViewWordList}
                onViewProgress={handleViewProgress}
                onBack={() => changeView('themed-learning')}
            />
        }
        return null;
      case 'practice':
          if (practiceSession) {
              const { cards, mode } = practiceSession;
              const title = allCards.find(c => c.id === cards[0]?.id)?.category || "Luyện tập";

              if (mode === 'typing') {
                  return <TypingPractice cards={cards} onSessionEnd={handleEndPractice} title={title} />;
              }
              if (mode === 'mcq') {
                  return <McqPractice cards={cards} onSessionEnd={handleEndPractice} title={title} />;
              }
          }
          return null;
      case 'custom-learning':
          return <PresetList 
              presets={appData.customPresets}
              presetProgress={appData.presetProgress}
              allCardsMap={allCardsMap}
              favoriteCardIds={appData.favoriteCardIds}
              onSelectPreset={(preset) => { setActivePreset(preset); changeView('preset-detail'); }}
              onCreatePreset={handleCreatePreset}
              onViewWordList={handleViewWordList}
              onBack={() => handleNavigate('home')}
          />;
      case 'preset-detail':
          if (activePreset) {
              return <PresetDetail 
                  preset={activePreset}
                  allCards={allCards}
                  presetProgress={appData.presetProgress[activePreset.id] || []}
                  activeLearningSession={activeLearningSession}
                  favoriteCardIds={appData.favoriteCardIds}
                  onToggleFavorite={handleToggleFavorite}
                  onBack={() => { setActivePreset(null); changeView('custom-learning'); }}
                  onStartSession={handleStartPresetSession}
                  onStartPractice={(cards, mode, source) => {
                      setActiveSource(source);
                      handleStartPractice(cards, mode, source);
                  }}
                  onAddExistingWords={() => changeView('word-selector')}
                  onRemoveWordFromPreset={handleRemoveWordFromPreset}
                  onResetProgress={() => handleResetProgress(activePreset.id)}
                  onDeletePreset={() => handleDeletePreset(activePreset.id)}
                  onViewProgress={handleViewProgress}
                  onResumeSession={() => { /* Handled by overlay */ }}
              />;
          }
          return null;
        case 'word-selector':
            if (activePreset) {
                return <WordSelector 
                    preset={activePreset}
                    allMainThemes={allMainThemes}
                    favoriteCardIds={appData.favoriteCardIds}
                    onSave={handleSavePresetWords}
                    onCancel={() => changeView('preset-detail')}
                />
            }
            return null;
        case 'progress-view': {
             const sourceData = getActiveSourceData();
             if (sourceData && activeSource) {
                 return <ProgressView
                     title={sourceData.title}
                     cardsInSet={sourceData.cards}
                     memorizedIds={sourceData.memorizedIds}
                     onBack={() => changeView(sourceData.onBackView)}
                     onStartNewSession={(cards) => {
                         setActiveLearningSession({ cards, source: activeSource, title: sourceData.title });
                     }}
                 />;
             }
             return null;
        }
        case 'word-list': {
            const sourceData = getActiveSourceData();
            if (sourceData && activeSource) {
                return <WordListView 
                    title={sourceData.title} 
                    cards={sourceData.cards} 
                    memorizedIds={sourceData.memorizedIds} 
                    favoriteCardIds={appData.favoriteCardIds}
                    onToggleFavorite={handleToggleFavorite}
                    onBack={() => {
                      if (activeSource.type === 'preset' && activePreset) {
                        changeView('preset-detail');
                      } else {
                        changeView(sourceData.onBackView);
                      }
                    }} 
                />;
            }
            return null;
        }
        default:
            return null;
    }
  };

  return (
    <div className="min-h-screen bg-background dark:bg-dark-background text-on-surface dark:text-dark-on-surface font-sans">
      <div className="max-w-4xl mx-auto h-screen max-h-screen flex flex-col">
        <div className="flex-grow overflow-y-auto hide-scrollbar">
            <Suspense fallback={<LoadingSpinner />}>
                {renderContent()}
            </Suspense>
        </div>
      </div>
       {activeLearningSession && (
          <Suspense fallback={<div className="fixed inset-0 bg-background z-50 flex items-center justify-center">Loading Session...</div>}>
            <LearningFlow
                key={activeLearningSession.source.id} 
                session={activeLearningSession}
                allCards={allCards}
                favoriteCardIds={appData.favoriteCardIds}
                onToggleFavorite={handleToggleFavorite}
                onSessionEnd={handleSessionEnd}
                onWordMemorized={handleWordMemorized}
                onGoHome={() => {
                    setActiveLearningSession(null);
                    setView('home');
                }}
            />
          </Suspense>
       )}
      
      <Suspense fallback={null}>
        <DevTools 
            isOpen={isDevToolsOpen}
            onClose={() => setIsDevToolsOpen(false)}
            onImportThemes={handleImportThemes}
            onClearImportedThemes={handleClearImportedThemes}
        />
      </Suspense>

       {view !== 'home' && (
        <button 
          onClick={() => handleNavigate('home')}
          className="fixed bottom-20 right-4 p-3 bg-primary/80 backdrop-blur-sm text-on-primary rounded-full shadow-lg hover:bg-primary transition-all z-30"
          aria-label="Về trang chính"
        >
          <HomeIcon className="h-6 w-6" />
        </button>
      )}
      <button 
          onClick={() => setIsDevToolsOpen(true)}
          className="fixed bottom-4 right-4 p-3 bg-slate-600/50 text-white rounded-full hover:bg-slate-700/70 transition-colors z-30"
          aria-label="Open Developer Tools"
      >
          <AdjustmentsHorizontalIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

export default App;
