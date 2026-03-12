import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { MathFormula } from '../components/MathFormula';
import { Quiz } from '../components/Quiz';
import { motion } from 'framer-motion';
import { GitBranch, Target, Zap, Info, CheckCircle2, AlertTriangle, HelpCircle, Activity } from 'lucide-react';

export const Slide174 = () => {
  const [depth, setDepth] = useState(1);

  return (
    <SlideLayout title="Interactivo: Crecimiento del Árbol" subtitle="Visualizando el sobreajuste">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 w-full max-w-4xl">
          <div className="mb-8">
            <label className="block text-white text-lg mb-4 font-bold flex justify-between">
              <span>Profundidad Máxima (max_depth):</span>
              <span className="text-green-400">{depth}</span>
            </label>
            <input 
              type="range" min="1" max="5" step="1" value={depth} 
              onChange={(e) => setDepth(parseInt(e.target.value))}
              className="w-full accent-green-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 rounded-xl h-64 relative overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Simulated Decision Regions */}
                {depth >= 1 && <line x1="50" y1="0" x2="50" y2="100" stroke="#111827" strokeWidth="2" />}
                {depth >= 2 && <line x1="50" y1="60" x2="100" y2="60" stroke="#111827" strokeWidth="2" />}
                {depth >= 3 && <line x1="0" y1="40" x2="50" y2="40" stroke="#111827" strokeWidth="1" />}
                {depth >= 4 && <line x1="75" y1="0" x2="75" y2="60" stroke="#111827" strokeWidth="0.5" />}
                {depth >= 5 && <line x1="50" y1="30" x2="75" y2="30" stroke="#111827" strokeWidth="0.5" />}
                
                {/* Regions fill */}
                <rect x="0" y="0" width="50" height="100" fill="#ef4444" opacity={0.1 * depth} />
                <rect x="50" y="0" width="50" height="100" fill="#22c55e" opacity={0.1 * depth} />
              </svg>
              <div className="absolute bottom-2 right-2 text-[8px] text-neutral-400">Fronteras de decisión ortogonales</div>
            </div>
            
            <div className="flex flex-col justify-center space-y-4">
              <div className={`p-4 rounded-xl border transition-colors ${depth === 1 ? 'bg-yellow-500/10 border-yellow-500/20' : 'bg-neutral-800 border-neutral-700'}`}>
                <p className="text-sm font-bold text-white">Profundidad 1 (Stump)</p>
                <p className="text-xs text-neutral-400">Modelo muy simple. Alto sesgo (Underfitting).</p>
              </div>
              <div className={`p-4 rounded-xl border transition-colors ${depth >= 4 ? 'bg-red-500/10 border-red-500/20' : 'bg-neutral-800 border-neutral-700'}`}>
                <p className="text-sm font-bold text-white">Profundidad {depth}</p>
                <p className="text-xs text-neutral-400">Modelo complejo. Riesgo de memorizar ruido (Overfitting).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide175 = () => (
  <SlideLayout title="Quiz: Árboles de Decisión" subtitle="Impureza de Gini">
    <Quiz
      question="¿Qué significa que un nodo en un Árbol de Decisión tenga un Índice Gini igual a 0?"
      options={[
        { id: 1, text: 'Que el nodo contiene una mezcla perfecta (50/50) de clases.', correct: false, explanation: 'Eso sería un Gini de 0.5 en clasificación binaria.' },
        { id: 2, text: 'Que el nodo es perfectamente puro (todos los elementos son de la misma clase).', correct: true, explanation: 'Correcto. Es el objetivo ideal de cada división.' },
        { id: 3, text: 'Que el árbol ha dejado de crecer por falta de datos.', correct: false, explanation: 'El Gini mide pureza, no cantidad de datos.' },
        { id: 4, text: 'Que el atributo elegido es irrelevante.', correct: false, explanation: 'Si el Gini es 0, el atributo ha sido extremadamente relevante para separar las clases.' }
      ]}
    />
  </SlideLayout>
);

export const Slide176 = () => (
  <SlideLayout title="Quiz: Poda" subtitle="Control de complejidad">
    <Quiz
      question="¿Cuál de estos hiperparámetros ayuda a reducir el sobreajuste en un Árbol de Decisión?"
      options={[
        { id: 1, text: 'Aumentar max_depth.', correct: false, explanation: 'Aumentar la profundidad aumenta la complejidad y el sobreajuste.' },
        { id: 2, text: 'Disminuir min_samples_split.', correct: false, explanation: 'Permitir divisiones con menos muestras aumenta el sobreajuste.' },
        { id: 3, text: 'Establecer un valor máximo para max_depth (ej. max_depth=3).', correct: true, explanation: 'Correcto. Limitar el crecimiento es la forma más efectiva de regularizar un árbol.' },
        { id: 4, text: 'Usar Entropía en lugar de Gini.', correct: false, explanation: 'Ambas métricas son similares y no afectan directamente al sobreajuste.' }
      ]}
    />
  </SlideLayout>
);

export const Slide177 = () => (
  <SlideLayout title="Resumen: Árboles de Decisión" subtitle="Puntos clave">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-neutral-900 p-12 rounded-2xl border border-neutral-800 max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="text-green-500 shrink-0" />
              <p className="text-neutral-300">Modelo basado en <strong>reglas lógicas</strong> jerárquicas.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-green-500 shrink-0" />
              <p className="text-neutral-300">Usa el <strong>Índice Gini</strong> para medir la pureza de los nodos.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-green-500 shrink-0" />
              <p className="text-neutral-300">Fronteras de decisión <strong>ortogonales</strong>.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="text-green-500 shrink-0" />
              <p className="text-neutral-300">Extremadamente <strong>interpretable</strong> (Caja Blanca).</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-green-500 shrink-0" />
              <p className="text-neutral-300">Muy propenso al <strong>sobreajuste</strong> si no se poda.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-green-500 shrink-0" />
              <p className="text-neutral-300">No requiere escalado de datos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide178 = () => (
  <SlideLayout title="Comparativa Final: Clasificación" subtitle="Logística vs Árboles">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-neutral-700">
              <th className="p-4 text-white font-bold">Característica</th>
              <th className="p-4 text-orange-400 font-bold">Regresión Logística</th>
              <th className="p-4 text-green-400 font-bold">Árboles de Decisión</th>
            </tr>
          </thead>
          <tbody className="text-neutral-300">
            <tr className="border-b border-neutral-800">
              <td className="p-4 font-bold">Frontera</td>
              <td className="p-4 text-sm">Lineal (Diagonal)</td>
              <td className="p-4 text-sm">Ortogonal (Escalones)</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-4 font-bold">Interpretabilidad</td>
              <td className="p-4 text-sm">Media (Pesos)</td>
              <td className="p-4 text-sm text-green-400 font-bold">Alta (Reglas)</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-4 font-bold">Escalado</td>
              <td className="p-4 text-sm text-red-400">Recomendado</td>
              <td className="p-4 text-sm text-green-400 font-bold">No necesario</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-4 font-bold">No linealidad</td>
              <td className="p-4 text-sm text-red-400">Difícil</td>
              <td className="p-4 text-sm text-green-400 font-bold">Natural</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">Sobreajuste</td>
              <td className="p-4 text-sm text-green-400">Bajo (Regularización)</td>
              <td className="p-4 text-sm text-red-400">Alto (Requiere Poda)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </SlideLayout>
);

export const Slide179 = () => (
  <SlideLayout title="Resumen del Curso" subtitle="Aprendizaje Supervisado">
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="bg-neutral-900 p-12 rounded-2xl border border-neutral-800 max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-white mb-8">Conceptos Consolidados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-black rounded-xl border border-neutral-800">
            <p className="text-sky-400 font-bold">Validación</p>
            <p className="text-[10px] text-neutral-500">Hold-out, CV, Nested CV</p>
          </div>
          <div className="p-4 bg-black rounded-xl border border-neutral-800">
            <p className="text-sky-400 font-bold">Métricas</p>
            <p className="text-[10px] text-neutral-500">MSE, R², Accuracy, F1</p>
          </div>
          <div className="p-4 bg-black rounded-xl border border-neutral-800">
            <p className="text-sky-400 font-bold">Regresión</p>
            <p className="text-[10px] text-neutral-500">Lineal, KNN</p>
          </div>
          <div className="p-4 bg-black rounded-xl border border-neutral-800">
            <p className="text-sky-400 font-bold">Clasificación</p>
            <p className="text-[10px] text-neutral-500">Logística, Árboles</p>
          </div>
        </div>
        <div className="mt-12 p-6 bg-sky-500/10 border border-sky-500/20 rounded-2xl">
          <p className="text-lg text-neutral-300">
            Has completado los fundamentos del aprendizaje supervisado. 
            Ahora tienes las herramientas para entrenar, evaluar y optimizar modelos reales.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide180 = () => (
  <SlideLayout title="Fin del Módulo" subtitle="¡Enhorabuena!">
    <div className="flex flex-col items-center justify-center h-full text-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Target className="w-32 h-32 text-sky-500 mb-8 mx-auto" />
        <h2 className="text-5xl font-bold text-white mb-6">¡Misión Cumplida!</h2>
        <p className="text-2xl text-neutral-400 max-w-2xl mx-auto">
          Has recorrido todo el manual de Aprendizaje Supervisado. 
          Estás listo para el siguiente nivel.
        </p>
      </motion.div>
    </div>
  </SlideLayout>
);
