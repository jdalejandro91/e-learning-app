import React from 'react';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';

interface TopBarProps {
  title: string;
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onToggleSidebar: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ title, currentIndex, total, onPrev, onNext, onToggleSidebar }) => (
  <div className="h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-4 md:px-6 shrink-0 z-20">
    <div className="flex items-center gap-4">
      <button onClick={onToggleSidebar} className="p-2 hover:bg-slate-800 rounded-md text-slate-300 transition-colors">
        <Menu size={24} />
      </button>
      <h2 className="text-green-500 font-bold text-lg hidden md:block">{title}</h2>
    </div>
    
    <div className="flex items-center gap-6 ml-auto">
      <span className="text-slate-400 font-mono text-sm">
        {currentIndex + 1} / {total}
      </span>
      <div className="flex gap-2">
        <button 
          onClick={onPrev} 
          disabled={currentIndex === 0}
          className="p-2 bg-slate-900 border border-slate-700 rounded-md hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed text-green-500 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={onNext} 
          disabled={currentIndex === total - 1}
          className="p-2 bg-slate-900 border border-slate-700 rounded-md hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed text-green-500 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  </div>
);
