import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { MathFormula } from '../components/MathFormula';
import { CodeBlock } from '../components/CodeBlock';
import { Quiz } from '../components/Quiz';
import { motion } from 'framer-motion';
import { CheckSquare, AlertOctagon, Grid, Target, Crosshair } from 'lucide-react';

export const Slide105 = () => (
  <SlideLayout title="2.6. Vuelta Atrás (Backtracking)" subtitle="Exploración exhaustiva inteligente">
    <div className="flex flex-col items-center justify-center h-full text-center">
      <Grid className="w-32 h-32 text-purple-500 mb-8" />
      <h2 className="text-4xl font-bold text-white mb-6">Vuelta Atrás</h2>
      <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
        El Backtracking es una técnica algorítmica para resolver problemas recursivamente intentando construir una solución incrementalmente, una pieza a la vez, <strong className="text-purple-400">eliminando aquellas soluciones que fallan en satisfacer las restricciones del problema</strong> en cualquier punto del tiempo.
      </p>
    </div>
  </SlideLayout>
);

export const Slide106 = () => (
  <SlideLayout title="2.6.1. Espacio de Búsqueda y Poda" subtitle="El árbol de decisiones">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4">El Espacio de Búsqueda</h3>
        <p className="text-neutral-300 mb-4">
          Visualizamos el proceso como la construcción de un <strong>árbol de estado</strong>. Cada nodo representa un estado parcial de la solución.
        </p>
        <p className="text-neutral-300 mb-6">
          La fuerza bruta exploraría <em>todo</em> el árbol. El backtracking mejora esto mediante la <strong>poda (pruning)</strong>.
        </p>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2"><AlertOctagon size={20}/> La Poda</h4>
        <p className="text-neutral-300 mb-4">
          Si en algún nodo intermedio determinamos que es <strong>imposible</strong> llegar a una solución válida desde ahí, detenemos la exploración de esa rama y "volvemos atrás" (backtrack) al nodo anterior para intentar otro camino.
        </p>
        <div className="mt-4 p-4 bg-black border border-neutral-700 rounded-xl">
          <p className="text-sm text-neutral-400"><strong>Ejemplo:</strong> Resolviendo un Sudoku. Si pones un 5 y rompes una regla, no sigues rellenando el resto del tablero. Borras el 5 y pruebas con el 6.</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide107 = () => (
  <SlideLayout title="2.6.2. El Problema de las N-Reinas" subtitle="El clásico del backtracking">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4">El Problema</h3>
        <p className="text-neutral-300 mb-4">
          Colocar N reinas en un tablero de ajedrez de NxN de forma que ninguna reina pueda atacar a otra.
        </p>
        <p className="text-neutral-300 mb-6">
          <strong>Restricciones:</strong> No puede haber dos reinas en la misma fila, columna o diagonal.
        </p>
        <div className="bg-black p-4 rounded-xl border border-neutral-700 mt-auto">
          <p className="text-sm text-neutral-400"><strong>Estrategia:</strong> Colocamos reinas columna por columna. Si en una columna no hay fila segura, hacemos backtrack a la columna anterior y movemos esa reina.</p>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center items-center">
        <h4 className="text-xl font-bold text-sky-400 mb-6">Tablero 4x4 (Solución)</h4>
        <div className="grid grid-cols-4 border-2 border-neutral-500 w-64 h-64">
          {Array.from({length: 16}).map((_, i) => {
            const row = Math.floor(i / 4);
            const col = i % 4;
            const isBlack = (row + col) % 2 === 1;
            const isQueen = (row===0 && col===1) || (row===1 && col===3) || (row===2 && col===0) || (row===3 && col===2);
            return (
              <div key={i} className={`flex items-center justify-center ${isBlack ? 'bg-neutral-700' : 'bg-neutral-300'}`}>
                {isQueen && <span className="text-4xl">♕</span>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide108 = () => {
  const [step, setStep] = useState(0);
  
  // Simulation steps for 4-Queens
  const steps = [
    { q: [], msg: "Inicio. Tablero vacío.", valid: true },
    { q: [{r:0, c:0}], msg: "Columna 0: Reina en fila 0.", valid: true },
    { q: [{r:0, c:0}, {r:0, c:1}], msg: "Columna 1: Reina en fila 0. ¡Ataque en fila!", valid: false },
    { q: [{r:0, c:0}, {r:1, c:1}], msg: "Columna 1: Reina en fila 1. ¡Ataque en diagonal!", valid: false },
    { q: [{r:0, c:0}, {r:2, c:1}], msg: "Columna 1: Reina en fila 2. Seguro.", valid: true },
    { q: [{r:0, c:0}, {r:2, c:1}, {r:0, c:2}], msg: "Columna 2: Reina en fila 0. ¡Ataque!", valid: false },
    { q: [{r:0, c:0}, {r:2, c:1}, {r:1, c:2}], msg: "Columna 2: Reina en fila 1. ¡Ataque!", valid: false },
    { q: [{r:0, c:0}, {r:2, c:1}, {r:2, c:2}], msg: "Columna 2: Reina en fila 2. ¡Ataque!", valid: false },
    { q: [{r:0, c:0}, {r:2, c:1}, {r:3, c:2}], msg: "Columna 2: Reina en fila 3. ¡Ataque diagonal!", valid: false },
    { q: [{r:0, c:0}], msg: "¡Callejón sin salida en Col 2! BACKTRACK a Col 1.", valid: true, backtrack: true },
    { q: [{r:0, c:0}, {r:3, c:1}], msg: "Columna 1: Movemos reina a fila 3. Seguro.", valid: true },
    { q: [{r:0, c:0}, {r:3, c:1}, {r:1, c:2}], msg: "Columna 2: Reina en fila 1. Seguro.", valid: true },
    { q: [{r:0, c:0}, {r:3, c:1}, {r:1, c:2}, {r:0, c:3}], msg: "Columna 3: Fila 0. ¡Ataque!", valid: false },
    { q: [{r:0, c:0}, {r:3, c:1}, {r:1, c:2}], msg: "Saltamos pasos... ¡Callejón sin salida! BACKTRACK hasta Col 0.", valid: true, backtrack: true },
    { q: [{r:1, c:0}], msg: "Columna 0: Movemos reina a fila 1.", valid: true },
    { q: [{r:1, c:0}, {r:3, c:1}], msg: "Columna 1: Reina en fila 3. Seguro.", valid: true },
    { q: [{r:1, c:0}, {r:3, c:1}, {r:0, c:2}], msg: "Columna 2: Reina en fila 0. Seguro.", valid: true },
    { q: [{r:1, c:0}, {r:3, c:1}, {r:0, c:2}, {r:2, c:3}], msg: "Columna 3: Reina en fila 2. ¡SOLUCIÓN ENCONTRADA!", valid: true, success: true }
  ];

  const current = steps[step];

  return (
    <SlideLayout title="Interactivo: 4-Reinas con Backtracking" subtitle="Observa la poda en acción">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 max-w-4xl w-full text-center">
          
          <div className="flex justify-between items-center mb-8">
            <button onClick={() => setStep(s => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 bg-neutral-800 text-white rounded-lg disabled:opacity-50">Anterior</button>
            <h3 className="text-xl font-bold text-white">Paso {step + 1} de {steps.length}</h3>
            <button onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))} disabled={step === steps.length - 1} className="px-4 py-2 bg-sky-600 text-white rounded-lg disabled:opacity-50">Siguiente</button>
          </div>

          <div className={`p-4 rounded-xl mb-8 border-2 transition-colors ${current.success ? 'bg-green-900/50 border-green-500 text-green-400' : current.backtrack ? 'bg-orange-900/50 border-orange-500 text-orange-400' : current.valid ? 'bg-black border-neutral-700 text-white' : 'bg-red-900/50 border-red-500 text-red-400'}`}>
            <p className="font-bold text-lg">{current.msg}</p>
          </div>

          <div className="grid grid-cols-4 border-2 border-neutral-500 w-64 h-64 mx-auto">
            {Array.from({length: 16}).map((_, i) => {
              const row = Math.floor(i / 4);
              const col = i % 4;
              const isBlack = (row + col) % 2 === 1;
              const hasQueen = current.q.some(q => q.r === row && q.c === col);
              // Highlight the last placed queen if it's invalid
              const isLastInvalid = !current.valid && current.q.length > 0 && current.q[current.q.length-1].r === row && current.q[current.q.length-1].c === col;
              
              return (
                <div key={i} className={`flex items-center justify-center transition-colors ${isBlack ? 'bg-neutral-700' : 'bg-neutral-300'} ${isLastInvalid ? 'bg-red-500/80' : ''}`}>
                  {hasQueen && <span className="text-4xl">♕</span>}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export const Slide109 = () => (
  <SlideLayout title="2.6.3. Problema del Viajante (TSP)" subtitle="Backtracking para optimización">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4">TSP Exacto</h3>
        <p className="text-neutral-300 mb-4">
          Vimos que Greedy daba una solución rápida pero subóptima para el TSP. Para encontrar la <strong>solución óptima garantizada</strong>, podemos usar Backtracking.
        </p>
        <p className="text-neutral-300 mb-6">
          Exploramos todas las permutaciones posibles de ciudades.
        </p>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-orange-400 mb-4">Poda por Coste (Branch and Bound)</h4>
        <p className="text-neutral-300 mb-4">
          Para no explorar todo el árbol factorial (O(n!)), mantenemos un registro del <strong>mejor coste encontrado hasta ahora</strong>.
        </p>
        <div className="bg-black p-4 rounded-xl border border-neutral-700">
          <p className="text-sm text-neutral-400">Si en medio de la construcción de una ruta parcial, el coste acumulado ya es MAYOR que la mejor ruta completa que conocemos, podamos esa rama inmediatamente. ¡No tiene sentido seguir!</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide110 = () => (
  <SlideLayout title="Resumen: Técnicas de Diseño" subtitle="Comparativa final">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 max-w-5xl w-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-neutral-700">
              <th className="p-4 text-white font-bold">Técnica</th>
              <th className="p-4 text-white font-bold">Enfoque</th>
              <th className="p-4 text-white font-bold">Óptimo Global</th>
              <th className="p-4 text-white font-bold">Ejemplo Clásico</th>
            </tr>
          </thead>
          <tbody className="text-neutral-300">
            <tr className="border-b border-neutral-800">
              <td className="p-4 font-bold text-sky-400">Divide y Vencerás</td>
              <td className="p-4 text-sm">Divide en subproblemas independientes, resuelve y combina.</td>
              <td className="p-4 text-sm">Sí</td>
              <td className="p-4 text-sm">Merge Sort</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-4 font-bold text-green-400">Voraces (Greedy)</td>
              <td className="p-4 text-sm">Toma la mejor decisión local en cada paso. No mira atrás.</td>
              <td className="p-4 text-sm text-red-400">No siempre</td>
              <td className="p-4 text-sm">Dijkstra, Mochila Fraccional</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-4 font-bold text-purple-400">Prog. Dinámica</td>
              <td className="p-4 text-sm">Subproblemas solapados. Guarda resultados (memoización/tabulación).</td>
              <td className="p-4 text-sm text-green-400">Sí</td>
              <td className="p-4 text-sm">Mochila 0/1, Fibonacci</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-orange-400">Vuelta Atrás</td>
              <td className="p-4 text-sm">Exploración exhaustiva con poda de ramas inválidas/subóptimas.</td>
              <td className="p-4 text-sm text-green-400">Sí</td>
              <td className="p-4 text-sm">N-Reinas, TSP Exacto</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </SlideLayout>
);

export const Slide111 = () => (
  <SlideLayout title="Árbol de Decisión para Elegir Algoritmo" subtitle="¿Qué técnica usar?">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 max-w-4xl w-full text-center">
        <h3 className="text-2xl font-bold text-white mb-8">Flujo de Pensamiento</h3>
        
        <div className="space-y-4 text-left max-w-2xl mx-auto">
          <div className="bg-black p-4 rounded-xl border border-neutral-700">
            <p className="text-white font-bold">1. ¿El problema se puede dividir en subproblemas independientes?</p>
            <p className="text-sky-400 text-sm ml-4">👉 Sí: Divide y Vencerás.</p>
          </div>
          
          <div className="bg-black p-4 rounded-xl border border-neutral-700">
            <p className="text-white font-bold">2. ¿Se requiere optimización (max/min) y los subproblemas se solapan?</p>
            <p className="text-purple-400 text-sm ml-4">👉 Sí: Programación Dinámica.</p>
          </div>
          
          <div className="bg-black p-4 rounded-xl border border-neutral-700">
            <p className="text-white font-bold">3. ¿Una elección local óptima garantiza el óptimo global?</p>
            <p className="text-green-400 text-sm ml-4">👉 Sí: Algoritmos Voraces (Greedy).</p>
          </div>
          
          <div className="bg-black p-4 rounded-xl border border-neutral-700">
            <p className="text-white font-bold">4. ¿Hay que buscar todas las soluciones o el óptimo en un espacio combinatorio complejo sin subestructura óptima clara?</p>
            <p className="text-orange-400 text-sm ml-4">👉 Sí: Vuelta Atrás (Backtracking).</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide112 = () => (
  <SlideLayout title="Resumen del Capítulo 2" subtitle="Diseño y Análisis de Algoritmos">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-white mb-6">Conceptos Clave</h3>
        <ul className="space-y-4 text-neutral-300">
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
            <span><strong>Complejidad (Big O):</strong> Medir el rendimiento asintótico (Tiempo y Espacio).</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
            <span><strong>Búsqueda y Ordenación:</strong> Algoritmos base (Binaria, Merge, Quick).</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
            <span><strong>Divide y Vencerás:</strong> Partir, resolver, combinar.</span>
          </li>
        </ul>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-white mb-6">Técnicas de Optimización</h3>
        <ul className="space-y-4 text-neutral-300">
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span><strong>Voraces:</strong> Decisiones locales óptimas, rápidas pero no siempre perfectas.</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span><strong>Prog. Dinámica:</strong> Memoria para evitar recalcular subproblemas solapados.</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span><strong>Vuelta Atrás:</strong> Exploración con poda inteligente.</span>
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide113 = () => (
  <SlideLayout title="Quiz Final (1)" subtitle="Evaluación del Capítulo 2">
    <Quiz 
      question="¿Qué técnica de diseño de algoritmos es la más adecuada para resolver el problema de la Mochila 0/1 garantizando la solución óptima?"
      options={[
        { id: 1, text: 'Algoritmos Voraces (Greedy).', correct: false, explanation: 'Greedy funciona para la mochila fraccional, pero falla en la 0/1 al no poder garantizar el óptimo global.' },
        { id: 2, text: 'Divide y Vencerás.', correct: false, explanation: 'Los subproblemas de la mochila se solapan, por lo que Divide y Vencerás recalcularía lo mismo muchas veces.' },
        { id: 3, text: 'Programación Dinámica.', correct: true, explanation: '¡Correcto! La Programación Dinámica resuelve la Mochila 0/1 de forma óptima tabulando los resultados de los subproblemas solapados.' },
        { id: 4, text: 'Búsqueda Binaria.', correct: false, explanation: 'La búsqueda binaria es para encontrar elementos en arreglos ordenados, no para optimización combinatoria.' }
      ]}
    />
  </SlideLayout>
);

export const Slide114 = () => (
  <SlideLayout title="Quiz Final (2)" subtitle="Evaluación del Capítulo 2">
    <Quiz 
      question="En el contexto del algoritmo de Vuelta Atrás (Backtracking), ¿qué significa el término 'poda' (pruning)?"
      options={[
        { id: 1, text: 'Eliminar variables innecesarias del código para que se ejecute más rápido.', correct: false, explanation: 'Eso es optimización de código, no poda algorítmica.' },
        { id: 2, text: 'Detener la exploración de una rama del árbol de búsqueda cuando se determina que no puede conducir a una solución válida o mejor que la actual.', correct: true, explanation: '¡Exacto! La poda evita explorar caminos inútiles, reduciendo drásticamente el tiempo de ejecución respecto a la fuerza bruta pura.' },
        { id: 3, text: 'Dividir el problema en subproblemas más pequeños.', correct: false, explanation: 'Eso describe la técnica de Divide y Vencerás.' },
        { id: 4, text: 'Guardar los resultados de funciones recursivas en una tabla.', correct: false, explanation: 'Eso es memoización, una técnica de Programación Dinámica.' }
      ]}
    />
  </SlideLayout>
);
