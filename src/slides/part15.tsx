import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { MathFormula } from '../components/MathFormula';
import { CodeBlock } from '../components/CodeBlock';
import { TrendingUp, Target, Layers, Zap, ArrowRight, LineChart } from 'lucide-react';
import { Quiz } from '../components/Quiz';
import { motion } from 'framer-motion';

export const Slide115 = () => (
  <SlideLayout title="Capítulo 3. Regresión" subtitle="Aprendizaje Supervisado">
    <div className="flex flex-col items-center justify-center h-full text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <TrendingUp className="w-32 h-32 text-sky-500 mb-8" />
      </motion.div>
      <h2 className="text-5xl font-bold text-white mb-6">Modelos de Regresión</h2>
      <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
        En este capítulo exploraremos algoritmos para predecir variables numéricas continuas. 
        Analizaremos la <strong className="text-sky-400">Regresión Lineal Múltiple</strong> y los <strong className="text-sky-400">Vecinos Más Cercanos (KNN)</strong>, 
        comprendiendo sus fundamentos matemáticos y aplicaciones prácticas.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl">
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-sky-500/20">
          <p className="text-sky-400 font-bold text-2xl mb-2">3.1</p>
          <p className="text-neutral-400">Regresión Lineal Múltiple</p>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-sky-500/20">
          <p className="text-sky-400 font-bold text-2xl mb-2">3.2</p>
          <p className="text-neutral-400">Vecinos Más Cercanos (KNN)</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide116 = () => (
  <SlideLayout title="3.1. Regresión Lineal Múltiple" subtitle="Conceptos Fundamentales">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Target className="text-sky-500" /> El Objetivo
        </h3>
        <p className="text-neutral-300 mb-4">
          La regresión lineal busca modelar la relación entre una variable dependiente (<MathFormula tex="y" />) y una o más variables independientes (<MathFormula tex="x_i" />).
        </p>
        <div className="bg-black/50 p-6 rounded-xl border border-sky-900/30 my-4">
          <MathFormula block tex="\hat{y} = w_0 + w_1x_1 + w_2x_2 + \dots + w_px_p" />
        </div>
        <p className="text-neutral-400 text-sm italic">
          Donde <MathFormula tex="w_0" /> es el sesgo (bias) y <MathFormula tex="w_i" /> son los pesos o coeficientes.
        </p>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-sky-400 mb-6">¿Por qué Lineal?</h4>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0">
              <Zap className="text-sky-500" size={20} />
            </div>
            <div>
              <p className="text-white font-bold">Simplicidad</p>
              <p className="text-neutral-400 text-sm">Fácil de interpretar y computacionalmente eficiente.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0">
              <Layers className="text-sky-500" size={20} />
            </div>
            <div>
              <p className="text-white font-bold">Extensibilidad</p>
              <p className="text-neutral-400 text-sm">Base para modelos más complejos como Redes Neuronales.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide117 = () => (
  <SlideLayout title="Mínimos Cuadrados Ordinarios (OLS)" subtitle="Ordinary Least Squares">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex-1 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold text-white mb-6">¿Cómo encontramos los pesos óptimos?</h3>
        <p className="text-lg text-neutral-300 mb-8 text-center max-w-3xl">
          OLS es el método clásico que minimiza la <strong>Suma de los Errores al Cuadrado (RSS)</strong> entre los valores reales y las predicciones del modelo.
        </p>
        
        <div className="bg-black p-8 rounded-2xl border border-sky-900/50 w-full max-w-2xl text-center shadow-2xl">
          <h4 className="text-sky-400 font-bold mb-4">Función de Pérdida (MSE)</h4>
          <MathFormula block tex="J(w) = \frac{1}{2n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2" />
          <div className="mt-6 flex justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-sky-500"></div>
              <span className="text-neutral-400">Minimizar la distancia vertical</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="p-4 bg-neutral-800/50 rounded-xl border border-neutral-700 text-center">
            <p className="text-sky-400 font-bold mb-1">Analítico</p>
            <p className="text-xs text-neutral-400">Ecuaciones normales para datasets pequeños.</p>
          </div>
          <div className="p-4 bg-neutral-800/50 rounded-xl border border-neutral-700 text-center">
            <p className="text-sky-400 font-bold mb-1">Iterativo</p>
            <p className="text-xs text-neutral-400">Descenso de Gradiente para grandes volúmenes.</p>
          </div>
          <div className="p-4 bg-neutral-800/50 rounded-xl border border-neutral-700 text-center">
            <p className="text-sky-400 font-bold mb-1">Único</p>
            <p className="text-xs text-neutral-400">Existe una única solución global óptima.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide118 = () => (
  <SlideLayout title="Interpretación de Coeficientes" subtitle="¿Qué nos dice el modelo?">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">Significado de <MathFormula tex="w_i" /></h3>
        <p className="text-neutral-300 mb-6">
          Cada coeficiente representa el cambio esperado en la variable objetivo por cada unidad de cambio en ese atributo, <strong>manteniendo el resto constantes</strong>.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
            <p className="text-green-400 font-bold">Coeficiente Positivo</p>
            <p className="text-sm text-neutral-400">Relación directa: si X aumenta, Y aumenta.</p>
          </div>
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <p className="text-red-400 font-bold">Coeficiente Negativo</p>
            <p className="text-sm text-neutral-400">Relación inversa: si X aumenta, Y disminuye.</p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-sky-400 mb-4">Ejemplo: Precio Vivienda</h4>
        <div className="bg-black/50 p-6 rounded-xl font-mono text-sm space-y-2">
          <p className="text-neutral-500"># Ecuación estimada</p>
          <p className="text-white">Precio = 50k + 2k·m² - 5k·antigüedad</p>
          <div className="mt-4 pt-4 border-t border-neutral-800 space-y-2">
            <p className="text-neutral-300"><span className="text-sky-400">50k:</span> Precio base (solar).</p>
            <p className="text-neutral-300"><span className="text-sky-400">+2k:</span> Cada m² extra añade 2.000€.</p>
            <p className="text-neutral-300"><span className="text-sky-400">-5k:</span> Cada año de antigüedad resta 5.000€.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide119 = () => (
  <SlideLayout title="Descenso de Gradiente" subtitle="El motor de optimización">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4">¿Cómo llegamos al mínimo?</h3>
        <p className="text-neutral-300 mb-4">
          Es un algoritmo iterativo que ajusta los pesos en la dirección que reduce más rápido el error (el gradiente negativo).
        </p>
        <div className="bg-black p-4 rounded-xl border border-sky-900/30 my-4">
          <MathFormula block tex="w_{new} = w_{old} - \eta \cdot \nabla J(w)" />
        </div>
        <p className="text-sm text-neutral-400">
          Donde <MathFormula tex="\eta" /> (eta) es la <strong>Tasa de Aprendizaje</strong>.
        </p>
      </div>
      <div className="bg-white p-4 rounded-2xl flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Parabola */}
          <path d="M 10 20 Q 50 110 90 20" fill="none" stroke="#e2e8f0" strokeWidth="2" />
          
          {/* Gradient steps */}
          <motion.circle
            cx="15" cy="28" r="3" fill="#3b82f6"
            animate={{ 
              cx: [15, 25, 35, 45, 50],
              cy: [28, 48, 65, 78, 80]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Arrows for steps */}
          <path d="M 18 33 L 23 43" stroke="#3b82f6" strokeWidth="1" markerEnd="url(#arrow)" />
          <path d="M 28 53 L 33 60" stroke="#3b82f6" strokeWidth="1" />
          
          <text x="50" y="95" fontSize="5" textAnchor="middle" fill="#64748b">Pesos (w)</text>
          <text x="5" y="50" fontSize="5" textAnchor="middle" fill="#64748b" transform="rotate(-90 5 50)">Error J(w)</text>
          
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  </SlideLayout>
);

export const Slide120 = () => (
  <SlideLayout title="La Tasa de Aprendizaje (Learning Rate)" subtitle="El tamaño del paso">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex-1 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold text-white mb-8">El dilema de <MathFormula tex="\eta" /></h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="bg-black p-6 rounded-2xl border border-yellow-500/20 text-center">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-yellow-500" size={24} />
            </div>
            <h4 className="text-yellow-500 font-bold mb-2">Muy Pequeña</h4>
            <p className="text-sm text-neutral-400">Convergencia extremadamente lenta. Puede quedarse "atascado" en mínimos locales.</p>
          </div>
          
          <div className="bg-black p-6 rounded-2xl border border-green-500/20 text-center scale-105 shadow-xl shadow-green-500/5">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="text-green-500" size={24} />
            </div>
            <h4 className="text-green-500 font-bold mb-2">Óptima</h4>
            <p className="text-sm text-neutral-400">Llega al mínimo de forma eficiente y estable.</p>
          </div>
          
          <div className="bg-black p-6 rounded-2xl border border-red-500/20 text-center">
            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="text-red-500" size={24} />
            </div>
            <h4 className="text-red-500 font-bold mb-2">Muy Grande</h4>
            <p className="text-sm text-neutral-400">El algoritmo "rebota" y nunca llega al mínimo. Puede incluso divergir.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide121 = () => (
  <SlideLayout title="Código: Regresión Lineal" subtitle="Implementación con scikit-learn">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex-1">
        <CodeBlock language="python" code={`from sklearn.linear_model import LinearRegression # Importa el modelo de regresión lineal
from sklearn.model_selection import train_test_split # Importa función para dividir datos
from sklearn.metrics import mean_squared_error, r2_score # Importa métricas de evaluación

# 1. Instanciar el modelo
model = LinearRegression() # Crea un objeto de regresión lineal (usa Mínimos Cuadrados Ordinarios)

# 2. Entrenar (Ajustar los pesos w)
model.fit(X_train, y_train) # El modelo aprende los coeficientes (w) que minimizan el error cuadrático

# 3. Predecir
y_pred = model.predict(X_test) # Usa los pesos aprendidos para predecir 'y' a partir de nuevos 'X'

# 4. Evaluar
mse = mean_squared_error(y_test, y_pred) # Calcula el Error Cuadrático Medio
r2 = r2_score(y_test, y_pred) # Calcula el Coeficiente de Determinación R²

print(f"Coeficientes: {model.coef_}") # Imprime los pesos (w1, w2, ..., wn) asignados a cada característica
print(f"Intersección: {model.intercept_}") # Imprime el sesgo (w0), el valor de 'y' cuando todas las 'x' son 0
print(f"R2 Score: {r2:.4f}") # Imprime el R², indicando qué porcentaje de la varianza es explicada`} />
      </div>
    </div>
  </SlideLayout>
);

export const Slide121a = () => (
  <SlideLayout title="Código: Regresión Lineal Explicada" subtitle="Desgranando la implementación">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Scikit-Learn</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`from sklearn.linear_model import LinearRegression # Importa el modelo

# 1. Instanciar el modelo
# fit_intercept=True (por defecto) indica que se debe calcular el sesgo w0 (intersección con el eje Y)
# n_jobs=-1 indica que se usen todos los núcleos del procesador disponibles (útil para datasets enormes)
model = LinearRegression(fit_intercept=True, n_jobs=-1)

# 2. Entrenar (Ajustar los pesos w)
# X_train debe ser una matriz 2D de forma (n_muestras, n_características)
# y_train debe ser un array 1D de forma (n_muestras,)
model.fit(X_train, y_train) # Ejecuta el algoritmo OLS para encontrar los pesos óptimos

# 3. Predecir nuevos valores
# X_test debe tener exactamente el mismo número de columnas (características) que X_train
y_pred = model.predict(X_test) # Devuelve un array 1D con las predicciones continuas

# 4. Inspeccionar lo aprendido
# .coef_ es un array con los pesos asociados a cada característica (w1, w2, ...)
print(f"Pesos (w1, w2...): {model.coef_}")
# .intercept_ es un número escalar que representa el sesgo (w0)
print(f"Sesgo (w0): {model.intercept_}")`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">sklearn.linear_model.LinearRegression:</strong> Clase que implementa la Regresión Lineal por Mínimos Cuadrados Ordinarios (OLS).
          </li>
          <li>
            <strong className="text-white">Parámetro <code>fit_intercept</code>:</strong> Booleano. Si es True, el modelo calculará el término independiente (<MathFormula tex="w_0" />). Si es False, asumirá que los datos ya están centrados y forzará que la línea pase por el origen (0,0).
          </li>
          <li>
            <strong className="text-white">Método <code>fit(X, y)</code>:</strong> Ejecuta el algoritmo de optimización para encontrar los pesos que minimizan el error cuadrático medio en los datos de entrenamiento.
          </li>
          <li>
            <strong className="text-white">Atributos <code>coef_</code> e <code>intercept_</code>:</strong> Terminan en guión bajo (<code>_</code>) por convención en scikit-learn para indicar que son atributos <em>estimados a partir de los datos</em> (solo están disponibles después de llamar a <code>fit</code>).
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide121b = () => (
  <SlideLayout title="Código: Guardar y Cargar Modelos" subtitle="Persistencia con Pickle">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Python</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`import pickle # Importa el módulo estándar de Python para serialización de objetos
from sklearn.linear_model import LinearRegression

# Supongamos que ya entrenamos el modelo
model = LinearRegression()
model.fit(X_train, y_train) # El modelo ahora tiene los coeficientes aprendidos en memoria

# --- 1. GUARDAR EL MODELO (Serialización) ---
filename = 'modelo_regresion_final.sav' # Define el nombre del archivo

# 'wb' significa Write Binary (abrir archivo para escribir en formato binario)
# pickle.dump toma el objeto (model) y lo escribe en el archivo abierto
pickle.dump(model, open(filename, 'wb'))
print(f"Modelo guardado en {filename}")

# ... Más tarde, en otro script, en producción, o en un servidor web ...

# --- 2. CARGAR EL MODELO (Deserialización) ---
# 'rb' significa Read Binary (abrir archivo para leer en formato binario)
# pickle.load lee el archivo y reconstruye el objeto original en memoria
loaded_model = pickle.load(open(filename, 'rb'))

# 3. Usar el modelo cargado
# El modelo cargado conserva todos los pesos aprendidos (coef_ e intercept_)
# Podemos evaluarlo directamente con datos de test
score = loaded_model.score(X_test, y_test) # Calcula el R2
print(f"R2 del modelo cargado: {score}")

# O podemos usarlo para predecir sobre datos completamente nuevos
prediccion = loaded_model.predict(nuevos_datos)`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">pickle:</strong> Módulo estándar de Python para serialización de objetos. Convierte un objeto de Python (como nuestro modelo entrenado) en un flujo de bytes que se puede guardar en disco.
          </li>
          <li>
            <strong className="text-white">pickle.dump(obj, file):</strong> Guarda el objeto <code>obj</code> en el archivo <code>file</code>. Es vital usar el modo <code>'wb'</code> al abrir el archivo para escribir en formato binario.
          </li>
          <li>
            <strong className="text-white">pickle.load(file):</strong> Lee el flujo de bytes desde el archivo y reconstruye el objeto Python original. Requiere abrir el archivo en modo <code>'rb'</code>.
          </li>
          <li>
            <strong className="text-white">loaded_model.score(X, y):</strong> Un método de conveniencia en scikit-learn que, para regresores, devuelve directamente el coeficiente de determinación <MathFormula tex="R^2" />.
          </li>
          <li>
            <strong className="text-white">Importancia:</strong> Esto es el paso fundamental para el <strong>despliegue</strong>. Entrenas una vez, guardas el archivo <code>.sav</code> o <code>.pkl</code>, y lo cargas en tu servidor web o aplicación para hacer predicciones en tiempo real sin tener que reentrenar.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide122 = () => (
  <SlideLayout title="Ventajas de la Regresión Lineal" subtitle="¿Por qué sigue siendo relevante?">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6">
          <Activity className="text-sky-500" size={32} />
        </div>
        <h4 className="text-white font-bold mb-4">Interpretabilidad</h4>
        <p className="text-neutral-400 text-sm">Podemos explicar exactamente el impacto de cada variable en la predicción final.</p>
      </div>
      
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
          <Zap className="text-purple-500" size={32} />
        </div>
        <h4 className="text-white font-bold mb-4">Eficiencia</h4>
        <p className="text-neutral-400 text-sm">Entrenamiento y predicción extremadamente rápidos, ideal para grandes volúmenes de datos.</p>
      </div>
      
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
          <Target className="text-green-500" size={32} />
        </div>
        <h4 className="text-white font-bold mb-4">Baseline</h4>
        <p className="text-neutral-400 text-sm">Punto de referencia perfecto para comparar modelos más complejos.</p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide122a = () => (
  <SlideLayout title="Código: Regresión Polinómica" subtitle="Capturando relaciones no lineales">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Scikit-Learn</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`from sklearn.preprocessing import PolynomialFeatures # Importa el transformador polinómico
from sklearn.linear_model import LinearRegression # Importa el regresor lineal estándar

# 1. Transformar características a polinomiales (grado 2)
# Si X = [x1, x2], PolynomialFeatures(degree=2) genera nuevas columnas:
# [1, x1, x2, x1^2, x1*x2, x2^2] (El '1' es el sesgo, que podemos omitir con include_bias=False)
poly = PolynomialFeatures(degree=2, include_bias=False) # Instancia el transformador
train_x_poly = poly.fit_transform(X_train) # Aprende la transformación y la aplica a los datos de entrenamiento
test_x_poly = poly.transform(X_test) # Aplica la MISMA transformación a los datos de test (sin hacer fit)

# 2. Entrenar usando Regresión Lineal estándar
# El "truco" es que el modelo sigue siendo lineal respecto a los pesos (w),
# aunque las características de entrada ahora representen relaciones no lineales (ej. x^2).
clf = LinearRegression() # Instancia el modelo lineal
clf.fit(train_x_poly, y_train) # Entrena el modelo usando las características expandidas

# 3. Inspeccionar el modelo
print('Coeficientes:', clf.coef_) # Habrá un peso para x1, otro para x2, otro para x1^2, etc.
print('Intersección:', clf.intercept_) # El término independiente (w0)

# 4. Predecir (usando las características transformadas)
# Siempre debemos pasarle al modelo los datos con la misma forma con la que fue entrenado
y_pred = clf.predict(test_x_poly)`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">sklearn.preprocessing.PolynomialFeatures:</strong> Clase que genera una nueva matriz de características que consiste en todas las combinaciones polinomiales de las características originales.
          </li>
          <li>
            <strong className="text-white">Parámetro <code>degree</code>:</strong> El grado máximo del polinomio. Un grado 2 sobre una variable <MathFormula tex="x" /> creará <MathFormula tex="x" /> y <MathFormula tex="x^2" />.
          </li>
          <li>
            <strong className="text-white">Parámetro <code>include_bias</code>:</strong> Si es True (por defecto), añade una columna de unos (1) que actúa como el término independiente. Si usamos <code>LinearRegression(fit_intercept=True)</code>, es mejor ponerlo en False para no duplicar el sesgo.
          </li>
          <li>
            <strong className="text-white">Método <code>fit_transform(X)</code>:</strong> Ajusta el transformador a los datos de entrenamiento y luego transforma esos mismos datos.
          </li>
          <li>
            <strong className="text-white">Método <code>transform(X)</code>:</strong> Transforma los datos de test usando los parámetros aprendidos durante el <code>fit</code>. Es crucial no volver a hacer <code>fit</code> en los datos de test.
          </li>
          <li>
            <strong className="text-white">El "Truco":</strong> La regresión polinómica es en realidad un caso especial de regresión lineal múltiple. La ecuación <MathFormula tex="\hat{y} = w_0 + w_1x + w_2x^2" /> es lineal respecto a los parámetros <MathFormula tex="w" />, por lo que podemos usar la misma clase <code>LinearRegression</code>.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide123 = () => (
  <SlideLayout title="Hipótesis de la Regresión Lineal" subtitle="Lo que el modelo asume">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">Supuestos Matemáticos</h3>
        <p className="text-neutral-300 mb-6">
          Para que los resultados sean estadísticamente válidos y el modelo rinda bien, se deben cumplir ciertas condiciones:
        </p>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-neutral-300">
            <div className="w-2 h-2 rounded-full bg-sky-500"></div>
            <span><strong>Linealidad:</strong> Relación lineal entre X e Y.</span>
          </li>
          <li className="flex items-center gap-3 text-neutral-300">
            <div className="w-2 h-2 rounded-full bg-sky-500"></div>
            <span><strong>Independencia:</strong> Observaciones independientes.</span>
          </li>
          <li className="flex items-center gap-3 text-neutral-300">
            <div className="w-2 h-2 rounded-full bg-sky-500"></div>
            <span><strong>Homocedasticidad:</strong> Varianza constante del error.</span>
          </li>
          <li className="flex items-center gap-3 text-neutral-300">
            <div className="w-2 h-2 rounded-full bg-sky-500"></div>
            <span><strong>Normalidad:</strong> Errores distribuidos normalmente.</span>
          </li>
        </ul>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <div className="bg-black/50 p-6 rounded-xl border border-yellow-500/20">
          <h4 className="text-yellow-500 font-bold mb-2 flex items-center gap-2">
            <AlertTriangle size={18} /> ¿Y si no se cumplen?
          </h4>
          <p className="text-sm text-neutral-400">
            Si los datos no son lineales, el modelo tendrá un alto <strong>sesgo</strong>. Si hay multicolinealidad (variables X muy relacionadas entre sí), los coeficientes serán inestables.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide124 = () => (
  <SlideLayout title="Quiz: Regresión Lineal" subtitle="Pon a prueba tus conocimientos">
    <Quiz
      question="¿Qué representa el coeficiente w₁ en una regresión lineal simple y = w₀ + w₁x?"
      options={[
        { id: 1, text: 'El valor de y cuando x es igual a cero.', correct: false, explanation: 'Eso es la intersección o sesgo (w₀).' },
        { id: 2, text: 'El cambio en y por cada unidad de cambio en x.', correct: true, explanation: 'Correcto. Es la pendiente de la recta.' },
        { id: 3, text: 'El error cuadrático medio del modelo.', correct: false, explanation: 'El error es una métrica de evaluación, no un coeficiente del modelo.' },
        { id: 4, text: 'La tasa de aprendizaje del algoritmo.', correct: false, explanation: 'La tasa de aprendizaje es un hiperparámetro externo.' }
      ]}
    />
  </SlideLayout>
);

import { Activity, CheckCircle2, AlertTriangle } from 'lucide-react';
