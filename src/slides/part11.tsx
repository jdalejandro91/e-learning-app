import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { MathFormula } from '../components/MathFormula';
import { CodeBlock } from '../components/CodeBlock';
import { Quiz } from '../components/Quiz';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Search, Layers, Play, RotateCcw, PieChart, AlertTriangle } from 'lucide-react';

export const Slide75 = () => (
  <SlideLayout title="Hold-out en Python" subtitle="Implementación con scikit-learn">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex-1">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Code2 className="text-sky-500"/> Función train_test_split</h3>
        <p className="text-neutral-300 mb-6">
          La librería <code>scikit-learn</code> proporciona una función muy sencilla para realizar la partición hold-out aleatoria.
        </p>
        <CodeBlock language="python" code={`from sklearn import datasets # Importa datasets de ejemplo de Scikit-Learn
from sklearn.dummy import DummyClassifier # Importa un clasificador base (tonto) para pruebas
from sklearn.model_selection import train_test_split # Importa la función para dividir datos (Hold-out)

# 1. Carga de datos (ejemplo Iris)
iris = datasets.load_iris() # Carga el famoso dataset de flores Iris

# 2. Validación: hold-out split 70-30%
# train_test_split divide aleatoriamente los datos en dos conjuntos
X_train, X_test, y_train, y_test = train_test_split(
    iris.data,          # Matriz de atributos (X) - las características de las flores
    iris.target,        # Vector de clase (y) - las etiquetas (especies)
    test_size=0.3,      # 30% de los datos se reservan para el conjunto de test
    random_state=0      # Semilla aleatoria para reproducibilidad (siempre dará la misma partición)
)

# 3. Entrenamiento y Evaluación
clf = DummyClassifier() # Instancia el clasificador base
clf.fit(X_train, y_train) # Entrena el modelo usando SOLO los datos de entrenamiento
evaluacion = clf.score(X_test, y_test) # Evalúa el modelo usando SOLO los datos de test
print("Exactitud:", evaluacion) # Imprime la métrica de rendimiento (accuracy)`} />
      </div>
    </div>
  </SlideLayout>
);

export const Slide76 = () => (
  <SlideLayout title="Análisis del Código Hold-out" subtitle="Desgranando train_test_split">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-sky-400 mb-4">Parámetros Clave</h3>
        <ul className="space-y-4 text-neutral-300">
          <li>
            <strong className="text-white">test_size:</strong> Indica la proporción (0.0 a 1.0) o el número absoluto de instancias que irán al conjunto de test. Si es 0.3, el 30% va a test y el 70% a train.
          </li>
          <li>
            <strong className="text-white">random_state:</strong> Fija la semilla del generador de números aleatorios. Garantiza que si ejecutas el código 10 veces, obtendrás exactamente la misma partición las 10 veces (reproducibilidad).
          </li>
          <li>
            <strong className="text-white">shuffle:</strong> Por defecto es <code>True</code>. Si lo pones a <code>False</code>, hace un hold-out no aleatorio (secuencial).
          </li>
        </ul>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-green-400 mb-4">Salida de la Función</h3>
        <p className="text-neutral-300 mb-4">
          La función devuelve una tupla con 4 elementos (en este orden estricto):
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-neutral-400 font-mono text-sm">
          <li><span className="text-sky-300">X_train</span>: Atributos de entrenamiento</li>
          <li><span className="text-orange-300">X_test</span>: Atributos de test</li>
          <li><span className="text-sky-300">y_train</span>: Clases de entrenamiento</li>
          <li><span className="text-orange-300">y_test</span>: Clases de test</li>
        </ol>
        <div className="mt-auto p-4 bg-black border border-neutral-700 rounded-xl">
          <p className="text-sm text-neutral-500">Es vital mantener la correspondencia entre X e y. La función asegura que la fila 5 de X_train corresponda exactamente a la clase en la posición 5 de y_train.</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide77 = () => (
  <SlideLayout title="El Problema de la Representatividad" subtitle="¿Por qué el Hold-out no siempre es suficiente?">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 max-w-6xl w-full text-center">
        <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-white mb-6">El Sesgo de la Partición</h3>
        <p className="text-lg text-neutral-300 mb-8">
          Si usamos un único conjunto de test, el resultado de la evaluación depende enormemente de <strong className="text-yellow-400">qué ejemplos concretos</strong> cayeron en ese test por azar.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-black p-6 rounded-xl border border-neutral-700">
            <h4 className="text-red-400 font-bold mb-2">Escenario 1 (Mala suerte)</h4>
            <p className="text-sm text-neutral-400">El test contiene los ejemplos más difíciles o ruidosos. El modelo parece muy malo (Exactitud: 60%).</p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-neutral-700">
            <h4 className="text-green-400 font-bold mb-2">Escenario 2 (Buena suerte)</h4>
            <p className="text-sm text-neutral-400">El test contiene solo ejemplos fáciles y claros. El modelo parece perfecto (Exactitud: 98%).</p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-neutral-700">
            <h4 className="text-sky-400 font-bold mb-2">La Realidad</h4>
            <p className="text-sm text-neutral-400">Ninguno de los dos refleja la verdadera capacidad del modelo en el mundo real. Necesitamos algo más robusto.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide78 = () => (
  <SlideLayout title="2.2. Validación Cruzada (Cross-Validation)" subtitle="La solución al sesgo de partición">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-sky-500 mb-4 flex items-center gap-2"><Layers size={24}/> Concepto de K-Fold</h3>
        <p className="text-neutral-300 mb-4">
          La validación cruzada consiste en partir el conjunto de datos original en <strong className="text-white">K subconjuntos</strong> (bolsas o <em>folds</em>) de igual tamaño.
        </p>
        <p className="text-neutral-300 mb-6">
          Se realizan <strong className="text-white">K validaciones</strong> de tipo hold-out. En cada iteración, se usa una bolsa distinta como Test, y el resto (K-1 bolsas) como Entrenamiento.
        </p>
        <div className="bg-black p-4 rounded-xl border border-sky-900/50 mt-auto">
          <p className="text-sm text-sky-200">Al final, obtenemos K métricas de evaluación. La bondad final del modelo se reporta como la <strong>media y desviación típica</strong> de esas K métricas.</p>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-white mb-6 text-center">Ventajas de la Validación Cruzada</h4>
        <ul className="space-y-4 text-neutral-300">
          <li className="flex items-start gap-3">
            <div className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></div>
            <p><strong>Todos los datos se evalúan:</strong> Cada instancia del dataset original es usada como test exactamente 1 vez.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></div>
            <p><strong>Resultados más robustos:</strong> La media de K iteraciones es una estimación mucho más fiable del rendimiento real del modelo.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></div>
            <p><strong>Independencia de la partición:</strong> Reduce drásticamente el factor "suerte" del hold-out simple.</p>
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide79 = () => {
  const [iteration, setIteration] = useState(1);
  const k = 5;

  return (
    <SlideLayout title="Interactivo: K-Fold Cross Validation" subtitle={`Visualizando K=${k} iteraciones`}>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 max-w-6xl w-full text-center">
          <div className="flex justify-between items-center mb-8">
            <button onClick={() => setIteration(i => Math.max(1, i - 1))} disabled={iteration === 1} className="px-4 py-2 bg-neutral-800 text-white rounded-lg disabled:opacity-50">Anterior</button>
            <h3 className="text-2xl font-bold text-white">Iteración {iteration} de {k}</h3>
            <button onClick={() => setIteration(i => Math.min(k, i + 1))} disabled={iteration === k} className="px-4 py-2 bg-sky-600 text-white rounded-lg disabled:opacity-50">Siguiente</button>
          </div>

          <div className="flex gap-2 h-24 mb-8">
            {Array.from({length: k}).map((_, idx) => {
              const isTest = idx + 1 === iteration;
              return (
                <motion.div 
                  key={idx}
                  layout
                  className={`flex-1 flex flex-col items-center justify-center rounded-xl border-2 transition-colors duration-300 ${
                    isTest ? 'bg-orange-600 border-orange-400' : 'bg-sky-600 border-sky-400'
                  }`}
                >
                  <span className="text-white font-bold">Bolsa {idx + 1}</span>
                  <span className="text-white/80 text-sm">{isTest ? 'Test' : 'Train'}</span>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-black p-6 rounded-xl border border-neutral-700 text-left">
            <p className="text-neutral-300 mb-2"><strong>En esta iteración:</strong></p>
            <p className="text-sm text-neutral-400">1. El modelo se entrena usando los datos de las bolsas <strong className="text-sky-400">{Array.from({length: k}).map((_, i) => i+1).filter(i => i !== iteration).join(', ')}</strong>.</p>
            <p className="text-sm text-neutral-400">2. El modelo entrenado se evalúa usando ÚNICAMENTE los datos de la bolsa <strong className="text-orange-400">{iteration}</strong>.</p>
            <p className="text-sm text-neutral-400">3. Se guarda la métrica de error (ej. Exactitud_{iteration}).</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide80 = () => (
  <SlideLayout title="Elección de K y Leave-One-Out" subtitle="¿Cuántas bolsas debemos usar?">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4">Valores habituales de K</h3>
        <p className="text-neutral-300 mb-4">
          En la práctica, los valores más utilizados para K son <strong>5 o 10</strong>. 
        </p>
        <p className="text-neutral-300 mb-6">
          Estos valores han demostrado empíricamente ofrecer un buen equilibrio entre el sesgo de la estimación y el tiempo de cómputo (entrenar 10 modelos es asumible).
        </p>
        <div className="bg-black p-4 rounded-xl border border-neutral-700 mt-auto">
          <p className="text-sm text-neutral-400">Incluso con K=10, los resultados pueden depender de la aleatoriedad al hacer las bolsas. A veces se repite el K-Fold varias veces (ej. 5x2 CV).</p>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-purple-500 mb-4">Leave-One-Out (LOOCV)</h3>
        <p className="text-neutral-300 mb-4">
          Es un caso extremo donde <strong>K = n</strong> (número total de instancias).
        </p>
        <p className="text-neutral-300 mb-4">
          Cada bolsa tiene exactamente 1 ejemplo. Se entrena con n-1 ejemplos y se evalúa con el que quedó fuera.
        </p>
        <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-6 text-sm">
          <li>✅ <strong>Cero aleatoriedad:</strong> Siempre da el mismo resultado.</li>
          <li>❌ <strong>Costoso:</strong> Requiere entrenar el modelo <MathFormula tex="n" /> veces. Inviable para datasets grandes (millones de filas).</li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide81 = () => (
  <SlideLayout title="Validación Estratificada" subtitle="El problema del desbalanceo de clases">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex-1 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-sky-500 mb-4">¿Qué pasa si las clases son desiguales?</h3>
          <p className="text-neutral-300 mb-4">
            Imagina un dataset médico donde el 90% son pacientes sanos y el 10% enfermos. Si hacemos un K-Fold aleatorio normal, por puro azar, una bolsa de Test podría acabar con 0 pacientes enfermos.
          </p>
          <h4 className="text-xl font-bold text-white mb-2">Stratified K-Fold</h4>
          <p className="text-neutral-400 text-sm mb-6">
            La validación estratificada garantiza que <strong>todas las bolsas (folds) mantengan la misma proporción de clases</strong> que el conjunto de datos original.
          </p>
          <div className="p-4 bg-sky-900/20 border border-sky-900/50 rounded-xl">
            <p className="text-sm text-sky-200">Es el estándar de facto para problemas de clasificación en la industria.</p>
          </div>
        </div>
        <div className="flex-1 w-full bg-black p-6 rounded-xl border border-neutral-700">
          <h4 className="text-white font-bold mb-4 text-center">Ejemplo (Dataset 90% Azul, 10% Rojo)</h4>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-neutral-500 mb-1">K-Fold Normal (Bolsa 1 al azar)</p>
              <div className="flex h-8 rounded overflow-hidden">
                <div className="w-[100%] bg-blue-500"></div>
                {/* 0% red */}
              </div>
              <p className="text-xs text-red-400 mt-1">¡Peligro! No hay ejemplos rojos para evaluar.</p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 mb-1">Stratified K-Fold (Bolsa 1)</p>
              <div className="flex h-8 rounded overflow-hidden">
                <div className="w-[90%] bg-blue-500"></div>
                <div className="w-[10%] bg-red-500"></div>
              </div>
              <p className="text-xs text-green-400 mt-1">Proporción perfecta mantenida.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide82 = () => {
  const [isStratified, setIsStratified] = useState(false);
  
  // Simulate 20 items: 16 blue (80%), 4 red (20%)
  const normalFolds = [
    [ {c:'b'}, {c:'b'}, {c:'b'}, {c:'b'}, {c:'b'} ], // 5 blue, 0 red
    [ {c:'b'}, {c:'b'}, {c:'b'}, {c:'r'}, {c:'r'} ], // 3 blue, 2 red
    [ {c:'b'}, {c:'b'}, {c:'b'}, {c:'b'}, {c:'r'} ], // 4 blue, 1 red
    [ {c:'b'}, {c:'b'}, {c:'b'}, {c:'b'}, {c:'r'} ]  // 4 blue, 1 red
  ];
  
  const stratifiedFolds = [
    [ {c:'b'}, {c:'b'}, {c:'b'}, {c:'b'}, {c:'r'} ],
    [ {c:'b'}, {c:'b'}, {c:'b'}, {c:'b'}, {c:'r'} ],
    [ {c:'b'}, {c:'b'}, {c:'b'}, {c:'b'}, {c:'r'} ],
    [ {c:'b'}, {c:'b'}, {c:'b'}, {c:'b'}, {c:'r'} ]
  ];

  const currentFolds = isStratified ? stratifiedFolds : normalFolds;

  return (
    <SlideLayout title="Interactivo: Estratificación" subtitle="Observa la distribución en las bolsas">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 max-w-7xl w-full text-center">
          <h3 className="text-xl font-bold text-white mb-2">Dataset Original: 20 instancias</h3>
          <p className="text-neutral-400 mb-6">16 Azules (80%) | 4 Rojas (20%)</p>
          
          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={() => setIsStratified(false)} 
              className={`px-6 py-2 rounded-xl font-bold ${!isStratified ? 'bg-sky-600 text-white' : 'bg-neutral-800 text-neutral-400'}`}
            >
              K-Fold Normal (Azar)
            </button>
            <button 
              onClick={() => setIsStratified(true)} 
              className={`px-6 py-2 rounded-xl font-bold ${isStratified ? 'bg-green-600 text-white' : 'bg-neutral-800 text-neutral-400'}`}
            >
              Stratified K-Fold
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {currentFolds.map((fold, fIdx) => (
              <div key={fIdx} className="bg-black p-4 rounded-xl border border-neutral-700">
                <h4 className="text-white font-bold mb-4">Bolsa {fIdx + 1}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {fold.map((item, iIdx) => (
                    <motion.div 
                      key={`${fIdx}-${iIdx}`}
                      layout
                      className={`w-6 h-6 rounded-full ${item.c === 'b' ? 'bg-blue-500' : 'bg-red-500'}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-neutral-500 mt-4">
                  {fold.filter(i => i.c === 'r').length} Rojas ({fold.filter(i => i.c === 'r').length / 5 * 100}%)
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide83 = () => (
  <SlideLayout title="Código: Validación Cruzada" subtitle="Implementación con scikit-learn">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex-1">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Code2 className="text-green-500"/> Función cross_val_score</h3>
        <p className="text-neutral-300 mb-6">
          Scikit-learn automatiza todo el proceso de bucles de la validación cruzada con una sola función.
        </p>
        <CodeBlock language="python" code={`from sklearn import datasets # Importa datasets de ejemplo
from sklearn.dummy import DummyClassifier # Importa clasificador base
from sklearn.model_selection import cross_val_score, KFold # Importa herramientas de validación cruzada

iris = datasets.load_iris() # Carga el dataset Iris
clf = DummyClassifier() # Instancia el modelo a evaluar

# 1. Definir el generador de bolsas (K=10)
# KFold divide el dataset en 'n_splits' partes iguales
kf = KFold(n_splits=10, shuffle=True, random_state=1) # shuffle=True mezcla los datos antes de dividir

# 2. Ejecutar Validación Cruzada
# cross_val_score entrena y evalúa el modelo K veces automáticamente
# Devuelve un array con las 10 métricas (una por cada bolsa usada como test)
evaluacion = cross_val_score(clf, iris.data, iris.target, cv=kf)

print("Exactitud de cada bolsa:", evaluacion) # Imprime el array con los 10 resultados
print("Exactitud Media: %.3f" % evaluacion.mean()) # Imprime el promedio de las 10 evaluaciones
print("Desviación Típica: %.3f" % evaluacion.std()) # Imprime la desviación estándar (estabilidad del modelo)`} />
      </div>
    </div>
  </SlideLayout>
);

export const Slide83a = () => (
  <SlideLayout title="Código: Bootstrapping" subtitle="Partición con remuestreo">
    <div className="flex flex-col md:flex-row gap-[2%] h-full">
      <div className="w-full md:w-[68%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Python</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`from sklearn.utils import resample # Importa la función para remuestrear datos
import numpy as np # Importa numpy para crear el array

# Dataset original (población completa)
data = np.array([0.1, 0.2, 0.3, 0.4, 0.5, 0.6])

# 1. Generar muestra Bootstrap (Entrenamiento)
# replace=True es la clave del bootstrapping: permite que un mismo dato sea seleccionado varias veces
boot = resample(
    data, # Datos originales
    replace=True, # Muestreo con reemplazo
    n_samples=5, # Tamaño de la muestra a generar
    random_state=3 # Semilla para reproducibilidad
)
print(f"Muestra Bootstrap (Train): {boot}")
# Ej: [0.3 0.5 0.2 0.3 0.6] (Nota que el valor 0.3 se repite, y 0.1 y 0.4 no están)

# 2. Generar Out-of-Bag (Test)
# Los datos originales que NO fueron seleccionados en la muestra bootstrap se usan para test
oob = [x for x in data if x not in boot] # Comprensión de lista para filtrar los no seleccionados
print(f"Out-of-Bag (Test): {oob}")
# Ej: [0.1, 0.4] (Estos datos son "nuevos" para el modelo entrenado con 'boot')`} 
          />
        </div>
      </div>
      <div className="w-full md:w-[30%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-xs text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">sklearn.utils.resample:</strong> Función utilitaria de scikit-learn para remuestrear arrays o matrices dispersas de manera consistente.
          </li>
          <li>
            <strong className="text-white">Parámetro <code>replace=True</code>:</strong> Es la clave del bootstrapping. Significa "remuestreo con reemplazo". Al sacar un elemento de la bolsa original, se anota y se devuelve a la bolsa, por lo que puede volver a salir.
          </li>
          <li>
            <strong className="text-white">Parámetro <code>n_samples</code>:</strong> Número de muestras a generar. Generalmente es igual al tamaño del dataset original, pero aquí se puso 5 para ilustrar.
          </li>
          <li>
            <strong className="text-white">Out-of-Bag (OOB):</strong> Son las instancias que, por azar, nunca fueron seleccionadas en la muestra bootstrap. Actúan como un conjunto de test natural y gratuito para evaluar el modelo entrenado con la muestra bootstrap.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide84 = () => (
  <SlideLayout title="Quiz: Validación Cruzada" subtitle="Evaluación de la Sección 2.2">
    <Quiz 
      question="Si tienes un conjunto de datos de 1000 instancias y aplicas una validación cruzada con K=10 (10-Fold CV), ¿cuántas instancias se usan para entrenar el modelo en CADA iteración?"
      options={[
        { id: 1, text: '100 instancias para entrenar y 900 para test.', correct: false, explanation: 'Al revés. Se usa 1 bolsa para test (100) y las 9 restantes para entrenar (900).' },
        { id: 2, text: '900 instancias para entrenar y 100 para test.', correct: true, explanation: '¡Correcto! El dataset se divide en 10 bolsas de 100 instancias. En cada iteración, 1 bolsa (100) es el test y las 9 bolsas restantes (900) forman el entrenamiento.' },
        { id: 3, text: '1000 instancias para entrenar y 1000 para test.', correct: false, explanation: 'Eso sería evaluar sobre el mismo conjunto de entrenamiento (causando sobreajuste).' },
        { id: 4, text: 'Depende de si usamos validación estratificada o no.', correct: false, explanation: 'La estratificación cambia QUÉ instancias van a cada bolsa, pero el TAMAÑO de las bolsas (900 train / 100 test) sigue siendo el mismo.' }
      ]}
    />
  </SlideLayout>
);
