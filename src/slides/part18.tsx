import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { MathFormula } from '../components/MathFormula';
import { Quiz } from '../components/Quiz';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Info, CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';

export const Slide145 = () => {
  const [k, setK] = useState(3);

  return (
    <SlideLayout title="Interactivo: El efecto de K" subtitle="Balanceando Sesgo y Varianza">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 w-full max-w-6xl">
          <div className="mb-8">
            <label className="block text-white text-lg mb-4 font-bold flex justify-between">
              <span>Número de Vecinos (k):</span>
              <span className="text-purple-400">{k}</span>
            </label>
            <input 
              type="range" min="1" max="15" step="1" value={k} 
              onChange={(e) => setK(parseInt(e.target.value))}
              className="w-full accent-purple-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 rounded-xl h-64 relative overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Data points */}
                {[10, 25, 40, 55, 70, 85].map((x, i) => {
                  const y = 80 - (x * 0.6 + (Math.sin(x/10) * 10));
                  return <circle key={i} cx={x} cy={y} r="2" fill="#94a3b8" />;
                })}
                
                {/* Prediction Line (Simplified visualization of KNN smoothing) */}
                <path 
                  d={`M 0 ${80 - (0 * 0.6)} Q 50 ${80 - (50 * 0.6 + (20/k))} 100 ${80 - (100 * 0.6)}`}
                  fill="none" stroke="#a855f7" strokeWidth={4/k + 1}
                />
              </svg>
              <div className="absolute top-2 right-2 text-[8px] text-neutral-400">Curva de predicción suavizada</div>
            </div>
            
            <div className="flex flex-col justify-center space-y-4">
              <div className={`p-4 rounded-xl border transition-colors ${k <= 3 ? 'bg-red-500/10 border-red-500/20' : 'bg-neutral-800 border-neutral-700'}`}>
                <p className="text-sm font-bold text-white">k pequeño ({k})</p>
                <p className="text-xs text-neutral-400">Alta Varianza. El modelo es muy sensible a cada punto individual. Riesgo de Overfitting.</p>
              </div>
              <div className={`p-4 rounded-xl border transition-colors ${k >= 10 ? 'bg-yellow-500/10 border-yellow-500/20' : 'bg-neutral-800 border-neutral-700'}`}>
                <p className="text-sm font-bold text-white">k grande ({k})</p>
                <p className="text-xs text-neutral-400">Alto Sesgo. La predicción es muy suave y puede ignorar patrones locales importantes. Riesgo de Underfitting.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide146 = () => (
  <SlideLayout title="La Maldición de la Dimensionalidad" subtitle="El problema de los espacios vacíos">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">¿Qué ocurre al añadir atributos?</h3>
        <p className="text-neutral-300 mb-6">
          A medida que aumentamos el número de dimensiones (atributos), el volumen del espacio crece exponencialmente y los datos se vuelven "escasos".
        </p>
        <div className="bg-red-500/10 p-6 rounded-xl border border-red-500/20">
          <p className="text-sm text-neutral-400">
            En alta dimensionalidad, todos los puntos parecen estar "lejos" de los demás. La noción de "vecino cercano" pierde su significado y KNN deja de funcionar.
          </p>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center items-center">
        <div className="flex gap-4 mb-8">
          <div className="w-12 h-1 bg-purple-500 rounded-full"></div>
          <div className="w-12 h-12 border-2 border-purple-500 rounded-lg"></div>
          <div className="w-12 h-12 border-2 border-purple-500 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 border border-purple-500/30 rotate-45 scale-150"></div>
          </div>
        </div>
        <p className="text-xs text-neutral-500">1D → 2D → 3D → ... → 100D</p>
        <p className="mt-4 text-sm text-neutral-300 font-bold">¡Necesitas exponencialmente más datos para llenar el espacio!</p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide147 = () => (
  <SlideLayout title="Quiz: KNN Regresión" subtitle="Conceptos clave">
    <Quiz
      question="¿Por qué es fundamental escalar los datos antes de aplicar KNN?"
      options={[
        { id: 1, text: 'Para que el algoritmo converja más rápido.', correct: false, explanation: 'KNN no tiene una fase de entrenamiento iterativa que requiera convergencia.' },
        { id: 2, text: 'Para evitar que los atributos con rangos numéricos más grandes dominen el cálculo de la distancia.', correct: true, explanation: 'Correcto. KNN se basa puramente en distancias geométricas.' },
        { id: 3, text: 'Para reducir el número de vecinos necesarios.', correct: false, explanation: 'El escalado no afecta a la elección de k.' },
        { id: 4, text: 'Para convertir el problema en uno de clasificación.', correct: false, explanation: 'El escalado no cambia el tipo de problema (regresión vs clasificación).' }
      ]}
    />
  </SlideLayout>
);

export const Slide148 = () => (
  <SlideLayout title="Quiz: El parámetro K" subtitle="Sesgo y Varianza">
    <Quiz
      question="Si observas que tu modelo KNN tiene un error muy bajo en entrenamiento pero un error muy alto en test, ¿qué ajuste de 'k' deberías probar?"
      options={[
        { id: 1, text: 'Disminuir k para que el modelo sea más flexible.', correct: false, explanation: 'Disminuir k aumenta la complejidad y el sobreajuste.' },
        { id: 2, text: 'Aumentar k para suavizar la predicción y mejorar la generalización.', correct: true, explanation: 'Correcto. Un k mayor reduce la varianza y ayuda a combatir el sobreajuste.' },
        { id: 3, text: 'Mantener k=1 para máxima precisión.', correct: false, explanation: 'k=1 es el caso extremo de sobreajuste.' },
        { id: 4, text: 'Cambiar la métrica de distancia a Manhattan.', correct: false, explanation: 'Cambiar la métrica puede ayudar, pero el problema descrito es claramente de sobreajuste por un k demasiado pequeño.' }
      ]}
    />
  </SlideLayout>
);

export const Slide149 = () => (
  <SlideLayout title="Resumen del Capítulo 3" subtitle="Regresión Lineal vs KNN">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-neutral-700">
              <th className="p-4 text-white font-bold">Característica</th>
              <th className="p-4 text-sky-400 font-bold">Regresión Lineal</th>
              <th className="p-4 text-purple-400 font-bold">KNN Regresión</th>
            </tr>
          </thead>
          <tbody className="text-neutral-300">
            <tr className="border-b border-neutral-800">
              <td className="p-4 font-bold">Tipo</td>
              <td className="p-4 text-sm">Paramétrico (aprende pesos)</td>
              <td className="p-4 text-sm">No paramétrico (basado en instancias)</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-4 font-bold">Supuestos</td>
              <td className="p-4 text-sm">Muchos (Linealidad, etc.)</td>
              <td className="p-4 text-sm">Mínimos (solo proximidad)</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-4 font-bold">Escalado</td>
              <td className="p-4 text-sm">Recomendado (para gradiente)</td>
              <td className="p-4 text-sm text-red-400 font-bold">OBLIGATORIO</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-4 font-bold">Velocidad Predicción</td>
              <td className="p-4 text-sm text-green-400 font-bold">Instantánea</td>
              <td className="p-4 text-sm text-red-400">Lenta (busca vecinos)</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">Interpretabilidad</td>
              <td className="p-4 text-sm">Alta (coeficientes)</td>
              <td className="p-4 text-sm">Media (basada en ejemplos)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </SlideLayout>
);

export const Slide150 = () => (
  <SlideLayout title="Transición" subtitle="De números a categorías">
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="bg-neutral-900 p-12 rounded-2xl border border-neutral-800 max-w-7xl w-full">
        <h2 className="text-3xl font-bold text-white mb-6">Cambiando el objetivo</h2>
        <p className="text-xl text-neutral-300 mb-8">
          Hasta ahora hemos predicho valores numéricos (Regresión). Pero, ¿qué pasa si queremos predecir etiquetas discretas como "Spam" o "No Spam"?
        </p>
        <div className="bg-black p-6 rounded-xl border border-orange-900/50">
          <p className="text-lg font-bold text-orange-400">
            Capítulo 4: Clasificación
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide151 = () => (
  <SlideLayout title="Capítulo 4. Clasificación" subtitle="Aprendizaje Supervisado">
    <div className="flex flex-col items-center justify-center h-full text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Target className="w-32 h-32 text-orange-500 mb-8" />
      </motion.div>
      <h2 className="text-5xl font-bold text-white mb-6">Modelos de Clasificación</h2>
      <p className="text-xl text-neutral-300 max-w-7xl leading-relaxed">
        Aprenderemos a asignar etiquetas a nuevas observaciones. 
        Exploraremos la <strong className="text-orange-400">Regresión Logística</strong> y los <strong className="text-orange-400">Árboles de Decisión</strong>, 
        comprendiendo cómo separan las clases y cómo evaluar su rendimiento.
      </p>
    </div>
  </SlideLayout>
);

export const Slide152 = () => (
  <SlideLayout title="4.1. Regresión Logística" subtitle="El clasificador lineal">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">¿Regresión o Clasificación?</h3>
        <p className="text-neutral-300 mb-6">
          A pesar de su nombre, es un algoritmo de <strong>Clasificación</strong>. Se basa en la regresión lineal pero añade una capa final para predecir probabilidades.
        </p>
        <div className="bg-black/50 p-6 rounded-xl border border-orange-900/30">
          <p className="text-white font-bold mb-2">La Idea:</p>
          <p className="text-neutral-400 text-sm">Calculamos una combinación lineal de los atributos y luego la pasamos por una función que la "aplasta" entre 0 y 1.</p>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center items-center text-center">
        <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
          <Zap className="text-orange-500" size={40} />
        </div>
        <h4 className="text-xl font-bold text-white mb-4">Probabilidad Binaria</h4>
        <p className="text-neutral-400 text-sm">
          Ideal para problemas de Sí/No, Éxito/Fracaso, Enfermo/Sano.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide153 = () => (
  <SlideLayout title="La Función Sigmoide" subtitle="El corazón de la logística">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">Función Logística</h3>
        <p className="text-neutral-300 mb-6">
          Toma cualquier número real (<MathFormula tex="z" />) y lo mapea al rango (0, 1).
        </p>
        <div className="bg-black p-6 rounded-xl border border-orange-900/50 text-center mb-6">
          <MathFormula block tex="\sigma(z) = \frac{1}{1 + e^{-z}}" />
        </div>
        <p className="text-xs text-neutral-500 italic">
          Donde <MathFormula tex="z = w_0 + w_1x_1 + \dots" />
        </p>
      </div>
      <div className="bg-white p-8 rounded-2xl flex items-center justify-center">
        <svg viewBox="0 0 100 60" className="w-full h-full">
          <line x1="0" y1="30" x2="100" y2="30" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="50" y1="0" x2="50" y2="60" stroke="#e2e8f0" strokeWidth="1" />
          <path d="M 10 55 C 30 55, 40 50, 50 30 C 60 10, 70 5, 90 5" fill="none" stroke="#f97316" strokeWidth="2" />
          <text x="95" y="35" fontSize="4" fill="#64748b">z</text>
          <text x="55" y="5" fontSize="4" fill="#f97316">1.0</text>
          <text x="55" y="55" fontSize="4" fill="#f97316">0.0</text>
        </svg>
      </div>
    </div>
  </SlideLayout>
);

export const Slide154 = () => (
  <SlideLayout title="Probabilidad y Umbral" subtitle="Tomando la decisión final">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">Del 0.75 al "SÍ"</h3>
        <p className="text-neutral-300 mb-6">
          El modelo nos da una probabilidad <MathFormula tex="P(y=1|x)" />. Para asignar una clase, necesitamos un <strong>Umbral de Decisión</strong> (Threshold).
        </p>
        <div className="bg-black/50 p-6 rounded-xl border border-orange-900/30">
          <p className="text-sm text-neutral-400">Por defecto el umbral es <strong>0.5</strong>:</p>
          <ul className="mt-2 space-y-1 text-xs">
            <li className="text-green-400">Si P ≥ 0.5 → Clase 1</li>
            <li className="text-red-400">Si P &lt; 0.5 → Clase 0</li>
          </ul>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2"><Info size={18}/> Ajuste del Umbral</h4>
        <p className="text-sm text-neutral-400 leading-relaxed">
          Podemos mover este umbral según el problema. En medicina, podríamos bajarlo a 0.2 para ser más sensibles y no perder ningún caso positivo, aunque tengamos más falsas alarmas.
        </p>
      </div>
    </div>
  </SlideLayout>
);
