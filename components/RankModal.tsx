
import React from 'react';
import { ranks } from '../utils/ranks';

const RankModal: React.FC<{ onClose: () => void, currentRankName: string }> = ({ onClose, currentRankName }) => {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fadeIn" onClick={onClose} role="dialog" aria-modal="true">
            <div className="bg-surface dark:bg-dark-surface rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-2xl flex flex-col" onClick={e => e.stopPropagation()}>
                <h2 className="text-3xl font-bold mb-6 text-on-surface dark:text-dark-on-surface text-center font-roman">
                    Rank
                </h2>
                <div className="overflow-y-auto max-h-[60vh] pr-2 hide-scrollbar">
                    <ul className="space-y-3">
                        {ranks.map(rank => {
                            const isCurrent = rank.name === currentRankName;
                            return (
                                <li 
                                    key={rank.name} 
                                    className={`flex items-center p-4 rounded-lg transition-all ${
                                        isCurrent 
                                            ? 'bg-secondary/10 dark:bg-dark-secondary/20' 
                                            : 'bg-slate-100 dark:bg-dark-background'
                                    }`}
                                >
                                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                        <rank.icon />
                                    </div>
                                    <div className="ml-6 flex-grow">
                                        <div className="flex justify-between items-center">
                                            <p className="font-bold text-xl text-on-surface dark:text-dark-on-surface">{rank.name}</p>
                                            {isCurrent && (
                                                <span className="text-xs font-bold uppercase text-secondary dark:text-dark-secondary bg-secondary/20 dark:bg-dark-secondary/30 px-2.5 py-1 rounded-full">
                                                    Hiện tại
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-on-surface-variant dark:text-dark-on-surface-variant">Yêu cầu: {rank.minWords} từ</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="mt-6 flex justify-end pt-4 border-t border-slate-200 dark:border-slate-700">
                    <button onClick={onClose} className="px-6 py-2 bg-primary text-on-primary font-semibold rounded-lg shadow-sm hover:bg-primary-dark transition-colors">
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RankModal;
