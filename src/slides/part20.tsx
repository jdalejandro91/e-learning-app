import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { MathFormula } from '../components/MathFormula';
import { CodeBlock } from '../components/CodeBlock';
import { Quiz } from '../components/Quiz';
import { motion } from 'framer-motion';
import { GitBranch, GitCommit, GitMerge, GitPullRequest, Code2, Map, CheckCircle2, AlertTriangle, Activity, Target, Scale, Zap } from 'lucide-react';

export const Slide165 = () => (
  <SlideLayout title="4.2. Árboles de Decisión" subtitle="Clasificación basada en reglas">
    <div className="flex flex-col items-center justify-center h-full text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <GitBranch className="w-32 h-32 text-green-500 mb-8" />
      </motion.div>
      <h2 className="text-5xl font-bold text-white mb-6">Árboles de Decisión</h2>
      <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
        Los Árboles de Decisión son modelos que dividen el espacio de datos mediante una serie de <strong>preguntas lógicas jerárquicas</strong>. 
        Son famosos por su <strong className="text-green-400">extrema interpretabilidad</strong>, ya que imitan el razonamiento humano.
      </p>
    </div>
  </SlideLayout>
);

export const Slide166 = () => (
  <SlideLayout title="Estructura Jerárquica" subtitle="Anatomía de un Árbol">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4">Componentes Clave</h3>
        <ul className="space-y-4 text-neutral-300">
          <li className="bg-black p-4 rounded-xl border border-green-900/50">
            <strong className="text-green-400">Nodo Raíz:</strong> La primera pregunta del árbol.
          </li>
          <li className="bg-black p-4 rounded-xl border border-sky-900/50">
            <strong className="text-sky-400">Nodos de Decisión:</strong> Preguntas intermedias que dividen los datos.
          </li>
          <li className="bg-black p-4 rounded-xl border border-orange-900/50">
            <strong className="text-orange-400">Nodos Hoja:</strong> El final del camino. Contienen la predicción final.
          </li>
          <li className="bg-black p-4 rounded-xl border border-neutral-700">
            <strong className="text-neutral-400">Ramas:</strong> Los caminos posibles (Sí/No, Verdadero/Falso).
          </li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-2xl flex items-center justify-center relative">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Edges */}
          <line x1="50" y1="20" x2="25" y2="50" stroke="#111827" strokeWidth="2" />
          <line x1="50" y1="20" x2="75" y2="50" stroke="#111827" strokeWidth="2" />
          <line x1="25" y1="50" x2="10" y2="80" stroke="#111827" strokeWidth="2" />
          <line x1="25" y1="50" x2="40" y2="80" stroke="#111827" strokeWidth="2" />
          
          {/* Root Node */}
          <rect x="40" y="10" width="20" height="10" rx="2" fill="#10b981" />
          <text x="50" y="16" fontSize="4" fill="white" textAnchor="middle" fontWeight="bold">Raíz</text>
          
          {/* Decision Nodes */}
          <rect x="15" y="45" width="20" height="10" rx="2" fill="#3b82f6" />
          <text x="25" y="51" fontSize="4" fill="white" textAnchor="middle" fontWeight="bold">Decisión</text>
          
          <circle cx="75" cy="50" r="6" fill="#f97316" />
          <text x="75" y="51.5" fontSize="4" fill="white" textAnchor="middle" fontWeight="bold">Hoja</text>
          
          {/* Leaf Nodes */}
          <circle cx="10" cy="80" r="6" fill="#f97316" />
          <circle cx="40" cy="80" r="6" fill="#f97316" />
        </svg>
      </div>
    </div>
  </SlideLayout>
);

export const Slide167 = () => (
  <SlideLayout title="Construcción del Árbol" subtitle="¿Cómo elegimos las preguntas?">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4">El Objetivo: Pureza</h3>
        <p className="text-neutral-300 mb-6">
          Queremos que cada división (split) cree grupos de datos lo más <strong>homogéneos</strong> posibles.
        </p>
        <p className="text-neutral-300 mb-6">
          Un nodo es "puro" si todos sus elementos pertenecen a la misma clase.
        </p>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-sky-400 mb-4">Algoritmo CART</h4>
        <p className="text-neutral-300 mb-4 text-sm">
          Es el algoritmo que usa scikit-learn. Construye árboles binarios (cada nodo se divide en 2) buscando reducir la <strong>impureza</strong>.
        </p>
        <div className="bg-black p-4 rounded-xl border border-sky-900/50">
          <p className="text-xs text-neutral-400">Métricas de impureza comunes:</p>
          <ul className="mt-2 space-y-1 text-xs">
            <li className="text-sky-400">Índice Gini (Clasificación)</li>
            <li className="text-sky-400">Entropía (Clasificación)</li>
            <li className="text-sky-400">MSE (Regresión)</li>
          </ul>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide168 = () => (
  <SlideLayout title="Índice Gini" subtitle="Midiendo la impureza">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">La Matemática</h3>
        <p className="text-neutral-300 mb-6">
          Mide la probabilidad de que un elemento elegido al azar sea clasificado incorrectamente si se etiqueta aleatoriamente según la distribución de clases en el nodo.
        </p>
        <div className="bg-black p-6 rounded-xl border border-green-900/50 text-center">
          <MathFormula block tex="Gini = 1 - \sum_{i=1}^{C} (p_i)^2" />
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-green-400 mb-4">Interpretación</h4>
        <div className="space-y-4">
          <div className="p-4 bg-black rounded-xl border border-neutral-800">
            <p className="text-white font-bold">Gini = 0</p>
            <p className="text-sm text-neutral-400">Nodo perfectamente puro (todos son de la misma clase).</p>
          </div>
          <div className="p-4 bg-black rounded-xl border border-neutral-800">
            <p className="text-white font-bold">Gini = 0.5</p>
            <p className="text-sm text-neutral-400">Máxima impureza (50/50 en un problema binario).</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide169 = () => (
  <SlideLayout title="Fronteras de Decisión (CART)" subtitle="Divisiones Ortogonales">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6">Geometría del Árbol</h3>
        <p className="text-neutral-300 mb-6">
          A diferencia de la regresión logística, los árboles dividen el espacio utilizando <strong>líneas paralelas a los ejes</strong> (ortogonales).
        </p>
        <p className="text-neutral-300 mb-6">
          Esto se debe a que cada nodo evalúa un solo atributo a la vez (ej. "¿Es la edad &gt; 30?").
        </p>
      </div>
      <div className="bg-white p-8 rounded-2xl flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Grid lines */}
          <line x1="50" y1="0" x2="50" y2="100" stroke="#111827" strokeWidth="2" />
          <line x1="50" y1="60" x2="100" y2="60" stroke="#111827" strokeWidth="2" />
          
          {/* Regions */}
          <rect x="0" y="0" width="50" height="100" fill="#ef4444" opacity="0.1" />
          <rect x="50" y="0" width="50" height="60" fill="#22c55e" opacity="0.1" />
          <rect x="50" y="60" width="50" height="40" fill="#3b82f6" opacity="0.1" />
          
          <text x="20" y="50" fontSize="4" fill="#ef4444" fontWeight="bold">Clase A</text>
          <text x="70" y="30" fontSize="4" fill="#22c55e" fontWeight="bold">Clase B</text>
          <text x="70" y="80" fontSize="4" fill="#3b82f6" fontWeight="bold">Clase C</text>
        </svg>
      </div>
    </div>
  </SlideLayout>
);

export const Slide170 = () => (
  <SlideLayout title="Código: Árbol de Decisión" subtitle="scikit-learn">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex-1">
        <CodeBlock language="python" code={`from sklearn.tree import DecisionTreeClassifier # Importa el clasificador de Árbol de Decisión
from sklearn.metrics import accuracy_score # Importa la métrica de exactitud

# 1. Instanciar el modelo
# max_depth es VITAL para evitar sobreajuste (limita el crecimiento del árbol)
# criterion='gini' usa la impureza de Gini para decidir los cortes
clf = DecisionTreeClassifier(criterion='gini', max_depth=3)

# 2. Entrenar
# El algoritmo CART construye el árbol recursivamente encontrando los mejores cortes
clf.fit(X_train, y_train)

# 3. Predecir
# Hace descender las nuevas muestras por el árbol hasta llegar a una hoja
y_pred = clf.predict(X_test)

# 4. Visualizar el árbol
from sklearn.tree import plot_tree # Importa la función para dibujar el árbol
import matplotlib.pyplot as plt # Importa matplotlib para renderizar el gráfico

plt.figure(figsize=(12,8)) # Crea una figura grande
# Dibuja el árbol. filled=True colorea los nodos según la clase mayoritaria
plot_tree(clf, filled=True, feature_names=features)
plt.show() # Muestra el gráfico en pantalla`} />
      </div>
    </div>
  </SlideLayout>
);

export const Slide170a = () => (
  <SlideLayout title="Código: Árbol de Decisión Explicado" subtitle="Desgranando la implementación">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Scikit-Learn</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`from sklearn.tree import DecisionTreeClassifier # Importa el modelo
from sklearn.tree import plot_tree # Importa la función de visualización
import matplotlib.pyplot as plt # Importa matplotlib

# 1. Instanciar el modelo
# criterion: 'gini' o 'entropy' (métrica para evaluar la calidad de un corte)
# max_depth: Profundidad máxima del árbol (vital para evitar overfitting, ej. 3 niveles)
# min_samples_split: Mínimo de muestras requeridas para permitir dividir un nodo interno
clf = DecisionTreeClassifier(
    criterion='gini', # Usa impureza de Gini
    max_depth=3, # Limita el árbol a 3 niveles de profundidad
    min_samples_split=2, # Requiere al menos 2 muestras para dividir
    random_state=42 # Semilla para resultados reproducibles
)

# 2. Entrenar (Construir el árbol)
# El algoritmo evalúa todas las variables y posibles puntos de corte
clf.fit(X_train, y_train)

# 3. Visualizar el árbol resultante
plt.figure(figsize=(12,8)) # Configura el tamaño del lienzo
plot_tree(
    clf, # El modelo entrenado
    filled=True, # Colorea los nodos según la clase mayoritaria (ayuda visual)
    feature_names=X.columns, # Muestra los nombres reales de las variables en los cortes
    class_names=['No', 'Si'] # Muestra los nombres de las clases en las hojas
)
plt.show() # Renderiza la imagen`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">sklearn.tree.DecisionTreeClassifier:</strong> Clase que implementa el algoritmo CART para clasificación mediante árboles de decisión.
          </li>
          <li>
            <strong className="text-white">Parámetro <code>criterion</code>:</strong> La función para medir la calidad de una división. <code>'gini'</code> (por defecto) usa la impureza de Gini. <code>'entropy'</code> usa la ganancia de información (entropía de Shannon).
          </li>
          <li>
            <strong className="text-white">Parámetro <code>max_depth</code>:</strong> El hiperparámetro más importante para regularizar (podar) el árbol. Si es <code>None</code>, los nodos se expanden hasta que todas las hojas sean puras (sobreajuste garantizado).
          </li>
          <li>
            <strong className="text-white">Función <code>plot_tree</code>:</strong> Una herramienta fantástica de scikit-learn que dibuja el árbol entrenado. Permite ver exactamente qué reglas lógicas ha aprendido el modelo, haciendo que sea una verdadera "caja blanca".
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide170b = () => (
  <SlideLayout title="Código: Flujo Completo (Pipeline)" subtitle="SVM, Binarización y Curva ROC">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Ejemplo Completo (Iris Dataset)</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`import sklearn.metrics as metrics # Importa todas las métricas de evaluación
from sklearn.datasets import load_iris # Importa el dataset de ejemplo
from sklearn.model_selection import train_test_split # Importa la función de partición
from sklearn import preprocessing, svm # Importa preprocesamiento y modelos SVM

# 1) Carga y Partición (Hold-out)
datos = load_iris() # Carga los datos (3 clases de flores)
# Divide 80% entrenamiento, 20% test
X_train, X_test, y_train, y_test = train_test_split(
    datos.data, datos.target, test_size=0.2, random_state=42
)

# 2) Estandarización (Vital para SVM y modelos basados en distancia)
scaler = preprocessing.StandardScaler() # Instancia el estandarizador (Z-score)
X_train_std = scaler.fit_transform(X_train) # Aprende media/std y transforma train
X_test_std = scaler.transform(X_test) # Transforma test usando media/std de train

# 3) Algoritmo y Entrenamiento (SVM)
# probability=True es estrictamente necesario en SVC para poder usar predict_proba() luego
model = svm.SVC(C=10, random_state=42, probability=True) # Instancia Máquina de Vectores de Soporte
model.fit(X_train_std, y_train) # Entrena el modelo con datos estandarizados

# 4) Predicción y Matriz de Confusión
y_pred = model.predict(X_test_std) # Predice las clases (0, 1 o 2)
print(metrics.confusion_matrix(y_test, y_pred)) # Imprime la matriz de confusión 3x3

# 5) Curva ROC y AUC (Multiclase)
y_prob = model.predict_proba(X_test_std) # Obtiene las probabilidades para cada clase
# Para calcular ROC/AUC en problemas multiclase, debemos binarizar las etiquetas (estrategia One-vs-Rest)
y_test_bin = preprocessing.label_binarize(y_test, classes=[0,1,2]) # Convierte ej. clase 1 a [0, 1, 0]

# Calcular AUC
# multi_class='ovr' (One-vs-Rest) calcula el AUC para cada clase contra todas las demás
# average=None devuelve el AUC individual de cada clase en lugar del promedio
auc = metrics.roc_auc_score(
    y_test, y_prob, multi_class='ovr', average=None
)

# Extraer curva para la clase 0
# Calcula la Tasa de Falsos Positivos (fpr) y Verdaderos Positivos (tpr) para distintos umbrales (th)
fpr, tpr, th = metrics.roc_curve(y_test_bin[:,0], y_prob[:,0])`} 
          />
        </div>
      </div>
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">sklearn.svm.SVC:</strong> Support Vector Classifier. Un algoritmo potente que busca el hiperplano que maximiza el margen entre clases. El parámetro <code>probability=True</code> fuerza al modelo a calcular probabilidades (es más lento, pero necesario para ROC).
          </li>
          <li>
            <strong className="text-white">sklearn.preprocessing.label_binarize:</strong> Convierte etiquetas multiclase (ej. 0, 1, 2) en un formato binario One-vs-Rest (matriz donde cada columna es 1 si pertenece a esa clase y 0 si no). Es un requisito estricto para calcular curvas ROC en problemas con más de 2 clases.
          </li>
          <li>
            <strong className="text-white">metrics.roc_auc_score:</strong> Calcula el Área Bajo la Curva ROC (AUC). <code>multi_class='ovr'</code> indica que use la estrategia One-vs-Rest. <code>average=None</code> devuelve el AUC individual para cada clase en lugar de un promedio global.
          </li>
          <li>
            <strong className="text-white">metrics.roc_curve:</strong> Calcula los puntos (Tasa de Falsos Positivos <code>fpr</code>, Tasa de Verdaderos Positivos <code>tpr</code>) necesarios para dibujar la curva ROC. Solo acepta entradas binarias, por lo que le pasamos la columna correspondiente de <code>y_test_bin</code> y <code>y_prob</code>.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide171 = () => (
  <SlideLayout title="Ventajas de los Árboles" subtitle="¿Por qué son tan populares?">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
          <CheckCircle2 className="text-green-500" size={32} />
        </div>
        <h4 className="text-white font-bold mb-4">Interpretabilidad</h4>
        <p className="text-neutral-400 text-sm">Podemos ver exactamente las reglas que sigue el modelo.</p>
      </div>
      
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6">
          <Scale className="text-sky-500" size={32} />
        </div>
        <h4 className="text-white font-bold mb-4">No requiere escalado</h4>
        <p className="text-neutral-400 text-sm">A diferencia de KNN o Logística, la escala de los datos no afecta al árbol.</p>
      </div>
      
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
          <Zap className="text-purple-500" size={32} />
        </div>
        <h4 className="text-white font-bold mb-4">No linealidad</h4>
        <p className="text-neutral-400 text-sm">Capturan relaciones complejas sin necesidad de ingeniería de atributos.</p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide172 = () => (
  <SlideLayout title="El Problema: Sobreajuste (Overfitting)" subtitle="Árboles demasiado complejos">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2"><AlertTriangle size={24}/> El talón de Aquiles</h3>
        <p className="text-neutral-300 mb-6">
          Si dejamos que un árbol crezca sin límites, seguirá dividiendo los datos hasta que cada hoja contenga un solo elemento.
        </p>
        <div className="bg-black/50 p-6 rounded-xl border border-red-500/20">
          <p className="text-sm text-neutral-400">
            El modelo habrá <strong>memorizado</strong> el dataset de entrenamiento (incluyendo el ruido), pero fracasará al predecir datos nuevos.
          </p>
        </div>
      </div>
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-center items-center text-center">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
          <Activity className="text-red-500" size={40} />
        </div>
        <h4 className="text-xl font-bold text-white mb-4">Alta Varianza</h4>
        <p className="text-neutral-400 text-sm">
          Pequeños cambios en los datos de entrenamiento pueden generar árboles completamente distintos.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide173 = () => (
  <SlideLayout title="Solución: Poda (Pruning)" subtitle="Controlando el crecimiento">
    <div className="flex flex-col h-full">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex-1 flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl font-bold text-white mb-8">¿Cómo evitamos el sobreajuste?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl text-left">
          <div className="bg-black p-6 rounded-2xl border border-green-500/20">
            <h4 className="text-green-400 font-bold mb-2">max_depth</h4>
            <p className="text-sm text-neutral-400">Limita la profundidad máxima del árbol. Es el hiperparámetro más común.</p>
          </div>
          <div className="bg-black p-6 rounded-2xl border border-green-500/20">
            <h4 className="text-green-400 font-bold mb-2">min_samples_split</h4>
            <p className="text-sm text-neutral-400">Número mínimo de muestras requeridas para dividir un nodo.</p>
          </div>
          <div className="bg-black p-6 rounded-2xl border border-green-500/20">
            <h4 className="text-green-400 font-bold mb-2">min_samples_leaf</h4>
            <p className="text-sm text-neutral-400">Número mínimo de muestras que debe tener un nodo hoja.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);
