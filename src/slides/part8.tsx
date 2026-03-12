import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { motion } from 'framer-motion';
import { MathFormula } from '../components/MathFormula';
import { CodeBlock } from '../components/CodeBlock';
import { Quiz } from '../components/Quiz';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { Trash2, Eraser, AlertTriangle, ArrowRightLeft, Spline, Filter, Network } from 'lucide-react';

export const Slide50a = () => (
  <SlideLayout title="La API de Scikit-Learn" subtitle="Tres principios fundamentales">
    <div className="flex flex-col h-full">
      <p className="text-lg text-neutral-300 mb-8 text-center max-w-6xl mx-auto">
        Scikit-Learn es la librería estándar para Machine Learning en Python. Su diseño es tan exitoso porque utiliza una API uniforme y consistente basada en tres conceptos clave.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
          <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center mb-4 border border-sky-500/50">
            <span className="text-sky-400 font-bold text-xl">1</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Estimadores</h3>
          <p className="text-sm text-neutral-400 mb-4">Cualquier objeto que pueda estimar parámetros basados en un conjunto de datos.</p>
          <div className="bg-black p-3 rounded-lg border border-neutral-800 mt-auto">
            <code className="text-sky-300 text-sm">modelo.fit(X, y)</code>
            <p className="text-xs text-neutral-500 mt-1">Calcula los parámetros internos (ej. media, pesos) a partir de los datos.</p>
          </div>
        </div>

        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 border border-green-500/50">
            <span className="text-green-400 font-bold text-xl">2</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Transformadores</h3>
          <p className="text-sm text-neutral-400 mb-4">Estimadores que también pueden transformar un conjunto de datos.</p>
          <div className="bg-black p-3 rounded-lg border border-neutral-800 mt-auto space-y-2">
            <div>
              <code className="text-green-300 text-sm">modelo.transform(X)</code>
              <p className="text-xs text-neutral-500 mt-1">Aplica la transformación usando los parámetros aprendidos.</p>
            </div>
            <div>
              <code className="text-green-300 text-sm">modelo.fit_transform(X)</code>
              <p className="text-xs text-neutral-500 mt-1">Aprende y transforma en un solo paso (más eficiente).</p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 border border-purple-500/50">
            <span className="text-purple-400 font-bold text-xl">3</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Predictores</h3>
          <p className="text-sm text-neutral-400 mb-4">Estimadores que pueden hacer predicciones sobre nuevos datos.</p>
          <div className="bg-black p-3 rounded-lg border border-neutral-800 mt-auto space-y-2">
            <div>
              <code className="text-purple-300 text-sm">modelo.predict(X_new)</code>
              <p className="text-xs text-neutral-500 mt-1">Devuelve las etiquetas predichas.</p>
            </div>
            <div>
              <code className="text-purple-300 text-sm">modelo.score(X, y)</code>
              <p className="text-xs text-neutral-500 mt-1">Mide la calidad de las predicciones (ej. Accuracy o R²).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide51 = () => (
  <SlideLayout title="1.4. Limpieza de Datos" subtitle="Garbage In, Garbage Out">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-neutral-900 p-10 rounded-3xl border border-neutral-800 shadow-2xl max-w-6xl w-full">
        <div className="flex items-center gap-6 mb-8">
          <div className="bg-green-500/20 p-4 rounded-2xl border border-green-500/50">
            <Eraser className="w-16 h-16 text-green-500" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">El paso más crítico</h3>
            <p className="text-green-400 text-lg">Preparando la materia prima para el modelo.</p>
          </div>
        </div>
        
        <div className="space-y-6 text-xl text-neutral-300 leading-relaxed">
          <p>
            Los algoritmos de Machine Learning aprenden de los datos. Si los datos contienen errores, ruido o inconsistencias, el modelo aprenderá patrones incorrectos.
          </p>
          <div className="p-6 bg-black rounded-xl border-l-4 border-green-500">
            <p className="font-mono text-green-400 font-bold text-2xl mb-2">GIGO: Garbage In, Garbage Out</p>
            <p className="text-neutral-400 text-lg">
              "Basura entra, basura sale". Ningún algoritmo, por avanzado que sea, puede compensar un conjunto de datos de mala calidad.
            </p>
          </div>
          <p>
            La limpieza de datos aborda problemas comunes como: <strong className="text-white">valores ausentes</strong>, <strong className="text-white">valores atípicos (outliers)</strong>, diferencias de <strong className="text-white">escala</strong> y formatos <strong className="text-white">incompatibles</strong>.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide52 = () => (
  <SlideLayout title="1.4.1. Valores Ausentes" subtitle="Missing Values / Nulls / NaNs">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-green-500 mb-4 border-b border-neutral-800 pb-4">¿Por qué ocurren?</h3>
        <ul className="space-y-4 text-lg text-neutral-300 flex-1">
          <li className="flex items-start gap-3">
            <AlertTriangle className="text-orange-500 shrink-0 mt-1" />
            <span><strong>Errores humanos:</strong> Alguien olvidó rellenar un campo en un formulario.</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="text-orange-500 shrink-0 mt-1" />
            <span><strong>Fallos de sensores:</strong> Un dispositivo perdió conexión temporalmente.</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="text-orange-500 shrink-0 mt-1" />
            <span><strong>Incompatibilidad:</strong> Al fusionar bases de datos con diferentes columnas.</span>
          </li>
        </ul>
        <div className="mt-6 p-4 bg-black rounded-xl border border-red-900/30">
          <p className="text-red-400 font-bold">Problema principal:</p>
          <p className="text-neutral-400 text-sm mt-1">La mayoría de los algoritmos matemáticos (ej. Regresión Lineal, Redes Neuronales) no pueden operar si hay huecos en la matriz de datos. Lanzarán un error.</p>
        </div>
      </div>

      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-green-500 mb-4 border-b border-neutral-800 pb-4">Estrategias de Solución</h3>
        <div className="space-y-6 flex-1">
          <div className="bg-black p-4 rounded-xl border border-neutral-800">
            <h4 className="text-white font-bold flex items-center gap-2 mb-2">
              <Trash2 size={18} className="text-red-500" /> 1. Eliminación (Deletion)
            </h4>
            <p className="text-sm text-neutral-400">Borrar la fila completa (Listwise) o la columna si tiene demasiados nulos. <strong className="text-red-400">Peligro:</strong> Pérdida de información valiosa.</p>
          </div>
          <div className="bg-black p-4 rounded-xl border border-neutral-800">
            <h4 className="text-white font-bold flex items-center gap-2 mb-2">
              <Spline size={18} className="text-sky-500" /> 2. Imputación Simple
            </h4>
            <p className="text-sm text-neutral-400">Rellenar el hueco con un estadístico de la columna: Media (numéricos), Mediana (si hay outliers), o Moda (categóricos).</p>
          </div>
          <div className="bg-black p-4 rounded-xl border border-neutral-800">
            <h4 className="text-white font-bold flex items-center gap-2 mb-2">
              <Network size={18} className="text-purple-500" /> 3. Imputación Avanzada
            </h4>
            <p className="text-sm text-neutral-400">Usar algoritmos (ej. KNN Imputer) para predecir el valor faltante basándose en las filas más similares.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide53 = () => {
  const initialData = [
    { id: 1, edad: 25, salario: 30000 },
    { id: 2, edad: 45, salario: null },
    { id: 3, edad: 35, salario: 50000 },
    { id: 4, edad: null, salario: 40000 },
    { id: 5, edad: 28, salario: 32000 },
    { id: 6, edad: 50, salario: 120000 }, // Outlier que afecta la media
  ];

  const [data, setData] = useState(initialData);
  const [action, setAction] = useState<string>('Original');

  const handleReset = () => {
    setData(initialData);
    setAction('Original');
  };

  const handleDelete = () => {
    setData(initialData.filter(row => row.edad !== null && row.salario !== null));
    setAction('Eliminación de filas con nulos');
  };

  const handleMeanImputation = () => {
    const validEdades = initialData.map(d => d.edad).filter(v => v !== null) as number[];
    const validSalarios = initialData.map(d => d.salario).filter(v => v !== null) as number[];
    
    const meanEdad = Math.round(validEdades.reduce((a, b) => a + b, 0) / validEdades.length);
    const meanSalario = Math.round(validSalarios.reduce((a, b) => a + b, 0) / validSalarios.length);

    setData(initialData.map(row => ({
      ...row,
      edad: row.edad === null ? meanEdad : row.edad,
      salario: row.salario === null ? meanSalario : row.salario,
      imputedEdad: row.edad === null,
      imputedSalario: row.salario === null
    })));
    setAction(`Imputación por Media (Edad: ${meanEdad}, Salario: ${meanSalario})`);
  };

  const handleMedianImputation = () => {
    const validEdades = initialData.map(d => d.edad).filter(v => v !== null).sort((a, b) => (a as number) - (b as number)) as number[];
    const validSalarios = initialData.map(d => d.salario).filter(v => v !== null).sort((a, b) => (a as number) - (b as number)) as number[];
    
    const medianEdad = validEdades[Math.floor(validEdades.length / 2)];
    const medianSalario = validSalarios[Math.floor(validSalarios.length / 2)];

    setData(initialData.map(row => ({
      ...row,
      edad: row.edad === null ? medianEdad : row.edad,
      salario: row.salario === null ? medianSalario : row.salario,
      imputedEdad: row.edad === null,
      imputedSalario: row.salario === null
    })));
    setAction(`Imputación por Mediana (Edad: ${medianEdad}, Salario: ${medianSalario})`);
  };

  return (
    <SlideLayout title="Interactivo: Tratamiento de Nulos" subtitle="Aplica diferentes estrategias">
      <div className="flex flex-col h-full">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button onClick={handleReset} className="px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 border border-neutral-600">Original</button>
          <button onClick={handleDelete} className="px-4 py-2 bg-red-900/50 text-red-400 rounded-lg hover:bg-red-900/80 border border-red-700">Eliminar Filas</button>
          <button onClick={handleMeanImputation} className="px-4 py-2 bg-sky-900/50 text-sky-400 rounded-lg hover:bg-sky-900/80 border border-sky-700">Imputar Media</button>
          <button onClick={handleMedianImputation} className="px-4 py-2 bg-green-900/50 text-green-400 rounded-lg hover:bg-green-900/80 border border-green-700">Imputar Mediana</button>
        </div>

        <div className="text-center mb-4">
          <span className="text-neutral-400 font-mono text-sm bg-black px-4 py-2 rounded-full border border-neutral-800">
            Estado actual: <strong className="text-white">{action}</strong>
          </span>
        </div>

        <div className="flex-1 flex justify-center items-start mt-4">
          <div className="w-full max-w-7xl bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-black">
                  <th className="p-4 border-b border-neutral-800 text-neutral-500">ID</th>
                  <th className="p-4 border-b border-neutral-800 text-white">Edad</th>
                  <th className="p-4 border-b border-neutral-800 text-white">Salario</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <motion.tr 
                    key={row.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="border-b border-neutral-800/50 bg-neutral-900"
                  >
                    <td className="p-4 text-neutral-500 font-mono">{row.id}</td>
                    <td className={`p-4 font-mono ${row.edad === null ? 'text-red-500 font-bold bg-red-900/10' : (row as any).imputedEdad ? 'text-sky-400 font-bold bg-sky-900/10' : 'text-neutral-300'}`}>
                      {row.edad === null ? 'NaN' : row.edad}
                    </td>
                    <td className={`p-4 font-mono ${row.salario === null ? 'text-red-500 font-bold bg-red-900/10' : (row as any).imputedSalario ? 'text-green-400 font-bold bg-green-900/10' : 'text-neutral-300'}`}>
                      {row.salario === null ? 'NaN' : `$${row.salario}`}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-4 text-center text-sm text-neutral-400">
          Nota: Observa cómo la media del salario se ve fuertemente afectada por el valor atípico (120,000), mientras que la mediana es más robusta.
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide53a = () => (
  <SlideLayout title="Código: Imputación de Datos" subtitle="Usando SimpleImputer de Scikit-Learn">
    <div className="flex flex-col md:flex-row gap-[2%] h-full">
      <div className="w-full md:w-[68%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Python</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`import numpy as np # Importa numpy para manejar valores nulos (np.nan)
from sklearn.impute import SimpleImputer # Importa el imputador básico de Scikit-Learn

# Matriz con valores faltantes (representados como np.nan)
# 3 filas (muestras), 2 columnas (características)
X_train = [
    [1, 2], 
    [np.nan, 3], # Falta el primer valor
    [7, 6]
]

# 1. Instanciar el transformador
# missing_values=np.nan indica qué considerar como nulo
# strategy='mean' reemplaza los nulos por la media aritmética de la columna
imputer = SimpleImputer(missing_values=np.nan, strategy='mean')

# 2. Aprender la media y transformar los datos simultáneamente
X_imputed = imputer.fit_transform(X_train) # fit() calcula la media (1+7)/2=4, transform() aplica el reemplazo

print(X_imputed) # Imprime la matriz resultante
# Resultado esperado:
# [[1. 2.]
#  [4. 3.]  <-- El NaN se reemplazó por 4.0 (media de la columna 0: (1+7)/2)
#  [7. 6.]]`} 
          />
        </div>
      </div>
      <div className="w-full md:w-[30%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-xs text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">sklearn.impute.SimpleImputer:</strong> Clase diseñada específicamente para rellenar valores faltantes con estrategias simples.
          </li>
          <li>
            <strong className="text-white">Parámetro <code>missing_values</code>:</strong> Indica qué valor debe considerarse como "faltante". Por defecto es <code>np.nan</code> (Not a Number de NumPy).
          </li>
          <li>
            <strong className="text-white">Parámetro <code>strategy</code>:</strong> Define cómo se calculará el valor de reemplazo. Opciones:
            <ul className="list-disc pl-5 mt-2 text-neutral-400">
              <li><code>'mean'</code>: Media de la columna (solo numéricos).</li>
              <li><code>'median'</code>: Mediana de la columna (robusto a outliers).</li>
              <li><code>'most_frequent'</code>: Moda (útil para categóricos).</li>
              <li><code>'constant'</code>: Un valor fijo definido por el usuario.</li>
            </ul>
          </li>
          <li>
            <strong className="text-white">.fit_transform():</strong> Calcula la media de cada columna (fit) y reemplaza los NaNs en un solo paso (transform).
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide54 = () => {
  const data = Array.from({ length: 50 }, (_, i) => ({
    x: i,
    y: 50 + Math.random() * 20 - 10,
    isOutlier: false
  }));
  // Add some outliers
  data.push({ x: 55, y: 120, isOutlier: true });
  data.push({ x: 60, y: 10, isOutlier: true });
  data.push({ x: 65, y: 130, isOutlier: true });

  return (
    <SlideLayout title="1.4.2. Valores Atípicos (Outliers)" subtitle="Los rebeldes del dataset">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
          <h3 className="text-2xl font-bold text-green-500 mb-4 border-b border-neutral-800 pb-4">¿Qué son?</h3>
          <p className="text-lg text-neutral-300 mb-6">
            Son observaciones que se desvían drásticamente del resto de los datos. Parecen haber sido generadas por un mecanismo diferente.
          </p>
          <h4 className="font-bold text-white mb-2">Impacto Negativo:</h4>
          <ul className="space-y-3 text-neutral-400 mb-6">
            <li>• Sesgan la media y la varianza.</li>
            <li>• Arruinan modelos sensibles como la Regresión Lineal o K-Means.</li>
            <li>• Pueden causar sobreajuste (overfitting).</li>
          </ul>
          <div className="mt-auto p-4 bg-black rounded-xl border border-neutral-800">
            <p className="text-sm text-neutral-400">
              <strong className="text-white">Ojo:</strong> No siempre son errores. A veces un outlier es exactamente lo que buscamos (ej. Detección de fraude bancario).
            </p>
          </div>
        </div>

        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Visualización de Outliers</h3>
          <div className="flex-1 w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                <XAxis type="number" dataKey="x" hide />
                <YAxis type="number" dataKey="y" domain={[0, 150]} stroke="#737373" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#000', borderColor: '#262626' }} />
                <ReferenceLine y={80} stroke="#f59e0b" strokeDasharray="3 3" label={{ position: 'top', value: 'Límite Superior', fill: '#f59e0b' }} />
                <ReferenceLine y={20} stroke="#f59e0b" strokeDasharray="3 3" label={{ position: 'bottom', value: 'Límite Inferior', fill: '#f59e0b' }} />
                <Scatter data={data}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.isOutlier ? '#ef4444' : '#22c55e'} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-sm text-neutral-500 mt-2">Los puntos rojos caen fuera de los límites estadísticos normales.</p>
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide55 = () => (
  <SlideLayout title="Detección y Tratamiento de Outliers" subtitle="Matemáticas al rescate">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="flex flex-col gap-6">
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-xl font-bold text-green-500 mb-4">1. Método Z-Score</h3>
          <p className="text-neutral-300 text-sm mb-4">
            Mide a cuántas desviaciones estándar (<MathFormula tex="\sigma" />) se encuentra un valor de la media (<MathFormula tex="\mu" />). Si <MathFormula tex="|Z| > 3" />, suele considerarse outlier.
          </p>
          <MathFormula block tex="Z = \frac{x - \mu}{\sigma}" />
        </div>
        
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-xl font-bold text-green-500 mb-4">2. Rango Intercuartílico (IQR)</h3>
          <p className="text-neutral-300 text-sm mb-4">
            Basado en cuartiles. Es más robusto que Z-Score porque la media y la desviación estándar se ven afectadas por los propios outliers.
          </p>
          <MathFormula block tex="IQR = Q_3 - Q_1" />
          <p className="text-neutral-400 text-xs text-center mt-2">
            Límites: <MathFormula tex="[Q_1 - 1.5 \times IQR, \ Q_3 + 1.5 \times IQR]" />
          </p>
        </div>
      </div>

      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Python (Pandas)</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`import pandas as pd # Importa pandas para manipulación de DataFrames
import numpy as np # Importa numpy para operaciones numéricas

# Supongamos un DataFrame 'df' con una columna numérica llamada 'salario'

# --- Método IQR (Rango Intercuartílico) ---
Q1 = df['salario'].quantile(0.25) # Calcula el primer cuartil (percentil 25)
Q3 = df['salario'].quantile(0.75) # Calcula el tercer cuartil (percentil 75)
IQR = Q3 - Q1 # Calcula el Rango Intercuartílico (distancia entre Q3 y Q1)

# Define los límites para considerar un valor como "normal"
limite_inf = Q1 - 1.5 * IQR # Límite inferior (bigote inferior del boxplot)
limite_sup = Q3 + 1.5 * IQR # Límite superior (bigote superior del boxplot)

# Filtrar outliers (Estrategia de Eliminación)
# Conserva solo las filas donde el salario esté dentro de los límites
df_limpio = df[(df['salario'] >= limite_inf) & 
               (df['salario'] <= limite_sup)]

# Alternativa: Capping (Winsorización)
# Limitar los valores extremos a los bordes en lugar de eliminarlos
# np.clip reemplaza valores menores a limite_inf por limite_inf, y mayores a limite_sup por limite_sup
df['salario'] = np.clip(df['salario'], limite_inf, limite_sup)`} 
          />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide55a = () => (
  <SlideLayout title="Código: Detección de Outliers" subtitle="Algoritmos en Scikit-Learn y SciPy">
    <div className="flex flex-col md:flex-row gap-[2%] h-full">
      <div className="w-full md:w-[68%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Métodos Multivariantes (Sklearn)</h3>
        <div className="flex-1 overflow-auto mb-4">
          <CodeBlock 
            language="python"
            code={`from sklearn.covariance import EllipticEnvelope # Importa detector basado en elipse de covarianza
from sklearn.ensemble import IsolationForest # Importa detector basado en bosques aleatorios
from sklearn.svm import OneClassSVM # Importa detector basado en SVM de una clase
from sklearn.neighbors import LocalOutlierFactor # Importa detector basado en densidad local (KNN)

# 1. Método Envolvente Elíptica (Asume que los datos inliers siguen una distribución normal/gaussiana)
# contamination: proporción esperada de outliers en el dataset (aquí 25%)
algorithm = EllipticEnvelope(contamination=0.25, random_state=42) # Instancia el modelo

# Entrenar y predecir (devuelve 1 para inliers normales, -1 para outliers anómalos)
# y_pred = algorithm.fit_predict(X) # Ajusta la elipse y clasifica los puntos en X

# 2. Isolation Forest (Basado en árboles, muy popular y eficiente en alta dimensionalidad)
# Aísla anomalías dividiendo el espacio aleatoriamente. Las anomalías requieren menos divisiones.
iso_forest = IsolationForest(contamination=0.1) # Instancia esperando un 10% de outliers`} 
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-4 mt-2">Método Univariante (Boxplot / IQR)</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`from scipy import stats # Importa el módulo de estadísticas de SciPy

# a = array de datos numéricos de una sola columna (univariante)
Q1 = stats.scoreatpercentile(a, 25) # Calcula el Cuartil 1 (valor bajo el cual está el 25% de los datos)
Q3 = stats.scoreatpercentile(a, 75) # Calcula el Cuartil 3 (valor bajo el cual está el 75% de los datos)
RIC = Q3 - Q1 # Rango Intercuartílico (medida de dispersión robusta)

li = Q1 - 1.5 * RIC # Calcula el Límite Inferior (bigote inferior)
ls = Q3 + 1.5 * RIC # Calcula el Límite Superior (bigote superior)
# Todo valor 'x' que cumpla (x < li) o (x > ls) se considera un outlier estadístico`} 
          />
        </div>
      </div>
      <div className="w-full md:w-[30%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-red-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-xs text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">EllipticEnvelope:</strong> Ajusta una elipse robusta a los datos centrales, ignorando los puntos más alejados. Asume que los datos inliers tienen una distribución gaussiana (normal).
          </li>
          <li>
            <strong className="text-white">Parámetro <code>contamination</code>:</strong> Es clave en casi todos los detectores de Sklearn. Indica la proporción del dataset que creemos que son outliers (ej. 0.25 = 25%).
          </li>
          <li>
            <strong className="text-white">IsolationForest:</strong> Aísla observaciones construyendo árboles aleatorios. Los outliers necesitan menos cortes para ser aislados (caminos más cortos en el árbol).
          </li>
          <li>
            <strong className="text-white">stats.scoreatpercentile:</strong> Función de SciPy para calcular percentiles. El percentil 25 es Q1 y el 75 es Q3.
          </li>
          <li>
            <strong className="text-white">Boxplot (Cajas y Bigotes):</strong> La caja va de Q1 a Q3. La línea central es la mediana. Los "bigotes" se extienden hasta 1.5 veces el RIC. Los puntos más allá son anómalos.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide56 = () => (
  <SlideLayout title="1.4.3. Escalado de Datos" subtitle="Normalización y Estandarización">
    <div className="flex flex-col h-full">
      <p className="text-xl text-neutral-300 mb-8 text-center max-w-6xl mx-auto">
        Los algoritmos basados en distancias (KNN, K-Means) o descenso del gradiente (Redes Neuronales) son muy sensibles a la escala de las variables. <strong className="text-white">Un atributo que va de 0 a 100,000 dominará sobre uno que va de 0 a 1.</strong>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
          <h3 className="text-2xl font-bold text-sky-400 mb-4 text-center">Normalización (Min-Max)</h3>
          <p className="text-neutral-400 text-center mb-6">Comprime los datos a un rango fijo, típicamente <MathFormula tex="[0, 1]" />.</p>
          
          <div className="bg-black p-4 rounded-xl mb-6">
            <MathFormula block tex="x_{norm} = \frac{x - x_{min}}{x_{max} - x_{min}}" />
          </div>
          
          <ul className="space-y-2 text-sm text-neutral-300 mt-auto">
            <li>✅ Mantiene la distribución original exacta.</li>
            <li>❌ Muy sensible a outliers (si <MathFormula tex="x_{max}" /> es un outlier, el resto de datos se comprimirá cerca de 0).</li>
            <li>💡 Útil para Redes Neuronales e imágenes (píxeles 0-255 → 0-1).</li>
          </ul>
        </div>

        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
          <h3 className="text-2xl font-bold text-green-500 mb-4 text-center">Estandarización (Z-Score)</h3>
          <p className="text-neutral-400 text-center mb-6">Centra los datos en media 0 y desviación estándar 1.</p>
          
          <div className="bg-black p-4 rounded-xl mb-6">
            <MathFormula block tex="x_{std} = \frac{x - \mu}{\sigma}" />
          </div>
          
          <ul className="space-y-2 text-sm text-neutral-300 mt-auto">
            <li>✅ Menos sensible a outliers extremos.</li>
            <li>✅ Asume que los datos siguen una distribución Gaussiana (Normal).</li>
            <li>💡 Útil para Regresión Logística, SVM, PCA.</li>
          </ul>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide56a = () => (
  <SlideLayout title="Código: Escalado de Datos" subtitle="Normalización vs Estandarización">
    <div className="flex flex-col md:flex-row gap-[2%] h-full">
      <div className="w-full md:w-[68%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Scikit-Learn</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`from sklearn import preprocessing # Importa el módulo de preprocesamiento de Scikit-Learn
import numpy as np # Importa numpy para crear la matriz de ejemplo

# Matriz de 3 muestras (filas) y 3 características (columnas)
X_train = np.array([
    [1., -1.,  2.], # Muestra 1
    [2.,  0.,  0.], # Muestra 2
    [0.,  1., -1.]  # Muestra 3
])

# 1. Normalización (Min-Max Scaling)
# Escala linealmente los datos para que el mínimo sea 0 y el máximo sea 1 (por columna)
normalizer = preprocessing.MinMaxScaler() # Instancia el escalador Min-Max
X_norm = normalizer.fit_transform(X_train) # Calcula min/max y aplica la transformación

# 2. Estandarización (Z-Score Scaling)
# Centra los datos en media 0 y los escala para tener desviación estándar 1 (por columna)
standardizer = preprocessing.StandardScaler() # Instancia el estandarizador
X_std = standardizer.fit_transform(X_train) # Calcula media/std y aplica la transformación`} 
          />
        </div>
      </div>
      <div className="w-full md:w-[30%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-xs text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">sklearn.preprocessing:</strong> Módulo que contiene funciones de utilidad y clases transformadoras para cambiar vectores de características crudos a representaciones más adecuadas.
          </li>
          <li>
            <strong className="text-white">MinMaxScaler:</strong> Transforma las características escalándolas a un rango dado (por defecto entre 0 y 1). 
            <br/><span className="text-neutral-400">Fórmula: <code>(x - min) / (max - min)</code>. Se usa cuando NO presuponemos una distribución normal.</span>
          </li>
          <li>
            <strong className="text-white">StandardScaler:</strong> Estandariza las características eliminando la media y escalando a varianza unitaria.
            <br/><span className="text-neutral-400">Fórmula: <code>(x - media) / desviacion_estandar</code>. Se aplica cuando presuponemos que los datos siguen una distribución normal (Gaussiana).</span>
          </li>
          <li>
            <strong className="text-white">.fit_transform():</strong> Calcula los parámetros necesarios (mínimo/máximo o media/desviación) de <code>X_train</code> y aplica la transformación inmediatamente.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide56b = () => (
  <SlideLayout title="Código: Selección de Atributos" subtitle="Filtrando características irrelevantes">
    <div className="flex flex-col md:flex-row gap-[2%] h-full">
      <div className="w-full md:w-[68%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Scikit-Learn</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`from sklearn.feature_selection import VarianceThreshold # Importa filtro por varianza
from sklearn.feature_selection import f_regression # Importa test F para regresión lineal
from sklearn.feature_selection import mutual_info_regression # Importa información mutua para regresión

# 1. Filtro por Baja Varianza (No supervisado, no usa 'y')
# Elimina características cuya varianza no supere el umbral (0.6)
thresholder = VarianceThreshold(threshold=0.6) # Instancia el filtro
# X_high_variance = thresholder.fit_transform(X) # Aplica el filtro, manteniendo solo columnas con var > 0.6

# 2. F-Test (Dependencia Lineal Supervisada)
# Evalúa la relación lineal independiente entre cada característica en X y el objetivo 'y'
# Devuelve F-values (estadístico de prueba) y p-values (significancia estadística)
f_values, p_values = f_regression(X, y) # Calcula los scores lineales

# 3. Información Mutua (Dependencia Lineal y No Lineal Supervisada)
# Mide la reducción de incertidumbre en 'y' al conocer cada característica en 'X'
# Valores más altos indican mayor dependencia (mejor característica)
mi_values = mutual_info_regression(X, y) # Calcula los scores de información mutua`} 
          />
        </div>
      </div>
      <div className="w-full md:w-[30%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-green-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-xs text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">VarianceThreshold:</strong> Método no supervisado. Si una característica tiene la misma información en casi todas las filas (baja varianza), no aporta valor predictivo. <code>threshold=0.6</code> elimina las que tengan varianza menor a 0.6.
          </li>
          <li>
            <strong className="text-white">f_regression:</strong> Test estadístico univariante para regresión. Calcula la correlación lineal cruzada entre cada regresor y el objetivo. Solo detecta relaciones <strong>lineales</strong>.
          </li>
          <li>
            <strong className="text-white">mutual_info_regression:</strong> Estima la información mutua entre variables continuas. Mide cualquier tipo de dependencia (lineal o <strong>no lineal</strong>). Un valor de 0 indica independencia total; valores más altos indican mayor dependencia.
          </li>
          <li>
            <strong className="text-white">Ingeniería de Características:</strong> Estos métodos ayudan a reducir la dimensionalidad, mejorando la velocidad de entrenamiento y reduciendo el sobreajuste al eliminar ruido.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide57 = () => (
  <SlideLayout title="1.4.4. Codificación de Variables Categóricas" subtitle="Traduciendo texto a números">
    <div className="flex flex-col h-full">
      <p className="text-xl text-neutral-300 mb-8 text-center max-w-6xl mx-auto">
        Los algoritmos matemáticos no entienden texto como "Rojo" o "Madrid". Debemos convertir estas variables categóricas a representaciones numéricas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-xl font-bold text-white mb-4 border-b border-neutral-800 pb-2">Label Encoding (Ordinal)</h3>
          <p className="text-sm text-neutral-400 mb-4">Asigna un número entero a cada categoría. <strong className="text-red-400">Peligro:</strong> El algoritmo puede interpretar que hay un orden matemático (2 es mayor que 0).</p>
          
          <table className="w-full text-center border-collapse text-sm">
            <thead>
              <tr className="bg-black text-neutral-500">
                <th className="p-2 border border-neutral-800">Talla (Original)</th>
                <th className="p-2 border border-neutral-800 text-green-400">Talla (Encoded)</th>
              </tr>
            </thead>
            <tbody className="text-white">
              <tr><td className="p-2 border border-neutral-800">Pequeña</td><td className="p-2 border border-neutral-800 font-mono">0</td></tr>
              <tr><td className="p-2 border border-neutral-800">Mediana</td><td className="p-2 border border-neutral-800 font-mono">1</td></tr>
              <tr><td className="p-2 border border-neutral-800">Grande</td><td className="p-2 border border-neutral-800 font-mono">2</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-neutral-500 mt-2 text-center">Correcto aquí, porque las tallas SÍ tienen un orden lógico.</p>
        </div>

        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-xl font-bold text-white mb-4 border-b border-neutral-800 pb-2">One-Hot Encoding (Nominal)</h3>
          <p className="text-sm text-neutral-400 mb-4">Crea una nueva columna binaria (0/1) por cada categoría posible. Evita la falsa relación de orden.</p>
          
          <table className="w-full text-center border-collapse text-sm">
            <thead>
              <tr className="bg-black text-neutral-500">
                <th className="p-2 border border-neutral-800">Color</th>
                <th className="p-2 border border-neutral-800 text-sky-400">is_Rojo</th>
                <th className="p-2 border border-neutral-800 text-sky-400">is_Azul</th>
                <th className="p-2 border border-neutral-800 text-sky-400">is_Verde</th>
              </tr>
            </thead>
            <tbody className="text-white font-mono">
              <tr>
                <td className="p-2 border border-neutral-800 font-sans">Rojo</td>
                <td className="p-2 border border-neutral-800 bg-sky-900/20 text-sky-400">1</td>
                <td className="p-2 border border-neutral-800">0</td>
                <td className="p-2 border border-neutral-800">0</td>
              </tr>
              <tr>
                <td className="p-2 border border-neutral-800 font-sans">Verde</td>
                <td className="p-2 border border-neutral-800">0</td>
                <td className="p-2 border border-neutral-800">0</td>
                <td className="p-2 border border-neutral-800 bg-sky-900/20 text-sky-400">1</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-neutral-500 mt-2 text-center">Correcto para colores, ciudades, marcas (sin orden inherente).</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide58 = () => (
  <SlideLayout title="Quiz: Limpieza de Datos" subtitle="Evaluación de la Sección 1.4">
    <Quiz 
      question="Tienes una columna 'Ciudad' con valores ['Madrid', 'Barcelona', 'Valencia']. Vas a entrenar una Red Neuronal. ¿Qué técnica de codificación es la más adecuada y por qué?"
      options={[
        { id: 1, text: 'Label Encoding, porque asigna 0, 1 y 2, ahorrando memoria.', correct: false, explanation: 'Aunque ahorra memoria, la red neuronal interpretará falsamente que Valencia (2) vale el doble que Barcelona (1).' },
        { id: 2, text: 'One-Hot Encoding, porque crea columnas binarias independientes sin asumir un orden matemático entre ciudades.', correct: true, explanation: '¡Correcto! Las ciudades son variables nominales (sin orden). One-Hot Encoding evita que el modelo asuma relaciones matemáticas falsas entre ellas.' },
        { id: 3, text: 'Estandarización Z-Score, para centrar las ciudades en media 0.', correct: false, explanation: 'La estandarización solo se aplica a variables numéricas continuas, no a texto.' },
        { id: 4, text: 'Imputación por Moda, para reemplazar las ciudades menos frecuentes.', correct: false, explanation: 'La imputación se usa para rellenar valores ausentes (nulos), no para codificar texto a números.' }
      ]}
    />
  </SlideLayout>
);
