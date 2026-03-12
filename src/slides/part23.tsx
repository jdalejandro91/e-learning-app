import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { Quiz } from '../components/Quiz';
import { motion } from 'framer-motion';
import { Award, BookOpen, Rocket, Compass, CheckCircle2, Star, Brain, Cpu } from 'lucide-react';

export const Slide191 = () => (
  <SlideLayout title="Resumen del Capítulo 4" subtitle="Clasificación">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-orange-400 mb-6">Regresión Logística</h3>
        <ul className="space-y-3 text-sm text-neutral-300">
          <li className="flex gap-2"><span>✅</span> Basada en probabilidades (Sigmoide).</li>
          <li className="flex gap-2"><span>✅</span> Fronteras lineales.</li>
          <li className="flex gap-2"><span>✅</span> Muy eficiente y robusta.</li>
        </ul>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-green-400 mb-6">Árboles de Decisión</h3>
        <ul className="space-y-3 text-sm text-neutral-300">
          <li className="flex gap-2"><span>✅</span> Basados en reglas (Gini/Entropía).</li>
          <li className="flex gap-2"><span>✅</span> Fronteras ortogonales.</li>
          <li className="flex gap-2"><span>✅</span> Extremadamente interpretables.</li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide192 = () => (
  <SlideLayout title="Gran Comparativa de Modelos" subtitle="¿Cuál elegir?">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b-2 border-neutral-700">
              <th className="p-3 text-white font-bold">Modelo</th>
              <th className="p-3 text-white font-bold">Fortaleza</th>
              <th className="p-3 text-white font-bold">Debilidad</th>
              <th className="p-3 text-white font-bold">Uso Ideal</th>
            </tr>
          </thead>
          <tbody className="text-neutral-400">
            <tr className="border-b border-neutral-800">
              <td className="p-3 font-bold text-sky-400">R. Lineal</td>
              <td className="p-3">Simplicidad, Rapidez</td>
              <td className="p-3">Solo relaciones lineales</td>
              <td className="p-3">Predicción de precios, tendencias</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-3 font-bold text-purple-400">KNN</td>
              <td className="p-3">Sin supuestos, Flexible</td>
              <td className="p-3">Lento en predicción, Memoria</td>
              <td className="p-3">Sistemas de recomendación</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-3 font-bold text-orange-400">R. Logística</td>
              <td className="p-3">Probabilidades, Eficiencia</td>
              <td className="p-3">Fronteras lineales</td>
              <td className="p-3">Detección de spam, riesgo crediticio</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-green-400">Árboles</td>
              <td className="p-3">Interpretabilidad, No lineal</td>
              <td className="p-3">Sobreajuste (Varianza)</td>
              <td className="p-3">Diagnóstico médico, reglas de negocio</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </SlideLayout>
);

export const Slide193 = () => (
  <SlideLayout title="Caso de Estudio: Diagnóstico" subtitle="Aplicando lo aprendido">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">El Escenario</h3>
        <p className="text-neutral-300 mb-6">
          Queremos predecir si un paciente tiene una enfermedad rara basándonos en 10 síntomas.
        </p>
        <div className="bg-black/50 p-6 rounded-xl border border-sky-500/20">
          <p className="text-sm text-neutral-400">
            <strong>Prioridad:</strong> No queremos falsos negativos (perder un enfermo). Necesitamos un modelo interpretable para que el médico confíe.
          </p>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-sky-400 mb-4">Estrategia Recomendada</h4>
        <ul className="space-y-3 text-xs text-neutral-400">
          <li className="flex gap-2"><span>1️⃣</span> Usar <strong>Árbol de Decisión</strong> por su interpretabilidad.</li>
          <li className="flex gap-2"><span>2️⃣</span> Ajustar el <strong>Umbral</strong> para maximizar el Recall.</li>
          <li className="flex gap-2"><span>3️⃣</span> Evaluar con <strong>F1-Score</strong> y matriz de confusión.</li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide194 = () => (
  <SlideLayout title="Quiz Final: Selección de Modelo" subtitle="Poniéndote a prueba">
    <Quiz
      question="Si tienes un dataset con millones de registros y necesitas predecir en tiempo real con muy baja latencia, ¿qué modelo sería menos adecuado?"
      options={[
        { id: 1, text: 'Regresión Logística.', correct: false, explanation: 'Es muy rápida en predicción.' },
        { id: 2, text: 'Árbol de Decisión (podado).', correct: false, explanation: 'Es muy rápido, solo sigue unas pocas reglas.' },
        { id: 3, text: 'KNN (K-Nearest Neighbors).', correct: true, explanation: 'Correcto. KNN debe comparar la nueva muestra con todo el dataset de entrenamiento en cada predicción, lo cual es muy lento en datasets grandes.' },
        { id: 4, text: 'Regresión Lineal.', correct: false, explanation: 'Es casi instantánea.' }
      ]}
    />
  </SlideLayout>
);

export const Slide195 = () => (
  <SlideLayout title="Quiz Final: Conceptos Globales" subtitle="Resumen de fundamentos">
    <Quiz
      question="¿Qué técnica se utiliza para encontrar los mejores hiperparámetros de un modelo evitando el sobreajuste al conjunto de validación?"
      options={[
        { id: 1, text: 'Simple Train/Test split.', correct: false, explanation: 'Esto no protege contra el sobreajuste al set de test.' },
        { id: 2, text: 'Cross-Validation estándar.', correct: false, explanation: 'Ayuda, pero si optimizas hiperparámetros con ella, puedes sobreajustar a esos folds.' },
        { id: 3, text: 'Nested Cross-Validation.', correct: true, explanation: 'Correcto. Separa la optimización de parámetros de la evaluación del rendimiento.' },
        { id: 4, text: 'Aumentar el número de épocas en el Gradiente.', correct: false, explanation: 'Esto solo afecta al entrenamiento de un modelo específico.' }
      ]}
    />
  </SlideLayout>
);

export const Slide196 = () => (
  <SlideLayout title="El Futuro: Más Allá de lo Básico" subtitle="Próximos pasos en ML">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Brain className="text-purple-500"/> Modelos de Ensamble</h3>
        <p className="text-neutral-300 mb-6">
          ¿Por qué usar un solo árbol si puedes usar mil?
        </p>
        <ul className="space-y-2 text-xs text-neutral-400">
          <li><strong>Random Forest:</strong> Muchos árboles votando.</li>
          <li><strong>XGBoost / LightGBM:</strong> Árboles que aprenden de los errores de los anteriores.</li>
        </ul>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Cpu className="text-sky-500"/> Redes Neuronales</h3>
        <p className="text-neutral-300 mb-6">
          Inspiradas en el cerebro humano, capaces de aprender representaciones extremadamente complejas.
        </p>
        <p className="text-xs text-neutral-400">
          La base del Deep Learning moderno (Visión, Lenguaje, etc.).
        </p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide197 = () => (
  <SlideLayout title="Consejos para el Científico de Datos" subtitle="Práctica profesional">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="text-sky-500" size={24} />
        </div>
        <h4 className="text-white font-bold mb-2">Entiende tus datos</h4>
        <p className="text-neutral-400 text-xs">El 80% del trabajo es limpieza y análisis exploratorio (EDA).</p>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-4">
          <Compass className="text-orange-500" size={24} />
        </div>
        <h4 className="text-white font-bold mb-2">Empieza simple</h4>
        <p className="text-neutral-400 text-xs">Usa modelos lineales como baseline antes de ir a modelos complejos.</p>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
          <Rocket className="text-green-500" size={24} />
        </div>
        <h4 className="text-white font-bold mb-2">Itera rápido</h4>
        <p className="text-neutral-400 text-xs">Falla pronto, aprende y ajusta tus hipótesis constantemente.</p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide198 = () => (
  <SlideLayout title="Recursos Adicionales" subtitle="Sigue aprendiendo">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-white font-bold flex items-center gap-2"><BookOpen size={20} className="text-sky-400"/> Libros Recomendados</h4>
            <ul className="text-xs text-neutral-400 space-y-2">
              <li>• "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow" (Aurélien Géron)</li>
              <li>• "An Introduction to Statistical Learning" (James, Witten, Hastie, Tibshirani)</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold flex items-center gap-2"><Star size={20} className="text-orange-400"/> Plataformas</h4>
            <ul className="text-xs text-neutral-400 space-y-2">
              <li>• Kaggle: Competiciones y datasets reales.</li>
              <li>• Scikit-learn Documentation: La biblia del ML en Python.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide199 = () => (
  <SlideLayout title="Conclusión Final" subtitle="Aprendizaje Supervisado">
    <div className="flex flex-col items-center justify-center h-full text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Award className="w-40 h-40 text-yellow-500 mb-8 mx-auto" />
        <h2 className="text-5xl font-bold text-white mb-6">¡Certificado de Fundamentos!</h2>
        <p className="text-2xl text-neutral-400 max-w-3xl mx-auto">
          Has completado el recorrido por la Regresión y la Clasificación. 
          Ahora eres capaz de transformar datos en conocimiento accionable.
        </p>
      </motion.div>
    </div>
  </SlideLayout>
);

export const Slide200 = () => (
  <SlideLayout title="¡Gracias!" subtitle="Fin del curso">
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-6xl font-bold text-white mb-8">¡Hasta la próxima!</h2>
      <p className="text-xl text-neutral-500 mb-12">"The goal is to turn data into information, and information into insight."</p>
      <div className="flex gap-4">
        <div className="px-6 py-3 bg-sky-500 rounded-full text-white font-bold">Explorar Proyectos</div>
        <div className="px-6 py-3 border border-neutral-700 rounded-full text-neutral-400 font-bold">Volver al Inicio</div>
      </div>
    </div>
  </SlideLayout>
);
