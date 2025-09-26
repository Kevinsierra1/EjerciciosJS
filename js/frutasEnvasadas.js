/**
 * Verifica si una secuencia de salida de frutas es válida según el orden de entrada, usando una pila.
 * @param {string[]} entrada - Array con el orden de llegada de las frutas.
 * @param {string[]} salida - Array con el orden de empaque de las frutas.
 * @returns {boolean} - True si la secuencia de salida es válida, false si no.
 */
function frutaEmpacadaCorrectamente(entrada, salida) {
  // Validar entradas
  if (!Array.isArray(entrada) || !Array.isArray(salida) || entrada.length !== salida.length) {
    console.log('Validación fallida: Arrays inválidos o de diferente longitud', { entrada, salida });
    return false;
  }

  // Verificar que las frutas sean las mismas (sin importar el orden)
  const entradaSet = new Set(entrada);
  const salidaSet = new Set(salida);
  if (entradaSet.size !== salidaSet.size || entradaSet.size !== entrada.length) {
    console.log('Validación fallida: Duplicados o longitudes diferentes', { entradaSet, salidaSet });
    return false;
  }
  for (const fruta of entradaSet) {
    if (!salidaSet.has(fruta)) {
      console.log('Validación fallida: Frutas no coinciden', { fruta });
      return false;
    }
  }

  // Simular el proceso con una pila
  const pila = [];
  let indiceSalida = 0;

  for (const fruta of entrada) {
    pila.push(fruta);
    console.log('Apilando:', fruta, 'Pila actual:', [...pila]);

    while (pila.length > 0 && pila[pila.length - 1] === salida[indiceSalida]) {
      console.log('Desapilando:', pila[pila.length - 1], 'para coincidir con salida:', salida[indiceSalida]);
      pila.pop();
      indiceSalida++;
    }
  }

  console.log('Pila final:', pila, 'Índice de salida:', indiceSalida);
  return pila.length === 0;
}

// Función para recolectar frutas del usuario
function recolectarFrutas(tipo) {
  const frutas = [];
  let continuar = true;

  while (continuar) {
    const fruta = prompt(`Ingrese una fruta para ${tipo} (o deje vacío y presione OK para terminar):`);
    console.log(`Entrada del usuario para ${tipo}:`, { fruta }); // Depuración

    if (fruta === null) {
      console.log(`Usuario canceló el prompt para ${tipo}`);
      alert(`Ingreso de frutas para ${tipo} cancelado.`);
      continuar = false;
    } else if (fruta.trim() === '') {
      console.log(`Usuario ingresó cadena vacía para ${tipo}, terminando ingreso`);
      continuar = false;
    } else if (frutas.includes(fruta.trim())) {
      console.log(`Fruta duplicada detectada para ${tipo}:`, fruta.trim());
      alert(`La fruta "${fruta.trim()}" ya fue ingresada. Por favor, ingrese una fruta única.`);
    } else {
      frutas.push(fruta.trim());
      console.log(`Fruta añadida a ${tipo}:`, fruta.trim(), 'Frutas actuales:', [...frutas]);
    }
  }

  console.log(`Frutas recolectadas para ${tipo}:`, frutas);
  return frutas;
}

// Ejecutar la verificación de empaque
console.log('Iniciando recolección de frutas para entrada...');
const entrada = recolectarFrutas('entrada');
console.log('Iniciando recolección de frutas para salida...');
const salida = recolectarFrutas('salida');

if (entrada.length === 0 || salida.length === 0) {
  alert('No se ingresaron suficientes frutas para verificar.');
  console.log('No se ingresaron suficientes frutas para verificar.', { entrada, salida });
} else {
  const esValida = frutaEmpacadaCorrectamente(entrada, salida);
  const mensaje = esValida
    ? 'La secuencia de salida es válida.'
    : 'La secuencia de salida NO es válida.';
  alert(mensaje);
  console.log(mensaje, { entrada, salida });
}