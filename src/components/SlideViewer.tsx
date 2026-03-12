import React from 'react';
import { Slide } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideViewerProps {
  slide: Slide;
  direction: number;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({ slide, direction }) => {
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <div className="relative flex-1 overflow-hidden bg-slate-900 flex flex-col">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={slide.id}
          id="slide-scroll-container"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 overflow-y-auto p-6 md:p-12 lg:p-16 flex flex-col"
        >
          <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
            {React.createElement(slide.component)}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
