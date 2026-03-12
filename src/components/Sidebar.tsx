import React, { useState } from 'react';
import { Slide } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarProps {
  slides: Slide[];
  currentSlideIndex: number;
  setCurrentSlideIndex: (index: number) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  slides,
  currentSlideIndex,
  setCurrentSlideIndex,
  isOpen,
  setIsOpen,
}) => {
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({
    '1': true,
    '2': true,
    '3': true,
    '4': true,
  });

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  const chapters = [
    { id: '1', title: 'Capítulo 1: Fundamentos' },
    { id: '2', title: 'Capítulo 2: Validación y Evaluación' },
    { id: '3', title: 'Capítulo 3: Regresión' },
    { id: '4', title: 'Capítulo 4: Clasificación' },
  ];

  // Group slides by chapter and then by section
  const groupedByChapter: Record<string, Record<string, { slide: Slide; index: number }[]>> = {
    '1': {}, '2': {}, '3': {}, '4': {}
  };

  slides.forEach((slide, index) => {
    const section = slide.section || 'General';
    const chapterId = section.charAt(0);
    
    if (groupedByChapter[chapterId]) {
      if (!groupedByChapter[chapterId][section]) {
        groupedByChapter[chapterId][section] = [];
      }
      groupedByChapter[chapterId][section].push({ slide, index });
    }
  });

  const sidebarContent = (
    <div className="w-80 flex flex-col h-full shrink-0">
      <div className="p-6 border-b border-slate-800 shrink-0">
        <h1 className="text-xl font-bold text-green-500 leading-tight">
          Aprendizaje Supervisado
        </h1>
        <p className="text-sm text-slate-400 mt-2">
          Manual de la Asignatura
        </p>
      </div>

      <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
        <div className="space-y-4 px-3">
          {chapters.map(chapter => {
            const chapterSections = groupedByChapter[chapter.id];
            if (Object.keys(chapterSections).length === 0) return null;
            
            const isExpanded = expandedChapters[chapter.id];

            return (
              <div key={chapter.id} className="mb-2">
                <button 
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full flex items-center justify-between px-2 py-2 text-left hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                    {chapter.title}
                  </h2>
                  {isExpanded ? (
                    <ChevronDown size={16} className="text-slate-500" />
                  ) : (
                    <ChevronRight size={16} className="text-slate-500" />
                  )}
                </button>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 space-y-4">
                        {Object.entries(chapterSections).map(([section, sectionSlides]) => (
                          <div key={section} className="mb-2">
                            <h3 className="text-xs font-bold text-sky-500/80 uppercase tracking-wider mb-1 px-4">
                              {section}
                            </h3>
                            <ul className="space-y-0.5">
                              {sectionSlides.map(({ slide, index }) => (
                                <li key={slide.id}>
                                  <button
                                    onClick={() => {
                                      setCurrentSlideIndex(index);
                                      if (window.innerWidth < 768) setIsOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors flex items-start gap-2 ${
                                      currentSlideIndex === index
                                        ? 'bg-green-500/20 text-green-400 font-medium'
                                        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                                    }`}
                                  >
                                    <span className="inline-block w-6 text-slate-600 text-xs font-mono mt-0.5 shrink-0">
                                      {index + 1}.
                                    </span>
                                    <span className="leading-tight">{slide.title}</span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <AnimatePresence initial={false}>
        {isOpen && (
          <>
            {/* Desktop Sidebar (pushes content) */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 320, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="hidden md:flex flex-col h-screen bg-slate-950 border-r border-slate-800 shadow-2xl overflow-hidden shrink-0 relative z-40"
            >
              {sidebarContent}
            </motion.div>

            {/* Mobile Sidebar (overlays content) */}
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="md:hidden fixed inset-y-0 left-0 z-50 w-80 bg-slate-950 border-r border-slate-800 flex flex-col h-screen shadow-2xl"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile overlay backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

