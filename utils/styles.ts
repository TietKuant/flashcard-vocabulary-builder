export const getLevelStyles = (level: string | undefined): { bg: string; text: string } => {
  // A vibrant, game-rank inspired color scheme for CEFR levels
  switch (level?.toUpperCase()) {
    case 'A1': return { bg: 'bg-gray-200 dark:bg-gray-700', text: 'text-gray-800 dark:text-gray-100' };
    case 'A2': return { bg: 'bg-green-200 dark:bg-green-800', text: 'text-green-800 dark:text-green-100' };
    case 'B1': return { bg: 'bg-blue-200 dark:bg-blue-800', text: 'text-blue-800 dark:text-blue-100' };
    case 'B2': return { bg: 'bg-purple-200 dark:bg-purple-800', text: 'text-purple-800 dark:text-purple-100' };
    case 'C1': return { bg: 'bg-pink-200 dark:bg-pink-800', text: 'text-pink-800 dark:text-pink-100' };
    case 'C2': return { bg: 'bg-amber-200 dark:bg-amber-800', text: 'text-amber-800 dark:text-amber-100' };
    default: return { bg: 'bg-slate-200 dark:bg-slate-700', text: 'text-slate-800 dark:text-slate-100' };
  }
};

export const getThemeColors = (themeName: string): { bg: string; text: string; ring: string; progressBar: string } => {
  if (themeName.includes('Môi trường')) return { bg: 'bg-teal-500/10', text: 'text-teal-600 dark:text-teal-400', ring: 'hover:ring-teal-500', progressBar: 'bg-teal-500' };
  if (themeName.includes('Công nghệ')) return { bg: 'bg-sky-500/10', text: 'text-sky-600 dark:text-sky-400', ring: 'hover:ring-sky-500', progressBar: 'bg-sky-500' };
  if (themeName.includes('Sức khỏe')) return { bg: 'bg-lime-500/10', text: 'text-lime-600 dark:text-lime-400', ring: 'hover:ring-lime-500', progressBar: 'bg-lime-500' };
  if (themeName.includes('Kinh tế')) return { bg: 'bg-orange-500/10', text: 'text-orange-600 dark:text-orange-400', ring: 'hover:ring-orange-500', progressBar: 'bg-orange-500' };
  if (themeName.includes('Xã hội')) return { bg: 'bg-pink-500/10', text: 'text-pink-600 dark:text-pink-400', ring: 'hover:ring-pink-500', progressBar: 'bg-pink-500' };
  if (themeName.includes('Du lịch')) return { bg: 'bg-indigo-500/10', text: 'text-indigo-600 dark:text-indigo-400', ring: 'hover:ring-indigo-500', progressBar: 'bg-indigo-500' };
  if (themeName.includes('Việc làm')) return { bg: 'bg-cyan-500/10', text: 'text-cyan-600 dark:text-cyan-400', ring: 'hover:ring-cyan-500', progressBar: 'bg-cyan-500' };
  if (themeName.includes('Nhà ở')) return { bg: 'bg-rose-500/10', text: 'text-rose-600 dark:text-rose-400', ring: 'hover:ring-rose-500', progressBar: 'bg-rose-500' };
  
  return {
    bg: 'bg-primary-light/10 dark:bg-dark-primary/20',
    text: 'text-primary dark:text-dark-primary',
    ring: 'hover:ring-primary dark:hover:ring-dark-primary',
    progressBar: 'bg-primary dark:bg-dark-primary'
  };
};