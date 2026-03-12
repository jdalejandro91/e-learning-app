import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { motion } from 'framer-motion';
import { BrainCircuit, Database, LineChart, Users, Target, Search, Wrench, Cpu, BarChart3, Rocket } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';

export const Slide1 = () => (
  <SlideLayout title="Aprendizaje Supervisado" subtitle="Módulo de Aprendizaje Automático">
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-800 p-12 rounded-3xl border border-slate-700 shadow-2xl max-w-3xl w-full"
      >
        <BrainCircuit className="w-32 h-32 text-sky-400 mx-auto mb-8" />
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Capítulo 1: Metodología
        </h1>
        <p className="text-2xl text-slate-300 mb-8">
          Introducción al Aprendizaje Automático y la Metodología CRISP-DM
        </p>
        <div className="inline-block bg-sky-500/20 text-sky-300 px-6 py-3 rounded-full text-lg font-medium border border-sky-500/30">
          Máster Universitario en Inteligencia Artificial
        </div>
      </motion.div>
    </div>
  </SlideLayout>
);

export const Slide2 = () => (
  <SlideLayout title="1.1.1. Introducción al Aprendizaje Automático" subtitle="¿Qué es el Machine Learning?">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col justify-center">
        <p className="text-xl text-slate-300 leading-relaxed mb-6">
          El <strong className="text-sky-400">aprendizaje automático</strong> (Machine Learning) es una rama de conocimiento en la que se abordan algoritmos capaces de crear modelos de conocimiento abstractos a partir de históricos de datos.
        </p>
        <p className="text-xl text-slate-300 leading-relaxed">
          El <strong className="text-orange-400">aprendizaje supervisado</strong> es un tipo concreto dentro del aprendizaje automático.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <motion.div 
          className="relative w-full aspect-square max-w-md"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-4 border-dashed border-sky-500/30 rounded-full"></div>
          <div className="absolute inset-4 border-4 border-dotted border-cyan-400/40 rounded-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Database className="w-24 h-24 text-slate-400" />
          </div>
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-2 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <BrainCircuit className="w-12 h-12 text-sky-400" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide3 = () => (
  <SlideLayout title="Modelos Teóricos vs. Empíricos" subtitle="Dos formas de entender la realidad">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-orange-500/20 rounded-xl">
            <LineChart className="w-8 h-8 text-orange-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Modelos Teóricos</h3>
        </div>
        <ul className="space-y-4 text-lg text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 mt-1">▹</span>
            Utilizados en física, química, biología, economía, etc.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 mt-1">▹</span>
            Proceden del estudio en condiciones ideales.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 mt-1">▹</span>
            Basados en leyes y principios predefinidos.
          </li>
        </ul>
      </motion.div>

      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-sky-900/20 p-8 rounded-2xl border border-sky-500/30"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-sky-500/20 rounded-xl">
            <Database className="w-8 h-8 text-sky-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Modelos Empíricos</h3>
        </div>
        <ul className="space-y-4 text-lg text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-sky-400 mt-1">▹</span>
            Generados automáticamente por algoritmos.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sky-400 mt-1">▹</span>
            Se basan únicamente en hechos representados por datos.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sky-400 mt-1">▹</span>
            Superan condiciones ideales, ajustándose a la realidad compleja.
          </li>
        </ul>
      </motion.div>
    </div>
    <div className="mt-8 p-6 bg-slate-800 rounded-xl border-l-4 border-green-400">
      <p className="text-lg text-slate-300">
        <strong className="text-white">Conclusión:</strong> Dada la alta capacidad de procesamiento actual y los grandes volúmenes de datos, los modelos empíricos (Machine Learning) cobran cada vez mayor importancia.
      </p>
    </div>
  </SlideLayout>
);

export const Slide3a = () => (
  <SlideLayout title="Código: Modelos Teóricos y Frontera Bayesiana" subtitle="Simulación con SciPy">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Python</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`from scipy import stats # Importa el módulo stats para distribuciones estadísticas
import numpy as np # Importa numpy para operaciones numéricas y manejo de arrays
import matplotlib.pyplot as plt # Importa matplotlib para crear gráficos

# 1. Creación de distribuciones normales (Teóricas)
# loc = media (μ), scale = desviación estándar (σ)
d1 = stats.stats.norm(loc=10, scale=2) # Crea distribución normal 1 con media 10 y desv. est. 2
d2 = stats.stats.norm(loc=17, scale=3) # Crea distribución normal 2 con media 17 y desv. est. 3

# 2. Generación de puntos para el eje X
x = np.linspace(0, 30, 100) # Genera 100 puntos espaciados uniformemente entre 0 y 30

# 3. Visualización de las Funciones de Densidad de Probabilidad (PDF)
plt.plot(x, d1.pdf(x), color="red", label="pop 1") # Grafica la PDF de la distribución 1 en rojo
plt.plot(x, d2.pdf(x), color="blue", label="pop 2") # Grafica la PDF de la distribución 2 en azul
plt.legend() # Muestra la leyenda del gráfico

# 4. Cálculo de la frontera óptima (Frontera Bayesiana)
x_fine = np.linspace(5, 25, 1000) # Genera 1000 puntos entre 5 y 25 para mayor precisión
# Buscamos el punto donde ambas distribuciones se cruzan (diferencia mínima)
minx = x_fine[np.argmin(np.abs(d1.pdf(x_fine) - d2.pdf(x_fine)))] # Encuentra el punto de cruce de las PDFs
print(f"Frontera óptima en {minx:.2f}") # Imprime el valor de la frontera óptima

# 5. Cálculo analítico de los errores (usando CDF)
print("Error pob 1:", 1 - d1.cdf(minx)) # Imprime el error de la población 1 (área a la derecha de la frontera)
print("Error pob 2:", d2.cdf(minx)) # Imprime el error de la población 2 (área a la izquierda de la frontera)`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">scipy.stats.norm:</strong> Crea una variable aleatoria continua normal. 
            <br/><span className="text-neutral-400">Parámetros: <code>loc</code> (media), <code>scale</code> (desviación estándar).</span>
          </li>
          <li>
            <strong className="text-white">.pdf(x):</strong> Probability Density Function. Devuelve el valor de la curva de campana en el punto <code>x</code>.
          </li>
          <li>
            <strong className="text-white">.cdf(x):</strong> Cumulative Distribution Function. Devuelve la probabilidad acumulada hasta el punto <code>x</code> (área bajo la curva). Se usa para calcular el error teórico.
          </li>
          <li>
            <strong className="text-white">np.linspace(start, stop, num):</strong> Genera <code>num</code> puntos espaciados uniformemente entre <code>start</code> y <code>stop</code>.
          </li>
          <li>
            <strong className="text-white">np.argmin():</strong> Devuelve el índice del valor mínimo en un array. Aquí se usa para encontrar dónde la diferencia entre las dos curvas es mínima (el punto de cruce).
          </li>
        </ul>
        <div className="mt-4 p-4 bg-black rounded-xl border border-sky-900/50">
          <p className="text-xs text-sky-200">En el caso ideal, conocemos las distribuciones exactas y podemos calcular la frontera perfecta analíticamente. En la realidad, esto casi nunca ocurre.</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide3b = () => (
  <SlideLayout title="Código: Modelos Empíricos (Machine Learning)" subtitle="Scikit-Learn en acción">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Entrenando Clasificadores</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`import numpy as np # Importa numpy para operaciones numéricas
from sklearn.linear_model import LogisticRegression # Importa el modelo de Regresión Logística
from sklearn.ensemble import RandomForestClassifier # Importa el modelo de Bosque Aleatorio
from sklearn.svm import SVC # Importa el modelo de Máquinas de Vectores de Soporte (SVM)

# Supongamos que tenemos X (características) e y (etiquetas)
# generadas a partir de una muestra de datos reales.

# 1. Clasificador Lineal (Regresión Logística)
estimador_lr = LogisticRegression() # Instancia el modelo de regresión logística
estimador_lr.fit(X, y) # Entrena el modelo con los datos X e y, aprendiendo una frontera lineal recta

# 2. Clasificador Bosque Aleatorio (Random Forest)
estimador_rf = RandomForestClassifier() # Instancia el modelo de bosque aleatorio
estimador_rf.fit(X, y) # Entrena el modelo, aprendiendo una frontera irregular/escalonada

# 3. Máquina de Soporte Vectorial (SVM)
estimador_svc = SVC() # Instancia el modelo SVM (por defecto usa kernel RBF no lineal)
estimador_svc.fit(X, y) # Entrena el modelo, aprendiendo una frontera curva/ovalada`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-orange-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">LogisticRegression:</strong> Modelo lineal. Asume que las clases pueden separarse con una línea recta (o hiperplano).
          </li>
          <li>
            <strong className="text-white">RandomForestClassifier:</strong> Modelo basado en múltiples árboles de decisión. Divide el espacio en regiones rectangulares, creando fronteras escalonadas.
          </li>
          <li>
            <strong className="text-white">SVC (Support Vector Classification):</strong> Encuentra el hiperplano que maximiza el margen entre clases. Con kernels no lineales (por defecto RBF), crea fronteras curvas que envuelven los datos.
          </li>
          <li>
            <strong className="text-white">.fit(X, y):</strong> El método fundamental de Scikit-Learn para <strong>entrenar</strong> el modelo. <code>X</code> es la matriz de características (2D) e <code>y</code> es el vector de etiquetas (1D).
          </li>
        </ul>
        <div className="mt-4 p-4 bg-black rounded-xl border border-orange-900/50">
          <p className="text-xs text-orange-200">A diferencia del caso teórico, aquí los algoritmos <strong>estiman</strong> la frontera basándose en una muestra de datos y en sus propias suposiciones matemáticas subyacentes.</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide4 = () => (
  <SlideLayout title="Minería de Datos (Data Mining)" subtitle="El contexto del Aprendizaje Automático">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative w-full max-w-4xl p-8">
        <div className="absolute inset-0 bg-slate-800 rounded-3xl border border-slate-700 transform -skew-y-2"></div>
        <div className="relative z-10 bg-slate-800 p-10 rounded-3xl border border-slate-600 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-white mb-8">El Ecosistema de los Datos</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex-1 text-center p-6 bg-slate-900 rounded-2xl border border-slate-700">
              <Database className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Bases de Datos</h4>
              <p className="text-slate-400 text-sm">Almacenamiento masivo de información histórica.</p>
            </div>
            
            <div className="text-sky-400 text-4xl font-bold">→</div>
            
            <div className="flex-1 text-center p-6 bg-sky-900/30 rounded-2xl border border-sky-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-sky-500/10 rounded-bl-full"></div>
              <Search className="w-16 h-16 text-sky-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-sky-300 mb-2">Minería de Datos</h4>
              <p className="text-slate-300 text-sm">Procesos, métodos y técnicas para extraer conocimiento.</p>
            </div>
            
            <div className="text-cyan-400 text-4xl font-bold">→</div>
            
            <div className="flex-1 text-center p-6 bg-cyan-900/30 rounded-2xl border border-cyan-500/30">
              <BrainCircuit className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-cyan-300 mb-2">Aprendizaje Automático</h4>
              <p className="text-slate-300 text-sm">Algoritmos que crean los modelos abstractos.</p>
            </div>
          </div>
          
          <p className="text-center mt-10 text-lg text-slate-300">
            El aprendizaje automático es una rama de conocimiento que pertenece al campo de la minería de datos.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide5 = () => (
  <SlideLayout title="Metodologías de Minería de Datos" subtitle="Estructurando el proceso">
    <p className="text-xl text-slate-300 mb-8">
      El proceso de minería de datos es amplio y complejo. Han surgido diversas metodologías para llevar a cabo estos proyectos de forma racional y estructurada.
    </p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { name: 'KDD', desc: 'Knowledge Discovery from Databases (1996). Muy usado en el ámbito académico.', color: 'border-slate-500' },
        { name: 'CRISP-DM', desc: 'Cross-Industry Standard Process for Data Mining (1999). El estándar de la industria.', color: 'border-sky-500 bg-sky-900/20' },
        { name: 'SEMMA', desc: 'Sample, Explore, Modify, Model, and Assess. Creado por el Instituto SAS.', color: 'border-slate-500' },
        { name: 'ASUM-DM', desc: 'Analytics Solutions Unified Method. Evolución de CRISP-DM por IBM (2015).', color: 'border-slate-500' }
      ].map((met, i) => (
        <motion.div 
          key={met.name}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className={`p-6 rounded-2xl border-2 ${met.color} flex flex-col h-full`}
        >
          <h3 className="text-2xl font-bold text-white mb-4">{met.name}</h3>
          <p className="text-slate-400 flex-1">{met.desc}</p>
        </motion.div>
      ))}
    </div>
  </SlideLayout>
);

export const Slide6 = () => (
  <SlideLayout title="KDD vs CRISP-DM" subtitle="¿Por qué CRISP-DM es el estándar?">
    <div className="flex flex-col md:flex-row gap-8 h-full items-center">
      <div className="flex-1 bg-slate-800 p-8 rounded-2xl border border-slate-700 w-full">
        <h3 className="text-2xl font-bold text-slate-200 mb-6 text-center border-b border-slate-700 pb-4">Proceso KDD</h3>
        <ul className="space-y-4 text-slate-400">
          <li>❌ Carece de proyección en la industria.</li>
          <li>❌ Faltan tareas críticas empresariales.</li>
          <li>❌ No incluye fase de comprensión del negocio.</li>
          <li>❌ No incluye despliegue ni puesta en explotación.</li>
          <li>ℹ️ La minería de datos es solo una etapa del proceso.</li>
        </ul>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="text-4xl font-bold text-slate-600">VS</div>
      </div>
      
      <div className="flex-1 bg-sky-900/20 p-8 rounded-2xl border border-sky-500/50 w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">GANADOR</div>
        <h3 className="text-2xl font-bold text-sky-400 mb-6 text-center border-b border-sky-500/30 pb-4">CRISP-DM</h3>
        <ul className="space-y-4 text-slate-300">
          <li>✅ Proyección industrial real.</li>
          <li>✅ Incluye comprensión del problema de negocio.</li>
          <li>✅ Incluye despliegue y explotación.</li>
          <li>✅ La minería de datos es el proceso global en sí mismo.</li>
          <li>✅ Metodología más utilizada y reconocida actualmente.</li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide7 = () => (
  <SlideLayout title="1.1.2. La metodología CRISP-DM" subtitle="Cross-Industry Standard Process for Data Mining">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
      <div>
        <p className="text-xl text-slate-300 leading-relaxed mb-6">
          Concebida a finales de 1996 y presentada en 1999, CRISP-DM integra <strong className="text-sky-400">todas las tareas necesarias</strong> en proyectos de minería de datos reales.
        </p>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-6">
          <h4 className="text-lg font-bold text-white mb-3">Aplicaciones típicas:</h4>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-center gap-2"><Target size={16} className="text-sky-400"/> Encontrar perfiles de clientes fraudulentos.</li>
            <li className="flex items-center gap-2"><Target size={16} className="text-sky-400"/> Descubrir relaciones entre síntomas y enfermedades.</li>
            <li className="flex items-center gap-2"><Target size={16} className="text-sky-400"/> Diagnóstico de errores en fábricas.</li>
            <li className="flex items-center gap-2"><Target size={16} className="text-sky-400"/> Estimar fuga de clientes a la competencia.</li>
            <li className="flex items-center gap-2"><Target size={16} className="text-sky-400"/> Sistemas de recomendación de productos.</li>
            <li className="flex items-center gap-2"><Target size={16} className="text-sky-400"/> Segmentación automática de clientes.</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
          {['SPSS', 'Teradata', 'NCR', 'Daimler AG', 'Ohra'].map((company, i) => (
            <div key={company} className={`p-4 rounded-lg text-center font-bold ${i === 4 ? 'col-span-2' : ''} bg-slate-800 border border-slate-700 text-slate-300`}>
              {company}
            </div>
          ))}
          <div className="col-span-2 text-center text-sm text-slate-500 mt-2">
            Entidades codirectoras del proyecto original
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide8 = () => (
  <SlideLayout title="Fases de CRISP-DM" subtitle="Un ciclo iterativo de 6 fases">
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-xl text-slate-300 mb-12 text-center max-w-3xl">
        CRISP-DM se compone de seis fases, las cuales dependen entre sí tanto en forma secuencial como cíclica, pudiendo existir iteraciones que permitan mejorar la aproximación obtenida.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {[
          { id: 1, name: 'Comprensión del negocio', icon: Target, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30' },
          { id: 2, name: 'Comprensión de los datos', icon: Search, color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/30' },
          { id: 3, name: 'Preparación de los datos', icon: Wrench, color: 'text-teal-400', bg: 'bg-teal-400/10', border: 'border-teal-400/30' },
          { id: 4, name: 'Modelado', icon: Cpu, color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/30' },
          { id: 5, name: 'Evaluación', icon: BarChart3, color: 'text-pink-400', bg: 'bg-pink-400/10', border: 'border-pink-400/30' },
          { id: 6, name: 'Despliegue', icon: Rocket, color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/30' },
        ].map((phase) => (
          <motion.div
            key={phase.id}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-2xl border ${phase.border} ${phase.bg} flex flex-col items-center text-center`}
          >
            <div className="text-2xl font-black text-slate-500 mb-2 opacity-50">0{phase.id}</div>
            <phase.icon className={`w-12 h-12 ${phase.color} mb-4`} />
            <h3 className="text-lg font-bold text-white">{phase.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export const Slide9 = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);
  
  const phases = [
    { id: 1, name: 'Comprensión del Negocio', desc: 'Entender objetivos y requisitos desde la perspectiva empresarial.' },
    { id: 2, name: 'Comprensión de los Datos', desc: 'Recolección inicial, exploración y evaluación de calidad.' },
    { id: 3, name: 'Preparación de los Datos', desc: 'Seleccionar, limpiar, construir, integrar y formatear datos.' },
    { id: 4, name: 'Modelado', desc: 'Seleccionar y aplicar algoritmos de aprendizaje automático.' },
    { id: 5, name: 'Evaluación', desc: 'Evaluar modelos respecto a los criterios de éxito del negocio.' },
    { id: 6, name: 'Despliegue', desc: 'Puesta en producción, monitorización y mantenimiento.' }
  ];

  return (
    <SlideLayout title="Ciclo de Vida CRISP-DM" subtitle="Explora las relaciones entre fases">
      <div className="flex flex-col md:flex-row gap-8 h-full items-center">
        <div className="w-full md:w-1/2 relative aspect-square max-w-md mx-auto">
          {/* Simplified interactive wheel */}
          <div className="absolute inset-0 rounded-full border-4 border-slate-700 flex items-center justify-center">
            <div className="text-center">
              <Database className="w-16 h-16 text-slate-500 mx-auto mb-2" />
              <span className="text-slate-400 font-bold">DATOS</span>
            </div>
          </div>
          
          {phases.map((phase, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const radius = 42; // percentage
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            
            return (
              <button
                key={phase.id}
                onMouseEnter={() => setActivePhase(phase.id)}
                onMouseLeave={() => setActivePhase(null)}
                className={`absolute w-24 h-24 -ml-12 -mt-12 rounded-full flex items-center justify-center text-xs font-bold text-center p-2 transition-all duration-300 shadow-lg ${
                  activePhase === phase.id 
                    ? 'bg-sky-500 text-white scale-110 z-10' 
                    : 'bg-slate-800 text-slate-300 border-2 border-slate-600 hover:border-sky-400'
                }`}
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {phase.name}
              </button>
            );
          })}
        </div>
        
        <div className="w-full md:w-1/2 bg-slate-800 p-8 rounded-2xl border border-slate-700 min-h-[300px] flex flex-col justify-center">
          {activePhase ? (
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-3xl font-bold text-sky-400 mb-4">
                {phases[activePhase - 1].name}
              </h3>
              <p className="text-xl text-slate-300">
                {phases[activePhase - 1].desc}
              </p>
              
              {/* Show relationships */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-sm text-slate-400 font-bold mb-2">RELACIONES PRINCIPALES:</p>
                <ul className="text-sm text-slate-300 space-y-1">
                  {activePhase === 1 && <li>↔ Fuerte relación bidireccional con Comprensión de Datos</li>}
                  {activePhase === 2 && <li>↔ Fuerte relación bidireccional con Comprensión del Negocio</li>}
                  {activePhase === 3 && <li>→ Alimenta directamente a la fase de Modelado</li>}
                  {activePhase === 4 && <li>↺ A menudo requiere volver a Preparación de Datos</li>}
                  {activePhase === 5 && <li>↺ Puede requerir volver a Comprensión del Negocio si no se cumplen objetivos</li>}
                  {activePhase === 6 && <li>→ Fin del ciclo actual, inicio de la explotación</li>}
                </ul>
              </div>
            </motion.div>
          ) : (
            <div className="text-center text-slate-500">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Pasa el ratón sobre las fases del ciclo para ver más detalles.</p>
            </div>
          )}
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide10 = () => (
  <SlideLayout title="1.1.3. Roles en Ciencia de Datos" subtitle="El equipo detrás del proyecto">
    <p className="text-xl text-slate-300 mb-8">
      Aunque CRISP-DM no especifica nada al respecto, en los proyectos reales de ciencia de datos (Data Science) se requiere un equipo multidisciplinar.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { title: 'Director Técnico', en: 'Data Scientist Chief', icon: Users, color: 'text-blue-400' },
        { title: 'Científico de Datos', en: 'Data Scientist', icon: BrainCircuit, color: 'text-purple-400' },
        { title: 'Analista de Datos', en: 'Data Analyst', icon: BarChart3, color: 'text-green-400' },
        { title: 'Ingeniero de Datos', en: 'Data Engineer', icon: Database, color: 'text-orange-400' }
      ].map((role, i) => (
        <motion.div
          key={role.title}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.15 }}
          className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex items-center gap-6 hover:bg-slate-700/50 transition-colors"
        >
          <div className={`p-4 bg-slate-900 rounded-xl border border-slate-700 ${role.color}`}>
            <role.icon size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{role.title}</h3>
            <p className="text-slate-400">{role.en}</p>
          </div>
        </motion.div>
      ))}
    </div>
    <p className="text-sm text-slate-500 mt-8 text-center">
      * También existen otros roles como ingenieros de software, administradores de BBDD, diseñadores gráficos, etc.
    </p>
  </SlideLayout>
);
