import React, { useState, useEffect } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { motion } from 'framer-motion';
import { Quiz } from '../components/Quiz';
import { CodeBlock } from '../components/CodeBlock';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Network, Minimize2, Link } from 'lucide-react';

export const Slide39 = () => (
  <SlideLayout title="1.2.2. Aprendizaje No Supervisado" subtitle="Descubriendo lo oculto">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 w-full max-w-4xl">
        <p className="text-xl text-slate-300 leading-relaxed mb-8 text-center">
          En el aprendizaje no supervisado <strong className="text-purple-400">NO hay una variable especial de interés</strong> (variable de salida o clase). Por lo tanto, no son problemas de inferencia o predicción.
        </p>
        
        <h4 className="text-2xl font-bold text-white mb-6 text-center">Problemas Habituales</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl border border-purple-500/30 flex flex-col items-center text-center">
            <Network className="w-12 h-12 text-purple-400 mb-4" />
            <h5 className="font-bold text-white mb-2">Clustering</h5>
            <p className="text-sm text-slate-400">Creación de grupos de datos similares. Útil para segmentar y analizar cada grupo por separado.</p>
          </div>
          
          <div className="bg-slate-900 p-6 rounded-xl border border-cyan-500/30 flex flex-col items-center text-center">
            <Link className="w-12 h-12 text-cyan-400 mb-4" />
            <h5 className="font-bold text-white mb-2">Reglas de Asociación</h5>
            <p className="text-sm text-slate-400">Asocian variables mediante relaciones causa-efecto. Clave en sistemas de recomendación.</p>
          </div>
          
          <div className="bg-slate-900 p-6 rounded-xl border border-pink-500/30 flex flex-col items-center text-center">
            <Minimize2 className="w-12 h-12 text-pink-400 mb-4" />
            <h5 className="font-bold text-white mb-2">Reducción de Dimensionalidad</h5>
            <p className="text-sm text-slate-400">Reducir la cantidad de datos (columnas) manteniendo la información relevante para mejorar eficiencia.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide40 = () => {
  const [step, setStep] = useState(0);
  
  // Generate random points for 3 clusters
  const generateCluster = (cx: number, cy: number, count: number, id: number) => {
    return Array.from({ length: count }, () => ({
      x: cx + (Math.random() * 20 - 10),
      y: cy + (Math.random() * 20 - 10),
      clusterId: id
    }));
  };

  const rawData = [
    ...generateCluster(20, 80, 15, 0),
    ...generateCluster(80, 70, 20, 1),
    ...generateCluster(50, 30, 15, 2)
  ];

  const colors = ['#a855f7', '#38bdf8', '#4ade80'];

  return (
    <SlideLayout title="Clustering (Agrupamiento)" subtitle="Encontrando similitudes en los datos">
      <div className="flex flex-col h-full">
        <div className="flex justify-center gap-4 mb-6">
          <button 
            onClick={() => setStep(0)}
            className={`px-6 py-2 rounded-full font-bold transition-colors ${step === 0 ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            1. Datos Crudos
          </button>
          <button 
            onClick={() => setStep(1)}
            className={`px-6 py-2 rounded-full font-bold transition-colors ${step === 1 ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            2. Algoritmo (K-Means)
          </button>
          <button 
            onClick={() => setStep(2)}
            className={`px-6 py-2 rounded-full font-bold transition-colors ${step === 2 ? 'bg-green-500 text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            3. Clústers Encontrados
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-3xl h-[400px] bg-slate-800 rounded-2xl border border-slate-700 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" dataKey="x" domain={[0, 100]} hide />
                <YAxis type="number" dataKey="y" domain={[0, 100]} hide />
                <Scatter data={rawData} animationDuration={1000}>
                  {rawData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={step === 0 ? '#94a3b8' : colors[entry.clusterId]} 
                      className="transition-colors duration-1000"
                    />
                  ))}
                </Scatter>
                {/* Centroids */}
                {step >= 1 && (
                  <Scatter data={[{x: 20, y: 80}, {x: 80, y: 70}, {x: 50, y: 30}]} shape="cross" fill="#fff" />
                )}
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="mt-6 text-center h-16">
          {step === 0 && <p className="text-slate-300 text-lg">Los datos entran sin etiquetas. No sabemos a qué grupo pertenece cada punto.</p>}
          {step === 1 && <p className="text-slate-300 text-lg">El algoritmo busca centros (cruces blancas) y asigna cada punto al centro más cercano.</p>}
          {step === 2 && <p className="text-slate-300 text-lg">Resultado final: 3 segmentos distintos descubiertos automáticamente.</p>}
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide41 = () => (
  <SlideLayout title="Reglas de Asociación" subtitle="Si compras A, probablemente compres B">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 w-full max-w-4xl">
        <p className="text-xl text-slate-300 mb-8 text-center">
          Busca relaciones causa-efecto (antecedente → consecuente) entre variables.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-600 text-center w-48">
            <span className="text-4xl">🍺</span>
            <p className="text-white font-bold mt-2">Cerveza</p>
          </div>
          
          <div className="flex flex-col items-center">
            <motion.div 
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-cyan-400 font-bold text-2xl"
            >
              →
            </motion.div>
            <span className="text-slate-400 text-sm mt-2">Confianza: 80%</span>
          </div>
          
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-600 text-center w-48">
            <span className="text-4xl">👶</span>
            <p className="text-white font-bold mt-2">Pañales</p>
          </div>
        </div>
        
        <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-500">
          <h4 className="text-xl font-bold text-cyan-400 mb-2">El caso clásico del supermercado</h4>
          <p className="text-slate-300">
            Un famoso estudio de minería de datos descubrió que los hombres que compraban pañales los viernes por la tarde también compraban cerveza. Al colocar ambos productos juntos, las ventas de ambos aumentaron.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide42 = () => (
  <SlideLayout title="1.2.3. Otros Tipos de Aprendizaje" subtitle="Semisupervisado y Por Refuerzo">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col">
        <h3 className="text-2xl font-bold text-sky-400 mb-4 border-b border-slate-700 pb-4">Aprendizaje Semisupervisado</h3>
        <p className="text-lg text-slate-300 mb-6">
          Se encuentra a medio camino entre el supervisado y el no supervisado.
        </p>
        <div className="flex-1">
          <ul className="space-y-4 text-slate-400">
            <li>• Existe una variable de salida, pero <strong className="text-white">no todas las filas tienen valor</strong> para ella.</li>
            <li>• Etiquetar datos es costoso (requiere humanos).</li>
            <li>• Solución: Usar los pocos datos etiquetados junto con los muchos no etiquetados para construir un modelo mejor.</li>
          </ul>
        </div>
        <div className="mt-4 p-4 bg-slate-900 rounded-xl">
          <p className="text-sm text-slate-500">Ej: Google Photos reconoce tu cara en 3 fotos (etiquetadas por ti) y usa eso para agrupar las 1000 fotos restantes (no etiquetadas).</p>
        </div>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col">
        <h3 className="text-2xl font-bold text-orange-400 mb-4 border-b border-slate-700 pb-4">Aprendizaje por Refuerzo</h3>
        <p className="text-lg text-slate-300 mb-6">
          Aprender a base de prueba, error y recompensas.
        </p>
        <div className="flex-1">
          <ul className="space-y-4 text-slate-400">
            <li>• Un "agente" interactúa con un "entorno".</li>
            <li>• No hay datos históricos previos con la respuesta correcta.</li>
            <li>• El algoritmo recibe una <strong className="text-white">valoración (recompensa o castigo)</strong> según la idoneidad de su acción.</li>
          </ul>
        </div>
        <div className="mt-4 p-4 bg-slate-900 rounded-xl">
          <p className="text-sm text-slate-500">Ej: Una IA aprendiendo a jugar al ajedrez o a conducir un coche autónomo.</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide43 = () => (
  <SlideLayout title="Quiz: Tipos de Aprendizaje" subtitle="Comprueba lo aprendido">
    <Quiz 
      question="Tienes una base de datos de clientes con su edad, ingresos y compras, pero NO tienes ninguna etiqueta que indique si son 'buenos' o 'malos' clientes. Quieres agruparlos para hacer campañas de marketing. ¿Qué técnica usas?"
      options={[
        { id: 1, text: 'Clasificación (Supervisado)', correct: false, explanation: 'No puedes usar clasificación porque no tienes la variable de salida (etiqueta) para entrenar el modelo.' },
        { id: 2, text: 'Regresión (Supervisado)', correct: false, explanation: 'La regresión requiere una variable de salida numérica, de la cual careces.' },
        { id: 3, text: 'Clustering (No Supervisado)', correct: true, explanation: '¡Correcto! Al no tener variable de salida, el clustering agrupará a los clientes por similitud en sus atributos.' },
        { id: 4, text: 'Aprendizaje por Refuerzo', correct: false, explanation: 'No hay un agente interactuando con un entorno en tiempo real.' }
      ]}
    />
  </SlideLayout>
);

export const Slide44 = () => (
  <SlideLayout title="Evaluación Final: Capítulo 1" subtitle="Metodología y Tipos de Aprendizaje">
    <Quiz 
      question="En un proyecto CRISP-DM, tras entrenar un modelo de regresión lineal, el equipo nota que el modelo comete muchos errores porque los datos tienen escalas muy diferentes (ej: edad en años vs ingresos en miles de euros). ¿En qué fase se debió solucionar esto y mediante qué técnica?"
      options={[
        { id: 1, text: 'Fase de Modelado, usando Selección de Atributos', correct: false, explanation: 'La selección de atributos elimina columnas, no arregla el problema de las escalas.' },
        { id: 2, text: 'Fase de Preparación de Datos, usando Normalización/Estandarización', correct: true, explanation: '¡Excelente! La preparación de datos es la fase correcta, y la normalización/estandarización es la técnica para igualar escalas.' },
        { id: 3, text: 'Fase de Comprensión de Datos, usando Detección de Outliers', correct: false, explanation: 'Los outliers son valores anómalos, no un problema de diferentes escalas entre atributos.' },
        { id: 4, text: 'Fase de Evaluación, usando la métrica RMSE', correct: false, explanation: 'La evaluación solo mide el error, no transforma los datos para arreglar el problema.' }
      ]}
    />
  </SlideLayout>
);
