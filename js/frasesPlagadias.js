/**
 * Detecta frases plagiadas comparando frases de un estudiante con una base de frases sospechosas.
 * @param {string[]} base - Array de frases consideradas sospechosas.
 * @param {string[]} frasesEstudiante - Array de frases escritas por el estudiante.
 * @returns {string[]} - Array con las frases del estudiante que coinciden con la base.
 */
function detectarPlagio(base, frasesEstudiante) {
  // Normaliza una frase: elimina espacios al inicio/final, convierte a minúsculas,
  // y quita .!? al final
  const normalizarFrase = (frase) => {
    return frase
      .trim() // Elimina espacios al inicio y final
      .toLowerCase() // Convierte a minúsculas
      .replace(/[.!?]$/, ''); // Elimina .!? al final
  };

  // Crea un conjunto de frases normalizadas de la base para comparación eficiente
  const baseNormalizada = new Set(base.map(normalizarFrase));

  // Filtra las frases del estudiante que coinciden con alguna frase de la base
  return frasesEstudiante.filter((frase) => {
    const fraseNormalizada = normalizarFrase(frase);
    return baseNormalizada.has(fraseNormalizada);
  });
}

// Base de frases sospechosas
const base = [
  'El conocimiento es poder.',
  'Aprender nunca es una pérdida de tiempo!',
  'Programar es divertido',
];

// Función para recolectar frases del usuario
function recolectarFrasesEstudiante() {
  const frases = [];
  let continuar = true;

  while (continuar) {
    const frase = prompt('Ingrese una frase (o deje vacío y presione OK para terminar):');
    if (frase === null || frase.trim() === '') {
      continuar = false; // Termina si el usuario cancela o ingresa una cadena vacía
    } else {
      frases.push(frase); // Agrega la frase tal como se ingresó
    }
  }

  return frases;
}

// Ejecutar la detección de plagio con las frases ingresadas
const frasesEstudiante = recolectarFrasesEstudiante();
if (frasesEstudiante.length > 0) {
  const frasesPlagiadas = detectarPlagio(base, frasesEstudiante);
  if (frasesPlagiadas.length > 0) {
    alert('Frases plagiadas detectadas:\n' + frasesPlagiadas.join('\n'));
  } else {
    alert('No se detectaron frases plagiadas.');
  }
  console.log('Frases plagiadas:', frasesPlagiadas);
} else {
  alert('No se ingresaron frases.');
  console.log('No se ingresaron frases.');
}