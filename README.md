# Ejercicios de JavaScript 🚀

Una colección de ejercicios prácticos de JavaScript que cubren diferentes conceptos de programación, desde algoritmos básicos hasta problemas más complejos de lógica y estructuras de datos.

## Netlify

[exquisite-tarsier-b6161a.netlify.app](https://exquisite-tarsier-b6161a.netlify.app/)

## 🛠️ Instalación y Uso

1. **Clonar el repositorio** (si aplica):

   ```bash
   git clone [url-del-repositorio]
   cd ejercicios-javascript
   ```

2. **Abrir en el navegador**:

   - Abrir `index.html` en cualquier navegador web
   - Los ejercicios se ejecutan mediante prompts del navegador

3. **Ejecutar ejercicios individuales**:

   - Modificar el script importado en `index.html`
   - Cambiar `<script src="js/anagramas.js"></script>` por el ejercicio deseado

## 📚 Lista de Ejercicios

| Archivo                    | Dificultad   | Concepto Principal    | Descripción                                               |
| -------------------------- | ------------ | --------------------- | --------------------------------------------------------- |
| `anagramas.js`             | 🟢 Básico     | Strings & Arrays      | Verifica si dos palabras son anagramas                    |
| `archivosComprometidos.js` | 🟡 Intermedio | Arrays & Timestamps   | Detecta archivos modificados después de un backup         |
| `codigoArkano.js`          | 🟡 Intermedio | Algoritmos            | Decodifica símbolos mágicos (similar a números romanos)   |
| `frasesPlagadias.js`       | 🟡 Intermedio | Sets & Strings        | Detecta frases plagiadas comparando con una base          |
| `frutasEnvasadas.js`       | 🔴 Avanzado   | Pilas (Stacks)        | Valida secuencias de empaque usando estructura de pila    |
| `habilidadesCompatible.js` | 🟡 Intermedio | Filtros & Porcentajes | Encuentra candidatos compatibles según habilidades        |
| `puertasdelPortal.js`      | 🟡 Intermedio | Maps & Frecuencias    | Encuentra el primer elemento no repetido en una secuencia |

## 📖 Descripción Detallada

### 🔤 Anagramas (`anagramas.js`)

**Concepto**: Manipulación de strings y arrays

- **Función**: Determina si dos palabras son anagramas
- **Algoritmo**: Normaliza las palabras y compara caracteres ordenados
- **Entrada**: Dos palabras ingresadas por el usuario
- **Salida**: Mensaje indicando si son anagramas o no

```javascript
// Ejemplo de uso
esAnagrama("amor", "roma") // true
esAnagrama("casa", "saca") // true
esAnagrama("hello", "world") // false
```

### 🗂️ Archivos Comprometidos (`archivosComprometidos.js`)

**Concepto**: Comparación de timestamps y validación de datos

- **Función**: Identifica archivos modificados después del último backup seguro
- **Algoritmo**: Compara timestamps de modificación con el timestamp de referencia
- **Entrada**: Timestamp de backup y lista de modificaciones
- **Salida**: IDs de archivos comprometidos

```javascript
// Ejemplo de estructura de datos
modificaciones = [[101, 1627845700], [102, 1627845800]]
```

### ⚡ Código Arkano (`codigoArkano.js`)

**Concepto**: Decodificación de símbolos (similar a números romanos)

- **Función**: Convierte símbolos mágicos a valores numéricos
- **Símbolos**: ☽(1), ☾(5), ⚕(50), ⚡(100)
- **Regla**: Si un símbolo menor precede a uno mayor, se resta
- **Entrada**: Secuencia de símbolos
- **Salida**: Valor numérico total

```javascript
// Ejemplos
☽☾ = -1 + 5 = 4
⚕⚡ = -50 + 100 = 50
☾⚕ = 5 + 50 = 55
```

### 📝 Frases Plagiadas (`frasesPlagadias.js`)

**Concepto**: Detección de coincidencias usando Sets

- **Función**: Detecta frases copiadas de una base de datos
- **Normalización**: Elimina espacios, convierte a minúsculas, quita puntuación final
- **Algoritmo**: Usa Set para búsqueda eficiente O(1)
- **Entrada**: Lista de frases del usuario
- **Salida**: Frases que coinciden con la base

### 🥝 Frutas Envasadas (`frutasEnvasadas.js`)

**Concepto**: Validación de secuencias usando pilas (Stack)

- **Función**: Verifica si una secuencia de salida es válida dado un orden de entrada
- **Algoritmo**: Simula proceso de empaque con estructura de pila LIFO
- **Aplicación**: Problemas de validación de secuencias ordenadas
- **Entrada**: Orden de entrada y orden de salida deseado
- **Salida**: Validación booleana de la secuencia

### 💼 Habilidades Compatibles (`habilidadesCompatible.js`)

**Concepto**: Filtrado por porcentajes y normalización

- **Función**: Encuentra candidatos que cumplen ≥70% de habilidades requeridas
- **Algoritmo**: Calcula coincidencias case-insensitive y aplica umbral
- **Entrada**: Lista de habilidades requeridas
- **Salida**: IDs de candidatos compatibles ordenados alfabéticamente

### 🚪 Puertas del Portal (`puertasdelPortal.js`)

**Concepto**: Búsqueda del primer elemento único usando Maps

- **Función**: Encuentra el primer carácter que aparece solo una vez
- **Algoritmo**: Cuenta frecuencias y busca el primer elemento con count = 1
- **Entrada**: Secuencia de caracteres (letras minúsculas)
- **Salida**: Índice del primer carácter único o -1

## 🛠️ Tecnologías Utilizadas

- **JavaScript ES6+**: Sintaxis moderna, destructuring, arrow functions
- **APIs del Navegador**: `prompt()`, `alert()`, `console.log()`
- **Estructuras de Datos**: Arrays, Sets, Maps, Stacks
- **Algoritmos**: Ordenamiento, búsqueda, validación de secuencias

## 📁 Estructura del Proyecto

```
├── index.html                    # Archivo HTML principal
├── js/
│   ├── anagramas.js             # Ejercicio: Verificación de anagramas
│   ├── archivosComprometidos.js # Ejercicio: Detección de archivos modificados
│   ├── codigoArkano.js          # Ejercicio: Decodificación de símbolos
│   ├── frasesPlagadias.js       # Ejercicio: Detección de plagio
│   ├── frutasEnvasadas.js       # Ejercicio: Validación con pilas
│   ├── habilidadesCompatible.js # Ejercicio: Filtrado de candidatos
│   └── puertasdelPortal.js      # Ejercicio: Primer elemento único
└── README.md                    # Este archivo
```

## 🎯 Conceptos de Programación Cubiertos

- **Manipulación de Strings**: Normalización, comparación, validación
- **Estructuras de Datos**: Arrays, Sets, Maps, Pilas
- **Algoritmos de Búsqueda**: Búsqueda lineal, búsqueda en conjuntos
- **Validación de Datos**: Verificación de tipos, manejo de errores
- **Optimización**: Uso de estructuras eficientes (Set para O(1) lookup)
- **Interacción con Usuario**: Prompts, validación de entrada

## 🚀 Próximas Mejoras

- [ ] Interfaz web más interactiva (sin prompts)
- [ ] Casos de prueba automatizados
- [ ] Documentación de complejidad algorítmica
- [ ] Versiones con diferentes aproximaciones algorítmicas
- [ ] Integración con frameworks de testing

## 📝 Notas de Desarrollo

- Todos los ejercicios incluyen validación robusta de entradas
- Se utiliza `console.log()` extensivo para debugging
- Manejo de casos edge (entradas vacías, nulas, tipos incorrectos)
- Código documentado con JSDoc para funciones principales

------
## Créditos

Desarrollado por Kevin Sierra.