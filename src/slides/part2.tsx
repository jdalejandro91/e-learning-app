import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { motion } from 'framer-motion';
import { Users, BrainCircuit, BarChart3, Database, Target, Search, AlertTriangle, CheckCircle2, Wrench } from 'lucide-react';

export const Slide11 = () => (
  <SlideLayout title="Rol: Director Técnico de Proyecto" subtitle="Data Scientist Chief">
    <div className="flex flex-col md:flex-row gap-8 h-full items-center">
      <div className="w-full md:w-1/3 flex justify-center">
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="bg-blue-500/20 p-12 rounded-full border-4 border-blue-500/50"
        >
          <Users className="w-32 h-32 text-blue-400" />
        </motion.div>
      </div>
      <div className="w-full md:w-2/3 bg-slate-800 p-8 rounded-2xl border border-slate-700">
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Responsabilidades Principales</h3>
        <ul className="space-y-4 text-lg text-slate-300">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-blue-400 mt-1 shrink-0" />
            <span>Persona responsable del proyecto.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-blue-400 mt-1 shrink-0" />
            <span>Planifica el proyecto y asigna recursos.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-blue-400 mt-1 shrink-0" />
            <span>Supervisa el trabajo del equipo y establece prioridades.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-blue-400 mt-1 shrink-0" />
            <span>Realiza la validación última de los resultados.</span>
          </li>
        </ul>
        <div className="mt-8 p-4 bg-slate-900 rounded-xl border border-slate-700">
          <p className="text-slate-400">
            <strong className="text-white">Perfil:</strong> Debe reunir conocimientos de gestión de equipos y negocio, así como poseer un perfil técnico sólido.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide12 = () => (
  <SlideLayout title="Rol: Científico de Datos" subtitle="Data Scientist">
    <div className="flex flex-col md:flex-row gap-8 h-full items-center">
      <div className="w-full md:w-1/3 flex justify-center">
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="bg-purple-500/20 p-12 rounded-full border-4 border-purple-500/50"
        >
          <BrainCircuit className="w-32 h-32 text-purple-400" />
        </motion.div>
      </div>
      <div className="w-full md:w-2/3 bg-slate-800 p-8 rounded-2xl border border-slate-700">
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Responsabilidades Principales</h3>
        <ul className="space-y-4 text-lg text-slate-300">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-purple-400 mt-1 shrink-0" />
            <span>Analiza los problemas y se comunica con expertos.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-purple-400 mt-1 shrink-0" />
            <span>Diseña e implementa las soluciones más apropiadas.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-purple-400 mt-1 shrink-0" />
            <span>Diseña y ejecuta la experimentación.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-purple-400 mt-1 shrink-0" />
            <span>Interpreta los resultados obtenidos.</span>
          </li>
        </ul>
        <div className="mt-8 p-4 bg-slate-900 rounded-xl border border-slate-700">
          <p className="text-slate-400">
            <strong className="text-white">Perfil:</strong> Conocimientos profundos de minería de datos, matemáticas, ingeniería informática y habilidades de comunicación. (Se suele valorar el grado de doctor).
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide13 = () => (
  <SlideLayout title="Rol: Analista de Datos" subtitle="Data Analyst">
    <div className="flex flex-col md:flex-row gap-8 h-full items-center">
      <div className="w-full md:w-1/3 flex justify-center">
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="bg-green-500/20 p-12 rounded-full border-4 border-green-500/50"
        >
          <BarChart3 className="w-32 h-32 text-green-400" />
        </motion.div>
      </div>
      <div className="w-full md:w-2/3 bg-slate-800 p-8 rounded-2xl border border-slate-700">
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Responsabilidades Principales</h3>
        <ul className="space-y-4 text-lg text-slate-300">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-green-400 mt-1 shrink-0" />
            <span>Realiza estudios de análisis de datos.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-green-400 mt-1 shrink-0" />
            <span>Aplica técnicas de inteligencia de negocio (Business Intelligence).</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-green-400 mt-1 shrink-0" />
            <span>Extrae conclusiones útiles a partir de los datos.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-green-400 mt-1 shrink-0" />
            <span>Elabora informes y cuadros de mando (dashboards).</span>
          </li>
        </ul>
        <div className="mt-8 p-4 bg-slate-900 rounded-xl border border-slate-700">
          <p className="text-slate-400">
            <strong className="text-white">Perfil:</strong> Altos conocimientos de estadística y de tecnologías de inteligencia de negocio.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide14 = () => (
  <SlideLayout title="Rol: Ingeniero de Datos" subtitle="Data Engineer">
    <div className="flex flex-col md:flex-row gap-8 h-full items-center">
      <div className="w-full md:w-1/3 flex justify-center">
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="bg-orange-500/20 p-12 rounded-full border-4 border-orange-500/50"
        >
          <Database className="w-32 h-32 text-orange-400" />
        </motion.div>
      </div>
      <div className="w-full md:w-2/3 bg-slate-800 p-8 rounded-2xl border border-slate-700">
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Responsabilidades Principales</h3>
        <ul className="space-y-4 text-lg text-slate-300">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-orange-400 mt-1 shrink-0" />
            <span>Maneja los datos con destreza (ETL: Extraer, Transformar, Cargar).</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-orange-400 mt-1 shrink-0" />
            <span>Utiliza herramientas de transformación, SGBD y lenguajes de programación.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-orange-400 mt-1 shrink-0" />
            <span>Proporciona datos limpios y organizados para analistas y científicos.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-orange-400 mt-1 shrink-0" />
            <span>Automatiza los procesos de tratamiento de datos.</span>
          </li>
        </ul>
        <div className="mt-8 p-4 bg-slate-900 rounded-xl border border-slate-700">
          <p className="text-slate-400">
            <strong className="text-white">Perfil:</strong> Altos conocimientos de ingeniería informática, bases de datos y arquitecturas de datos.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide15 = () => (
  <SlideLayout title="1.1.4. Comprensión del Negocio" subtitle="Fase 1 de CRISP-DM">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-blue-900/20 border border-blue-500/30 p-8 rounded-3xl w-full max-w-4xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="bg-blue-500 p-4 rounded-2xl">
            <Target className="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">El punto de partida</h3>
            <p className="text-blue-300 text-lg">Todo proyecto debe comenzar aquí, por sencillo que sea.</p>
          </div>
        </div>
        
        <div className="space-y-6 text-xl text-slate-300 leading-relaxed">
          <p>
            Debería ser una fase con <strong className="text-white">actividad recurrente</strong> durante todo el proyecto, pues es importante que los desarrollos sean útiles y estén alineados con las necesidades que motivaron el proyecto.
          </p>
          <p>
            En esta fase se establecen los requisitos y objetivos del proyecto desde una <strong className="text-sky-400">perspectiva empresarial</strong> para luego trasladarlos a objetivos técnicos y a un plan de proyecto.
          </p>
          <div className="p-6 bg-slate-900 rounded-xl border-l-4 border-blue-500">
            <p className="italic">
              "Para llevar a cabo esta fase, es necesario comprender en profundidad el problema que se quiere resolver."
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide16 = () => (
  <SlideLayout title="Fase 1: Tareas Genéricas" subtitle="Comprensión del Negocio">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      {[
        { 
          title: 'Determinar objetivos de negocio', 
          desc: 'Determinar el problema a resolver y por qué se usa minería de datos. Establecer criterios de éxito (cualitativos o cuantitativos).',
          ex: 'Ej: Detectar fraude eléctrico. Criterio: Nº de detecciones.'
        },
        { 
          title: 'Evaluar la situación actual', 
          desc: 'Determinar antecedentes y requisitos. Evaluar personal disponible, calidad/cantidad de datos, ventajas competitivas, etc.',
          ex: 'Ej: ¿Tenemos datos históricos de fraude? ¿Tenemos expertos?'
        },
        { 
          title: 'Determinar objetivos de minería de datos', 
          desc: 'Traducir los objetivos del negocio en metas técnicas del proyecto de minería de datos.',
          ex: 'Ej: Negocio: Asignar más créditos. Minería: Determinar perfil de endeudamiento.'
        },
        { 
          title: 'Producir un plan de proyecto', 
          desc: 'Desarrollar el plan detallando qué pasos se deben seguir y qué procedimientos se emplearán para cada uno.',
          ex: 'Ej: Cronograma, recursos, herramientas a utilizar.'
        }
      ].map((task, i) => (
        <motion.div 
          key={task.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              {i + 1}
            </div>
            <h3 className="text-xl font-bold text-white">{task.title}</h3>
          </div>
          <p className="text-slate-300 mb-4 flex-1">{task.desc}</p>
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 text-sm text-slate-400">
            {task.ex}
          </div>
        </motion.div>
      ))}
    </div>
  </SlideLayout>
);

export const Slide17 = () => (
  <SlideLayout title="1.1.5. Comprensión de los Datos" subtitle="Fase 2 de CRISP-DM">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-cyan-900/20 border border-cyan-500/30 p-8 rounded-3xl w-full max-w-4xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="bg-cyan-500 p-4 rounded-2xl">
            <Search className="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">El primer contacto</h3>
            <p className="text-cyan-300 text-lg">Recolección y exploración inicial de la información.</p>
          </div>
        </div>
        
        <div className="space-y-6 text-xl text-slate-300 leading-relaxed">
          <p>
            En esta fase se establece un <strong className="text-white">primer contacto con el problema</strong> a través de los datos.
          </p>
          <div className="flex items-start gap-4 p-6 bg-slate-900 rounded-xl border border-slate-700">
            <AlertTriangle className="w-8 h-8 text-orange-400 shrink-0 mt-1" />
            <p>
              Esta fase suele ser <strong className="text-orange-400">crítica</strong> en el proyecto. Un buen entendimiento de los datos tiene como consecuencia una importante reducción en el tiempo global del proyecto, además de incrementar las garantías de éxito.
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide18 = () => (
  <SlideLayout title="Fase 2: Tareas Genéricas" subtitle="Comprensión de los Datos">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      {[
        { 
          title: 'Recolectar datos iniciales', 
          desc: 'Adquisición de datos y adecuación para procesamiento. Elaborar informes de localización, técnicas usadas y problemas encontrados.',
          icon: Database
        },
        { 
          title: 'Describir los datos', 
          desc: 'Descripción formal: número de conjuntos, filas, columnas, identificación, significado de cada columna y formato.',
          icon: BarChart3
        },
        { 
          title: 'Explorar los datos', 
          desc: 'Descubrir estructura y distribución. Aplicar estadística descriptiva, crear tablas de frecuencia, histogramas y gráficas.',
          icon: Search
        },
        { 
          title: 'Verificar la calidad', 
          desc: 'Determinar consistencia, valores nulos o fuera de rango (ruido). Detectar grado de completitud y corrección.',
          icon: CheckCircle2
        }
      ].map((task, i) => (
        <motion.div 
          key={task.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
              <task.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">{task.title}</h3>
          </div>
          <p className="text-slate-300 flex-1">{task.desc}</p>
        </motion.div>
      ))}
    </div>
  </SlideLayout>
);

export const Slide19 = () => (
  <SlideLayout title="1.1.6. Preparación de los Datos" subtitle="Fase 3 de CRISP-DM">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-teal-900/20 border border-teal-500/30 p-8 rounded-3xl w-full max-w-4xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="bg-teal-500 p-4 rounded-2xl">
            <Wrench className="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">La fase más laboriosa</h3>
            <p className="text-teal-300 text-lg">Seleccionar, limpiar y generar conjuntos correctos.</p>
          </div>
        </div>
        
        <div className="p-6 bg-orange-900/20 rounded-xl border-l-4 border-orange-500 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="text-orange-400" />
            <h4 className="text-xl font-bold text-orange-400">¡Fase sumamente crítica!</h4>
          </div>
          <p className="text-slate-300 text-lg">
            Los errores en los datos que pasan inadvertidos y no se resuelven aquí, se trasladan al modelado, perjudicando la exactitud de los modelos (cuya causa será muy difícil de encontrar).
          </p>
        </div>
        
        <p className="text-xl text-center text-slate-300 font-medium">
          Por esta razón, esta fase es crucial y generalmente demanda <strong className="text-white">siempre el mayor esfuerzo y tiempo</strong> del proyecto (a menudo el 70-80% del tiempo total).
        </p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide20 = () => (
  <SlideLayout title="Fase 3: Tareas Genéricas (I)" subtitle="Preparación de los Datos">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
      >
        <h3 className="text-2xl font-bold text-teal-400 mb-4 border-b border-slate-700 pb-4">1. Seleccionar los datos</h3>
        <p className="text-lg text-slate-300 mb-6">
          Se selecciona un subconjunto de datos considerando:
        </p>
        <ul className="space-y-3 text-slate-400">
          <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-teal-500"></div> Calidad y consistencia</li>
          <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-teal-500"></div> Limitaciones en cantidad</li>
          <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-teal-500"></div> Tipos de datos compatibles con las técnicas de modelado a utilizar</li>
        </ul>
      </motion.div>

      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
      >
        <h3 className="text-2xl font-bold text-teal-400 mb-4 border-b border-slate-700 pb-4">2. Limpiar los datos</h3>
        <p className="text-lg text-slate-300 mb-6">
          Aplicación de un extenso repertorio de técnicas para mejorar calidad y consistencia:
        </p>
        <ul className="space-y-3 text-slate-400">
          <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-teal-500"></div> Selección de columnas (reducción dimensionalidad)</li>
          <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-teal-500"></div> Normalización y estandarización</li>
          <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-teal-500"></div> Discretización de columnas numéricas</li>
          <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-teal-500"></div> Detección y corrección de valores anómalos (outliers)</li>
          <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-teal-500"></div> Imputación de valores ausentes (missing values)</li>
        </ul>
      </motion.div>
    </div>
  </SlideLayout>
);
