import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { CodeBlock } from '../components/CodeBlock';
import { motion } from 'framer-motion';
import { MathFormula } from '../components/MathFormula';
import { Quiz } from '../components/Quiz';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { Target, SplitSquareHorizontal, RefreshCw, Activity } from 'lucide-react';

export const Slide59 = () => (
  <SlideLayout title="1.5. Evaluación de Modelos" subtitle="¿Cómo sabemos si nuestro modelo es bueno?">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-neutral-900 p-10 rounded-3xl border border-neutral-800 shadow-2xl max-w-4xl w-full text-center">
        <Target className="w-24 h-24 text-green-500 mx-auto mb-8" />
        <h3 className="text-3xl font-bold text-white mb-6">El objetivo final</h3>
        <p className="text-xl text-neutral-300 leading-relaxed mb-8">
          No basta con entrenar un modelo; debemos medir su capacidad para <strong className="text-green-400">generalizar</strong>. Un modelo que solo memoriza los datos de entrenamiento fallará estrepitosamente en el mundo real.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-black p-6 rounded-xl border border-neutral-800">
            <SplitSquareHorizontal className="text-green-500 mb-4" size={32} />
            <h4 className="text-white font-bold mb-2">Particionado</h4>
            <p className="text-sm text-neutral-400">Dividir los datos para simular el futuro.</p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-neutral-800">
            <Activity className="text-green-500 mb-4" size={32} />
            <h4 className="text-white font-bold mb-2">Diagnóstico</h4>
            <p className="text-sm text-neutral-400">Detectar Overfitting y Underfitting.</p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-neutral-800">
            <RefreshCw className="text-green-500 mb-4" size={32} />
            <h4 className="text-white font-bold mb-2">Métricas</h4>
            <p className="text-sm text-neutral-400">Cuantificar el error matemáticamente.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide60 = () => {
  const [split, setSplit] = useState(80);
  
  return (
    <SlideLayout title="1.5.1. Particionado de Datos" subtitle="Train, Validation, Test">
      <div className="flex flex-col h-full">
        <p className="text-lg text-neutral-300 mb-8 text-center max-w-4xl mx-auto">
          Para evaluar un modelo, dividimos nuestro dataset original. La regla de oro: <strong className="text-red-400">NUNCA evalúes el modelo con los mismos datos que usaste para entrenarlo.</strong>
        </p>

        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col items-center mb-8">
          <h3 className="text-xl font-bold text-white mb-6">Ajusta el tamaño del particionado</h3>
          <input 
            type="range" 
            min="50" max="90" step="5" 
            value={split} 
            onChange={(e) => setSplit(Number(e.target.value))}
            className="w-full max-w-md accent-green-500 mb-8"
          />
          
          <div className="w-full h-24 bg-black rounded-xl border border-neutral-800 flex overflow-hidden">
            <motion.div 
              className="h-full bg-green-600/80 flex items-center justify-center border-r border-black"
              style={{ width: `${split}%` }}
              layout
            >
              <div className="text-center">
                <span className="block font-bold text-white text-lg">Entrenamiento (Train)</span>
                <span className="text-green-200 font-mono">{split}%</span>
              </div>
            </motion.div>
            <motion.div 
              className="h-full bg-sky-600/80 flex items-center justify-center"
              style={{ width: `${100 - split}%` }}
              layout
            >
              <div className="text-center">
                <span className="block font-bold text-white text-lg">Prueba (Test)</span>
                <span className="text-sky-200 font-mono">{100 - split}%</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          <div className="bg-black p-6 rounded-xl border border-green-900/50">
            <h4 className="text-green-500 font-bold mb-2">1. Train Set (70-80%)</h4>
            <p className="text-sm text-neutral-400">El material de estudio. El algoritmo usa estos datos para ajustar sus parámetros internos (aprender).</p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-purple-900/50">
            <h4 className="text-purple-400 font-bold mb-2">2. Validation Set (Opcional)</h4>
            <p className="text-sm text-neutral-400">El examen de prueba. Se usa durante el entrenamiento para ajustar hiperparámetros y evitar overfitting.</p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-sky-900/50">
            <h4 className="text-sky-400 font-bold mb-2">3. Test Set (20-30%)</h4>
            <p className="text-sm text-neutral-400">El examen final. Datos "invisibles" para el modelo hasta el final. Mide la capacidad real de generalización.</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide61 = () => {
  const [complexity, setComplexity] = useState(2); // 1: Underfit, 2: Good, 3: Overfit

  const generateData = () => {
    const points = [];
    for (let i = 0; i <= 10; i++) {
      points.push({
        x: i,
        y: 2 * i + 10 + (Math.random() * 10 - 5), // Linear base + noise
      });
    }
    return points;
  };

  const [data] = useState(generateData());

  const getLineData = () => {
    const line = [];
    for (let i = 0; i <= 10; i += 0.5) {
      let y = 0;
      if (complexity === 1) {
        y = 20; // Underfitting (horizontal line)
      } else if (complexity === 2) {
        y = 2 * i + 10; // Good fit (linear)
      } else {
        // Overfitting (polynomial passing through points roughly)
        const point = data.find(p => Math.abs(p.x - i) < 0.1);
        y = point ? point.y : 2 * i + 10 + Math.sin(i * 3) * 10;
      }
      line.push({ x: i, lineY: y });
    }
    return line;
  };

  return (
    <SlideLayout title="1.5.2. Overfitting y Underfitting" subtitle="El equilibrio perfecto">
      <div className="flex flex-col h-full">
        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => setComplexity(1)}
            className={`px-6 py-3 rounded-xl font-bold transition-colors ${complexity === 1 ? 'bg-orange-500 text-white' : 'bg-neutral-800 text-neutral-400'}`}
          >
            Subajuste (Underfitting)
          </button>
          <button 
            onClick={() => setComplexity(2)}
            className={`px-6 py-3 rounded-xl font-bold transition-colors ${complexity === 2 ? 'bg-green-500 text-white' : 'bg-neutral-800 text-neutral-400'}`}
          >
            Ajuste Óptimo
          </button>
          <button 
            onClick={() => setComplexity(3)}
            className={`px-6 py-3 rounded-xl font-bold transition-colors ${complexity === 3 ? 'bg-red-500 text-white' : 'bg-neutral-800 text-neutral-400'}`}
          >
            Sobreajuste (Overfitting)
          </button>
        </div>

        <div className="flex-1 bg-neutral-900 rounded-2xl border border-neutral-800 p-6 relative">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
              <XAxis type="number" dataKey="x" hide />
              <YAxis type="number" domain={[0, 40]} hide />
              <Scatter name="Datos Reales" data={data} fill="#a3a3a3" />
              <Scatter name="Modelo" data={getLineData()} line={{ stroke: complexity === 1 ? '#f97316' : complexity === 2 ? '#22c55e' : '#ef4444', strokeWidth: 3 }} shape={<></>} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className={`p-4 rounded-xl border ${complexity === 1 ? 'border-orange-500 bg-orange-500/10' : 'border-neutral-800 bg-black'}`}>
            <h4 className="font-bold text-orange-400 mb-2">Underfitting</h4>
            <p className="text-sm text-neutral-400">El modelo es demasiado simple. No capta el patrón subyacente. (Alto sesgo).</p>
          </div>
          <div className={`p-4 rounded-xl border ${complexity === 2 ? 'border-green-500 bg-green-500/10' : 'border-neutral-800 bg-black'}`}>
            <h4 className="font-bold text-green-400 mb-2">Óptimo</h4>
            <p className="text-sm text-neutral-400">Capta la tendencia general sin memorizar el ruido. Generalizará bien.</p>
          </div>
          <div className={`p-4 rounded-xl border ${complexity === 3 ? 'border-red-500 bg-red-500/10' : 'border-neutral-800 bg-black'}`}>
            <h4 className="font-bold text-red-400 mb-2">Overfitting</h4>
            <p className="text-sm text-neutral-400">El modelo es demasiado complejo. Memoriza el ruido. Fallará con datos nuevos. (Alta varianza).</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide62 = () => (
  <SlideLayout title="1.5.3. Validación Cruzada (K-Fold)" subtitle="Aprovechando al máximo los datos">
    <div className="flex flex-col h-full">
      <p className="text-lg text-neutral-300 mb-8 text-center max-w-4xl mx-auto">
        Si tenemos pocos datos, apartar un 20% para Test puede ser arriesgado (podríamos tener mala suerte con la partición). La <strong className="text-green-400">Validación Cruzada</strong> resuelve esto entrenando y evaluando múltiples veces.
      </p>

      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex-1 flex flex-col justify-center items-center">
        <h3 className="text-xl font-bold text-white mb-8">Ejemplo: K-Fold con K=5</h3>
        
        <div className="space-y-4 w-full max-w-3xl">
          {[1, 2, 3, 4, 5].map((iteration) => (
            <div key={iteration} className="flex items-center gap-4">
              <span className="text-neutral-500 font-mono w-20">Iteración {iteration}</span>
              <div className="flex-1 flex h-10 rounded-lg overflow-hidden border border-neutral-700">
                {[1, 2, 3, 4, 5].map((fold) => (
                  <div 
                    key={fold} 
                    className={`flex-1 flex items-center justify-center border-r border-neutral-800 last:border-0 transition-colors duration-500 ${
                      fold === iteration ? 'bg-sky-600 text-white font-bold' : 'bg-green-600/50 text-green-100'
                    }`}
                  >
                    {fold === iteration ? 'Test' : 'Train'}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-black rounded-xl border border-neutral-800 max-w-3xl w-full text-center">
          <p className="text-neutral-300">
            El rendimiento final del modelo es el <strong className="text-green-400">promedio</strong> de las 5 iteraciones. Esto nos da una estimación mucho más robusta y confiable de cómo se comportará en el mundo real.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide63 = () => {
  const [tp, setTp] = useState(85);
  const [fp, setFp] = useState(15);
  const [fn, setFn] = useState(10);
  const [tn, setTn] = useState(90);

  const total = tp + fp + fn + tn;
  const accuracy = ((tp + tn) / total).toFixed(2);
  const precision = (tp / (tp + fp)).toFixed(2);
  const recall = (tp / (tp + fn)).toFixed(2);
  const f1 = (2 * (Number(precision) * Number(recall)) / (Number(precision) + Number(recall))).toFixed(2);

  return (
    <SlideLayout title="1.5.4. Métricas de Clasificación" subtitle="La Matriz de Confusión">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Matriz Interactiva</h3>
          <p className="text-sm text-neutral-400 text-center mb-6">Modifica los valores para ver cómo cambian las métricas.</p>
          
          <div className="grid grid-cols-3 gap-2 text-center mb-8">
            <div></div>
            <div className="font-bold text-neutral-300">Predicción Positiva</div>
            <div className="font-bold text-neutral-300">Predicción Negativa</div>
            
            <div className="font-bold text-neutral-300 flex items-center justify-end pr-4">Real Positivo</div>
            <div className="bg-green-900/40 p-4 rounded-xl border border-green-700">
              <div className="text-xs text-green-400 font-bold mb-1">Verdadero Positivo (TP)</div>
              <input type="number" value={tp} onChange={e => setTp(Number(e.target.value))} className="w-full bg-black text-white text-center rounded p-1" />
            </div>
            <div className="bg-red-900/40 p-4 rounded-xl border border-red-700">
              <div className="text-xs text-red-400 font-bold mb-1">Falso Negativo (FN)</div>
              <input type="number" value={fn} onChange={e => setFn(Number(e.target.value))} className="w-full bg-black text-white text-center rounded p-1" />
            </div>
            
            <div className="font-bold text-neutral-300 flex items-center justify-end pr-4">Real Negativo</div>
            <div className="bg-red-900/40 p-4 rounded-xl border border-red-700">
              <div className="text-xs text-red-400 font-bold mb-1">Falso Positivo (FP)</div>
              <input type="number" value={fp} onChange={e => setFp(Number(e.target.value))} className="w-full bg-black text-white text-center rounded p-1" />
            </div>
            <div className="bg-green-900/40 p-4 rounded-xl border border-green-700">
              <div className="text-xs text-green-400 font-bold mb-1">Verdadero Negativo (TN)</div>
              <input type="number" value={tn} onChange={e => setTn(Number(e.target.value))} className="w-full bg-black text-white text-center rounded p-1" />
            </div>
          </div>
        </div>

        <div className="bg-black p-6 rounded-2xl border border-neutral-800 flex flex-col justify-center space-y-6">
          <div>
            <div className="flex justify-between items-end mb-1">
              <h4 className="font-bold text-white">Exactitud (Accuracy)</h4>
              <span className="text-2xl font-mono text-green-400">{accuracy}</span>
            </div>
            <p className="text-xs text-neutral-500 mb-2">¿Qué porcentaje de predicciones fueron correctas en total?</p>
            <MathFormula tex="\frac{TP + TN}{Total}" />
          </div>
          
          <div>
            <div className="flex justify-between items-end mb-1">
              <h4 className="font-bold text-white">Precisión (Precision)</h4>
              <span className="text-2xl font-mono text-sky-400">{precision}</span>
            </div>
            <p className="text-xs text-neutral-500 mb-2">De los que predije como positivos, ¿cuántos lo eran realmente?</p>
            <MathFormula tex="\frac{TP}{TP + FP}" />
          </div>

          <div>
            <div className="flex justify-between items-end mb-1">
              <h4 className="font-bold text-white">Sensibilidad (Recall)</h4>
              <span className="text-2xl font-mono text-purple-400">{recall}</span>
            </div>
            <p className="text-xs text-neutral-500 mb-2">De todos los positivos reales, ¿cuántos logré encontrar?</p>
            <MathFormula tex="\frac{TP}{TP + FN}" />
          </div>

          <div>
            <div className="flex justify-between items-end mb-1">
              <h4 className="font-bold text-white">F1-Score</h4>
              <span className="text-2xl font-mono text-orange-400">{f1}</span>
            </div>
            <p className="text-xs text-neutral-500 mb-2">Media armónica entre Precisión y Recall.</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide63a = () => (
  <SlideLayout title="Código: Métricas de Regresión" subtitle="Evaluando modelos continuos">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Scikit-Learn</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`import numpy as np # Importa numpy para operaciones con arrays
from math import sqrt # Importa sqrt para calcular la raíz cuadrada
from sklearn.metrics import mean_squared_error, mean_absolute_error # Importa métricas de regresión

# y_true: Valores reales (ground truth)
# y_pred: Predicciones generadas por el modelo
y_true = [3.0, -0.5, 2.0, 7.0] # Datos reales
y_pred = [2.5, 0.0, 2.0, 8.0] # Predicciones

# 1. Error Medio Absoluto (MAE)
# Mide el promedio de los errores absolutos. Es robusto a outliers.
mae = mean_absolute_error(y_true, y_pred) # Calcula el MAE
print(f"MAE: {mae}") # Imprime: 0.5

# 2. Error Cuadrático Medio (MSE)
# Penaliza más los errores grandes al elevarlos al cuadrado.
mse = mean_squared_error(y_true, y_pred) # Calcula el MSE
print(f"MSE: {mse}") # Imprime: 0.375

# 3. Raíz del Error Cuadrático Medio (RMSE)
# Devuelve el error a las unidades originales de la variable objetivo.
rmse = sqrt(mse) # Calcula el RMSE sacando la raíz cuadrada del MSE
print(f"RMSE: {rmse}") # Imprime: 0.612...

# 4. Error Absoluto Porcentual Medio (MAPE)
# Mide el error en términos porcentuales relativos al valor real.
# Implementación manual (o usar mean_absolute_percentage_error en versiones recientes de sklearn)
mape = np.mean(np.abs((np.array(y_true) - np.array(y_pred)) / np.array(y_true))) * 100 # Calcula MAPE
print(f"MAPE: {mape}%") # Imprime el porcentaje de error`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Métricas</h3>
        <ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">MAE (Mean Absolute Error):</strong> Promedio de las diferencias absolutas entre predicción y valor real. Es fácil de interpretar (está en las mismas unidades que la variable objetivo).
          </li>
          <li>
            <strong className="text-white">MSE (Mean Squared Error):</strong> Promedio de los errores al cuadrado. Penaliza fuertemente los errores grandes (outliers) porque al elevar al cuadrado, un error de 10 se convierte en 100.
          </li>
          <li>
            <strong className="text-white">RMSE (Root Mean Squared Error):</strong> La raíz cuadrada del MSE. Devuelve la métrica a las unidades originales de la variable, manteniendo la penalización a errores grandes.
          </li>
          <li>
            <strong className="text-white">MAPE (Mean Absolute Percentage Error):</strong> Expresa el error como un porcentaje del valor real. Muy útil para explicar el error a perfiles de negocio (ej. "nuestro modelo tiene un 5% de error").
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide63b = () => (
  <SlideLayout title="Código: Métricas de Clasificación" subtitle="Evaluando modelos categóricos">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Scikit-Learn</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`from sklearn.metrics import confusion_matrix # Importa función para la matriz de confusión
from sklearn.metrics import f1_score, classification_report # Importa métricas adicionales

# y_test: Etiquetas reales (0 = Sano/Negativo, 1 = Enfermo/Positivo)
# pred: Predicciones generadas por el modelo clasificador
y_test = [0, 1, 0, 0, 1, 1, 0] # Realidad
pred   = [0, 1, 0, 1, 1, 0, 0] # Predicción

# 1. Matriz de Confusión
# Compara las predicciones con la realidad para contar aciertos y fallos por clase
confusion = confusion_matrix(y_test, pred) # Calcula la matriz
print("Matriz de Confusión:")
print(confusion) # Imprime la matriz
# Resultado:
# [[3 1]   <- Fila 0 (Sanos reales): 3 TN (Verdaderos Negativos), 1 FP (Falsos Positivos)
#  [1 2]]  <- Fila 1 (Enfermos reales): 1 FN (Falso Negativo), 2 TP (Verdaderos Positivos)

# 2. Puntaje F1 (F1-Score)
# Media armónica entre Precisión y Sensibilidad (Recall). Útil para clases desbalanceadas.
f1 = f1_score(y_test, pred) # Calcula el F1-Score para la clase positiva (1)
print(f"F1-Score: {f1:.2f}") # Imprime el F1-Score

# 3. Reporte Completo de Clasificación
# Genera un resumen de texto con Precision, Recall, F1-Score y Soporte para cada clase
reporte = classification_report(
    y_test, # Etiquetas reales
    pred, # Predicciones
    target_names=["Sano", "Enfermo"] # Nombres legibles para las clases
)
print(reporte) # Imprime el reporte detallado`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-green-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">confusion_matrix:</strong> Genera una matriz 2x2 (para clasificación binaria). La diagonal principal <code>[0,0]</code> y <code>[1,1]</code> contiene los aciertos (Verdaderos Negativos y Verdaderos Positivos).
          </li>
          <li>
            <strong className="text-white">f1_score:</strong> Calcula la media armónica entre Precisión y Recall. Es la métrica recomendada cuando las clases están desbalanceadas (ej. 99% sanos, 1% enfermos).
          </li>
          <li>
            <strong className="text-white">classification_report:</strong> Genera un resumen en texto con las métricas clave (Precision, Recall, F1-score, Support) para cada clase por separado, además de los promedios globales (macro avg y weighted avg).
          </li>
          <li>
            <strong className="text-white">El problema del Accuracy:</strong> Si el 99% de los pacientes están sanos, un modelo "tonto" que siempre diga "Sano" tendrá 99% de Accuracy, pero 0% de Recall para la clase "Enfermo". Por eso usamos F1-Score.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide64 = () => (
  <SlideLayout title="Evaluación Final: Capítulo 1" subtitle="Demuestra tu dominio metodológico">
    <Quiz 
      question="Entrenas un modelo para detectar spam. En el conjunto de Train tiene un 99% de exactitud, pero en el conjunto de Test cae al 60%. ¿Qué problema está sufriendo tu modelo y cómo podrías detectarlo de forma más robusta?"
      options={[
        { id: 1, text: 'Underfitting. Debería usar Validación Cruzada (K-Fold).', correct: false, explanation: 'Si fuera underfitting, el rendimiento en Train también sería malo (ej. 60% en ambos).' },
        { id: 2, text: 'Overfitting. Debería usar Validación Cruzada (K-Fold).', correct: true, explanation: '¡Excelente! El modelo memorizó los datos de Train (99%) pero no generaliza (60% en Test). La Validación Cruzada te ayudaría a detectar esta inestabilidad antes del despliegue.' },
        { id: 3, text: 'GIGO (Basura entra, basura sale). Debería imputar los valores nulos.', correct: false, explanation: 'GIGO afecta a todo, pero la disparidad enorme entre Train y Test es el síntoma clásico de Overfitting.' },
        { id: 4, text: 'Falta de datos. Debería usar One-Hot Encoding.', correct: false, explanation: 'One-Hot Encoding es para limpiar datos categóricos, no resuelve directamente la disparidad Train/Test.' }
      ]}
    />
  </SlideLayout>
);
