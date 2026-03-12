import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { MathFormula } from '../components/MathFormula';
import { CodeBlock } from '../components/CodeBlock';
import { Quiz } from '../components/Quiz';
import { motion } from 'framer-motion';
import { Shield, Target, AlertTriangle, Scale, Zap, Info, LineChart } from 'lucide-react';

export const Slide125 = () => (
  <SlideLayout title="Regularización: Ridge y Lasso" subtitle="Controlando el sobreajuste">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">¿Por qué regularizar?</h3>
        <p className="text-neutral-300 mb-6">
          Cuando tenemos muchos atributos o pocos datos, el modelo puede volverse demasiado complejo y "memorizar" el ruido (overfitting).
        </p>
        <div className="bg-black/50 p-6 rounded-xl border border-sky-500/20">
          <p className="text-sky-400 font-bold mb-2">La Idea:</p>
          <p className="text-sm text-neutral-400">Añadimos una penalización a la función de pérdida que castiga los coeficientes <MathFormula tex="w" /> muy grandes.</p>
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <h4 className="text-orange-400 font-bold mb-2">Ridge (L2)</h4>
          <p className="text-sm text-neutral-400 mb-2">Penaliza el cuadrado de los pesos. Reduce todos los pesos pero no los hace cero.</p>
          <MathFormula tex="Loss + \alpha \sum w_i^2" />
        </div>
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <h4 className="text-green-400 font-bold mb-2">Lasso (L1)</h4>
          <p className="text-sm text-neutral-400 mb-2">Penaliza el valor absoluto. Puede hacer que algunos pesos sean exactamente cero (selección de atributos).</p>
          <MathFormula tex="Loss + \alpha \sum |w_i|" />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide125a = () => (
  <SlideLayout title="Código: Regresión Regularizada" subtitle="Implementando Ridge, Lasso y ElasticNet">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Scikit-Learn</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`from sklearn.linear_model import Ridge, Lasso, ElasticNet # Importa los modelos regularizados

# 1. Ridge Regression (Penalización L2)
# alpha controla la fuerza de la regularización (mayor alpha = mayor penalización = pesos más pequeños)
# Penaliza la suma de los cuadrados de los pesos (w^2)
ridge = Ridge(alpha=10.0) # Instancia el modelo Ridge
ridge.fit(X_train, y_train) # Entrena el modelo
print("Coeficientes Ridge:", ridge.coef_) # Los pesos serán pequeños, pero rara vez exactamente 0

# 2. Lasso Regression (Penalización L1)
# Penaliza la suma del valor absoluto de los pesos (|w|)
# Tiende a hacer que muchos coeficientes sean exactamente 0.0 (selección de características implícita)
lasso = Lasso(alpha=100.0) # Instancia el modelo Lasso (alpha suele necesitar ser más grande que en Ridge)
lasso.fit(X_train, y_train) # Entrena el modelo
print("Coeficientes Lasso:", lasso.coef_) # Muchos pesos serán 0, indicando que esas variables fueron ignoradas

# 3. ElasticNet (Combinación L1 + L2)
# Combina las penalizaciones de Ridge y Lasso
# l1_ratio=1 es equivalente a usar solo Lasso, l1_ratio=0 es equivalente a usar solo Ridge
elastic = ElasticNet(alpha=0.01, l1_ratio=0.5) # Instancia ElasticNet (50% L1, 50% L2)
elastic.fit(X_train, y_train) # Entrena el modelo
print("Coeficientes ElasticNet:", elastic.coef_)`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">sklearn.linear_model.Ridge:</strong> Implementa la regresión lineal con penalización L2. "Encoge" los coeficientes hacia cero, pero rara vez los hace exactamente cero. Útil cuando se cree que todas las variables aportan algo.
          </li>
          <li>
            <strong className="text-white">sklearn.linear_model.Lasso:</strong> Implementa la penalización L1. Fuerza a que los coeficientes de las variables menos importantes sean exactamente <code>0.0</code>. Actúa como un método automático de selección de características (feature selection).
          </li>
          <li>
            <strong className="text-white">sklearn.linear_model.ElasticNet:</strong> Combina ambas penalizaciones. Es útil cuando hay múltiples características correlacionadas entre sí (Lasso tendería a elegir una al azar y descartar el resto, ElasticNet tiende a seleccionarlas juntas).
          </li>
          <li>
            <strong className="text-white">Parámetro <code>alpha</code>:</strong> Constante que multiplica el término de penalización. <code>alpha=0</code> es equivalente a la Regresión Lineal ordinaria (OLS). Valores más altos aumentan la restricción sobre los coeficientes, previniendo el sobreajuste (overfitting).
          </li>
          <li>
            <strong className="text-white">Parámetro <code>l1_ratio</code> (en ElasticNet):</strong> Controla la mezcla entre L1 y L2. Un valor de <code>0.5</code> significa una mezcla 50/50.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide126 = () => {
  const [slope, setSlope] = useState(1);
  const [intercept, setIntercept] = useState(0);

  return (
    <SlideLayout title="Interactivo: Ajuste Lineal" subtitle="Visualizando la pendiente y el sesgo">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <label className="block text-white mb-4 font-bold flex justify-between">
                  <span>Pendiente (w₁):</span>
                  <span className="text-sky-400">{slope.toFixed(1)}</span>
                </label>
                <input 
                  type="range" min="-2" max="2" step="0.1" value={slope} 
                  onChange={(e) => setSlope(parseFloat(e.target.value))}
                  className="w-full accent-sky-500"
                />
              </div>
              <div>
                <label className="block text-white mb-4 font-bold flex justify-between">
                  <span>Intersección (w₀):</span>
                  <span className="text-sky-400">{intercept.toFixed(1)}</span>
                </label>
                <input 
                  type="range" min="-50" max="50" step="1" value={intercept} 
                  onChange={(e) => setIntercept(parseFloat(e.target.value))}
                  className="w-full accent-sky-500"
                />
              </div>
              <div className="p-4 bg-black rounded-xl border border-neutral-800">
                <MathFormula block tex={`\hat{y} = ${intercept.toFixed(1)} + ${slope.toFixed(1)}x`} />
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 h-64 relative overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Grid */}
                <line x1="0" y1="50" x2="100" y2="50" stroke="#e2e8f0" strokeWidth="0.5" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="#e2e8f0" strokeWidth="0.5" />
                
                {/* Data points */}
                {[20, 40, 60, 80].map((x, i) => (
                  <circle key={i} cx={x} cy={100 - (x * 0.8 + 10)} r="2" fill="#94a3b8" />
                ))}
                
                {/* Regression Line */}
                <line 
                  x1="0" y1={100 - (0 * slope + (intercept + 50))} 
                  x2="100" y2={100 - (100 * slope + (intercept + 50))} 
                  stroke="#3b82f6" strokeWidth="2" 
                />
              </svg>
              <div className="absolute bottom-2 right-2 text-[10px] text-neutral-400">Visualización simplificada</div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide127 = () => (
  <SlideLayout title="Hipótesis: Homocedasticidad" subtitle="La varianza constante">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">¿Qué es?</h3>
        <p className="text-neutral-300 mb-6">
          Significa que el error (la dispersión de los puntos respecto a la línea) debe ser <strong>constante</strong> para todos los valores de X.
        </p>
        <div className="bg-red-500/10 p-6 rounded-xl border border-red-500/20">
          <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2"><AlertTriangle size={18}/> Heterocedasticidad</h4>
          <p className="text-sm text-neutral-400">Si el error aumenta a medida que X aumenta (forma de abanico), el modelo no es fiable en rangos altos.</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl flex flex-col items-center justify-center space-y-8">
        <div className="w-full h-32 relative">
          <p className="absolute -top-6 left-0 text-[10px] font-bold text-green-600">HOMOCEDASTICIDAD (OK)</p>
          <svg viewBox="0 0 100 40" className="w-full h-full">
            <line x1="0" y1="20" x2="100" y2="20" stroke="#cbd5e1" strokeWidth="1" />
            {Array.from({length: 20}).map((_, i) => (
              <circle key={i} cx={i * 5} cy={20 + (Math.random() - 0.5) * 10} r="1" fill="#22c55e" />
            ))}
          </svg>
        </div>
        <div className="w-full h-32 relative">
          <p className="absolute -top-6 left-0 text-[10px] font-bold text-red-600">HETEROCEDASTICIDAD (ERROR)</p>
          <svg viewBox="0 0 100 40" className="w-full h-full">
            <line x1="0" y1="20" x2="100" y2="20" stroke="#cbd5e1" strokeWidth="1" />
            {Array.from({length: 20}).map((_, i) => (
              <circle key={i} cx={i * 5} cy={20 + (Math.random() - 0.5) * (i * 1.5)} r="1" fill="#ef4444" />
            ))}
          </svg>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide128 = () => (
  <SlideLayout title="Hipótesis: Normalidad de Errores" subtitle="La campana de Gauss">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">Distribución del Error</h3>
        <p className="text-neutral-300 mb-6">
          Para que las pruebas de significación estadística sean válidas, los residuos (errores) deben seguir una distribución normal con media cero.
        </p>
        <div className="bg-black/50 p-6 rounded-xl border border-sky-500/20">
          <p className="text-sm text-neutral-400">
            Si los errores están sesgados, significa que hay un patrón en los datos que el modelo lineal no está capturando.
          </p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl flex items-center justify-center">
        <svg viewBox="0 0 100 60" className="w-full h-full">
          <path d="M 10 50 Q 50 -10 90 50" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
          <line x1="50" y1="50" x2="50" y2="10" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2" />
          <text x="50" y="58" fontSize="4" textAnchor="middle" fill="#64748b">Media = 0</text>
          <text x="50" y="5" fontSize="4" textAnchor="middle" fill="#3b82f6" fontWeight="bold">Distribución Normal de Residuos</text>
        </svg>
      </div>
    </div>
  </SlideLayout>
);

export const Slide129 = () => (
  <SlideLayout title="Multicolinealidad" subtitle="Variables redundantes">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-8">
          <Zap className="text-red-500" size={40} />
        </div>
        <h3 className="text-3xl font-bold text-white mb-6">El peligro de la redundancia</h3>
        <p className="text-xl text-neutral-300 max-w-3xl mb-8">
          Ocurre cuando dos o más variables independientes están <strong>fuertemente correlacionadas</strong> entre sí.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl text-left">
          <div className="bg-black p-6 rounded-2xl border border-red-500/20">
            <h4 className="text-red-400 font-bold mb-2">Consecuencia</h4>
            <p className="text-sm text-neutral-400">Los coeficientes se vuelven inestables y difíciles de interpretar. Pequeños cambios en los datos pueden cambiar drásticamente los pesos.</p>
          </div>
          <div className="bg-black p-6 rounded-2xl border border-green-500/20">
            <h4 className="text-green-400 font-bold mb-2">Solución</h4>
            <p className="text-sm text-neutral-400">Eliminar variables redundantes, usar PCA (Reducción de dimensionalidad) o aplicar regularización Ridge/Lasso.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide130 = () => (
  <SlideLayout title="Métricas de Evaluación" subtitle="¿Cómo de bueno es el modelo?">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">R² (Coeficiente de Determinación)</h3>
        <p className="text-neutral-300 mb-6">
          Indica qué porcentaje de la varianza de la variable objetivo es explicada por el modelo.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-black rounded-xl border border-neutral-800">
            <div className="text-sky-400 font-bold text-xl">1.0</div>
            <p className="text-sm text-neutral-400">Modelo perfecto (explica el 100%).</p>
          </div>
          <div className="flex items-center gap-4 p-4 bg-black rounded-xl border border-neutral-800">
            <div className="text-sky-400 font-bold text-xl">0.0</div>
            <p className="text-sm text-neutral-400">Igual que predecir siempre la media.</p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-sky-400 mb-6">Otras métricas clave</h4>
        <ul className="space-y-4">
          <li className="p-4 bg-black rounded-xl border border-neutral-800">
            <p className="text-white font-bold">MAE (Mean Absolute Error)</p>
            <p className="text-xs text-neutral-500">Promedio de los errores en las mismas unidades que Y.</p>
          </li>
          <li className="p-4 bg-black rounded-xl border border-neutral-800">
            <p className="text-white font-bold">RMSE (Root Mean Squared Error)</p>
            <p className="text-xs text-neutral-500">Penaliza más los errores grandes. Muy común.</p>
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide131 = () => (
  <SlideLayout title="Resumen: Regresión Lineal" subtitle="Puntos clave">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-neutral-900 p-12 rounded-2xl border border-neutral-800 max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="text-green-500 shrink-0" />
              <p className="text-neutral-300">Modelo simple, rápido e interpretable.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-green-500 shrink-0" />
              <p className="text-neutral-300">Minimiza el error cuadrático (OLS).</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-green-500 shrink-0" />
              <p className="text-neutral-300">Requiere cumplir hipótesis (linealidad, etc.).</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="text-green-500 shrink-0" />
              <p className="text-neutral-300">Sensible a outliers y multicolinealidad.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-green-500 shrink-0" />
              <p className="text-neutral-300">Regularización (Ridge/Lasso) evita overfitting.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-green-500 shrink-0" />
              <p className="text-neutral-300">R² y RMSE son las métricas estándar.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide132 = () => (
  <SlideLayout title="Quiz: Regularización" subtitle="Ridge vs Lasso">
    <Quiz
      question="¿Cuál es la principal diferencia práctica entre la regularización Lasso (L1) y Ridge (L2)?"
      options={[
        { id: 1, text: 'Ridge es más rápida de entrenar.', correct: false, explanation: 'Ambas son eficientes computacionalmente.' },
        { id: 2, text: 'Lasso puede hacer que algunos coeficientes sean exactamente cero, realizando selección de atributos.', correct: true, explanation: 'Correcto. Lasso tiende a eliminar variables irrelevantes.' },
        { id: 3, text: 'Ridge solo funciona con una variable independiente.', correct: false, explanation: 'Ambas funcionan en regresión múltiple.' },
        { id: 4, text: 'Lasso siempre da un R² más alto.', correct: false, explanation: 'No necesariamente, depende del dataset y del valor de alfa.' }
      ]}
    />
  </SlideLayout>
);

export const Slide133 = () => (
  <SlideLayout title="Quiz: Hipótesis" subtitle="Homocedasticidad">
    <Quiz
      question="¿Qué indica la presencia de heterocedasticidad en un modelo de regresión lineal?"
      options={[
        { id: 1, text: 'Que el modelo es perfecto.', correct: false, explanation: 'Al contrario, es una señal de que el modelo tiene problemas.' },
        { id: 2, text: 'Que la varianza del error no es constante para todos los valores de X.', correct: true, explanation: 'Correcto. Esto suele verse como un abanico en el gráfico de residuos.' },
        { id: 3, text: 'Que las variables X están muy correlacionadas.', correct: false, explanation: 'Eso es multicolinealidad.' },
        { id: 4, text: 'Que el error sigue una distribución normal.', correct: false, explanation: 'Eso es la hipótesis de normalidad.' }
      ]}
    />
  </SlideLayout>
);

export const Slide134 = () => (
  <SlideLayout title="Transición" subtitle="Hacia modelos no paramétricos">
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="bg-neutral-900 p-12 rounded-2xl border border-neutral-800 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-white mb-6">Más allá de las líneas rectas</h2>
        <p className="text-xl text-neutral-300 mb-8">
          La regresión lineal es potente pero asume una estructura rígida. ¿Qué pasa si queremos un modelo que se adapte localmente a los datos sin asumir una forma global?
        </p>
        <div className="bg-black p-6 rounded-xl border border-sky-900/50">
          <p className="text-lg font-bold text-sky-400">
            Próxima parada: K-Nearest Neighbors (KNN)
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

import { CheckCircle2 } from 'lucide-react';
