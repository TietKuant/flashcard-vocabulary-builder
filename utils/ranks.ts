import React from 'react';

// --- NEW ROMAN/STOIC THEME ICONS ---

export const TiroIcon: React.FC = () => ( // Bronze - Training Sword (Rudis)
    React.createElement('svg', { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', {
            d: "M12 5V19M8 15H16",
            stroke: "#CD7F32",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    )
);

export const LegionariusIcon: React.FC = () => ( // Silver - Shield (Scutum) with outline
    React.createElement('svg', { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement(React.Fragment, null,
            React.createElement('path', {
                d: "M12 2L4 5v6c0 5.5 3.58 10.36 8 11.92 4.42-1.56 8-6.42 8-11.92V5l-8-3z",
                stroke: "#000000", // Black outline
                strokeWidth: "0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            React.createElement('path', {
                d: "M12 2L4 5v6c0 5.5 3.58 10.36 8 11.92 4.42-1.56 8-6.42 8-11.92V5l-8-3z",
                stroke: "#C0C0C0", // Silver
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        )
    )
);

export const CenturioIcon: React.FC = () => ( // Gold - Zeus's Lightning Bolt with outline
    React.createElement('svg', { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
         React.createElement(React.Fragment, null,
            React.createElement('path', {
                d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
                stroke: "#000000", // Black outline
                strokeWidth: "0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            React.createElement('path', {
                d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
                stroke: "#FFD700", // Gold
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        )
    )
);

export const OptioIcon: React.FC = () => ( // Emerald - Spear (Pilum)
    React.createElement('svg', { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', {
            d: "M3 21L21 3",
            stroke: "#50C878",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
         React.createElement('path', {
            d: "M17 3H21V7",
            stroke: "#50C878",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    )
);

export const LegatusIcon: React.FC = () => ( // Diamond - Omega Symbol (God of War style)
    React.createElement('svg', { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', {
            d: "M4 19C5 5 19 5 20 19",
            stroke: "#38bdf8",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    )
);


export const PrimusPilusIcon: React.FC = () => ( // Black Diamond -> Obsidian - Eagle Standard (Aquila)
    React.createElement('svg', { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
       React.createElement('path', {
            d: "M12 21V10",
            stroke: "#333333",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
         React.createElement('path', {
            d: "M9 10H15",
            stroke: "#333333",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
         React.createElement('path', {
            d: "M12 7.5C13.5 7.5 15 6 15 4.5C15 3 13.5 2 12 2C10.5 2 9 3 9 4.5C9 6 10.5 7.5 12 7.5Z",
            stroke: "#333333",
            strokeWidth: "1.5"
        }),
         React.createElement('path', {
            d: "M5 7C7.5 10 9 10 12 10",
            stroke: "#333333",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
         React.createElement('path', {
            d: "M19 7C16.5 10 15 10 12 10",
            stroke: "#333333",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    )
);

export const PraetorianIcon: React.FC = () => ( // Master - Crossed Swords
    React.createElement('svg', { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "animate-pulse-master" },
        React.createElement('path', { d: "M18.5 5.5L5.5 18.5", stroke: "#FF4500", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M5 9L9 5", stroke: "#FF4500", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M19 15L15 19", stroke: "#FF4500", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M18.5 18.5L5.5 5.5", stroke: "#FF4500", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M9 19L5 15", stroke: "#FF4500", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M15 5L19 9", stroke: "#FF4500", strokeWidth: "1.5", strokeLinecap: "round" })
    )
);

export const ImperatorIcon: React.FC = () => ( // Challenger - Laurel Wreath
    React.createElement('svg', { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "animate-sparkle-challenger" },
         React.createElement('path', {
            d: "M7 21C4.5 18 3 14 3 10C3 6 4.5 2 7 -0.5 M17 21C19.5 18 21 14 21 10C21 6 19.5 2 17 -0.5",
            transform: "translate(0 1.5)",
            stroke: "#006994",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }),
         React.createElement('path', {
            d: "M7 20 L9 18 M7 16 L9 14 M7 12 L9 10 M7 8 L9 6 M7 4 L9 2",
            transform: "translate(0 1.5)",
            stroke: "#006994",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }),
         React.createElement('path', {
            d: "M17 20 L15 18 M17 16 L15 14 M17 12 L15 10 M17 8 L15 6 M17 4 L15 2",
            transform: "translate(0 1.5)",
            stroke: "#006994",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        })
    )
);

export const PantheonIcon: React.FC = () => ( // Pantheon - Fiery Goblet with outline
    React.createElement('svg', { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "animate-pulse-pantheon" },
        React.createElement(React.Fragment, null,
            // --- Black Outline for Goblet ---
            React.createElement('path', {
                d: "M9 21h6m-3-4v4M6 10c0 4.418 2.686 8 6 8s6-3.582 6-8c0-2.21-1.343-4-3-4h-6c-1.657 0-3 1.79-3 4z",
                stroke: "#000000",
                strokeWidth: "0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            // --- Yellow Goblet ---
            React.createElement('path', {
                d: "M9 21h6m-3-4v4M6 10c0 4.418 2.686 8 6 8s6-3.582 6-8c0-2.21-1.343-4-3-4h-6c-1.657 0-3 1.79-3 4z",
                stroke: "#FFD700",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            // --- Redesigned Flame ---
            React.createElement('path', {
                d: "M12 10C10.5 8.5 9.5 7 10.5 5C11.5 3.5 12 1 12 1C12 1 12.5 3.5 13.5 5C14.5 7 13.5 8.5 12 10Z",
                fill: "#DC143C",
                stroke: "#FF4500",
                strokeWidth: "1"
            })
        )
    )
);


// --- RANK DATA: EXPANDED ROMAN THEME ---
export const ranks = [
    { name: 'Tiro', minWords: 0, icon: TiroIcon, animationClass: '' },
    { name: 'Legionarius', minWords: 50, icon: LegionariusIcon, animationClass: '' },
    { name: 'Centurio', minWords: 125, icon: CenturioIcon, animationClass: '' },
    { name: 'Optio', minWords: 250, icon: OptioIcon, animationClass: '' },
    { name: 'Legatus', minWords: 450, icon: LegatusIcon, animationClass: '' },
    { name: 'Primus Pilus', minWords: 700, icon: PrimusPilusIcon, animationClass: '' },
    { name: 'Praetorian', minWords: 1000, icon: PraetorianIcon, animationClass: 'animate-pulse-master' },
    { name: 'Imperator', minWords: 1250, icon: ImperatorIcon, animationClass: 'animate-sparkle-challenger' },
    { name: 'Pantheon', minWords: 1500, icon: PantheonIcon, animationClass: 'animate-pulse-pantheon' },
];

export const getRank = (wordsMemorized: number) => {
    let currentRank = ranks[0];
    let nextRank: typeof ranks[0] | null = ranks[1];

    for (let i = ranks.length - 1; i >= 0; i--) {
        if (wordsMemorized >= ranks[i].minWords) {
            currentRank = ranks[i];
            nextRank = i < ranks.length - 1 ? ranks[i + 1] : null;
            break;
        }
    }

    const progress = nextRank
        ? ((wordsMemorized - currentRank.minWords) / (nextRank.minWords - currentRank.minWords)) * 100
        : 100;

    return { ...currentRank, next: nextRank, progress: Math.max(0, Math.min(100, progress)) };
};