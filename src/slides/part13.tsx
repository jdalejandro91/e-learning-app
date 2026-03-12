import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { MathFormula } from '../components/MathFormula';
import { CodeBlock } from '../components/CodeBlock';
import { Quiz } from '../components/Quiz';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Scale, Percent, AlertTriangle, Code2, LineChart } from 'lucide-react';

export const Slide95 = () => (
  <SlideLayout title="2.4. Evaluación en Regresión" subtitle="Midiendo el error en predicciones continuas">
    <div className="flex flex-col items-center justify-center h-full text-center">
      <TrendingUp className="w-32 h-32 text-sky-500 mb-8" />
      <h2 className="text-4xl font-bold text-white mb-6">Métricas de Regresión</h2>
      <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
        En problemas de regresión, la variable a predecir es un número real (ej. precio de una casa, temperatura, ventas). Por tanto, la evaluación no consiste en "acertar o fallar", sino en medir <strong className="text-sky-400">qué tan lejos</strong> se quedó nuestra predicción del valor real.
      </p>
    </div>
  </SlideLayout>
);

export const Slide96 = () => (
  <SlideLayout title="Error Absoluto Medio (MAE)" subtitle="La métrica más intuitiva">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Target size={24}/> ¿Qué es?</h3>
        <p className="text-neutral-300 mb-4">
          El MAE (<em>Mean Absolute Error</em>) calcula la distancia absoluta (sin signo) entre cada predicción y su valor real, y luego hace la media de todas esas distancias.
        </p>
        <div className="bg-black p-6 rounded-xl border border-sky-900/50 mt-auto text-center">
          <MathFormula block tex="\text{MAE} = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|" />
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-sky-400 mb-4">Interpretación</h4>
        <p className="text-neutral-300 mb-4">
          Es la métrica más fácil de explicar a alguien de negocio. Si predices el precio de casas en euros, un MAE de 10.000€ significa que, en promedio, tu modelo se equivoca por 10.000€ (por arriba o por abajo).
        </p>
        <div className="mt-4 p-4 bg-black border border-neutral-700 rounded-xl">
          <p className="text-sm text-neutral-400"><strong>Ventaja:</strong> Todas las diferencias tienen el mismo peso. No penaliza excesivamente los errores grandes (outliers).</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide97 = () => (
  <SlideLayout title="Error Cuadrático Medio (MSE y RMSE)" subtitle="Penalizando los errores grandes">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-2"><AlertTriangle size={24}/> MSE (Mean Squared Error)</h3>
        <p className="text-neutral-300 mb-4">
          Calcula la diferencia, la eleva al cuadrado (para quitar el signo y penalizar errores grandes), y hace la media.
        </p>
        <div className="bg-black p-4 rounded-xl border border-orange-900/50 text-center mb-4">
          <MathFormula block tex="\text{MSE} = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2" />
        </div>
        <p className="text-sm text-neutral-400">Problema: Las unidades están al cuadrado (ej. euros al cuadrado), lo que lo hace ininterpretable.</p>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2"><Scale size={24}/> RMSE (Root MSE)</h3>
        <p className="text-neutral-300 mb-4">
          Es simplemente la raíz cuadrada del MSE. Esto devuelve la métrica a las unidades originales del problema.
        </p>
        <div className="bg-black p-4 rounded-xl border border-green-900/50 text-center mb-4">
          <MathFormula block tex="\text{RMSE} = \sqrt{\text{MSE}}" />
        </div>
        <p className="text-sm text-neutral-400"><strong>Ventaja:</strong> Penaliza fuertemente los errores grandes. Si un modelo se equivoca por 100€ en una casa, el RMSE lo castigará mucho más que si se equivoca por 10€ en 10 casas.</p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide98 = () => (
  <SlideLayout title="Error Porcentual (MAPE)" subtitle="Midiendo el error relativo">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Percent size={24}/> ¿Qué es?</h3>
        <p className="text-neutral-300 mb-4">
          El MAPE (<em>Mean Absolute Percentage Error</em>) expresa el error como un porcentaje del valor real.
        </p>
        <div className="bg-black p-6 rounded-xl border border-purple-900/50 mt-auto text-center">
          <MathFormula block tex="\text{MAPE} = \frac{100\%}{n} \sum_{i=1}^{n} \left| \frac{y_i - \hat{y}_i}{y_i} \right|" />
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-purple-400 mb-4">¿Por qué usar porcentajes?</h4>
        <p className="text-neutral-300 mb-4">
          Equivocarse por 10.000€ al predecir el precio de una mansión de 5 millones (error del 0.2%) no es lo mismo que equivocarse por 10.000€ al predecir un coche de 20.000€ (error del 50%).
        </p>
        <div className="mt-4 p-4 bg-black border border-neutral-700 rounded-xl">
          <p className="text-sm text-red-400 font-bold mb-2">¡Cuidado!</p>
          <p className="text-sm text-neutral-400">Si el valor real (<MathFormula tex="y_i" />) es 0 o muy cercano a 0, la división explota y el MAPE tiende a infinito. No usar con datos que contengan ceros.</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide99 = () => (
  <SlideLayout title="Coeficiente de Determinación (R²)" subtitle="¿Cuánto explica nuestro modelo?">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4">Concepto</h3>
        <p className="text-neutral-300 mb-4">
          El R² (R-cuadrado) mide la proporción de la varianza en la variable dependiente que es predecible a partir de las variables independientes.
        </p>
        <p className="text-neutral-300 mb-6">
          A diferencia del MAE o RMSE (que van de 0 a infinito y dependen de la escala), el R² es una métrica normalizada que suele ir de 0 a 1.
        </p>
        <div className="bg-black p-4 rounded-xl border border-sky-900/50 mt-auto text-center">
          <MathFormula block tex="R^2 = 1 - \frac{\text{MSE del Modelo}}{\text{MSE del Modelo Base (Media)}}" />
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-sky-400 mb-4">Interpretación</h4>
        <ul className="space-y-4 text-neutral-300">
          <li className="flex items-start gap-3">
            <div className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></div>
            <p><strong className="text-green-400">R² = 1:</strong> El modelo predice perfectamente todos los datos (0 error).</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 w-2 h-2 bg-yellow-500 rounded-full shrink-0"></div>
            <p><strong className="text-yellow-400">R² = 0:</strong> El modelo no es mejor que predecir siempre la media de los datos (DummyRegressor).</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 w-2 h-2 bg-red-500 rounded-full shrink-0"></div>
            <p><strong className="text-red-400">R² &lt; 0:</strong> ¡El modelo es peor que predecir siempre la media! (Suele pasar con sobreajuste extremo en test).</p>
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide100 = () => {
  const [pred1, setPred1] = useState(120);
  const [pred2, setPred2] = useState(250);
  const [pred3, setPred3] = useState(310);

  const real1 = 100;
  const real2 = 200;
  const real3 = 300;

  const err1 = pred1 - real1;
  const err2 = pred2 - real2;
  const err3 = pred3 - real3;

  const mae = (Math.abs(err1) + Math.abs(err2) + Math.abs(err3)) / 3;
  const mse = (Math.pow(err1, 2) + Math.pow(err2, 2) + Math.pow(err3, 2)) / 3;
  const rmse = Math.sqrt(mse);
  const mape = ((Math.abs(err1)/real1 + Math.abs(err2)/real2 + Math.abs(err3)/real3) / 3) * 100;

  return (
    <SlideLayout title="Interactivo: Calculadora de Errores" subtitle="Observa cómo cambian las métricas">
      <div className="flex flex-col h-full">
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex-1 flex flex-col md:flex-row gap-8">
          
          <div className="flex-1 space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Ajusta tus predicciones</h3>
            
            <div className="bg-black p-4 rounded-xl border border-neutral-700">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-neutral-400">Caso 1 (Real: {real1})</span>
                <span className="text-sky-400 font-bold">Pred: {pred1}</span>
              </div>
              <input type="range" min="0" max="200" value={pred1} onChange={(e) => setPred1(Number(e.target.value))} className="w-full accent-sky-500" />
              <p className="text-xs text-neutral-500 mt-1 text-right">Error: {Math.abs(err1)}</p>
            </div>

            <div className="bg-black p-4 rounded-xl border border-neutral-700">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-neutral-400">Caso 2 (Real: {real2})</span>
                <span className="text-sky-400 font-bold">Pred: {pred2}</span>
              </div>
              <input type="range" min="100" max="300" value={pred2} onChange={(e) => setPred2(Number(e.target.value))} className="w-full accent-sky-500" />
              <p className="text-xs text-neutral-500 mt-1 text-right">Error: {Math.abs(err2)}</p>
            </div>

            <div className="bg-black p-4 rounded-xl border border-neutral-700">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-neutral-400">Caso 3 (Real: {real3})</span>
                <span className="text-sky-400 font-bold">Pred: {pred3}</span>
              </div>
              <input type="range" min="200" max="400" value={pred3} onChange={(e) => setPred3(Number(e.target.value))} className="w-full accent-sky-500" />
              <p className="text-xs text-neutral-500 mt-1 text-right">Error: {Math.abs(err3)}</p>
            </div>
            
            <p className="text-xs text-orange-400 mt-4">Prueba a hacer un error muy grande en un solo caso y observa cómo el RMSE se dispara en comparación con el MAE.</p>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-black p-6 rounded-xl border border-sky-900/50 flex flex-col justify-center items-center text-center">
              <h4 className="text-sky-400 font-bold mb-2">MAE</h4>
              <p className="text-3xl font-mono text-white">{mae.toFixed(1)}</p>
              <p className="text-xs text-neutral-500 mt-2">Error absoluto promedio</p>
            </div>
            <div className="bg-black p-6 rounded-xl border border-green-900/50 flex flex-col justify-center items-center text-center">
              <h4 className="text-green-400 font-bold mb-2">RMSE</h4>
              <p className="text-3xl font-mono text-white">{rmse.toFixed(1)}</p>
              <p className="text-xs text-neutral-500 mt-2">Penaliza errores grandes</p>
            </div>
            <div className="bg-black p-6 rounded-xl border border-purple-900/50 flex flex-col justify-center items-center text-center col-span-2">
              <h4 className="text-purple-400 font-bold mb-2">MAPE</h4>
              <p className="text-3xl font-mono text-white">{mape.toFixed(1)}%</p>
              <p className="text-xs text-neutral-500 mt-2">Error porcentual promedio</p>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide101 = () => (
  <SlideLayout title="El Modelo Base (Baseline)" subtitle="DummyRegressor">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Scale size={24}/> La línea base</h3>
        <p className="text-neutral-300 mb-4">
          Antes de evaluar un modelo complejo (ej. Red Neuronal), necesitamos saber si realmente está aprendiendo algo útil. Para ello, comparamos sus métricas con un <strong>modelo base (baseline)</strong>.
        </p>
        <p className="text-neutral-300 mb-6">
          En regresión, el modelo base más común es el <strong>DummyRegressor</strong>, que simplemente ignora las variables de entrada (X) y predice siempre la <strong>media</strong> (o mediana) de la variable objetivo (y) del conjunto de entrenamiento.
        </p>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Ejemplo</h3>
        <p className="text-neutral-300 mb-4 text-sm">
          Si el precio medio de las casas en entrenamiento es 200.000€, el DummyRegressor predecirá 200.000€ para CUALQUIER casa nueva, sin importar si tiene 1 o 10 habitaciones.
        </p>
        <div className="bg-black p-4 rounded-xl border border-neutral-700">
          <p className="text-sm text-neutral-400">Si tu modelo complejo tiene un RMSE de 50.000€, pero el DummyRegressor tiene un RMSE de 48.000€... ¡Tu modelo es peor que predecir siempre la media!</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide102 = () => (
  <SlideLayout title="Código: Evaluación en Regresión" subtitle="Implementación con scikit-learn">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex-1">
        <CodeBlock language="python" code={`from sklearn import datasets # Importa datasets de ejemplo
from sklearn.dummy import DummyRegressor # Importa el regresor base (modelo tonto)
from sklearn.model_selection import cross_val_predict, KFold # Importa herramientas de validación cruzada
import sklearn.metrics as metrics # Importa el módulo de métricas
import numpy as np # Importa numpy para funciones matemáticas como la raíz cuadrada

# 1. Carga de datos y modelo
datos = datasets.load_diabetes() # Carga el dataset de progresión de diabetes
reg = DummyRegressor(strategy='mean') # Instancia un modelo que SIEMPRE predice la media del target

# 2. Validación Cruzada (obtenemos todas las predicciones)
# cross_val_predict devuelve las predicciones para cada instancia 
# generadas cuando esa instancia específica estaba en el conjunto de test (out-of-fold).
y_pred = cross_val_predict(reg, datos.data, datos.target, 
                           cv=KFold(n_splits=10)) # Usa 10-Fold Cross Validation

# 3. Cálculo de Métricas Globales
# Comparamos los valores reales (datos.target) con las predicciones out-of-fold (y_pred)
print("MAE:", metrics.mean_absolute_error(datos.target, y_pred)) # Error Absoluto Medio
print("MSE:", metrics.mean_squared_error(datos.target, y_pred)) # Error Cuadrático Medio
print("RMSE:", np.sqrt(metrics.mean_squared_error(datos.target, y_pred))) # Raíz del Error Cuadrático Medio
print("MAPE:", metrics.mean_absolute_percentage_error(datos.target, y_pred)) # Error Porcentual Absoluto Medio
print("R2:", metrics.r2_score(datos.target, y_pred)) # Coeficiente de Determinación R²`} />
      </div>
    </div>
  </SlideLayout>
);

export const Slide103 = () => (
  <SlideLayout title="Análisis Visual: Scatter Plot" subtitle="Predicción vs Realidad">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><LineChart size={24}/> Más allá de los números</h3>
        <p className="text-neutral-300 mb-4">
          Las métricas numéricas (MAE, RMSE) resumen el error en un solo número, pero pueden ocultar patrones sistemáticos de error.
        </p>
        <p className="text-neutral-300 mb-6">
          La mejor forma de evaluar un modelo de regresión es graficar los <strong>Valores Reales (Eje X)</strong> frente a los <strong>Valores Predichos (Eje Y)</strong>.
        </p>
        <ul className="list-disc pl-5 text-neutral-400 space-y-2 text-sm">
          <li>Un modelo perfecto tendría todos los puntos sobre la diagonal (y = x).</li>
          <li>Si los puntos se desvían sistemáticamente hacia arriba o abajo en ciertas zonas, el modelo tiene un sesgo.</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-2xl flex items-center justify-center relative">
        {/* Mock Scatter Plot */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Axes */}
          <line x1="10" y1="90" x2="90" y2="90" stroke="black" strokeWidth="1" />
          <line x1="10" y1="90" x2="10" y2="10" stroke="black" strokeWidth="1" />
          
          {/* Perfect Prediction Line */}
          <line x1="10" y1="90" x2="90" y2="10" stroke="red" strokeDasharray="2" strokeWidth="1" />
          
          {/* Scatter Points (Simulated good prediction with some noise) */}
          {Array.from({length: 30}).map((_, i) => {
            const x = 20 + Math.random() * 60;
            const y = 100 - x + (Math.random() * 10 - 5); // y is inverted in SVG
            return <circle key={i} cx={x} cy={y} r="1.5" fill="#3b82f6" opacity="0.7" />
          })}
          
          <text x="50" y="98" fontSize="4" textAnchor="middle">Valor Real (y)</text>
          <text x="2" y="50" fontSize="4" textAnchor="middle" transform="rotate(-90 2 50)">Predicción (ŷ)</text>
        </svg>
      </div>
    </div>
  </SlideLayout>
);

export const Slide104 = () => (
  <SlideLayout title="Quiz: Evaluación en Regresión" subtitle="Evaluación de la Sección 2.4">
    <Quiz 
      question="Estás entrenando un modelo para predecir el precio de casas. Quieres una métrica que penalice muy fuertemente los errores grandes (por ejemplo, equivocarse por 100.000€ debe ser castigado mucho más que equivocarse por 10.000€ diez veces). ¿Qué métrica deberías usar?"
      options={[
        { id: 1, text: 'Error Absoluto Medio (MAE).', correct: false, explanation: 'El MAE trata todos los errores por igual, de forma lineal.' },
        { id: 2, text: 'Error Porcentual (MAPE).', correct: false, explanation: 'El MAPE mide el error relativo, no penaliza exponencialmente los errores absolutos grandes.' },
        { id: 3, text: 'Raíz del Error Cuadrático Medio (RMSE).', correct: true, explanation: '¡Correcto! Al elevar los errores al cuadrado antes de promediarlos, el RMSE (y el MSE) penaliza de forma cuadrática los errores grandes, dándoles mucho más peso en la métrica final.' },
        { id: 4, text: 'Coeficiente de Determinación (R²).', correct: false, explanation: 'El R² mide la varianza explicada, no es una medida directa de la magnitud del error en las unidades originales.' }
      ]}
    />
  </SlideLayout>
);
