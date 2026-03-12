import React, { useState, useEffect } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { MathFormula } from '../components/MathFormula';
import { CodeBlock } from '../components/CodeBlock';
import { Quiz } from '../components/Quiz';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ShieldCheck, SplitSquareHorizontal, AlertTriangle, BrainCircuit, Shuffle } from 'lucide-react';

export const Slide65 = () => (
  <SlideLayout title="Capítulo 2. Validación y Evaluación" subtitle="Aprendizaje Supervisado">
    <div className="flex flex-col items-center justify-center h-full text-center">
      <ShieldCheck className="w-32 h-32 text-sky-500 mb-8" />
      <h2 className="text-4xl font-bold text-white mb-6">Validación y Evaluación de Modelos</h2>
      <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
        Aprender de los datos no es suficiente; debemos garantizar que lo aprendido es <strong className="text-sky-400">generalizable</strong> y útil para el futuro. En este capítulo estudiaremos cómo validar los algoritmos y cómo medir matemáticamente sus errores tanto en problemas de regresión como de clasificación.
      </p>
    </div>
  </SlideLayout>
);

export const Slide66 = () => (
  <SlideLayout title="Introducción a la Validación" subtitle="¿Por qué necesitamos validar?">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><BrainCircuit className="text-purple-500"/> El objetivo del aprendizaje</h3>
        <p className="text-neutral-300 mb-4">
          Los algoritmos de aprendizaje supervisado crean modelos de conocimiento a partir de datos históricos para inferir o predecir una clase.
        </p>
        <p className="text-neutral-300 mb-6">
          Sin embargo, dado un mismo conjunto de datos, no todos los algoritmos producen las mismas predicciones. Necesitamos comparar resultados para hacer un ranking de bondad y escoger el mejor modelo para la fase de explotación.
        </p>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-red-500 mb-4 flex items-center gap-2"><AlertTriangle /> El peligro de la memoria</h3>
        <p className="text-neutral-300 mb-4">
          Con el aprendizaje automático ocurre como con las personas: no podemos asegurar que un niño ha aprendido si le preguntamos <strong className="text-red-400">exactamente los mismos ejemplos</strong> del libro.
        </p>
        <div className="bg-black p-4 rounded-xl border border-red-900/50 mt-auto">
          <p className="text-sm text-red-200">Aprender de memoria (como un papagayo) permite acertar todo lo visto, pero falla al aplicar los conceptos en contextos nuevos y diferentes.</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide67 = () => (
  <SlideLayout title="Entrenamiento vs. Test" subtitle="Separando el pasado del futuro">
    <div className="flex flex-col h-full">
      <p className="text-lg text-neutral-300 mb-8 text-center max-w-4xl mx-auto">
        Para evaluar correctamente un aprendizaje, el modelo debe probarse prediciendo la clase de ejemplos <strong className="text-sky-400">diferentes</strong> a los que usó para aprender.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        <div className="bg-black p-8 rounded-2xl border border-sky-900/50 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-sky-900/30 rounded-full flex items-center justify-center mb-6">
            <span className="text-3xl font-bold text-sky-500">Train</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Conjunto de Entrenamiento</h3>
          <p className="text-neutral-400">
            Es el conjunto de datos utilizado para que el algoritmo aprenda y genere su modelo de conocimiento. Representa la "experiencia pasada".
          </p>
        </div>
        
        <div className="bg-black p-8 rounded-2xl border border-orange-900/50 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-orange-900/30 rounded-full flex items-center justify-center mb-6">
            <span className="text-3xl font-bold text-orange-500">Test</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Conjunto de Prueba (Test)</h3>
          <p className="text-neutral-400">
            Es el conjunto utilizado para que el algoritmo realice predicciones usando el modelo aprendido. <strong className="text-orange-400">No debe contener ninguna instancia del entrenamiento</strong>. Representa el "futuro desconocido".
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide68 = () => (
  <SlideLayout title="Sobreajuste y Subajuste" subtitle="Los dos extremos del aprendizaje">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-red-500 mb-4">Sobreajuste (Overfitting)</h3>
        <p className="text-neutral-300 mb-4">
          Aprender las cosas de memoria. El modelo se ajusta tanto a las peculiaridades y ruido del entrenamiento que pierde capacidad de generalización.
        </p>
        <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-6">
          <li><strong>Error de Entrenamiento:</strong> Muy bajo.</li>
          <li><strong>Error de Generalización (Test):</strong> Muy alto.</li>
        </ul>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-yellow-500 mb-4">Subajuste (Underfitting)</h3>
        <p className="text-neutral-300 mb-4">
          Aprender un concepto demasiado general o esquemático. El modelo es demasiado simple para capturar las relaciones importantes en los datos.
        </p>
        <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-6">
          <li><strong>Error de Entrenamiento:</strong> Alto.</li>
          <li><strong>Error de Generalización (Test):</strong> Alto y similar al de entrenamiento.</li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide69 = () => {
  const data = Array.from({length: 50}, (_, i) => {
    const complexity = i + 1;
    const trainError = Math.max(5, 100 - complexity * 2.5 + Math.random() * 5);
    const testError = complexity < 25 
      ? 110 - complexity * 2.5 + Math.random() * 5 
      : 47.5 + (complexity - 25) * 1.5 + Math.random() * 5;
    return { complexity, trainError, testError };
  });

  return (
    <SlideLayout title="Interactivo: Curva de Complejidad" subtitle="Buscando el punto óptimo">
      <div className="flex flex-col h-full bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
        <div className="flex justify-between items-center mb-4 px-8">
          <span className="text-yellow-500 font-bold">← Subajuste (Underfitting)</span>
          <span className="text-green-500 font-bold">Punto Óptimo ↓</span>
          <span className="text-red-500 font-bold">Sobreajuste (Overfitting) →</span>
        </div>
        <div className="flex-1 w-full min-h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
              <XAxis dataKey="complexity" stroke="#737373" label={{ value: 'Complejidad del modelo', position: 'bottom', fill: '#737373' }} />
              <YAxis domain={[0, 120]} stroke="#737373" label={{ value: 'Error', angle: -90, position: 'insideLeft', fill: '#737373' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', borderColor: '#262626' }} />
              <Legend />
              <Line type="monotone" dataKey="trainError" name="Error de Entrenamiento" stroke="#3b82f6" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="testError" name="Error de Generalización (Test)" stroke="#ef4444" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-sm text-neutral-400 mt-4">
          Conforme aumentamos la complejidad, el error de entrenamiento se reduce hasta casi cero. Sin embargo, el error de test llega a un mínimo (punto óptimo) y luego comienza a subir debido al sobreajuste.
        </p>
      </div>
    </SlideLayout>
  );
};

export const Slide70 = () => (
  <SlideLayout title="2.1. Validación hold-out" subtitle="El método más directo de validación">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-sky-500 mb-4 flex items-center gap-2"><SplitSquareHorizontal size={24}/> Concepto</h3>
        <p className="text-neutral-300 mb-4">
          La validación <strong>hold-out</strong> (mantener fuera) consiste en dividir el conjunto de datos del problema en dos partes mutuamente excluyentes: entrenamiento y test.
        </p>
        <p className="text-neutral-300 mb-6">
          Para definir esta división, se utiliza habitualmente un porcentaje. Las proporciones más habituales suelen ser <strong>66% / 34%</strong> o bien <strong>70% / 30%</strong> (entrenamiento / test).
        </p>
        <div className="bg-black p-4 rounded-xl border border-sky-900/50 mt-auto">
          <p className="text-sm text-sky-200">A este procedimiento de partición porcentual se le denomina comúnmente <strong>validación hold-out mediante split</strong>.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <div className="flex mb-2 text-sm font-bold">
            <div className="w-[70%] text-sky-400 text-center">70% Entrenamiento</div>
            <div className="w-[30%] text-orange-400 text-center">30% Test</div>
          </div>
          <div className="flex h-16 rounded-xl overflow-hidden shadow-lg border border-neutral-700">
            <div className="w-[70%] bg-sky-600 flex items-center justify-center text-white font-bold">Aprender</div>
            <div className="w-[30%] bg-orange-600 flex items-center justify-center text-white font-bold">Evaluar</div>
          </div>
          <p className="text-center text-neutral-500 text-sm mt-4">Representación visual de un split 70/30.</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide71 = () => (
  <SlideLayout title="Hold-out: ¿Aleatorio o Secuencial?" subtitle="El orden de los factores sí altera el producto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4">Hold-out No Aleatorio</h3>
        <p className="text-neutral-300 mb-4">
          Se escoge el primer X% de las muestras para entrenamiento y el último Y% para test, <strong>preservando el orden original</strong> de las muestras.
        </p>
        <div className="bg-black p-4 rounded-xl border border-neutral-700 mb-4">
          <p className="text-sm text-neutral-400">Útil en conjuntos con dependencias entre las muestras, como <strong>series temporales</strong> (ej. predecir la bolsa de mañana usando los datos de ayer).</p>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Shuffle size={24} className="text-green-500"/> Hold-out Aleatorio</h3>
        <p className="text-neutral-300 mb-4">
          En primer lugar, se <strong>reordenan aleatoriamente</strong> las muestras y, posteriormente, se realiza el corte porcentual.
        </p>
        <div className="bg-black p-4 rounded-xl border border-green-900/50 mb-4">
          <p className="text-sm text-green-200">Es el procedimiento más recomendable si no hay dependencias de orden que respetar, ya que evita sesgos si los datos originales venían ordenados por clase.</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide72 = () => {
  const [split, setSplit] = useState(70);
  const totalInstances = 150;
  const trainInstances = Math.round((split / 100) * totalInstances);
  const testInstances = totalInstances - trainInstances;

  return (
    <SlideLayout title="Interactivo: Simulador Hold-out" subtitle="Ajustando el tamaño del split">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 max-w-3xl w-full text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Conjunto de Datos: {totalInstances} instancias</h3>
          
          <div className="mb-12">
            <label className="block text-neutral-400 mb-4">
              Porcentaje de Entrenamiento: <strong className="text-sky-400 text-2xl">{split}%</strong>
            </label>
            <input 
              type="range" 
              min="10" max="90" step="5"
              value={split} 
              onChange={(e) => setSplit(Number(e.target.value))}
              className="w-full max-w-md accent-sky-500"
            />
          </div>

          <div className="flex h-24 rounded-xl overflow-hidden shadow-lg border border-neutral-700 mb-6">
            <motion.div 
              className="bg-sky-600 flex flex-col items-center justify-center text-white"
              style={{ width: `${split}%` }}
              layout
            >
              <span className="font-bold text-xl">{trainInstances}</span>
              <span className="text-xs opacity-80">Entrenamiento</span>
            </motion.div>
            <motion.div 
              className="bg-orange-600 flex flex-col items-center justify-center text-white"
              style={{ width: `${100 - split}%` }}
              layout
            >
              <span className="font-bold text-xl">{testInstances}</span>
              <span className="text-xs opacity-80">Test</span>
            </motion.div>
          </div>
          
          <p className="text-sm text-neutral-400">
            Un split muy pequeño (ej. 10% train) hará que el modelo no aprenda bien. Un split muy grande (ej. 90% train) dejará muy pocos datos para evaluar, haciendo que la métrica de test sea poco fiable.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide73 = () => (
  <SlideLayout title="Ventajas y Desventajas del Hold-out" subtitle="Evaluando la técnica">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-green-500 mb-6">Ventajas</h3>
        <ul className="space-y-4 text-neutral-300">
          <li className="flex items-start gap-3">
            <div className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></div>
            <p><strong>Sencillez:</strong> Es muy fácil de entender e implementar.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></div>
            <p><strong>Económica:</strong> En términos de tiempo computacional, solo requiere entrenar el modelo una vez y evaluarlo una vez.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></div>
            <p><strong>Estándar:</strong> Es ampliamente utilizada, especialmente en Deep Learning donde los conjuntos de datos son masivos y entrenar múltiples veces es inviable.</p>
          </li>
        </ul>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-red-500 mb-6">Desventajas</h3>
        <ul className="space-y-4 text-neutral-300">
          <li className="flex items-start gap-3">
            <div className="mt-1 w-2 h-2 bg-red-500 rounded-full shrink-0"></div>
            <p><strong>Escasa representatividad:</strong> Los algoritmos se evalúan usando un único conjunto de test.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 w-2 h-2 bg-red-500 rounded-full shrink-0"></div>
            <p><strong>Sesgo de partición:</strong> Los resultados de bondad pueden depender enormemente de la elección aleatoria de qué muestras cayeron en test y cuáles en train.</p>
          </li>
        </ul>
        <div className="mt-auto p-4 bg-red-900/20 border border-red-900/50 rounded-xl">
          <p className="text-sm text-red-200">Extraer un único subconjunto de test conduce habitualmente a resultados sesgados a las particularidades de ese test elegido.</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide74 = () => (
  <SlideLayout title="Quiz: Validación Hold-out" subtitle="Evaluación de la Sección 2.1">
    <Quiz 
      question="Tienes un conjunto de datos de ventas diarias de una tienda durante un año. Quieres predecir las ventas del próximo mes. ¿Qué tipo de validación hold-out deberías usar?"
      options={[
        { id: 1, text: 'Hold-out aleatorio (70/30), para evitar sesgos en los datos.', correct: false, explanation: 'Al ser datos diarios, existe una fuerte dependencia temporal. Si aleatorizas, estarías usando datos del futuro para predecir el pasado en el entrenamiento.' },
        { id: 2, text: 'Hold-out no aleatorio (secuencial), usando los primeros meses para entrenar y los últimos para test.', correct: true, explanation: '¡Correcto! En series temporales, debes preservar el orden temporal. Entrenas con el pasado para predecir el futuro.' },
        { id: 3, text: 'No usar hold-out, entrenar con el 100% de los datos y evaluar con el mismo 100%.', correct: false, explanation: 'Esto causaría sobreajuste y no tendrías forma de saber si el modelo generaliza bien para el próximo mes.' },
        { id: 4, text: 'Hold-out aleatorio (50/50), para tener la misma cantidad de datos en ambos lados.', correct: false, explanation: 'La aleatoriedad rompe la estructura temporal de los datos.' }
      ]}
    />
  </SlideLayout>
);
