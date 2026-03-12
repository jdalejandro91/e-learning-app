import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { MathFormula } from '../components/MathFormula';
import { CodeBlock } from '../components/CodeBlock';
import { Quiz } from '../components/Quiz';
import { Zap, Layers, Maximize, Minimize, Activity, Info, TrendingUp } from 'lucide-react';

export const Slide181 = () => (
  <SlideLayout title="Variantes del Descenso de Gradiente" subtitle="Optimizando el aprendizaje">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6">
          <Layers className="text-sky-500" size={32} />
        </div>
        <h4 className="text-white font-bold mb-4">Batch GD</h4>
        <p className="text-neutral-400 text-xs">Usa todo el dataset para cada paso. Muy estable pero lento en datos masivos.</p>
      </div>
      
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
          <Zap className="text-orange-500" size={32} />
        </div>
        <h4 className="text-white font-bold mb-4">Stochastic GD</h4>
        <p className="text-neutral-400 text-xs">Usa 1 solo ejemplo por paso. Muy rápido y ruidoso. Ayuda a escapar de mínimos locales.</p>
      </div>
      
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
          <Activity className="text-green-500" size={32} />
        </div>
        <h4 className="text-white font-bold mb-4">Mini-Batch GD</h4>
        <p className="text-neutral-400 text-xs">El estándar. Usa pequeños grupos (ej. 32 o 64). Equilibra velocidad y estabilidad.</p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide182 = () => (
  <SlideLayout title="Elastic Net" subtitle="Lo mejor de dos mundos">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">Combinando L1 y L2</h3>
        <p className="text-neutral-300 mb-6">
          Elastic Net combina las penalizaciones de Ridge y Lasso. Es útil cuando hay múltiples atributos correlacionados entre sí.
        </p>
        <div className="bg-black p-6 rounded-xl border border-sky-900/50 text-center">
          <MathFormula block tex="Loss + r \alpha L1 + \frac{1-r}{2} \alpha L2" />
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-sky-400 mb-4">¿Cuándo usarlo?</h4>
        <ul className="space-y-4 text-sm text-neutral-400">
          <li className="flex gap-2"><span>🔹</span> Cuando Lasso es demasiado agresivo eliminando variables.</li>
          <li className="flex gap-2"><span>🔹</span> Cuando el número de atributos es mayor que el de muestras.</li>
          <li className="flex gap-2"><span>🔹</span> Cuando hay grupos de variables altamente correlacionadas.</li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide183 = () => (
  <SlideLayout title="Ingeniería de Atributos Lineal" subtitle="Capturando la no linealidad">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">Atributos Polinómicos</h3>
        <p className="text-neutral-300 mb-6">
          Podemos usar un modelo lineal para datos no lineales creando nuevos atributos que sean potencias de los originales.
        </p>
        <div className="bg-black p-4 rounded-xl border border-neutral-800">
          <MathFormula block tex="y = w_0 + w_1x + w_2x^2" />
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl flex items-center justify-center">
        <svg viewBox="0 0 100 60" className="w-full h-full">
          <path d="M 10 50 Q 50 10 90 50" fill="none" stroke="#3b82f6" strokeWidth="2" />
          {Array.from({length: 15}).map((_, i) => (
            <circle key={i} cx={10 + i * 5.7} cy={50 - (Math.sin(i * 0.2) * 30) + (Math.random() - 0.5) * 5} r="1" fill="#64748b" />
          ))}
          <text x="50" y="58" fontSize="4" textAnchor="middle" fill="#64748b">Ajuste parabólico con modelo lineal</text>
        </svg>
      </div>
    </div>
  </SlideLayout>
);

export const Slide184 = () => (
  <SlideLayout title="Métricas: MAE vs MSE" subtitle="Eligiendo la lupa correcta">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h4 className="text-xl font-bold text-sky-400 mb-4">MAE (L1 Loss)</h4>
        <p className="text-neutral-300 mb-4 text-sm">Robusto ante outliers. El error se trata de forma lineal.</p>
        <div className="p-4 bg-black rounded-xl border border-neutral-800">
          <p className="text-xs text-neutral-500">Ideal si los errores grandes no son catastróficos.</p>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h4 className="text-xl font-bold text-orange-400 mb-4">MSE (L2 Loss)</h4>
        <p className="text-neutral-300 mb-4 text-sm">Sensible a outliers. Eleva el error al cuadrado, penalizando fuertemente las desviaciones grandes.</p>
        <div className="p-4 bg-black rounded-xl border border-neutral-800">
          <p className="text-xs text-neutral-500">Ideal si queremos evitar a toda costa errores grandes.</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide185 = () => (
  <SlideLayout title="Quiz: Descenso de Gradiente" subtitle="Eficiencia">
    <Quiz
      question="¿Cuál es la principal ventaja del Descenso de Gradiente Estocástico (SGD) sobre el Batch GD?"
      options={[
        { id: 1, text: 'Es mucho más preciso en cada paso.', correct: false, explanation: 'Al contrario, es muy ruidoso porque solo usa un ejemplo.' },
        { id: 2, text: 'Es mucho más rápido en datasets muy grandes.', correct: true, explanation: 'Correcto. No necesita procesar todo el dataset para actualizar los pesos.' },
        { id: 3, text: 'Siempre encuentra el mínimo global.', correct: false, explanation: 'Ninguna variante garantiza el mínimo global en funciones no convexas, aunque el ruido de SGD ayuda a escapar de mínimos locales.' },
        { id: 4, text: 'No requiere una tasa de aprendizaje.', correct: false, explanation: 'Todas las variantes de GD requieren una tasa de aprendizaje.' }
      ]}
    />
  </SlideLayout>
);

export const Slide186 = () => (
  <SlideLayout title="Clasificación: One-vs-One (OvO)" subtitle="Una alternativa a OvR">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">Duelo por parejas</h3>
        <p className="text-neutral-300 mb-6">
          En lugar de comparar una clase contra todas las demás, comparamos cada clase contra cada otra clase individualmente.
        </p>
        <div className="bg-black p-4 rounded-xl border border-orange-900/30">
          <p className="text-sm text-neutral-400">Para K clases, entrenamos:</p>
          <MathFormula block tex="\frac{K(K-1)}{2} \text{ clasificadores}" />
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-orange-400 mb-4">Comparativa</h4>
        <ul className="space-y-4 text-xs text-neutral-400">
          <li className="flex gap-2"><span>⚖️</span> <strong>OvR:</strong> Menos clasificadores, pero datasets desbalanceados.</li>
          <li className="flex gap-2"><span>⚖️</span> <strong>OvO:</strong> Más clasificadores, pero cada uno entrena con menos datos (más rápido).</li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide187 = () => (
  <SlideLayout title="Entropía vs Gini" subtitle="Eligiendo el criterio de división">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h4 className="text-xl font-bold text-green-400 mb-4">Gini Impurity</h4>
        <p className="text-neutral-300 mb-4 text-sm">Más rápido de calcular (no usa logaritmos). Favorece la clase más frecuente.</p>
        <div className="p-4 bg-black rounded-xl border border-neutral-800">
          <MathFormula block tex="1 - \sum p_i^2" />
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h4 className="text-xl font-bold text-sky-400 mb-4">Entropy (Information Gain)</h4>
        <p className="text-neutral-300 mb-4 text-sm">Basado en la teoría de la información. Un poco más lento pero a veces produce árboles más balanceados.</p>
        <div className="p-4 bg-black rounded-xl border border-neutral-800">
          <MathFormula block tex="- \sum p_i \log_2(p_i)" />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide188 = () => (
  <SlideLayout title="Importancia de Atributos" subtitle="¿Qué variables dominan el árbol?">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">Feature Importance</h3>
        <p className="text-neutral-300 mb-6">
          Los árboles de decisión nos permiten calcular cuánto contribuye cada atributo a reducir la impureza total.
        </p>
        <div className="bg-black/50 p-6 rounded-xl border border-green-900/30">
          <p className="text-sm text-neutral-400">
            Los atributos que aparecen más arriba en el árbol suelen ser los más importantes.
          </p>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <div className="space-y-4">
          <div className="w-full bg-neutral-800 h-8 rounded-full overflow-hidden relative">
            <div className="bg-green-500 h-full w-[85%]"></div>
            <span className="absolute inset-0 flex items-center px-4 text-xs font-bold text-white">Atributo A (85%)</span>
          </div>
          <div className="w-full bg-neutral-800 h-8 rounded-full overflow-hidden relative">
            <div className="bg-green-500 h-full w-[12%]"></div>
            <span className="absolute inset-0 flex items-center px-4 text-xs font-bold text-white">Atributo B (12%)</span>
          </div>
          <div className="w-full bg-neutral-800 h-8 rounded-full overflow-hidden relative">
            <div className="bg-green-500 h-full w-[3%]"></div>
            <span className="absolute inset-0 flex items-center px-4 text-xs font-bold text-white">Atributo C (3%)</span>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide189 = () => (
  <SlideLayout title="Datos Desbalanceados" subtitle="El reto de las clases minoritarias">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><TrendingUp className="text-red-500"/> El Problema</h3>
        <p className="text-neutral-300 mb-6">
          Si el 99% de tus datos son de la Clase A, el modelo puede simplemente predecir siempre "Clase A" y tener un 99% de Accuracy, ¡pero no habrá aprendido nada!
        </p>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-sky-400 mb-4">Soluciones</h4>
        <ul className="space-y-3 text-xs text-neutral-400">
          <li className="flex gap-2"><span>🛠️</span> <strong>Oversampling:</strong> Duplicar muestras de la clase minoritaria.</li>
          <li className="flex gap-2"><span>🛠️</span> <strong>Undersampling:</strong> Eliminar muestras de la clase mayoritaria.</li>
          <li className="flex gap-2"><span>🛠️</span> <strong>Class Weights:</strong> Dar más peso al error en la clase minoritaria durante el entrenamiento.</li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide190 = () => (
  <SlideLayout title="Quiz: Entropía vs Gini" subtitle="Comparativa">
    <Quiz
      question="¿Cuál es una característica del criterio de Entropía comparado con Gini?"
      options={[
        { id: 1, text: 'Es computacionalmente más rápido.', correct: false, explanation: 'Gini es más rápido porque no requiere cálculos logarítmicos.' },
        { id: 2, text: 'Tiende a producir árboles un poco más balanceados.', correct: true, explanation: 'Correcto. Debido a su naturaleza logarítmica, la entropía penaliza más la impureza moderada.' },
        { id: 3, text: 'Solo se puede usar en regresión.', correct: false, explanation: 'Ambos son criterios de clasificación.' },
        { id: 4, text: 'Garantiza evitar el sobreajuste.', correct: false, explanation: 'Ningún criterio de división evita el sobreajuste por sí solo; se requiere poda.' }
      ]}
    />
  </SlideLayout>
);
