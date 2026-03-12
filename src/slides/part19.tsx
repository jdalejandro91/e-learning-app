import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { MathFormula } from '../components/MathFormula';
import { CodeBlock } from '../components/CodeBlock';
import { Quiz } from '../components/Quiz';
import { Target, Activity, Shield, AlertTriangle, CheckCircle2, Code2, Layers, GitBranch } from 'lucide-react';

export const Slide155 = () => (
  <SlideLayout title="Entrenamiento: Log-Loss" subtitle="La función de coste">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">¿Por qué no usar MSE?</h3>
        <p className="text-neutral-300 mb-6">
          En clasificación, el Error Cuadrático Medio (MSE) produce una función de coste no convexa (con muchos mínimos locales).
        </p>
        <div className="bg-black/50 p-6 rounded-xl border border-orange-900/30">
          <h4 className="text-orange-400 font-bold mb-2">Entropía Cruzada (Log-Loss)</h4>
          <p className="text-sm text-neutral-400">Penaliza logarítmicamente las predicciones seguras pero incorrectas.</p>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <MathFormula block tex="J(w) = -\frac{1}{n} \sum [y_i \log(\hat{y}_i) + (1-y_i) \log(1-\hat{y}_i)]" />
        <p className="mt-6 text-xs text-neutral-500 text-center italic">
          Si el modelo predice 0.01 cuando la clase real es 1, la penalización es enorme.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide156 = () => (
  <SlideLayout title="La Frontera de Decisión" subtitle="Separación lineal">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">Geometría de la Logística</h3>
        <p className="text-neutral-300 mb-6">
          La Regresión Logística es un <strong>clasificador lineal</strong>. Esto significa que la frontera que separa las clases es una línea recta (en 2D) o un hiperplano (en ND).
        </p>
        <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
          <p className="text-sm text-neutral-400">La frontera ocurre donde <MathFormula tex="P(y=1|x) = 0.5" />, lo cual equivale a <MathFormula tex="w_0 + w_1x_1 + \dots = 0" />.</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Points Class 0 */}
          <circle cx="20" cy="30" r="2" fill="#ef4444" />
          <circle cx="30" cy="20" r="2" fill="#ef4444" />
          <circle cx="15" cy="15" r="2" fill="#ef4444" />
          
          {/* Points Class 1 */}
          <circle cx="70" cy="80" r="2" fill="#22c55e" />
          <circle cx="80" cy="70" r="2" fill="#22c55e" />
          <circle cx="85" cy="85" r="2" fill="#22c55e" />
          
          {/* Decision Boundary */}
          <line x1="10" y1="90" x2="90" y2="10" stroke="#f97316" strokeWidth="2" strokeDasharray="4" />
          
          <text x="20" y="80" fontSize="4" fill="#ef4444" fontWeight="bold">Clase 0</text>
          <text x="70" y="20" fontSize="4" fill="#22c55e" fontWeight="bold">Clase 1</text>
        </svg>
      </div>
    </div>
  </SlideLayout>
);

export const Slide157 = () => (
  <SlideLayout title="Clasificación Multiclase" subtitle="One-vs-Rest (OvR)">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">¿Y si hay más de 2 clases?</h3>
        <p className="text-neutral-300 mb-6">
          La regresión logística estándar es binaria. Para manejar <MathFormula tex="K" /> clases, usamos la estrategia <strong>One-vs-Rest</strong>.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-black rounded-xl border border-neutral-800">
            <p className="text-sm text-neutral-400">Entrenamos <MathFormula tex="K" /> clasificadores binarios independientes.</p>
          </div>
          <div className="p-4 bg-black rounded-xl border border-neutral-800">
            <p className="text-sm text-neutral-400">Cada uno predice: "¿Es de la Clase i o de cualquier otra?"</p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center items-center text-center">
        <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center mb-6">
          <Layers className="text-sky-500" size={32} />
        </div>
        <h4 className="text-xl font-bold text-white mb-4">Decisión Final</h4>
        <p className="text-neutral-400 text-sm">
          Se elige la clase cuyo clasificador binario devuelva la <strong>probabilidad más alta</strong>.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide158 = () => (
  <SlideLayout title="Código: Regresión Logística" subtitle="scikit-learn">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex-1">
        <CodeBlock language="python" code={`from sklearn.linear_model import LogisticRegression # Importa el clasificador de Regresión Logística
from sklearn.metrics import accuracy_score, confusion_matrix # Importa métricas de clasificación

# 1. Instanciar el modelo
# C es el inverso de la fuerza de regularización (como 1/alpha en Ridge)
# Valores de C más pequeños = mayor regularización (ayuda a evitar overfitting)
clf = LogisticRegression(C=1.0) # Instancia con regularización L2 por defecto

# 2. Entrenar
# El modelo ajusta los pesos para minimizar la función Log-Loss
clf.fit(X_train, y_train)

# 3. Predecir clase (Hard Prediction)
# Devuelve la clase final (ej. 0 o 1) aplicando un umbral de 0.5 a la probabilidad
y_pred = clf.predict(X_test)

# 4. Predecir probabilidades (Soft Prediction)
# Devuelve un array con las probabilidades de pertenecer a cada clase (ej. [0.2, 0.8])
# Es fundamental para calcular curvas ROC y el área bajo la curva (AUC)
y_prob = clf.predict_proba(X_test)

print(f"Probabilidades primer caso: {y_prob[0]}") # Muestra las probabilidades para la primera muestra
print(f"Accuracy: {accuracy_score(y_test, y_pred)}") # Calcula e imprime la exactitud global`} />
      </div>
    </div>
  </SlideLayout>
);

export const Slide158a = () => (
  <SlideLayout title="Código: Regresión Logística Explicada" subtitle="Desgranando la implementación">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Scikit-Learn</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`from sklearn.linear_model import LogisticRegression # Importa el modelo

# 1. Instanciar el modelo
# C: Inversa de la fuerza de regularización (menor C = más regularización, previene sobreajuste)
# solver: Algoritmo de optimización para encontrar los pesos ('lbfgs' es el estándar actual y eficiente)
# max_iter: Número máximo de iteraciones para que el solver converja (aumentar si hay warnings de no convergencia)
clf = LogisticRegression(
    C=1.0, # Regularización estándar
    solver='lbfgs', # Optimizador recomendado
    max_iter=1000 # Límite generoso de iteraciones
)

# 2. Entrenar (Ajustar pesos usando Log-Loss)
# Encuentra los coeficientes que mejor separan las clases
clf.fit(X_train, y_train)

# 3. Predecir clase final (0 o 1)
# Asigna la clase con probabilidad > 0.5
y_pred = clf.predict(X_test)

# 4. Predecir probabilidades (ej. [0.2, 0.8])
# Devuelve una matriz donde cada columna es la probabilidad de una clase
# La suma de las probabilidades en cada fila siempre es 1.0
y_prob = clf.predict_proba(X_test)`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">sklearn.linear_model.LogisticRegression:</strong> A pesar de su nombre, es un modelo lineal para <em>clasificación</em>, no para regresión.
          </li>
          <li>
            <strong className="text-white">Parámetro <code>C</code>:</strong> Controla la regularización L2 (por defecto). Es la inversa de alfa (<MathFormula tex="C = 1/\alpha" />). Un <code>C</code> pequeño (ej. 0.01) aplica mucha regularización, forzando pesos pequeños. Un <code>C</code> grande (ej. 100) casi no regulariza.
          </li>
          <li>
            <strong className="text-white">Parámetro <code>solver</code>:</strong> El algoritmo usado para minimizar la función Log-Loss. <code>'lbfgs'</code> es robusto y rápido para datasets pequeños/medianos. Para datasets gigantes, <code>'sag'</code> o <code>'saga'</code> son mejores.
          </li>
          <li>
            <strong className="text-white">Método <code>predict_proba(X)</code>:</strong> Crucial en clasificación. No solo dice "es clase 1", sino "estoy 80% seguro de que es clase 1". Necesario para calcular métricas avanzadas como ROC-AUC.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide159 = () => (
  <SlideLayout title="Ventajas de la Regresión Logística" subtitle="¿Por qué usarla?">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
          <Activity className="text-green-500" size={32} />
        </div>
        <h4 className="text-white font-bold mb-4">Probabilidades</h4>
        <p className="text-neutral-400 text-sm">No solo clasifica, da una medida de confianza (0-1).</p>
      </div>
      
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6">
          <Shield className="text-sky-500" size={32} />
        </div>
        <h4 className="text-white font-bold mb-4">Robustez</h4>
        <p className="text-neutral-400 text-sm">Menos sensible a outliers que la regresión lineal gracias a la sigmoide.</p>
      </div>
      
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
          <Code2 className="text-purple-500" size={32} />
        </div>
        <h4 className="text-white font-bold mb-4">Eficiencia</h4>
        <p className="text-neutral-400 text-sm">Muy rápida de entrenar y predecir. Ideal para sistemas en tiempo real.</p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide160 = () => (
  <SlideLayout title="Desventajas y Limitaciones" subtitle="¿Cuándo falla?">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2"><AlertTriangle size={24}/> Fronteras Lineales</h3>
        <p className="text-neutral-300 mb-6">
          Su mayor limitación es que solo puede separar clases con una línea recta. Si los datos tienen una estructura compleja (ej. círculos concéntricos), fallará.
        </p>
        <div className="bg-black/50 p-6 rounded-xl border border-red-500/20">
          <p className="text-sm text-neutral-400">Requiere ingeniería de atributos (añadir términos polinómicos) para capturar no linealidades.</p>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center items-center text-center">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
          <ShieldAlert className="text-red-500" size={40} />
        </div>
        <h4 className="text-xl font-bold text-white mb-4">Multicolinealidad</h4>
        <p className="text-neutral-400 text-sm">
          Al igual que la regresión lineal, sufre si los atributos están muy correlacionados entre sí.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide161 = () => (
  <SlideLayout title="Quiz: Regresión Logística" subtitle="Fundamentos">
    <Quiz
      question="¿Cuál es el rango de salida de la función sigmoide utilizada en la Regresión Logística?"
      options={[
        { id: 1, text: 'De -1 a 1.', correct: false, explanation: 'Esa sería una tangente hiperbólica (tanh).' },
        { id: 2, text: 'De 0 a infinito.', correct: false, explanation: 'La sigmoide está acotada superiormente.' },
        { id: 3, text: 'De 0 a 1.', correct: true, explanation: 'Correcto. Esto permite interpretar la salida como una probabilidad.' },
        { id: 4, text: 'Cualquier número real.', correct: false, explanation: 'La sigmoide comprime cualquier número real al rango (0, 1).' }
      ]}
    />
  </SlideLayout>
);

export const Slide162 = () => (
  <SlideLayout title="Quiz: Estrategia Multiclase" subtitle="One-vs-Rest">
    <Quiz
      question="En un problema con 3 clases (A, B, C) usando One-vs-Rest, ¿cuántos clasificadores binarios se entrenan?"
      options={[
        { id: 1, text: '1 clasificador.', correct: false, explanation: 'Un solo clasificador binario solo puede separar 2 clases.' },
        { id: 2, text: '2 clasificadores.', correct: false, explanation: 'Se necesita uno por cada clase.' },
        { id: 3, text: '3 clasificadores.', correct: true, explanation: 'Correcto. Uno para A vs (B,C), otro para B vs (A,C) y otro para C vs (A,B).' },
        { id: 4, text: '6 clasificadores.', correct: false, explanation: 'Eso sería One-vs-One (K*(K-1)/2).' }
      ]}
    />
  </SlideLayout>
);

export const Slide163 = () => (
  <SlideLayout title="Resumen: Regresión Logística" subtitle="Puntos clave">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-neutral-900 p-12 rounded-2xl border border-neutral-800 max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-500 shrink-0" />
              <p className="text-neutral-300">Es un algoritmo de <strong>Clasificación</strong> binaria.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-500 shrink-0" />
              <p className="text-neutral-300">Usa la función <strong>Sigmoide</strong> para dar probabilidades.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-500 shrink-0" />
              <p className="text-neutral-300">Minimiza la pérdida logarítmica (Log-Loss).</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-500 shrink-0" />
              <p className="text-neutral-300">Crea fronteras de decisión <strong>lineales</strong>.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-500 shrink-0" />
              <p className="text-neutral-300">Se extiende a multiclase mediante <strong>OvR</strong>.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-500 shrink-0" />
              <p className="text-neutral-300">Altamente interpretable y eficiente.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide164 = () => (
  <SlideLayout title="Transición" subtitle="Hacia la lógica de decisión">
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="bg-neutral-900 p-12 rounded-2xl border border-neutral-800 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-white mb-6">¿Y si queremos reglas explícitas?</h2>
        <p className="text-xl text-neutral-300 mb-8">
          La regresión logística usa una ecuación matemática. Pero a veces, los humanos preferimos tomar decisiones basadas en una serie de preguntas lógicas.
        </p>
        <div className="bg-black p-6 rounded-xl border border-green-900/50">
          <p className="text-lg font-bold text-green-400">
            Próxima parada: Árboles de Decisión
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

import { ShieldAlert } from 'lucide-react';
