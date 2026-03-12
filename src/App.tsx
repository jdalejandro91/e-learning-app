import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { SlideViewer } from './components/SlideViewer';
import { TopBar } from './components/TopBar';
import { slides } from './slides';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [direction, setDirection] = useState(0);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        if (currentSlideIndex < slides.length - 1) {
          setDirection(1);
          setCurrentSlideIndex(prev => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentSlideIndex > 0) {
          setDirection(-1);
          setCurrentSlideIndex(prev => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  const handleSetSlide = (index: number) => {
    setDirection(index > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(index);
  };

  return (
    <div className="flex h-screen bg-slate-900 text-slate-200 overflow-hidden font-sans">
      <Sidebar
        slides={slides}
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={handleSetSlide}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <TopBar 
          title={slides[currentSlideIndex].title}
          currentIndex={currentSlideIndex}
          total={slides.length}
          onPrev={() => handleSetSlide(currentSlideIndex - 1)}
          onNext={() => handleSetSlide(currentSlideIndex + 1)}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <SlideViewer
          slide={slides[currentSlideIndex]}
          direction={direction}
        />
      </div>
    </div>
  );
}
