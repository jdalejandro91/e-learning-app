import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { motion } from 'framer-motion';
import { MathFormula } from '../components/MathFormula';
import { CodeBlock } from '../components/CodeBlock';
import { Quiz } from '../components/Quiz';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LineChart, Line } from 'recharts';
import { BrainCircuit, LineChart as LineChartIcon, Target, Search, Layers, Network } from 'lucide-react';

export const Slide34 = () => (
  <SlideLayout title="1.2. Tipos de Aprendizaje" subtitle="¿Cómo aprenden las máquinas?">
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-xl text-slate-300 mb-12 text-center max-w-7xl">
        Fundamentalmente, se distinguen dos categorías de problemas que pueden resolverse mediante aprendizaje automático, dependiendo de la existencia de una <strong className="text-sky-400">variable de salida</strong> (clase).
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-slate-800 p-8 rounded-3xl border-2 border-sky-500/50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-bl-full"></div>
          <Target className="w-16 h-16 text-sky-400 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Aprendizaje Supervisado</h3>
          <p className="text-lg text-slate-300 mb-6">
            Existe una variable especial de interés (variable de salida o clase). El objetivo es <strong className="text-sky-400">inferir o predecir</strong> su valor.
          </p>
          <ul className="space-y-2 text-slate-400">
            <li>• Regresión (salida numérica)</li>
            <li>• Clasificación (salida categórica)</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800 p-8 rounded-3xl border-2 border-purple-500/50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full"></div>
          <Search className="w-16 h-16 text-purple-400 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Aprendizaje No Supervisado</h3>
          <p className="text-lg text-slate-300 mb-6">
            <strong className="text-purple-400">No existe</strong> una variable de salida. El objetivo es encontrar patrones o estructuras ocultas en los datos.
          </p>
          <ul className="space-y-2 text-slate-400">
            <li>• Clustering (agrupamiento)</li>
            <li>• Reglas de asociación</li>
            <li>• Reducción de dimensionalidad</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide35 = () => (
  <SlideLayout title="1.2.1. Aprendizaje Supervisado" subtitle="Problemas de Inferencia o Predicción">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
      <div>
        <p className="text-xl text-slate-300 leading-relaxed mb-6">
          En la gran mayoría de los casos, se pretende estimar el valor de la variable de salida en función del resto de variables.
        </p>
        <div className="bg-orange-900/20 p-6 rounded-xl border-l-4 border-orange-500 mb-8">
          <p className="text-lg text-slate-300">
            <strong className="text-orange-400">Importante:</strong> Es preciso que <strong className="text-white">todas</strong> las filas de datos tengan un valor para la variable de salida. Si faltan valores, no hay aprendizaje a partir de ellas.
          </p>
        </div>
        <h4 className="text-2xl font-bold text-white mb-4">Dos grandes tipos:</h4>
        <div className="space-y-4">
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-4">
            <LineChartIcon className="text-sky-400 w-8 h-8" />
            <div>
              <h5 className="font-bold text-sky-400">Regresión</h5>
              <p className="text-slate-400">La variable de salida es numérica (número real).</p>
            </div>
          </div>
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-4">
            <Layers className="text-purple-400 w-8 h-8" />
            <div>
              <h5 className="font-bold text-purple-400">Clasificación</h5>
              <p className="text-slate-400">La variable es categórica (número discreto o etiqueta).</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
        <h4 className="text-center font-bold text-slate-300 mb-4">Estructura de Datos (Supervisado)</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-300">
            <thead className="text-xs uppercase bg-slate-700 text-slate-300">
              <tr>
                <th colSpan={3} className="px-6 py-3 text-center border-b border-slate-600">Atributos (Entrada)</th>
                <th className="px-6 py-3 text-center bg-sky-900/50 border-b border-sky-500/50 text-sky-300">Clase (Salida)</th>
              </tr>
              <tr>
                <th className="px-6 py-3">Edad</th>
                <th className="px-6 py-3">Ingresos</th>
                <th className="px-6 py-3">Historial</th>
                <th className="px-6 py-3 bg-sky-900/30 text-sky-400">Riesgo (Clasif.)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-800 border-b border-slate-700">
                <td className="px-6 py-4">25</td>
                <td className="px-6 py-4">30000</td>
                <td className="px-6 py-4">Bueno</td>
                <td className="px-6 py-4 bg-sky-900/10 font-bold text-green-400">Bajo</td>
              </tr>
              <tr className="bg-slate-800 border-b border-slate-700">
                <td className="px-6 py-4">45</td>
                <td className="px-6 py-4">15000</td>
                <td className="px-6 py-4">Malo</td>
                <td className="px-6 py-4 bg-sky-900/10 font-bold text-red-400">Alto</td>
              </tr>
              <tr className="bg-slate-800">
                <td className="px-6 py-4">35</td>
                <td className="px-6 py-4">50000</td>
                <td className="px-6 py-4">Excelente</td>
                <td className="px-6 py-4 bg-sky-900/10 font-bold text-green-400">Bajo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide36 = () => {
  const regData = Array.from({ length: 20 }, (_, i) => ({ x: i, y: i * 2 + Math.random() * 10 }));
  const classData = Array.from({ length: 40 }, () => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    return { x, y, type: x + y > 100 ? 'A' : 'B' };
  });

  return (
    <SlideLayout title="Regresión vs Clasificación" subtitle="Visualizando la diferencia">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col">
          <h3 className="text-xl font-bold text-sky-400 mb-2 text-center">Regresión</h3>
          <p className="text-slate-400 text-center mb-4 text-sm">Predicción de un valor continuo (ej: Precio de casa)</p>
          <div className="flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" dataKey="x" name="Tamaño" stroke="#94a3b8" />
                <YAxis type="number" dataKey="y" name="Precio" stroke="#94a3b8" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }} />
                <Scatter name="Casas" data={regData} fill="#38bdf8" />
                {/* Simulated regression line */}
                <Line dataKey="y" data={[{x:0, y:5}, {x:20, y:45}]} stroke="#f97316" strokeWidth={3} dot={false} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col">
          <h3 className="text-xl font-bold text-purple-400 mb-2 text-center">Clasificación</h3>
          <p className="text-slate-400 text-center mb-4 text-sm">Predicción de una categoría (ej: Spam vs No Spam)</p>
          <div className="flex-1 min-h-[250px] relative">
            {/* Simulated decision boundary */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
               <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-purple-500/10 transform -rotate-45 translate-x-1/4 -translate-y-1/4"></div>
               <div className="absolute bottom-0 left-0 w-[150%] h-[150%] bg-green-500/10 transform -rotate-45 -translate-x-1/4 translate-y-1/4"></div>
               <div className="absolute top-0 left-0 w-full h-full border-t-2 border-dashed border-slate-400 transform rotate-45 scale-150 origin-center"></div>
            </div>
            <ResponsiveContainer width="100%" height="100%" className="z-10 relative">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" dataKey="x" name="Frecuencia" stroke="#94a3b8" />
                <YAxis type="number" dataKey="y" name="Mayúsculas" stroke="#94a3b8" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }} />
                <Scatter name="Emails" data={classData}>
                  {classData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.type === 'A' ? '#a855f7' : '#4ade80'} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide37 = () => {
  const [points, setPoints] = useState<{x: number, y: number, class?: string}[]>([]);
  const [mode, setMode] = useState<'reg' | 'class'>('class');

  const handleAreaClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = 100 - ((e.clientY - rect.top) / rect.height) * 100;
    
    let newPoint = { x, y, class: '' };
    if (mode === 'class') {
      // Simple linear boundary for classification: y = x
      newPoint.class = y > x ? 'A' : 'B';
    }
    
    setPoints([...points, newPoint]);
  };

  // Calculate simple linear regression y = mx + b
  let m = 0, b = 0;
  if (mode === 'reg' && points.length > 1) {
    const n = points.length;
    const sumX = points.reduce((acc, p) => acc + p.x, 0);
    const sumY = points.reduce((acc, p) => acc + p.y, 0);
    const sumXY = points.reduce((acc, p) => acc + p.x * p.y, 0);
    const sumXX = points.reduce((acc, p) => acc + p.x * p.x, 0);
    
    m = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX) || 0;
    b = (sumY - m * sumX) / n || 0;
  }

  return (
    <SlideLayout title="Interactivo: Crea tu propio modelo" subtitle="Haz clic en el área para añadir datos">
      <div className="flex flex-col h-full">
        <div className="flex justify-center gap-4 mb-6">
          <button 
            onClick={() => { setMode('class'); setPoints([]); }}
            className={`px-6 py-2 rounded-full font-bold transition-colors ${mode === 'class' ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            Clasificación
          </button>
          <button 
            onClick={() => { setMode('reg'); setPoints([]); }}
            className={`px-6 py-2 rounded-full font-bold transition-colors ${mode === 'reg' ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            Regresión
          </button>
          <button 
            onClick={() => setPoints([])}
            className="px-6 py-2 rounded-full font-bold bg-slate-700 text-white hover:bg-slate-600"
          >
            Limpiar
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div 
            className="relative w-full max-w-2xl aspect-video bg-slate-800 border-2 border-slate-600 rounded-xl overflow-hidden cursor-crosshair"
            onClick={handleAreaClick}
          >
            {/* Grid lines */}
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '10% 10%' }}></div>
            
            {/* Classification Boundary */}
            {mode === 'class' && points.length > 0 && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-purple-500/20" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
                <div className="absolute top-0 left-0 w-full h-full bg-green-500/20" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
                <div className="absolute top-0 left-0 w-full h-full border-t-2 border-dashed border-white transform rotate-45 scale-150 origin-top-left"></div>
              </div>
            )}

            {/* Regression Line */}
            {mode === 'reg' && points.length > 1 && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line 
                  x1="0%" y1={`${100 - b}%`} 
                  x2="100%" y2={`${100 - (m * 100 + b)}%`} 
                  stroke="#f97316" strokeWidth="4" 
                />
              </svg>
            )}

            {/* Points */}
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`absolute w-4 h-4 -ml-2 -mt-2 rounded-full border-2 border-white shadow-lg ${
                  mode === 'reg' ? 'bg-sky-500' : p.class === 'A' ? 'bg-purple-500' : 'bg-green-500'
                }`}
                style={{ left: `${p.x}%`, top: `${100 - p.y}%` }}
              />
            ))}
            
            {points.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-slate-400 text-xl font-medium bg-slate-900/80 px-6 py-3 rounded-full">
                  Haz clic aquí para añadir puntos
                </p>
              </div>
            )}
          </div>
        </div>
        <p className="text-center text-slate-400 mt-4">
          {mode === 'class' 
            ? 'El modelo clasifica automáticamente los puntos según la región (frontera de decisión).' 
            : 'El modelo ajusta una línea recta (OLS) para minimizar el error entre los puntos.'}
        </p>
      </div>
    </SlideLayout>
  );
};

export const Slide38 = () => (
  <SlideLayout title="Quiz: Aprendizaje Supervisado" subtitle="Comprueba lo aprendido">
    <Quiz 
      question="Si queremos predecir la temperatura exacta que hará mañana en grados Celsius, ¿qué tipo de problema estamos resolviendo?"
      options={[
        { id: 1, text: 'Clasificación', correct: false, explanation: 'La clasificación predice categorías discretas (ej: Frío, Templado, Caliente), no valores continuos.' },
        { id: 2, text: 'Regresión', correct: true, explanation: '¡Correcto! La regresión se utiliza cuando la variable de salida es numérica y continua (como los grados Celsius).' },
        { id: 3, text: 'Clustering', correct: false, explanation: 'El clustering es aprendizaje no supervisado y no predice una variable de salida.' },
        { id: 4, text: 'Reglas de asociación', correct: false, explanation: 'Las reglas de asociación buscan relaciones entre variables, no predicen un valor numérico.' }
      ]}
    />
  </SlideLayout>
);
