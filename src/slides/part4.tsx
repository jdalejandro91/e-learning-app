import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

export const Slide31 = () => {
  const [step, setStep] = useState(0);
  
  const steps = [
    { title: '1. Negocio', desc: 'Entender el problema' },
    { title: '2. Datos', desc: 'Recolectar y explorar' },
    { title: '3. Preparación', desc: 'Limpiar y formatear' },
    { title: '4. Modelado', desc: 'Entrenar algoritmos' },
    { title: '5. Evaluación', desc: 'Validar resultados' },
    { title: '6. Despliegue', desc: 'Poner en producción' }
  ];

  return (
    <SlideLayout title="Resumen Interactivo" subtitle="El flujo de CRISP-DM">
      <div className="flex flex-col h-full">
        <p className="text-xl text-slate-300 mb-8 text-center">
          Avanza paso a paso para ver cómo fluye un proyecto de minería de datos.
        </p>
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={{ 
                  opacity: i <= step ? 1 : 0.3,
                  scale: i === step ? 1.1 : 1,
                  borderColor: i === step ? '#38bdf8' : '#334155'
                }}
                className={`p-4 rounded-xl border-2 bg-slate-800 w-40 text-center ${
                  i === step ? 'shadow-[0_0_15px_rgba(56,189,248,0.5)]' : ''
                }`}
              >
                <h4 className={`font-bold ${i === step ? 'text-sky-400' : 'text-slate-400'}`}>
                  {s.title}
                </h4>
                <p className="text-xs text-slate-500 mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="px-6 py-3 bg-slate-700 text-white rounded-lg font-bold disabled:opacity-50"
            >
              Anterior
            </button>
            <button 
              onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
              disabled={step === steps.length - 1}
              className="px-6 py-3 bg-sky-500 text-white rounded-lg font-bold disabled:opacity-50 hover:bg-sky-400"
            >
              Siguiente
            </button>
            <button 
              onClick={() => setStep(0)}
              className="px-4 py-3 bg-slate-800 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 flex items-center gap-2"
            >
              <RefreshCw size={18} /> Reiniciar
            </button>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide32 = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  
  const options = [
    { id: 1, text: 'Comprensión de los Datos', correct: false },
    { id: 2, text: 'Preparación de los Datos', correct: true },
    { id: 3, text: 'Modelado', correct: false },
    { id: 4, text: 'Evaluación', correct: false }
  ];

  return (
    <SlideLayout title="Quiz: Fases de CRISP-DM" subtitle="Pon a prueba tus conocimientos">
      <div className="flex flex-col items-center justify-center h-full max-w-7xl mx-auto w-full">
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 w-full">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            ¿Cuál es la fase de CRISP-DM que generalmente demanda el mayor esfuerzo y tiempo del proyecto?
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
          
          {showResult && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 p-4 rounded-xl text-center ${
                options.find(o => o.id === selected)?.correct 
                  ? 'bg-green-500/10 text-green-400' 
                  : 'bg-red-500/10 text-red-400'
              }`}
            >
              {options.find(o => o.id === selected)?.correct 
                ? '¡Correcto! La preparación de datos (limpieza, transformación) suele ocupar hasta el 80% del tiempo de un proyecto.' 
                : 'Incorrecto. La fase que más tiempo consume es la Preparación de los Datos, debido a la necesidad de limpiar y transformar la información.'}
            </motion.div>
          )}
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide33 = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  
  const options = [
    { id: 1, text: 'Director Técnico de Proyecto', correct: false },
    { id: 2, text: 'Científico de Datos', correct: false },
    { id: 3, text: 'Analista de Datos', correct: false },
    { id: 4, text: 'Ingeniero de Datos', correct: true }
  ];

  return (
    <SlideLayout title="Quiz: Roles en Ciencia de Datos" subtitle="Pon a prueba tus conocimientos">
      <div className="flex flex-col items-center justify-center h-full max-w-7xl mx-auto w-full">
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 w-full">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            ¿Qué rol se encarga principalmente de los procesos ETL (Extraer, Transformar, Cargar) y de proporcionar datos limpios a los demás?
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
          
          {showResult && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 p-4 rounded-xl text-center ${
                options.find(o => o.id === selected)?.correct 
                  ? 'bg-green-500/10 text-green-400' 
                  : 'bg-red-500/10 text-red-400'
              }`}
            >
              {options.find(o => o.id === selected)?.correct 
                ? '¡Correcto! El Ingeniero de Datos maneja los datos con destreza, automatiza procesos y prepara la información para el análisis.' 
                : 'Incorrecto. El rol encargado de la extracción, transformación y carga (ETL) es el Ingeniero de Datos.'}
            </motion.div>
          )}
        </div>
      </div>
    </SlideLayout>
  );
};
