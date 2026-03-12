import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { CodeBlock } from '../components/CodeBlock';
import { motion } from 'framer-motion';
import { Cpu, AlertTriangle, CheckCircle2, BarChart3, Rocket } from 'lucide-react';

export const Slide21 = () => (
  <SlideLayout title="Fase 3: Tareas Genéricas (II)" subtitle="Preparación de los Datos">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col"
      >
        <h3 className="text-xl font-bold text-teal-400 mb-4 border-b border-slate-700 pb-3">3. Construir datos</h3>
        <p className="text-slate-300 mb-4 flex-1">
          Extraer información de conjuntos originales y crear nuevas filas/columnas para exponer datos con mayor representatividad.
        </p>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
          <p className="text-sm text-slate-400">
            <strong className="text-teal-400">Ejemplo:</strong> Si tenemos "lado A" y "lado B" de una vivienda, crear la columna "Superficie" (A × B) que puede ser más relevante para predecir el precio.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col"
      >
        <h3 className="text-xl font-bold text-teal-400 mb-4 border-b border-slate-700 pb-3">4. Integrar los datos</h3>
        <p className="text-slate-300 mb-4 flex-1">
          Operaciones sobre conjuntos independientes para reunir información de forma racional en un único conjunto.
        </p>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
          <p className="text-sm text-slate-400">
            <strong className="text-teal-400">Objetivo:</strong> Crear conjuntos fusionados y homogéneos (fusionar filas, columnas o tablas completas mediante JOINs).
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col"
      >
        <h3 className="text-xl font-bold text-teal-400 mb-4 border-b border-slate-700 pb-3">5. Formatear los datos</h3>
        <p className="text-slate-300 mb-4 flex-1">
          Transformar la forma de los datos sin modificar su contenido, para habilitar técnicas específicas o cumplir interfaces (APIs).
        </p>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
          <p className="text-sm text-slate-400">
            <strong className="text-teal-400">Ejemplo:</strong> Sustituir tabuladores por comas, eliminar caracteres especiales, borrar espacios extra.
          </p>
        </div>
      </motion.div>
    </div>
  </SlideLayout>
);

export const Slide21a = () => (
  <SlideLayout title="Código: Procesamiento Básico de Imágenes RGB" subtitle="Preparando datos visuales con OpenCV">
    <div className="flex flex-col md:flex-row gap-[2%] h-full">
      <div className="w-full md:w-[68%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Python</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`import cv2 # Importa OpenCV para procesamiento de imágenes
import numpy as np # Importa NumPy para operaciones matriciales

# 1. Lectura y Separación de Canales
# OpenCV carga las imágenes en formato BGR (Azul, Verde, Rojo) por defecto
img = cv2.imread('./Lena_RGB.png') # Lee la imagen desde el disco
B, G, R = img[:,:,0], img[:,:,1], img[:,:,2] # Separa los canales B, G y R usando slicing de NumPy

# Convertir a RGB para visualización (ej. Matplotlib espera RGB)
RGB_img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB) # Convierte el espacio de color de BGR a RGB

# 2. Transformaciones de Intensidad
# Usar cv2.add evita desbordamientos (ej. 250 + 10 = 255, no 4 como pasaría con uint8 normal)
mas_brillo_img = cv2.add(img, 50) # Añade 50 a la intensidad de todos los píxeles (aumenta brillo)

# 3. Transformaciones Geométricas
rows, cols, ch = img.shape # Obtiene las dimensiones de la imagen (filas, columnas, canales)

# Traslación (Mover 280px en X, -80px en Y)
M_trans = np.float32([[1, 0, 280], [0, 1, -80]]) # Matriz de transformación afín para traslación
img_trans = cv2.warpAffine(img, M_trans, (cols, rows)) # Aplica la traslación a la imagen

# Rotación (45 grados desde el centro, escala x2)
M_rot = cv2.getRotationMatrix2D((cols/2, rows/2), angle=45, scale=2) # Matriz de rotación y escalado
img_rot = cv2.warpAffine(img, M_rot, (cols, rows)) # Aplica la rotación a la imagen

# Flipping (Volteo)
# 0: Volteo Vertical (eje X), 1: Volteo Horizontal (eje Y), -1: Ambos ejes
img_flip = cv2.flip(img, 1) # Voltea la imagen horizontalmente (efecto espejo)`} 
          />
        </div>
      </div>
      <div className="w-full md:w-[30%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-xs text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">cv2 (OpenCV):</strong> Librería estándar de la industria para visión por computadora. Muy rápida, escrita en C/C++.
          </li>
          <li>
            <strong className="text-white">cv2.imread(path):</strong> Lee una imagen desde un archivo. ¡Ojo! La devuelve como un array NumPy en orden BGR (Azul, Verde, Rojo), no RGB.
          </li>
          <li>
            <strong className="text-white">cv2.cvtColor(src, code):</strong> Convierte una imagen de un espacio de color a otro. <code>cv2.COLOR_BGR2RGB</code> es esencial antes de mostrar la imagen con librerías como Matplotlib.
          </li>
          <li>
            <strong className="text-white">cv2.add(src1, src2):</strong> Suma matrices. Es crucial usar esto en lugar de <code>img + 50</code> porque <code>cv2.add</code> satura en 255 (blanco máximo), mientras que NumPy hace "wrap-around" (vuelve a 0).
          </li>
          <li>
            <strong className="text-white">cv2.warpAffine(src, M, dsize):</strong> Aplica una transformación afín (traslación, rotación, escalado) a una imagen usando una matriz de transformación <code>M</code> de 2x3.
          </li>
          <li>
            <strong className="text-white">cv2.getRotationMatrix2D(center, angle, scale):</strong> Calcula la matriz afín necesaria para rotar y escalar una imagen alrededor de un punto central.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide21b = () => (
  <SlideLayout title="Código: Extracción de Características (CV)" subtitle="De píxeles a descriptores numéricos">
    <div className="flex flex-col md:flex-row gap-[2%] h-full">
      <div className="w-full md:w-[68%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Python</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`import cv2 # Importa OpenCV
from skimage.measure import label, regionprops # Importa funciones para etiquetar y medir regiones
from skimage.feature import hog, greycomatrix # Importa funciones para extraer características (HOG, GLCM)

# 1. Umbralización (Otsu) y Detección de Objetos
img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY) # Convierte la imagen a escala de grises
# Otsu calcula el umbral 't' automáticamente para separar fondo y objeto
t, mask = cv2.threshold(img_gray, 0, 1, cv2.THRESH_OTSU) # Aplica umbralización de Otsu

# Etiquetar objetos conectados en la máscara binaria
lab, num = label(mask, return_num=True) # Asigna una etiqueta única a cada región conectada

# Extraer propiedades del primer objeto
prop = regionprops((lab == 1).astype('uint8'))[0] # Obtiene las propiedades de la región con etiqueta 1
area = prop.area # Extrae el área (número de píxeles) de la región
perimetro = prop.perimeter # Extrae el perímetro de la región

# 2. Descriptores de Textura (GLCM)
# Matriz de Coocurrencia para evaluar repetición de grises (textura)
GLCM = greycomatrix(img_gray, distances=[5], angles=[0], 
                    levels=256, symmetric=True) # Calcula GLCM a distancia 5, ángulo 0

# 3. Descriptores de Forma (HOG)
# Histogram of Oriented Gradients (muy usado para detectar peatones/formas)
H = hog(img_gray, orientations=9, pixels_per_cell=(8,8), 
        cells_per_block=(2,2), transform_sqrt=True) # Calcula el vector de características HOG

# 4. Puntos Clave (SIFT)
sift = cv2.SIFT_create() # Inicializa el detector de puntos clave SIFT (Scale-Invariant Feature Transform)
kp, des = sift.detectAndCompute(img_gray, None) # Detecta puntos clave y calcula sus descriptores`} 
          />
        </div>
      </div>
      <div className="w-full md:w-[30%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-xs text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">skimage (scikit-image):</strong> Colección de algoritmos para procesamiento de imágenes en Python, construida sobre scipy.
          </li>
          <li>
            <strong className="text-white">cv2.threshold(..., cv2.THRESH_OTSU):</strong> Convierte una imagen en escala de grises a binaria (blanco/negro). El método de Otsu analiza el histograma para encontrar el umbral óptimo que separa el fondo del objeto.
          </li>
          <li>
            <strong className="text-white">skimage.measure.label:</strong> Encuentra componentes conectados (píxeles adyacentes del mismo valor) y les asigna una etiqueta única (1, 2, 3...).
          </li>
          <li>
            <strong className="text-white">skimage.measure.regionprops:</strong> Calcula propiedades geométricas de regiones etiquetadas (área, perímetro, excentricidad, bounding box). Convierte píxeles en datos tabulares.
          </li>
          <li>
            <strong className="text-white">skimage.feature.hog:</strong> Calcula el Histograma de Gradientes Orientados. Divide la imagen en celdas, calcula la dirección del gradiente en cada píxel y crea un histograma por celda.
          </li>
          <li>
            <strong className="text-white">cv2.SIFT_create():</strong> Inicializa el algoritmo SIFT (Scale-Invariant Feature Transform). <code>detectAndCompute</code> encuentra puntos clave (esquinas, bordes únicos) y extrae un vector descriptor para cada uno, invariante a escala y rotación.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide21c = () => (
  <SlideLayout title="Código: Segmentación Avanzada" subtitle="Detectando contornos y rellenando regiones">
    <div className="flex flex-col md:flex-row gap-[2%] h-full">
      <div className="w-full md:w-[68%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Implementación en Python</h3>
        <div className="flex-1 overflow-auto">
          <CodeBlock 
            language="python"
            code={`import cv2 # Importa OpenCV
import numpy as np # Importa NumPy
from scipy.ndimage import binary_fill_holes as bfh # Importa función para rellenar agujeros binarios

# --- Segmentación con Detección de Bordes (Canny) ---
# 1. Filtro Gaussiano (Reducir ruido antes de aplicar Canny)
img_gaus = cv2.GaussianBlur(img_gray, (5,5), 0) # Aplica un desenfoque gaussiano con kernel 5x5

# 2. Detector de Bordes Canny
# Umbrales minVal (85) y maxVal (255) definen qué es un borde fuerte/débil
canny = cv2.Canny(img_gaus, 85, 255) # Detecta los bordes en la imagen suavizada

# 3. Rellenar agujeros dentro de los bordes cerrados
filled_bordes = bfh(canny) # Rellena las áreas delimitadas por los bordes detectados


# --- Crecimiento de Regiones (FloodFill) ---
# 1. Crear máscara de referencia (debe ser 2 píxeles más grande que la imagen original)
h, w = img_gray.shape # Obtiene alto y ancho
ref = np.zeros((h+2, w+2), np.uint8) # Crea una máscara de ceros (negra)

# 2. Rellenar desde un punto semilla
mask_flood = img_gray.copy() # Crea una copia de la imagen para no modificar la original
# Parámetros: imagen, máscara_ref, punto_semilla (x=500, y=220), color_relleno (0=negro)
cv2.floodFill(mask_flood, ref, (500, 220), 0) # Rellena la región conectada al punto semilla`} 
          />
        </div>
      </div>
      <div className="w-full md:w-[30%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Explicación de Librerías y Métodos</h3>
        <ul className="space-y-4 text-xs text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">
          <li>
            <strong className="text-white">cv2.GaussianBlur(src, ksize, sigmaX):</strong> Aplica un filtro de desenfoque. <code>ksize</code> (ej. (5,5)) es el tamaño del kernel (debe ser impar). Ayuda a eliminar ruido de alta frecuencia para que el detector de bordes no encuentre "falsos bordes".
          </li>
          <li>
            <strong className="text-white">cv2.Canny(image, threshold1, threshold2):</strong> El algoritmo de detección de bordes más popular. Encuentra gradientes de intensidad. Los píxeles con gradiente mayor a <code>threshold2</code> son bordes seguros. Los que están entre umbrales se aceptan si conectan con un borde seguro.
          </li>
          <li>
            <strong className="text-white">scipy.ndimage.binary_fill_holes(input):</strong> Función morfológica que rellena los "agujeros" (píxeles de fondo rodeados por píxeles de objeto) en una imagen binaria. Útil después de Canny para obtener la máscara sólida del objeto.
          </li>
          <li>
            <strong className="text-white">cv2.floodFill(image, mask, seedPoint, newVal):</strong> Algoritmo de "cubo de pintura". Empieza en <code>seedPoint</code> y cambia el color de los píxeles conectados que tienen un valor similar al original, rellenándolos con <code>newVal</code>. La máscara <code>ref</code> sirve para limitar el crecimiento o guardar el área rellenada.
          </li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide22 = () => (
  <SlideLayout title="1.1.7. Modelado" subtitle="Fase 4 de CRISP-DM">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-purple-900/20 border border-purple-500/30 p-8 rounded-3xl w-full max-w-6xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="bg-purple-500 p-4 rounded-2xl">
            <Cpu className="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">El núcleo del aprendizaje</h3>
            <p className="text-purple-300 text-lg">Creación de modelos de conocimiento.</p>
          </div>
        </div>
        
        <div className="space-y-6 text-xl text-slate-300 leading-relaxed">
          <p>
            En esta fase se lleva a cabo la creación de modelos abstractos a partir de los datos suministrados desde la fase anterior.
          </p>
          <div className="p-6 bg-slate-900 rounded-xl border-l-4 border-purple-500">
            <p className="italic">
              "Esta es la fase central de todo proyecto de minería de datos y el foco principal de interés de la asignatura. Aquí es donde los algoritmos 'aprenden'."
            </p>
          </div>
          <p>
            Dependiendo de la tarea a resolver, se pueden crear modelos de <strong className="text-purple-400">clasificación</strong> (predecir categorías) o <strong className="text-purple-400">regresión</strong> (predecir números).
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide23 = () => (
  <SlideLayout title="Fase 4: Selección de algoritmos" subtitle="¿Cómo elegir el adecuado?">
    <p className="text-xl text-slate-300 mb-8">
      A veces es conveniente seleccionar un subconjunto de algoritmos candidatos y someterlos a prueba. Criterios de selección:
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        'Tipo de aprendizaje apropiado para el problema (supervisado, no supervisado, etc).',
        'Datos compatibles (numéricos, categóricos, fechas, valores ausentes tolerados).',
        'Conocimiento previo de sus bondades y deficiencias.',
        'Adecuados a la naturaleza de los datos (ej: Redes Bayesianas asumen independencia).',
        'Complejidad computacional y tiempos de ejecución aceptables.',
        'Interpretabilidad requerida (Caja Blanca vs Caja Negra).'
      ].map((crit, i) => (
        <motion.div 
          key={i}
          initial={{ x: i % 2 === 0 ? -20 : 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-start gap-4"
        >
          <CheckCircle2 className="text-purple-400 shrink-0 mt-1" />
          <p className="text-slate-300">{crit}</p>
        </motion.div>
      ))}
    </div>
  </SlideLayout>
);

export const Slide24 = () => (
  <SlideLayout title="Cajas Blancas vs Cajas Negras" subtitle="El dilema de la interpretabilidad">
    <div className="flex flex-col md:flex-row gap-8 h-full items-center">
      <div className="flex-1 bg-slate-800 p-8 rounded-2xl border border-slate-700 w-full">
        <h3 className="text-2xl font-bold text-white mb-6 text-center border-b border-slate-700 pb-4">Modelos de Caja Blanca</h3>
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 border-4 border-slate-400 rounded-xl flex items-center justify-center bg-slate-200/10">
            <span className="text-slate-300 font-mono text-sm">y = mx + b</span>
          </div>
        </div>
        <ul className="space-y-4 text-slate-300">
          <li>✅ Fáciles de comprender e interpretar por humanos.</li>
          <li>✅ Podemos explicar <strong>por qué</strong> tomó una decisión.</li>
          <li>ℹ️ Ejemplos: Regresión Lineal, Árboles de Decisión, Regresión Logística.</li>
          <li>❌ A veces son menos precisos en problemas muy complejos.</li>
        </ul>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="text-4xl font-bold text-slate-600">VS</div>
      </div>
      
      <div className="flex-1 bg-slate-900 p-8 rounded-2xl border border-purple-500/30 w-full">
        <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center border-b border-purple-500/30 pb-4">Modelos de Caja Negra</h3>
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-black border-2 border-purple-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            <span className="text-purple-500 font-bold">?</span>
          </div>
        </div>
        <ul className="space-y-4 text-slate-300">
          <li>❌ Interpretación sumamente compleja o imposible.</li>
          <li>❌ Difícil justificar legal/éticamente sus decisiones.</li>
          <li>ℹ️ Ejemplos: Redes Neuronales Profundas (Deep Learning), Ensembles complejos.</li>
          <li>✅ Suelen ser mucho más precisos en tareas complejas (visión, lenguaje).</li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide25 = () => (
  <SlideLayout title="Fase 4: Generar el plan de prueba" subtitle="Diseño Experimental">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 w-full max-w-6xl">
        <h3 className="text-2xl font-bold text-purple-400 mb-6">Diseño Experimental en Ciencia de Datos</h3>
        <p className="text-lg text-slate-300 mb-8">
          Es muy importante generar un plan para probar la eficacia y validez de los modelos construidos.
        </p>
        
        <div className="space-y-6">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-xl font-bold text-white mb-2">1. Parametrización</h4>
            <p className="text-slate-400">
              La mayoría de algoritmos pueden ser configurados. Se deben escoger los valores de los parámetros (hiperparámetros). A menudo se crean listas de valores para experimentar y determinar la mejor parametrización.
            </p>
          </div>
          
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-xl font-bold text-white mb-2">2. Métricas de Evaluación</h4>
            <p className="text-slate-400">
              Determinar qué métricas se calcularán para evaluar la bondad (ej: Exactitud, Precisión, MAE, RMSE).
            </p>
          </div>
          
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-xl font-bold text-white mb-2">3. Estrategia de Validación</h4>
            <p className="text-slate-400">
              Definir cómo se dividirán los datos para entrenar y probar (ej: Hold-out, Validación Cruzada).
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide26 = () => (
  <SlideLayout title="Fase 4: Construir y Evaluar" subtitle="Ejecución y análisis técnico">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <Cpu className="w-8 h-8 text-purple-400" />
          <h3 className="text-2xl font-bold text-white">Construir los modelos</h3>
        </div>
        <p className="text-lg text-slate-300 mb-4">
          Se ejecutan los algoritmos seleccionados sobre los datos preparados, utilizando la parametrización y validación programadas.
        </p>
        <div className="mt-auto bg-slate-900 p-4 rounded-xl border border-slate-700">
          <p className="text-slate-400 italic">
            "Los resultados generados deben estar detallados, organizados y almacenados adecuadamente para su posterior análisis."
          </p>
        </div>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <BarChart3 className="w-8 h-8 text-pink-400" />
          <h3 className="text-2xl font-bold text-white">Evaluación de resultados</h3>
        </div>
        <p className="text-lg text-slate-300 mb-4">
          Evaluación puramente técnica basada en las métricas obtenidas.
        </p>
        <ul className="space-y-3 text-slate-400 mt-4">
          <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-500"></div> Resumir resultados.</li>
          <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-500"></div> Enumerar cualidades de los modelos.</li>
          <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-500"></div> Hacer comparativa y ranking de eficacia.</li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export const Slide27 = () => (
  <SlideLayout title="1.1.8. Evaluación de Negocio" subtitle="Fase 5 de CRISP-DM">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-pink-900/20 border border-pink-500/30 p-8 rounded-3xl w-full max-w-6xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="bg-pink-500 p-4 rounded-2xl">
            <BarChart3 className="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">¿Cumplimos los objetivos?</h3>
            <p className="text-pink-300 text-lg">Más allá de las métricas técnicas.</p>
          </div>
        </div>
        
        <div className="space-y-6 text-xl text-slate-300 leading-relaxed">
          <p>
            Se evalúan los modelos teniendo en cuenta el cumplimiento de los <strong className="text-white">criterios de éxito del negocio</strong> planteados al inicio.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-slate-900 p-6 rounded-xl border border-green-500/30">
              <h4 className="text-green-400 font-bold mb-2">Si se cumplen:</h4>
              <p className="text-sm text-slate-400">Se procede a la siguiente fase: el despliegue y explotación del modelo.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-orange-500/30">
              <h4 className="text-orange-400 font-bold mb-2">Si NO se cumplen:</h4>
              <p className="text-sm text-slate-400">Se evalúa iterar nuevamente sobre fases anteriores para mejorar resultados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide28 = () => (
  <SlideLayout title="Fase 5: Tareas Genéricas" subtitle="Evaluación de Negocio">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col"
      >
        <h3 className="text-xl font-bold text-pink-400 mb-4 border-b border-slate-700 pb-3">1. Evaluar resultados</h3>
        <p className="text-slate-300 mb-4 flex-1">
          Evaluación formal respecto a los criterios de éxito de negocio. Se intentan explicar las causas de los grados de éxito alcanzados.
        </p>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col"
      >
        <h3 className="text-xl font-bold text-pink-400 mb-4 border-b border-slate-700 pb-3">2. Revisar el proceso</h3>
        <p className="text-slate-300 mb-4 flex-1">
          Revisión de todo el proceso llevado a cabo para encontrar errores o riesgos que puedan afectar al éxito (Aseguramiento de Calidad).
        </p>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col"
      >
        <h3 className="text-xl font-bold text-pink-400 mb-4 border-b border-slate-700 pb-3">3. Siguientes pasos</h3>
        <p className="text-slate-300 mb-4 flex-1">
          Decidir cómo proceder: finalizar y pasar a implantación, iniciar nuevas iteraciones, o generar nuevos proyectos.
        </p>
      </motion.div>
    </div>
  </SlideLayout>
);

export const Slide29 = () => (
  <SlideLayout title="1.1.9. Despliegue" subtitle="Fase 6 de CRISP-DM">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-orange-900/20 border border-orange-500/30 p-8 rounded-3xl w-full max-w-6xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="bg-orange-500 p-4 rounded-2xl">
            <Rocket className="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">Puesta en producción</h3>
            <p className="text-orange-300 text-lg">Transformando conocimiento en acciones.</p>
          </div>
        </div>
        
        <div className="space-y-6 text-xl text-slate-300 leading-relaxed">
          <p>
            En esta fase el conocimiento obtenido se transforma en <strong className="text-white">acciones dentro del proceso de negocio</strong>, empleando los modelos construidos en la actividad productiva empresarial.
          </p>
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-700">
            <p className="text-lg">
              Un modelo excelente que no se despliega o no se usa, no aporta valor real a la empresa.
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export const Slide30 = () => (
  <SlideLayout title="Fase 6: Tareas Genéricas" subtitle="Despliegue">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      {[
        { 
          title: 'Planear la implementación', 
          desc: 'Extraer estrategia de implantación. Documentar el procedimiento para su posterior automatización.'
        },
        { 
          title: 'Monitorizar y mantener', 
          desc: 'Preparar estrategias para observar comportamientos anómalos del sistema en explotación y corregirlos.'
        },
        { 
          title: 'Crear el informe final', 
          desc: 'Resumen de puntos principales, hallazgos, experiencia, conocimiento alcanzado y resultados logrados.'
        },
        { 
          title: 'Revisar el proyecto', 
          desc: 'Revisión final evaluando acciones correctas e incorrectas para enumerar lecciones aprendidas.'
        }
      ].map((task, i) => (
        <motion.div 
          key={task.title}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
        >
          <h3 className="text-xl font-bold text-orange-400 mb-3">{task.title}</h3>
          <p className="text-slate-300">{task.desc}</p>
        </motion.div>
      ))}
    </div>
  </SlideLayout>
);
