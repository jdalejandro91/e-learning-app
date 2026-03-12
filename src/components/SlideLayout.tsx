import React from 'react';

interface SlideLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ title, subtitle, children }) => {
  return (
    <div className="flex flex-col h-full">
      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-green-500 mt-2 font-medium">{subtitle}</p>
        )}
        <div className="h-1 w-20 bg-green-600 rounded-full mt-6"></div>
      </header>
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
};
