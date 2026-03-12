import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

interface Option {
  id: number;
  text: string;
  correct: boolean;
  explanation?: string;
}

interface QuizProps {
  question: string;
  options: Option[];
}

export const Quiz: React.FC<QuizProps> = ({ question, options }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const selectedOption = options.find(o => o.id === selected);

  return (
    <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 w-full max-w-3xl mx-auto my-8">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">
        {question}
      </h3>
      
      <div className="space-y-4 mb-8">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => {
              if (!showResult) setSelected(opt.id);
            }}
            className={`w-full p-4 rounded-xl text-left text-lg font-medium transition-all ${
              showResult
                ? opt.correct
                  ? 'bg-green-500/20 border-green-500 text-green-400 border-2'
                  : selected === opt.id
                    ? 'bg-red-500/20 border-red-500 text-red-400 border-2'
                    : 'bg-slate-900 border-slate-700 text-slate-500 border'
                : selected === opt.id
                  ? 'bg-sky-500/20 border-sky-500 text-sky-400 border-2'
                  : 'bg-slate-900 border-slate-700 text-slate-300 border hover:border-slate-500'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{opt.text}</span>
              {showResult && opt.correct && <CheckCircle2 className="text-green-400" />}
              {showResult && !opt.correct && selected === opt.id && <XCircle className="text-red-400" />}
            </div>
          </button>
        ))}
      </div>
      
      <div className="flex justify-center">
        {!showResult ? (
          <button
            onClick={() => setShowResult(true)}
            disabled={selected === null}
            className="px-8 py-3 bg-sky-500 text-white rounded-xl font-bold disabled:opacity-50 hover:bg-sky-400 transition-colors"
          >
            Comprobar Respuesta
          </button>
        ) : (
          <button
            onClick={() => {
              setSelected(null);
              setShowResult(false);
            }}
            className="px-8 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors"
          >
            Reintentar
          </button>
        )}
      </div>
      
      {showResult && selectedOption && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-6 p-4 rounded-xl text-center ${
            selectedOption.correct 
              ? 'bg-green-500/10 text-green-400' 
              : 'bg-red-500/10 text-red-400'
          }`}
        >
          {selectedOption.explanation || (selectedOption.correct ? '¡Correcto!' : 'Incorrecto.')}
        </motion.div>
      )}
    </div>
  );
};
