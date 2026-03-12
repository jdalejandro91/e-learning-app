import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { MathFormula } from '../components/MathFormula';
import { Quiz } from '../components/Quiz';
import { CodeBlock } from '../components/CodeBlock';
import { Database, Table2, Network, LineChart, GitMerge } from 'lucide-react';

export const Slide45 = () => (
  <SlideLayout title="1.3. Estructura de datos" subtitle="El pilar del aprendizaje automático">
    <div className="flex flex-col items-center justify-center h-full">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-neutral-900 p-10 rounded-3xl border border-neutral-800 shadow-2xl max-w-4xl w-full text-center"
      >
        <Database className="w-24 h-24 text-green-500 mx-auto mb-8" />
        <h3 className="text-3xl font-bold text-white mb-6">El Conjunto de Datos (Dataset)</h3>
        <p className="text-xl text-neutral-300 leading-relaxed mb-8">
          En ciencia de datos, existe una estructura fundamental en la que se apoyan la gran mayoría de algoritmos: la <strong className="text-green-400">tabla de datos</strong>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="bg-black p-6 rounded-xl border border-neutral-800">
            <h4 className="text-green-500 font-bold mb-2 flex items-center gap-2">
              <Table2 size={20} /> Filas
            </h4>
            <p className="text-neutral-400">Representan las observaciones, ejemplos o instancias individuales.</p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-neutral-800">
            <h4 className="text-green-500 font-bold mb-2 flex items-center gap-2">
              <Table2 size={20} className="rotate-90" /> Columnas
            </h4>
            <p className="text-neutral-400">Representan las variables, características o atributos de cada observación.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </SlideLayout>
);

export const Slide46 = () => (
  <SlideLayout title="1.3.1. Estructuras y tipos" subtitle="Más allá de las tablas">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="flex flex-col gap-6">
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-xl font-bold text-green-500 mb-4 border-b border-neutral-800 pb-2">Tablas vs Matrices</h3>
          <p className="text-neutral-300 mb-4">
            A diferencia de las matrices matemáticas (donde todo es numérico), las tablas de datos pueden contener <strong className="text-white">diferentes tipos de datos</strong> (números, cadenas, fechas...). Sin embargo, cada columna debe contener solo datos del mismo tipo.
          </p>
        </div>
        
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex-1">
          <h3 className="text-xl font-bold text-green-500 mb-4 border-b border-neutral-800 pb-2">Tipos de Datos Principales</h3>
          <ul className="space-y-6">
            <li>
              <div className="flex items-center gap-2 text-lg font-bold text-white mb-1">
                <span className="text-green-500">#</span> Numérico (Continuo)
              </div>
              <p className="text-neutral-400 text-sm">Números reales. Tienen relación de orden implícita. Ej: 5.18, -3.67</p>
            </li>
            <li>
              <div className="flex items-center gap-2 text-lg font-bold text-white mb-1">
                <span className="text-green-500">A</span> Categórico (Discreto/Nominal)
              </div>
              <p className="text-neutral-400 text-sm">Valores discretos (cadenas, booleanos). Pueden o no tener orden. Ej: "Rojo", "Alto", True.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-green-500 mb-6 text-center">Otras Estructuras Especializadas</h3>
        <div className="grid grid-cols-1 gap-4 flex-1">
          <div className="bg-black p-4 rounded-xl border border-neutral-800 flex items-center gap-4">
            <Network className="text-green-500 w-10 h-10 shrink-0" />
            <div>
              <h4 className="font-bold text-white">Grafos</h4>
              <p className="text-sm text-neutral-400">Redes sociales, rutas, moléculas.</p>
            </div>
          </div>
          <div className="bg-black p-4 rounded-xl border border-neutral-800 flex items-center gap-4">
            <LineChart className="text-green-500 w-10 h-10 shrink-0" />
            <div>
              <h4 className="font-bold text-white">Series Temporales</h4>
              <p className="text-sm text-neutral-400">Evolución de la bolsa, clima, sensores.</p>
            </div>
          </div>
          <div className="bg-black p-4 rounded-xl border border-neutral-800 flex items-center gap-4">
            <GitMerge className="text-green-500 w-10 h-10 shrink-0" />
            <div>
              <h4 className="font-bold text-white">Datos Jerarquizados</h4>
              <p className="text-sm text-neutral-400">Árboles XML/JSON, taxonomías.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide46a = () => (
  <SlideLayout title="Código: Estructuras de Datos" subtitle="Tabulares vs No-SQL">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">1. Datos Tabulares (Pandas)</h3>
        <p className="text-sm text-neutral-400 mb-4">Estructurados en filas (registros) y columnas (características). Formatos comunes: CSV, Excel.</p>
        <div className="flex-1 overflow-auto mb-4">
          <CodeBlock 
            language="python"
            code={`import pandas as pd # Importa la librería pandas para manejo de datos tabulares

# Creación de un DataFrame tabular (estructura similar a Excel o SQL)
data = {
    'Edad': [15, 60, 12, 98, 30], # Columna Edad (numérica)
    'Sexo': ['M', 'F', 'M', 'M', 'F'], # Columna Sexo (categórica)
    'Altura': [1.72, 1.64, 1.44, 1.73, 1.81], # Columna Altura (numérica continua)
    'Hipertenso': [0, 1, 0, 1, 1] # Columna Hipertenso (binaria/booleana)
}
df = pd.DataFrame(data) # Convierte el diccionario en un objeto DataFrame de pandas

# Mostrar las primeras filas
print(df.head()) # Imprime las primeras 5 filas del DataFrame para inspección visual`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">2. Datos No-SQL (JSON / Diccionarios)</h3>
        <p className="text-sm text-neutral-400 mb-4">Almacenados en pares clave-valor. Estándar en Big Data por su escalabilidad horizontal y flexibilidad (no todas las instancias necesitan las mismas claves).</p>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`import json # Importa la librería json para manejar datos en formato JSON

# Estructura tipo No-SQL (Lista de diccionarios)
# Cada elemento de la lista es un documento (instancia) independiente
db = [
    {
        "Nombre": "Elsa", # Clave "Nombre" con valor string
        "Edad": 23, # Clave "Edad" con valor entero
        "Ocupacion": "Enfermera", # Clave "Ocupacion" con valor string
        "Estado": "Casada" # Clave "Estado" presente en este documento
    },
    {
        "Nombre": "Andres", 
        "Edad": 30, 
        "Ocupacion": "Psicologo"
        # Nota: 'Estado' no está presente aquí. Esto es válido en No-SQL (esquema flexible)
    }
]

# Convertir a string JSON
json_str = json.dumps(db, indent=2) # Serializa la lista de diccionarios a un string JSON formateado con indentación de 2 espacios
print(json_str) # Imprime el string JSON resultante`} 
          />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide47 = () => (
  <SlideLayout title="1.3.2. Nomenclatura en Minería de Datos" subtitle="Instancias, clase y atributos">
    <div className="flex flex-col items-center h-full">
      <div className="w-full max-w-5xl bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden mb-8">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr>
              <th className="p-4 border-b border-r border-neutral-800 bg-black w-24"></th>
              <th colSpan={3} className="p-4 border-b border-r border-neutral-800 bg-neutral-950 text-green-400 font-bold text-lg">
                Atributos (X)
              </th>
              <th className="p-4 border-b border-neutral-800 bg-green-900/20 text-green-400 font-bold text-lg">
                Clase (y)
              </th>
            </tr>
            <tr className="bg-neutral-900 text-neutral-300 font-mono">
              <th className="p-3 border-b border-r border-neutral-800"></th>
              <th className="p-3 border-b border-r border-neutral-800">x₁</th>
              <th className="p-3 border-b border-r border-neutral-800">...</th>
              <th className="p-3 border-b border-r border-neutral-800">xₚ</th>
              <th className="p-3 border-b border-neutral-800 bg-green-900/10">y</th>
            </tr>
          </thead>
          <tbody className="font-mono text-neutral-400">
            <tr>
              <td className="p-3 border-b border-r border-neutral-800 text-white font-bold bg-neutral-950">e₁</td>
              <td className="p-3 border-b border-r border-neutral-800">x₁,₁</td>
              <td className="p-3 border-b border-r border-neutral-800">...</td>
              <td className="p-3 border-b border-r border-neutral-800">x₁,ₚ</td>
              <td className="p-3 border-b border-neutral-800 bg-green-900/10 text-white">y₁</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-r border-neutral-800 text-white font-bold bg-neutral-950">...</td>
              <td className="p-3 border-b border-r border-neutral-800">...</td>
              <td className="p-3 border-b border-r border-neutral-800">...</td>
              <td className="p-3 border-b border-r border-neutral-800">...</td>
              <td className="p-3 border-b border-neutral-800 bg-green-900/10 text-white">...</td>
            </tr>
            <tr>
              <td className="p-3 border-r border-neutral-800 text-white font-bold bg-neutral-950">eₙ</td>
              <td className="p-3 border-r border-neutral-800">xₙ,₁</td>
              <td className="p-3 border-r border-neutral-800">...</td>
              <td className="p-3 border-r border-neutral-800">xₙ,ₚ</td>
              <td className="p-3 border-neutral-800 bg-green-900/10 text-white">yₙ</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-black p-6 rounded-xl border border-neutral-800">
          <h4 className="text-white font-bold mb-2">Instancia (<MathFormula tex="e_i" />)</h4>
          <p className="text-sm text-neutral-400">Cada fila de la tabla. También llamada ejemplo, muestra, observación o punto.</p>
        </div>
        <div className="bg-black p-6 rounded-xl border border-neutral-800">
          <h4 className="text-white font-bold mb-2">Atributo (<MathFormula tex="x_j" />)</h4>
          <p className="text-sm text-neutral-400">Variables de entrada. También llamadas características (features) o predictores.</p>
        </div>
        <div className="bg-black p-6 rounded-xl border border-green-500/30">
          <h4 className="text-green-400 font-bold mb-2">Clase (<MathFormula tex="y" />)</h4>
          <p className="text-sm text-neutral-400">Variable de salida. Si es regresión: <MathFormula tex="y_i \in \mathbb{R}" />. Si es clasificación: <MathFormula tex="y_i \in \{c_1, ..., c_m\}" />.</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide48 = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  const data = [
    { id: 1, age: 25, income: 45000, history: 'Bueno', risk: 'Bajo' },
    { id: 2, age: 42, income: 32000, history: 'Malo', risk: 'Alto' },
    { id: 3, age: 35, income: 78000, history: 'Excelente', risk: 'Bajo' },
    { id: 4, age: 28, income: 25000, history: 'Regular', risk: 'Medio' },
  ];

  return (
    <SlideLayout title="Interactivo: Explorando la Matriz" subtitle="Pasa el ratón sobre la tabla para identificar sus partes">
      <div className="flex flex-col items-center justify-center h-full">
        
        <div className="w-full max-w-4xl bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden mb-8 relative">
          <table className="w-full text-center border-collapse relative z-10">
            <thead>
              <tr>
                <th className="p-4 border-b border-neutral-800 bg-black text-neutral-500">ID</th>
                <th 
                  className={`p-4 border-b border-neutral-800 transition-colors cursor-default ${hoveredCol === 1 ? 'bg-neutral-800 text-green-400' : 'bg-black text-white'}`}
                  onMouseEnter={() => setHoveredCol(1)} onMouseLeave={() => setHoveredCol(null)}
                >Edad (<MathFormula tex="x_1" />)</th>
                <th 
                  className={`p-4 border-b border-neutral-800 transition-colors cursor-default ${hoveredCol === 2 ? 'bg-neutral-800 text-green-400' : 'bg-black text-white'}`}
                  onMouseEnter={() => setHoveredCol(2)} onMouseLeave={() => setHoveredCol(null)}
                >Ingresos (<MathFormula tex="x_2" />)</th>
                <th 
                  className={`p-4 border-b border-neutral-800 transition-colors cursor-default ${hoveredCol === 3 ? 'bg-neutral-800 text-green-400' : 'bg-black text-white'}`}
                  onMouseEnter={() => setHoveredCol(3)} onMouseLeave={() => setHoveredCol(null)}
                >Historial (<MathFormula tex="x_3" />)</th>
                <th 
                  className={`p-4 border-b border-neutral-800 transition-colors cursor-default ${hoveredCol === 4 ? 'bg-green-900/40 text-green-400' : 'bg-green-900/10 text-green-500'}`}
                  onMouseEnter={() => setHoveredCol(4)} onMouseLeave={() => setHoveredCol(null)}
                >Riesgo (<MathFormula tex="y" />)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr 
                  key={row.id}
                  className={`transition-colors cursor-default ${hoveredRow === i ? 'bg-neutral-800' : 'bg-transparent'}`}
                  onMouseEnter={() => setHoveredRow(i)} onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="p-4 border-b border-neutral-800 font-mono text-neutral-500 bg-black"><MathFormula tex={`e_${i+1}`} /></td>
                  <td className={`p-4 border-b border-neutral-800 ${hoveredCol === 1 ? 'text-green-400 font-bold' : 'text-neutral-300'}`}>{row.age}</td>
                  <td className={`p-4 border-b border-neutral-800 ${hoveredCol === 2 ? 'text-green-400 font-bold' : 'text-neutral-300'}`}>${row.income}</td>
                  <td className={`p-4 border-b border-neutral-800 ${hoveredCol === 3 ? 'text-green-400 font-bold' : 'text-neutral-300'}`}>{row.history}</td>
                  <td className={`p-4 border-b border-neutral-800 font-bold ${hoveredCol === 4 ? 'text-green-400 bg-green-900/20' : 'text-white bg-green-900/5'}`}>{row.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="h-24 flex items-center justify-center w-full max-w-4xl">
          <AnimatePresence mode="wait">
            {hoveredRow !== null && hoveredCol === null && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center">
                <p className="text-xl text-white">Estás viendo la <strong className="text-green-400">Instancia <MathFormula tex={`e_${hoveredRow+1}`} /></strong></p>
                <p className="text-neutral-400">Representa un único ejemplo (un cliente específico) con todos sus valores.</p>
              </motion.div>
            )}
            {hoveredCol !== null && hoveredCol < 4 && hoveredRow === null && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center">
                <p className="text-xl text-white">Estás viendo el <strong className="text-green-400">Atributo <MathFormula tex={`x_${hoveredCol}`} /></strong></p>
                <p className="text-neutral-400">Es una variable de entrada (feature) que el modelo usará para aprender.</p>
              </motion.div>
            )}
            {hoveredCol === 4 && hoveredRow === null && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center">
                <p className="text-xl text-white">Estás viendo la <strong className="text-green-400">Clase <MathFormula tex="y" /></strong></p>
                <p className="text-neutral-400">Es la variable objetivo que queremos predecir (en este caso, un problema de clasificación).</p>
              </motion.div>
            )}
            {hoveredRow !== null && hoveredCol !== null && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center">
                <p className="text-xl text-white">Estás viendo el valor <strong className="text-green-400"><MathFormula tex={hoveredCol === 4 ? `y_${hoveredRow+1}` : `x_{${hoveredRow+1},${hoveredCol}}`} /></strong></p>
                <p className="text-neutral-400">La intersección entre una instancia y una variable.</p>
              </motion.div>
            )}
            {hoveredRow === null && hoveredCol === null && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                <p className="text-neutral-500 text-lg">Interactúa con la tabla superior</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide49 = () => (
  <SlideLayout title="1.3.3. Características de los conjuntos de datos" subtitle="Conociendo nuestros datos">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
      <div>
        <p className="text-xl text-neutral-300 leading-relaxed mb-6">
          Es habitual observar y anotar ciertas propiedades de los conjuntos de datos al inicio de los proyectos para catalogar el tipo de problema.
        </p>
        <ul className="space-y-4 text-lg text-neutral-400 bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-500"></div> Número de instancias (<MathFormula tex="n" />)</li>
          <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-500"></div> Número de atributos (<MathFormula tex="p" />)</li>
          <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-500"></div> Nombre y tipo de cada atributo</li>
          <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-500"></div> Tipo de datos de la clase y su dominio</li>
          <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-500"></div> Cantidad de valores ausentes (missing values)</li>
        </ul>
      </div>

      <div className="bg-black p-6 rounded-2xl border border-neutral-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">EJEMPLO</div>
        <h4 className="text-xl font-bold text-white mb-4 text-center">Dataset "Iris"</h4>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between border-b border-neutral-800 pb-2">
            <span className="text-neutral-500">Instancias</span>
            <span className="text-white font-mono">150</span>
          </div>
          <div className="flex justify-between border-b border-neutral-800 pb-2">
            <span className="text-neutral-500">Atributos</span>
            <span className="text-white font-mono">4</span>
          </div>
          <div className="border-b border-neutral-800 pb-2">
            <span className="text-neutral-500 block mb-1">Descripción de atributos</span>
            <ul className="text-neutral-300 font-mono text-xs space-y-1 pl-2 border-l-2 border-neutral-700">
              <li>sepal-length (Numérico)</li>
              <li>sepal-width (Numérico)</li>
              <li>petal-length (Numérico)</li>
              <li>petal-width (Numérico)</li>
            </ul>
          </div>
          <div className="flex justify-between border-b border-neutral-800 pb-2">
            <span className="text-neutral-500">Tipo de clase</span>
            <span className="text-green-400 font-mono text-right">Categórico<br/><span className="text-xs text-neutral-400">{'{setosa, versicolor, virginica}'}</span></span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Valores ausentes</span>
            <span className="text-white font-mono">0</span>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide49a = () => (
  <SlideLayout title="Código: Estadística Descriptiva en Python" subtitle="Analizando datos 1D con NumPy y SciPy">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`import numpy as np # Importa numpy para cálculos numéricos eficientes
from scipy import stats # Importa el módulo stats de scipy para funciones estadísticas avanzadas

# Arreglo numérico 1D de ejemplo (representa una característica o variable)
X = np.array([0.5, 23, 0.3, -28, 50, 60, 4.5, 0.3, 0.5, 100, 10, 11, 13, 19, 1, 9])

# 1. Medidas de Tendencia Central (dónde se agrupan los datos)
media = np.mean(X) # Calcula el promedio aritmético de todos los valores
mediana = np.median(X) # Encuentra el valor central (el 50% de los datos son menores, el 50% mayores)
moda, count = stats.mode(X) # Encuentra el valor más frecuente (moda) y cuántas veces aparece (count)

# 2. Medidas de Dispersión (qué tan esparcidos están los datos)
desviacion_tipica = np.std(X) # Calcula la desviación estándar (raíz cuadrada de la varianza)
varianza = np.var(X) # Calcula la varianza (promedio de las diferencias al cuadrado respecto a la media)

# 3. Medidas de Distribución (forma de la curva de los datos)
asimetria = stats.skew(X) # Calcula la asimetría (skewness). >0 cola a la derecha, <0 cola a la izquierda
# fisher=True calcula el exceso de curtosis (Normal = 0). >0 más puntiaguda, <0 más achatada
curtosis = stats.kurtosis(X, fisher=True) # Calcula la curtosis (apuntamiento)

print(f"Media: {media:.2f}, Mediana: {mediana}") # Imprime media y mediana
print(f"Asimetría: {asimetria:.2f}, Curtosis: {curtosis:.2f}") # Imprime asimetría y curtosis`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">numpy (np):</strong> Librería fundamental para computación científica en Python. Maneja arreglos multidimensionales de forma eficiente.
          </li>
          <li>
            <strong className="text-white">scipy.stats (stats):</strong> Módulo de SciPy que contiene un gran número de distribuciones de probabilidad y funciones estadísticas.
          </li>
          <li>
            <strong className="text-white">np.mean(X) / np.median(X):</strong> Calculan la media aritmética y la mediana (el valor central cuando los datos están ordenados).
          </li>
          <li>
            <strong className="text-white">stats.mode(X):</strong> Devuelve el valor más frecuente (moda) y su conteo.
          </li>
          <li>
            <strong className="text-white">stats.skew(X):</strong> Calcula la asimetría. Si es &gt; 0, la cola derecha es más larga. Si es &lt; 0, la cola izquierda es más larga.
          </li>
          <li>
            <strong className="text-white">stats.kurtosis(X, fisher=True):</strong> Mide qué tan "puntiaguda" es la distribución comparada con una normal. <code>fisher=True</code> hace que la distribución normal tenga curtosis 0.
            <ul className="list-disc pl-5 mt-1 text-xs text-neutral-400">
              <li>&lt; 0: Platicúrtica (más plana)</li>
              <li>= 0: Mesocúrtica (normal)</li>
              <li>&gt; 0: Leptocúrtica (más puntiaguda/colas pesadas)</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide50 = () => (
  <SlideLayout title="Quiz: Estructura de Datos" subtitle="Comprueba lo aprendido">
    <Quiz 
      question="En una tabla de datos para un problema de aprendizaje supervisado, ¿qué representa matemáticamente cada fila y cada columna (excluyendo la clase)?"
      options={[
        { id: 1, text: 'Fila = Atributo, Columna = Instancia', correct: false, explanation: 'Es al revés. Las filas son las observaciones individuales y las columnas son las variables.' },
        { id: 2, text: 'Fila = Instancia, Columna = Atributo', correct: true, explanation: '¡Correcto! Cada fila es una instancia (ejemplo) y cada columna es un atributo (característica).' },
        { id: 3, text: 'Fila = Clase, Columna = Atributo', correct: false, explanation: 'La clase es una columna específica (la variable de salida), no una fila.' },
        { id: 4, text: 'Fila = Instancia, Columna = Clase', correct: false, explanation: 'Solo una columna (generalmente la última) es la clase. El resto de columnas son los atributos.' }
      ]}
    />
  </SlideLayout>
);
