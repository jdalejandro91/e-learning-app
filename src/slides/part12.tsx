import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { MathFormula } from '../components/MathFormula';
import { CodeBlock } from '../components/CodeBlock';
import { Quiz } from '../components/Quiz';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, ShieldAlert, GitMerge, Search, Target } from 'lucide-react';

export const Slide85 = () => (
  <SlideLayout title="2.3. Ajuste de parámetros" subtitle="Tuning de hiperparámetros">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-sky-500 mb-4 flex items-center gap-2"><Settings size={24}/> ¿Qué son los parámetros?</h3>
        <p className="text-neutral-300 mb-4">
          Los algoritmos de aprendizaje supervisado poseen <strong>parámetros de configuración</strong> (también llamados hiperparámetros) que regulan su funcionamiento.
        </p>
        <p className="text-neutral-300 mb-6">
          Ejemplos:
        </p>
        <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-6">
          <li><strong>K-NN:</strong> Número de vecinos (K).</li>
          <li><strong>Árboles de Decisión:</strong> Profundidad máxima del árbol.</li>
          <li><strong>Redes Neuronales:</strong> Número de capas ocultas, tasa de aprendizaje.</li>
        </ul>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-white mb-4">El Objetivo del Ajuste</h3>
        <p className="text-neutral-300 mb-4">
          El rendimiento de un modelo depende críticamente de la elección de estos parámetros. Un mal ajuste puede llevar al <strong>sobreajuste</strong> (memorizar el ruido) o al <strong>subajuste</strong> (no aprender los patrones).
        </p>
        <div className="bg-black p-4 rounded-xl border border-neutral-700">
          <p className="text-sm text-neutral-400">El proceso de encontrar la combinación óptima de parámetros para un problema específico se conoce como <em>Hyperparameter Tuning</em>.</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide86 = () => (
  <SlideLayout title="El peligro de ajustar con Test" subtitle="La trampa de la sobreestimación">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 max-w-4xl w-full text-center">
        <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-white mb-6">¿Por qué NO usar el conjunto de Test para ajustar parámetros?</h3>
        <p className="text-lg text-neutral-300 mb-8">
          Si pruebas diferentes valores de un parámetro (ej. K=1, K=3, K=5) y eliges el que da mejor resultado en el conjunto de Test, estás cometiendo un error metodológico grave.
        </p>
        
        <div className="bg-black p-6 rounded-xl border border-red-900/50 text-left">
          <h4 className="text-red-400 font-bold mb-2">Fuga de Información (Data Leakage)</h4>
          <p className="text-sm text-neutral-400 mb-4">
            Al elegir el parámetro que maximiza el rendimiento en Test, estás "ajustando" el modelo a las peculiaridades de ese conjunto específico. El conjunto de Test deja de ser un evaluador imparcial.
          </p>
          <p className="text-sm text-neutral-400">
            El resultado final será una <strong>sobreestimación optimista</strong> del rendimiento real del modelo en producción.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide87 = () => (
  <SlideLayout title="El Conjunto de Validación" subtitle="La tercera partición">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-sky-500 mb-4 flex items-center gap-2"><GitMerge size={24}/> Train, Validation, Test</h3>
        <p className="text-neutral-300 mb-4">
          Para evitar la fuga de información, dividimos los datos en <strong>tres</strong> conjuntos disjuntos:
        </p>
        <ol className="list-decimal pl-5 space-y-4 text-neutral-400 mb-6">
          <li>
            <strong className="text-sky-400">Entrenamiento (Train):</strong> Para ajustar los pesos internos del modelo (ej. coeficientes de regresión).
          </li>
          <li>
            <strong className="text-purple-400">Validación (Validation):</strong> Para evaluar diferentes configuraciones de hiperparámetros y elegir la mejor.
          </li>
          <li>
            <strong className="text-orange-400">Test (Test):</strong> Reservado ESTRICTAMENTE para la evaluación final del modelo ya configurado.
          </li>
        </ol>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-white mb-6 text-center">Proporciones Típicas</h4>
        <div className="flex h-12 rounded-xl overflow-hidden mb-4">
          <div className="w-[60%] bg-sky-600 flex items-center justify-center text-white font-bold text-sm">Train (60%)</div>
          <div className="w-[20%] bg-purple-600 flex items-center justify-center text-white font-bold text-sm">Val (20%)</div>
          <div className="w-[20%] bg-orange-600 flex items-center justify-center text-white font-bold text-sm">Test (20%)</div>
        </div>
        <p className="text-sm text-neutral-400 text-center">
          Con datasets masivos (millones de filas), las proporciones pueden ser 98% / 1% / 1%.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide88 = () => {
  const [step, setStep] = useState(0);

  const steps = [
    { title: "1. Partición Inicial", desc: "Separamos un 20% de los datos como Test. Este conjunto se guarda bajo llave y NO se toca hasta el final." },
    { title: "2. Partición Secundaria", desc: "El 80% restante se divide en Entrenamiento (ej. 60%) y Validación (ej. 20%)." },
    { title: "3. Ajuste de Parámetros", desc: "Entrenamos modelos con diferentes parámetros (K=1, K=3, K=5) usando Train. Los evaluamos usando Validación." },
    { title: "4. Selección", desc: "Elegimos el parámetro que dio mejor resultado en Validación (ej. K=3)." },
    { title: "5. Re-entrenamiento", desc: "Opcional pero recomendado: Re-entrenamos el modelo final con K=3 usando la unión de Train + Validación (80% de los datos)." },
    { title: "6. Evaluación Final", desc: "Evaluamos el modelo final usando el conjunto de Test (20%) para obtener la métrica real de rendimiento." }
  ];

  return (
    <SlideLayout title="Interactivo: Flujo Train-Val-Test" subtitle="El ciclo de vida del ajuste de modelos">
      <div className="flex flex-col h-full">
        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex-1 flex flex-col">
          
          <div className="flex justify-between items-center mb-8">
            <button onClick={() => setStep(s => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 bg-neutral-800 text-white rounded-lg disabled:opacity-50">Anterior</button>
            <h3 className="text-xl font-bold text-white">{steps[step].title}</h3>
            <button onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))} disabled={step === steps.length - 1} className="px-4 py-2 bg-sky-600 text-white rounded-lg disabled:opacity-50">Siguiente</button>
          </div>

          <div className="bg-black p-6 rounded-xl border border-neutral-700 mb-8 min-h-[100px] flex items-center justify-center text-center">
            <p className="text-neutral-300">{steps[step].desc}</p>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-4 relative">
            {/* Dataset Visualization */}
            <div className="flex h-16 w-full rounded-xl overflow-hidden border border-neutral-700">
              <motion.div 
                className="bg-sky-600 flex items-center justify-center text-white font-bold"
                initial={false}
                animate={{ width: step >= 1 ? '60%' : '80%', opacity: step >= 4 ? 0.5 : 1 }}
              >
                {step >= 1 ? 'Train' : 'Train + Val'}
              </motion.div>
              <motion.div 
                className="bg-purple-600 flex items-center justify-center text-white font-bold"
                initial={false}
                animate={{ width: step >= 1 ? '20%' : '0%', opacity: step >= 4 ? 0.5 : 1 }}
              >
                {step >= 1 ? 'Val' : ''}
              </motion.div>
              <motion.div 
                className="bg-orange-600 flex items-center justify-center text-white font-bold"
                initial={false}
                animate={{ width: '20%', opacity: step === 5 ? 1 : 0.5 }}
              >
                Test
              </motion.div>
            </div>

            {/* Re-training visualization */}
            <AnimatePresence>
              {step >= 4 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex h-16 w-[80%] rounded-xl overflow-hidden border border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                >
                  <div className="w-full bg-sky-500 flex items-center justify-center text-white font-bold">
                    Train + Val (Re-entrenamiento Final)
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide89 = () => (
  <SlideLayout title="Validación Anidada (Nested CV)" subtitle="Combinando K-Fold y Ajuste de Parámetros">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4">El problema del Train-Val-Test</h3>
        <p className="text-neutral-300 mb-4">
          Al igual que el Hold-out simple, la división estática en Train/Val/Test sufre del <strong>sesgo de partición</strong>. Si el conjunto de Validación es pequeño, la elección del mejor parámetro dependerá de la "suerte" de esa partición.
        </p>
        <p className="text-neutral-300 mb-6">
          La solución es aplicar la lógica de la Validación Cruzada (K-Fold) <strong>dos veces</strong>: una para ajustar parámetros y otra para evaluar el modelo.
        </p>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-sky-400 mb-4">La Arquitectura Anidada</h4>
        <ul className="space-y-4 text-neutral-300">
          <li className="bg-black p-4 rounded-xl border border-orange-900/50">
            <strong className="text-orange-400">Bucle Externo (Outer Loop):</strong> Divide los datos en bolsas de Train/Test para <em>evaluar el rendimiento general</em> de la metodología.
          </li>
          <li className="bg-black p-4 rounded-xl border border-purple-900/50">
            <strong className="text-purple-400">Bucle Interno (Inner Loop):</strong> Toma el Train del bucle externo y lo vuelve a dividir (K-Fold) para <em>encontrar el mejor parámetro</em>.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide90 = () => (
  <SlideLayout title="Bucle Interno vs Externo" subtitle="Desgranando la Validación Anidada">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex-1 flex flex-col items-center justify-center">
        
        <div className="w-full max-w-4xl border-2 border-orange-500 rounded-2xl p-6 relative mb-8">
          <div className="absolute -top-4 left-6 bg-neutral-900 px-2 text-orange-400 font-bold">Bucle Externo (Ej. 5-Fold)</div>
          <p className="text-sm text-neutral-400 mb-4">Objetivo: Evaluar qué tan bien generaliza el modelo. En cada iteración, separa una bolsa para Test.</p>
          
          <div className="w-full border-2 border-purple-500 rounded-xl p-6 relative bg-black">
            <div className="absolute -top-4 left-6 bg-black px-2 text-purple-400 font-bold">Bucle Interno (Ej. 3-Fold)</div>
            <p className="text-sm text-neutral-400 mb-4">Objetivo: Encontrar el mejor hiperparámetro. Toma los datos de Train del bucle externo y hace su propia validación cruzada.</p>
            
            <div className="flex gap-4">
              <div className="flex-1 bg-sky-900/30 border border-sky-500 rounded p-2 text-center text-xs text-sky-300">Prueba K=1</div>
              <div className="flex-1 bg-sky-900/30 border border-sky-500 rounded p-2 text-center text-xs text-sky-300">Prueba K=3</div>
              <div className="flex-1 bg-sky-900/30 border border-sky-500 rounded p-2 text-center text-xs text-sky-300">Prueba K=5</div>
            </div>
            <p className="text-xs text-green-400 mt-4 text-center">Devuelve el mejor parámetro (ej. K=3) al bucle externo.</p>
          </div>

          <p className="text-sm text-orange-300 mt-4 text-center">El bucle externo entrena un modelo con K=3 usando todo su Train, y lo evalúa en su Test.</p>
        </div>

        <div className="bg-black p-4 rounded-xl border border-neutral-700 max-w-3xl text-center">
          <p className="text-sm text-neutral-300"><strong>Nota crucial:</strong> La Validación Anidada NO devuelve un único modelo final ni un único parámetro óptimo. Devuelve una <strong>estimación insesgada del rendimiento</strong> que puedes esperar al aplicar tu metodología de ajuste de parámetros a datos nuevos.</p>
        </div>

      </div>
    </div>
  </SlideLayout>
);

export const Slide91 = () => {
  const [outerFold, setOuterFold] = useState(1);
  const [innerFold, setInnerFold] = useState(0); // 0 means not started, 1-3 are inner folds
  const [bestParam, setBestParam] = useState<string | null>(null);

  const runInnerLoop = () => {
    setInnerFold(1);
    setTimeout(() => setInnerFold(2), 800);
    setTimeout(() => setInnerFold(3), 1600);
    setTimeout(() => {
      setInnerFold(0);
      setBestParam(`K=${Math.random() > 0.5 ? 3 : 5}`);
    }, 2400);
  };

  return (
    <SlideLayout title="Interactivo: Explorador Anidado" subtitle="Simulación de Nested CV (5x3)">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 max-w-4xl w-full text-center">
          
          <div className="flex justify-between items-center mb-8">
            <button onClick={() => {setOuterFold(f => Math.max(1, f - 1)); setBestParam(null);}} disabled={outerFold === 1 || innerFold > 0} className="px-4 py-2 bg-neutral-800 text-white rounded-lg disabled:opacity-50">Anterior (Ext)</button>
            <h3 className="text-xl font-bold text-orange-400">Bucle Externo: Iteración {outerFold} de 5</h3>
            <button onClick={() => {setOuterFold(f => Math.min(5, f + 1)); setBestParam(null);}} disabled={outerFold === 5 || innerFold > 0} className="px-4 py-2 bg-neutral-800 text-white rounded-lg disabled:opacity-50">Siguiente (Ext)</button>
          </div>

          <div className="flex gap-2 h-12 mb-8">
            {Array.from({length: 5}).map((_, idx) => (
              <div key={idx} className={`flex-1 rounded border-2 flex items-center justify-center ${idx + 1 === outerFold ? 'bg-orange-600 border-orange-400' : 'bg-sky-600 border-sky-400'}`}>
                <span className="text-white text-xs">{idx + 1 === outerFold ? 'Test Ext.' : 'Train Ext.'}</span>
              </div>
            ))}
          </div>

          <div className="bg-black p-6 rounded-xl border border-purple-500/50 min-h-[200px] flex flex-col items-center justify-center relative">
            <h4 className="text-purple-400 font-bold mb-4 absolute top-4">Bucle Interno (Búsqueda de Parámetros)</h4>
            
            {innerFold === 0 && !bestParam && (
              <button onClick={runInnerLoop} className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition-colors">
                Ejecutar Bucle Interno (3-Fold)
              </button>
            )}

            {innerFold > 0 && (
              <div className="w-full max-w-md">
                <p className="text-white mb-4">Evaluando parámetros en sub-bolsa {innerFold} de 3...</p>
                <div className="flex gap-2 h-8">
                  {Array.from({length: 3}).map((_, idx) => (
                    <div key={idx} className={`flex-1 rounded ${idx + 1 === innerFold ? 'bg-purple-500' : 'bg-neutral-700'}`}></div>
                  ))}
                </div>
              </div>
            )}

            {bestParam && innerFold === 0 && (
              <div className="text-center">
                <p className="text-green-400 font-bold text-xl mb-2">Mejor parámetro encontrado: {bestParam}</p>
                <p className="text-sm text-neutral-400">El bucle externo ahora evaluará el modelo con {bestParam} usando la bolsa Test {outerFold}.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide92 = () => (
  <SlideLayout title="Búsqueda de Hiperparámetros" subtitle="Grid Search vs Random Search">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-sky-400 mb-4 flex items-center gap-2"><Search size={24}/> Grid Search (Búsqueda en Rejilla)</h3>
        <p className="text-neutral-300 mb-4">
          Define una lista de valores para cada parámetro. Prueba <strong>todas las combinaciones posibles</strong> de forma exhaustiva.
        </p>
        <div className="bg-black p-4 rounded-xl border border-neutral-700 mb-4">
          <p className="text-sm text-neutral-400 font-mono">Param A: [1, 10, 100]<br/>Param B: [0.1, 0.2]<br/>Total combinaciones: 3 x 2 = 6</p>
        </div>
        <ul className="text-sm text-neutral-400 space-y-1">
          <li>✅ Garantiza encontrar el óptimo (dentro de la rejilla).</li>
          <li>❌ Computacionalmente muy costoso si hay muchos parámetros (explosión combinatoria).</li>
        </ul>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2"><Target size={24}/> Random Search (Búsqueda Aleatoria)</h3>
        <p className="text-neutral-300 mb-4">
          Define distribuciones estadísticas para los parámetros. Prueba un <strong>número fijo de combinaciones aleatorias</strong>.
        </p>
        <div className="bg-black p-4 rounded-xl border border-neutral-700 mb-4">
          <p className="text-sm text-neutral-400 font-mono">Param A: Uniform(1, 100)<br/>Param B: Uniform(0.1, 0.9)<br/>Iteraciones: 20 (aleatorias)</p>
        </div>
        <ul className="text-sm text-neutral-400 space-y-1">
          <li>✅ Mucho más rápido y eficiente en espacios de alta dimensionalidad.</li>
          <li>✅ Suele encontrar valores muy cercanos al óptimo con menos iteraciones.</li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide93 = () => (
  <SlideLayout title="Resumen de Estrategias" subtitle="¿Cuándo usar qué?">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 max-w-5xl w-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-neutral-700">
              <th className="p-4 text-white font-bold">Estrategia</th>
              <th className="p-4 text-white font-bold">Cuándo usarla</th>
              <th className="p-4 text-white font-bold">Pros / Contras</th>
            </tr>
          </thead>
          <tbody className="text-neutral-300">
            <tr className="border-b border-neutral-800">
              <td className="p-4 font-bold text-sky-400">Hold-out simple (Train/Test)</td>
              <td className="p-4">Datasets masivos (millones de filas) o prototipado muy rápido.</td>
              <td className="p-4 text-sm">✅ Rápido<br/>❌ Alto sesgo de partición</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-4 font-bold text-green-400">K-Fold CV</td>
              <td className="p-4">Evaluación estándar de modelos sin ajuste de hiperparámetros.</td>
              <td className="p-4 text-sm">✅ Robusto<br/>❌ Más lento (K entrenamientos)</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-4 font-bold text-purple-400">Train/Val/Test</td>
              <td className="p-4">Ajuste de hiperparámetros en datasets grandes o Deep Learning.</td>
              <td className="p-4 text-sm">✅ Evita fuga de info<br/>❌ Reduce datos de train</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-orange-400">Nested CV</td>
              <td className="p-4">Ajuste de hiperparámetros en datasets pequeños/medianos. El estándar de oro.</td>
              <td className="p-4 text-sm">✅ Estimación insesgada<br/>❌ Computacionalmente extremo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </SlideLayout>
);

export const Slide93a = () => (
  <SlideLayout title="Código: Curvas de Validación y Aprendizaje" subtitle="Diagnóstico visual de modelos">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Scikit-Learn</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`import numpy as np # Importa numpy para operaciones numéricas y creación de arrays
from sklearn.preprocessing import PolynomialFeatures # Importa transformador para crear características polinómicas
from sklearn.linear_model import LinearRegression # Importa el modelo de Regresión Lineal
from sklearn.pipeline import make_pipeline # Importa función para encadenar transformadores y modelos
from sklearn.model_selection import validation_curve, learning_curve # Importa funciones para generar curvas

# Pipeline: Transforma características a polinómicas y luego aplica Regresión Lineal
# Esto permite que un modelo lineal ajuste curvas complejas
def PolynomialRegression(degree=2, **kwargs):
    return make_pipeline(PolynomialFeatures(degree), LinearRegression(**kwargs))

# 1. Curva de Validación (Explorando hiperparámetros)
# Evaluamos el grado del polinomio desde 0 (constante) hasta 20 (muy complejo)
degree = np.arange(0, 21) # Crea un array [0, 1, 2, ..., 20]
train_score, val_score = validation_curve(
    PolynomialRegression(), # El modelo (pipeline) a evaluar
    X, y, # Datos de entrenamiento completos
    param_name='polynomialfeatures__degree', # El nombre exacto del hiperparámetro a variar en el pipeline
    param_range=degree, # Los valores que tomará el hiperparámetro
    cv=5 # Usa 5-Fold Cross Validation para cada valor del hiperparámetro
)

# 2. Curva de Aprendizaje (Explorando cantidad de datos)
# Evaluamos cómo mejora el modelo al darle más datos de entrenamiento (del 30% al 100%)
N, train_lc, val_lc = learning_curve(
    PolynomialRegression(degree=2), # Usamos un modelo fijo (polinomio de grado 2)
    X, y, # Datos completos
    cv=7, # Usa 7-Fold Cross Validation
    train_sizes=np.linspace(0.3, 1, 25) # Prueba con 25 tamaños de muestra diferentes, desde el 30% hasta el 100%
)`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">make_pipeline:</strong> Construye una secuencia de transformadores y un estimador final. Aquí encadena la creación de características polinómicas con la regresión lineal.
          </li>
          <li>
            <strong className="text-white">validation_curve:</strong> Calcula las puntuaciones de entrenamiento y validación para diferentes valores de un hiperparámetro (en este caso, el grado del polinomio). Útil para visualizar el punto óptimo entre underfitting y overfitting.
          </li>
          <li>
            <strong className="text-white">learning_curve:</strong> Calcula las puntuaciones de entrenamiento y validación variando el tamaño del conjunto de entrenamiento. Sirve para diagnosticar si el modelo se beneficiaría de más datos (si las curvas aún no convergen) o si ya alcanzó su límite.
          </li>
          <li>
            <strong className="text-white">Parámetro <code>cv</code>:</strong> En ambas funciones, determina la estrategia de validación cruzada (ej. 5 o 7 folds) para asegurar que las curvas sean robustas y no dependan de una partición afortunada.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide94 = () => (
  <SlideLayout title="Quiz: Ajuste de Parámetros" subtitle="Evaluación de la Sección 2.3">
    <Quiz 
      question="¿Por qué es un error metodológico grave utilizar el conjunto de Test para elegir el mejor hiperparámetro de un modelo?"
      options={[
        { id: 1, text: 'Porque el conjunto de Test suele ser demasiado pequeño para tomar decisiones.', correct: false, explanation: 'El tamaño no es la razón principal. El problema es la fuga de información.' },
        { id: 2, text: 'Porque provoca una fuga de información (data leakage), haciendo que el modelo se ajuste a las peculiaridades del Test y sobreestimando su rendimiento real.', correct: true, explanation: '¡Correcto! Si usas el Test para tomar decisiones sobre el modelo, el Test deja de ser un evaluador independiente e imparcial.' },
        { id: 3, text: 'Porque los hiperparámetros solo se pueden ajustar usando Validación Cruzada Anidada.', correct: false, explanation: 'La validación anidada es una técnica, pero también puedes usar una partición estática Train/Val/Test.' },
        { id: 4, text: 'No es un error. Es la forma estándar de encontrar el mejor modelo.', correct: false, explanation: 'Falso. Es una de las peores prácticas en Machine Learning.' }
      ]}
    />
  </SlideLayout>
);
