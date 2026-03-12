import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { MathFormula } from '../components/MathFormula';
import { CodeBlock } from '../components/CodeBlock';
import { Users, MapPin, Ruler, Target, Scale, Zap, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export const Slide135 = () => (
  <SlideLayout title="3.2. Vecinos Más Cercanos (KNN)" subtitle="K-Nearest Neighbors en Regresión">
    <div className="flex flex-col items-center justify-center h-full text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Users className="w-32 h-32 text-purple-500 mb-8" />
      </motion.div>
      <h2 className="text-5xl font-bold text-white mb-6">KNN para Regresión</h2>
      <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
        A diferencia de la regresión lineal, KNN es un algoritmo <strong className="text-purple-400">no paramétrico</strong> y <strong className="text-purple-400">basado en instancias</strong>. 
        No aprende una función global, sino que predice basándose en la similitud local.
      </p>
      <div className="mt-12 p-6 bg-neutral-900 rounded-2xl border border-purple-500/20 max-w-xl">
        <p className="text-neutral-400 italic">"Dime con quién andas y te diré quién eres (o cuánto vales)"</p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide136 = () => (
  <SlideLayout title="La Premisa de KNN" subtitle="Similitud = Proximidad">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><MapPin className="text-purple-500"/> El Concepto</h3>
        <p className="text-neutral-300 mb-6">
          Para predecir el valor de un nuevo punto, KNN busca los <MathFormula tex="k" /> puntos más cercanos en el dataset de entrenamiento.
        </p>
        <div className="bg-black/50 p-6 rounded-xl border border-purple-900/30">
          <p className="text-white font-bold mb-2">Predicción:</p>
          <p className="text-neutral-400">Es el <strong>promedio</strong> (o promedio ponderado) de los valores objetivo de esos <MathFormula tex="k" /> vecinos.</p>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-purple-400 mb-4">Un Algoritmo "Vago" (Lazy)</h4>
        <p className="text-neutral-300 mb-4 text-sm">
          Se llama así porque no realiza ningún cálculo real hasta que se le pide una predicción. No hay fase de "entrenamiento" pesada.
        </p>
        <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
          <p className="text-xs text-neutral-400">Memoria: El modelo ES el dataset de entrenamiento completo.</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide137 = () => (
  <SlideLayout title="Los Dos Parámetros Clave" subtitle="Configurando KNN">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-6">
          <span className="text-3xl font-bold text-purple-500">k</span>
        </div>
        <h4 className="text-white font-bold mb-4 text-xl">Número de Vecinos</h4>
        <p className="text-neutral-400 text-sm mb-6">Controla la suavidad de la predicción.</p>
        <ul className="text-left space-y-2 text-xs">
          <li className="text-neutral-300"><strong>k pequeño:</strong> Modelo complejo, sensible al ruido (overfitting).</li>
          <li className="text-neutral-300"><strong>k grande:</strong> Modelo simple, predicción más suave (underfitting).</li>
        </ul>
      </div>
      
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-6">
          <Ruler className="text-purple-500" size={32} />
        </div>
        <h4 className="text-white font-bold mb-4 text-xl">Métrica de Distancia</h4>
        <p className="text-neutral-400 text-sm mb-6">Define qué significa estar "cerca".</p>
        <ul className="text-left space-y-2 text-xs">
          <li className="text-neutral-300"><strong>Euclídea:</strong> La línea recta (estándar).</li>
          <li className="text-neutral-300"><strong>Manhattan:</strong> Distancia en cuadrícula (L1).</li>
          <li className="text-neutral-300"><strong>Minkowski:</strong> Generalización de ambas.</li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide138 = () => (
  <SlideLayout title="Distancia de Minkowski" subtitle="La métrica general">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex-1 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold text-white mb-8">Fórmula General</h3>
        
        <div className="bg-black p-8 rounded-2xl border border-purple-900/50 w-full max-w-2xl text-center shadow-2xl mb-8">
          <MathFormula block tex="d(x, y) = \left( \sum_{i=1}^{n} |x_i - y_i|^p \right)^{1/p}" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
          <div className="p-6 bg-neutral-800/50 rounded-xl border border-neutral-700">
            <h4 className="text-purple-400 font-bold mb-2">Si p = 1</h4>
            <p className="text-sm text-neutral-300">Distancia de <strong>Manhattan</strong> (L1). Suma de diferencias absolutas.</p>
          </div>
          <div className="p-6 bg-neutral-800/50 rounded-xl border border-neutral-700">
            <h4 className="text-purple-400 font-bold mb-2">Si p = 2</h4>
            <p className="text-sm text-neutral-300">Distancia <strong>Euclídea</strong> (L2). La distancia geométrica estándar.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide139 = () => (
  <SlideLayout title="Propiedades de la Distancia" subtitle="Requisitos matemáticos">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">Axiomas de Distancia</h3>
        <p className="text-neutral-300 mb-6">
          Para que una función sea considerada una métrica de distancia válida, debe cumplir:
        </p>
        <ul className="space-y-4 text-sm">
          <li className="bg-black/30 p-3 rounded-lg border border-neutral-800">
            <span className="text-purple-400 font-bold">No negatividad:</span> <MathFormula tex="d(x,y) \ge 0" />
          </li>
          <li className="bg-black/30 p-3 rounded-lg border border-neutral-800">
            <span className="text-purple-400 font-bold">Identidad:</span> <MathFormula tex="d(x,y) = 0 \iff x = y" />
          </li>
          <li className="bg-black/30 p-3 rounded-lg border border-neutral-800">
            <span className="text-purple-400 font-bold">Simetría:</span> <MathFormula tex="d(x,y) = d(y,x)" />
          </li>
          <li className="bg-black/30 p-3 rounded-lg border border-neutral-800">
            <span className="text-purple-400 font-bold">Desigualdad Triangular:</span> <MathFormula tex="d(x,z) \le d(x,y) + d(y,z)" />
          </li>
        </ul>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center items-center text-center">
        <div className="w-24 h-24 bg-purple-500/10 rounded-full flex items-center justify-center mb-6">
          <Info className="text-purple-500" size={48} />
        </div>
        <h4 className="text-xl font-bold text-white mb-4">¿Por qué importa?</h4>
        <p className="text-neutral-400 text-sm leading-relaxed">
          Estas propiedades garantizan que la noción de "similitud" sea consistente y coherente en todo el espacio de búsqueda.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide140 = () => (
  <SlideLayout title="Cálculo de la Predicción" subtitle="Promedio vs Promedio Ponderado">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h4 className="text-xl font-bold text-white mb-6">1. Promedio Simple</h4>
        <p className="text-neutral-300 mb-4">Todos los vecinos tienen el mismo peso, sin importar su distancia.</p>
        <div className="bg-black p-4 rounded-xl border border-neutral-800 text-center">
          <MathFormula block tex="\hat{y} = \frac{1}{k} \sum_{i=1}^{k} y_i" />
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h4 className="text-xl font-bold text-white mb-6">2. Promedio Ponderado</h4>
        <p className="text-neutral-300 mb-4">Los vecinos más cercanos influyen más en la predicción final.</p>
        <div className="bg-black p-4 rounded-xl border border-neutral-800 text-center">
          <MathFormula block tex="\hat{y} = \frac{\sum w_i y_i}{\sum w_i}" />
        </div>
        <p className="text-xs text-neutral-500 mt-4 italic">Comúnmente <MathFormula tex="w_i = 1/d_i" /></p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide141 = () => (
  <SlideLayout title="Ponderación de Atributos" subtitle="No todo importa igual">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mb-8">
          <Scale className="text-yellow-500" size={40} />
        </div>
        <h3 className="text-3xl font-bold text-white mb-6">El peso de las variables</h3>
        <p className="text-xl text-neutral-300 max-w-3xl mb-8">
          En KNN estándar, todos los atributos contribuyen por igual a la distancia. Pero en la realidad, algunos atributos son más informativos que otros.
        </p>
        
        <div className="bg-black p-6 rounded-2xl border border-yellow-500/20 text-left max-w-2xl">
          <p className="text-sm text-neutral-400">
            Podemos aplicar un peso <MathFormula tex="v_j" /> a cada atributo <MathFormula tex="j" />:
          </p>
          <div className="my-4 text-center">
            <MathFormula block tex="d(x, y) = \sqrt{\sum_{j=1}^{n} v_j (x_j - y_j)^2}" />
          </div>
          <p className="text-xs text-neutral-500">
            Esto permite que el algoritmo ignore atributos irrelevantes dándoles un peso cercano a cero.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide142 = () => (
  <SlideLayout title="La Importancia de la Escala" subtitle="Un paso obligatorio">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Zap className="text-yellow-500"/> ¡Cuidado!</h3>
        <p className="text-neutral-300 mb-6">
          KNN es extremadamente sensible a la escala de los datos. Si un atributo tiene un rango de 0-1000 y otro de 0-1, el primero dominará completamente el cálculo de la distancia.
        </p>
        <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
          <p className="text-sm text-yellow-500 font-bold">Regla de oro:</p>
          <p className="text-xs text-neutral-400">Siempre escala tus datos (StandardScaler o MinMaxScaler) antes de usar KNN.</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl flex flex-col items-center justify-center space-y-4">
        <div className="text-center">
          <p className="text-[10px] text-neutral-400 mb-2">SIN ESCALAR (Distorsionado)</p>
          <svg viewBox="0 0 100 40" className="w-full h-full border border-neutral-100">
            <circle cx="10" cy="10" r="2" fill="#ef4444" />
            <circle cx="90" cy="30" r="2" fill="#3b82f6" />
            <line x1="10" y1="10" x2="90" y2="30" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="2" />
            <text x="50" y="38" fontSize="3" fill="#64748b">Eje X (0-1000)</text>
          </svg>
        </div>
        <div className="text-center">
          <p className="text-[10px] text-neutral-400 mb-2">ESCALADO (Equilibrado)</p>
          <svg viewBox="0 0 100 40" className="w-full h-full border border-neutral-100">
            <circle cx="40" cy="10" r="2" fill="#ef4444" />
            <circle cx="60" cy="30" r="2" fill="#3b82f6" />
            <line x1="40" y1="10" x2="60" y2="30" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="2" />
            <text x="50" y="38" fontSize="3" fill="#64748b">Eje X (0-1)</text>
          </svg>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide143 = () => (
  <SlideLayout title="Código: KNN Regressor" subtitle="Implementación con scikit-learn">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex-1">
        <CodeBlock language="python" code={`from sklearn.neighbors import KNeighborsRegressor # Importa el modelo KNN para regresión
from sklearn.preprocessing import StandardScaler # Importa el escalador para normalizar datos
from sklearn.pipeline import Pipeline # Importa Pipeline para encadenar pasos

# 1. Crear un Pipeline (Escalado + Modelo)
# Es VITAL escalar los datos antes de usar KNN porque se basa en distancias
pipe = Pipeline([
    ('scaler', StandardScaler()), # Paso 1: Estandariza los datos (media 0, varianza 1)
    ('knn', KNeighborsRegressor(n_neighbors=5, weights='distance')) # Paso 2: Aplica KNN
])

# 2. Entrenar
# En KNN, "entrenar" significa simplemente memorizar los datos de entrenamiento
pipe.fit(X_train, y_train)

# 3. Predecir
# Para cada punto en X_test, busca los 5 vecinos más cercanos en X_train y promedia sus 'y'
y_pred = pipe.predict(X_test)

# 4. Hiperparámetros comunes de KNeighborsRegressor:
# n_neighbors: número de vecinos a considerar (k). Por defecto es 5.
# weights: 'uniform' (todos los vecinos pesan igual) o 'distance' (vecinos más cercanos pesan más)
# p: Parámetro de la métrica de Minkowski. p=1 (Manhattan), p=2 (Euclídea, por defecto)`} />
      </div>
    </div>
  </SlideLayout>
);

export const Slide143a = () => (
  <SlideLayout title="Código: KNN Regressor Explicado" subtitle="Desgranando la implementación">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Scikit-Learn</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`from sklearn.neighbors import KNeighborsRegressor # Importa el regresor KNN
from sklearn.preprocessing import StandardScaler # Importa el estandarizador
from sklearn.pipeline import Pipeline # Importa la clase Pipeline

# 1. Crear un Pipeline (Escalado + Modelo)
# Es vital escalar antes de KNN para que todas las variables tengan el mismo peso en la distancia
pipe = Pipeline([
    ('scaler', StandardScaler()), # Primero: centra y escala los datos
    ('knn', KNeighborsRegressor(
        n_neighbors=5, # Usa los 5 vecinos más cercanos
        weights='distance', # Pondera los vecinos por la inversa de su distancia
        p=2 # Usa distancia Euclídea (L2)
    ))
])

# 2. Entrenar (Memorizar datos)
# El escalador aprende media/std, el KNN guarda los datos en memoria (ej. en un KD-Tree)
pipe.fit(X_train, y_train)

# 3. Predecir (Buscar vecinos y promediar)
# El pipeline escala X_test automáticamente y luego el KNN hace la predicción
y_pred = pipe.predict(X_test)`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">sklearn.neighbors.KNeighborsRegressor:</strong> Clase que implementa la regresión basada en los k vecinos más cercanos.
          </li>
          <li>
            <strong className="text-white">Parámetro <code>n_neighbors</code>:</strong> El valor de 'k'. Número de vecinos a usar para la predicción. Por defecto es 5.
          </li>
          <li>
            <strong className="text-white">Parámetro <code>weights</code>:</strong> Función de peso. <code>'uniform'</code> (por defecto) asigna pesos iguales a todos los vecinos. <code>'distance'</code> pondera los puntos por la inversa de su distancia (vecinos más cercanos tienen mayor influencia).
          </li>
          <li>
            <strong className="text-white">Parámetro <code>p</code>:</strong> Parámetro de potencia para la métrica de Minkowski. <code>p=1</code> es distancia Manhattan, <code>p=2</code> (por defecto) es distancia Euclídea.
          </li>
          <li>
            <strong className="text-white">Pipeline:</strong> Encadena el escalado (StandardScaler) y el modelo (KNN) para asegurar que los datos de test se escalen con los mismos parámetros que los de entrenamiento, evitando fugas de información.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide143b = () => (
  <SlideLayout title="Código: Búsqueda de Hiperparámetros" subtitle="Optimizando KNN con GridSearchCV">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Scikit-Learn</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`import numpy as np # Importa numpy para generar rangos de valores
from sklearn.model_selection import GridSearchCV # Importa la herramienta de búsqueda en cuadrícula
from sklearn.neighbors import KNeighborsRegressor # Importa el modelo base

# 1. Definir el espacio de búsqueda (diccionario de hiperparámetros)
# Las claves deben coincidir exactamente con los nombres de los parámetros del modelo
parameters = {
    'n_neighbors': np.arange(1, 15), # Prueba todos los valores de k desde 1 hasta 14
    'weights': ('uniform', 'distance'), # Prueba ambas estrategias de ponderación
    'metric': ('euclidean', 'manhattan', 'cosine') # Prueba 3 métricas de distancia diferentes
}

# 2. Instanciar el modelo base (sin parámetros, se los dará GridSearchCV)
reg = KNeighborsRegressor()

# 3. Configurar GridSearchCV
# Probará todas las combinaciones posibles: 14 * 2 * 3 = 84 configuraciones
# cv=5 hace validación cruzada de 5 pliegues para CADA configuración (84 * 5 = 420 entrenamientos)
# n_jobs=-1 usa todos los núcleos del procesador para paralelizar
model = GridSearchCV(reg, parameters, scoring='r2', n_jobs=-1, cv=5)

# 4. Ejecutar la búsqueda (entrena y evalúa los 420 modelos)
model.fit(X_train, y_train)

# 5. Resultados
print("Mejor conjunto de parámetros:", model.best_params_) # Ej: {'metric': 'manhattan', 'n_neighbors': 7, 'weights': 'distance'}
print("Mejor score (R2):", model.best_score_) # El R2 promedio en validación cruzada del mejor modelo

# El objeto 'model' ahora actúa automáticamente como el mejor estimador encontrado
# Al llamar a predict, usa el modelo re-entrenado con todos los datos y los mejores parámetros
y_pred = model.predict(X_test)`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">sklearn.model_selection.GridSearchCV:</strong> Realiza una búsqueda exhaustiva (fuerza bruta) sobre los valores de hiperparámetros especificados para un estimador.
          </li>
          <li>
            <strong className="text-white">Parámetro <code>param_grid</code> (parameters):</strong> Un diccionario donde las claves son los nombres de los hiperparámetros del modelo (ej. <code>'n_neighbors'</code>) y los valores son listas de ajustes a probar.
          </li>
          <li>
            <strong className="text-white">Parámetro <code>scoring</code>:</strong> Define la métrica para evaluar cada combinación. Para regresión, <code>'r2'</code> (coeficiente de determinación) o <code>'neg_mean_squared_error'</code> son comunes.
          </li>
          <li>
            <strong className="text-white">Parámetro <code>n_jobs=-1</code>:</strong> Paraleliza el proceso usando todos los núcleos de CPU disponibles, reduciendo drásticamente el tiempo de ejecución.
          </li>
          <li>
            <strong className="text-white">Atributo <code>best_params_</code>:</strong> Devuelve un diccionario con la combinación de hiperparámetros que obtuvo el mejor rendimiento en la validación cruzada.
          </li>
          <li>
            <strong className="text-white">Comportamiento de <code>predict</code>:</strong> Por defecto, <code>GridSearchCV</code> reentrena automáticamente el mejor modelo encontrado usando <em>todo</em> el conjunto <code>X_train</code>, por lo que puedes llamar a <code>predict</code> directamente sobre el objeto <code>model</code>.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide144 = () => (
  <SlideLayout title="Ventajas y Desventajas de KNN" subtitle="Balance final">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">Pros</h3>
        <ul className="space-y-4 text-sm text-neutral-300">
          <li className="flex gap-2"><span>✅</span> Simple de entender e implementar.</li>
          <li className="flex gap-2"><span>✅</span> No asume ninguna forma funcional (No paramétrico).</li>
          <li className="flex gap-2"><span>✅</span> Se adapta naturalmente a cambios locales en los datos.</li>
          <li className="flex gap-2"><span>✅</span> Solo tiene un hiperparámetro principal (k).</li>
        </ul>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">Contras</h3>
        <ul className="space-y-4 text-sm text-neutral-300">
          <li className="flex gap-2"><span>❌</span> Computacionalmente costoso en predicción (debe buscar en todo el dataset).</li>
          <li className="flex gap-2"><span>❌</span> Requiere mucha memoria (almacena todo el dataset).</li>
          <li className="flex gap-2"><span>❌</span> Muy sensible a la escala y a atributos irrelevantes.</li>
          <li className="flex gap-2"><span>❌</span> Sufre la "maldición de la dimensionalidad".</li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);
