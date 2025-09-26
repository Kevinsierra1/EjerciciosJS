/**
 * Encuentra el índice del primer portal fuera de fase (no repetido) en una secuencia de activaciones.
 * @param {string} secuencia - String con códigos de portales (letras minúsculas).
 * @returns {number} - Índice del primer portal no repetido, o -1 si todos se repiten.
 */
function portalFueraDeFase(secuencia) {
  // Validar entrada
  if (typeof secuencia !== 'string' || secuencia.length === 0) {
    console.log('Validación fallida: Secuencia inválida', { secuencia });
    return -1;
  }

  // Mapa para contar ocurrencias y rastrear el primer índice
  const frecuencia = new Map();
  for (let i = 0; i < secuencia.length; i++) {
    const letra = secuencia[i];
    if (frecuencia.has(letra)) {
      frecuencia.set(letra, { count: frecuencia.get(letra).count + 1, index: frecuencia.get(letra).index });
    } else {
      frecuencia.set(letra, { count: 1, index: i });
    }
  }
  console.log('Frecuencia de letras:', Object.fromEntries(frecuencia));

  // Encontrar el primer carácter con count === 1
  for (let i = 0; i < secuencia.length; i++) {
    const letra = secuencia[i];
    if (frecuencia.get(letra).count === 1) {
      console.log(`Primer portal fuera de fase: ${letra} en índice ${i}`);
      return i;
    }
  }

  console.log('No se encontró ningún portal fuera de fase');
  return -1;
}

// Función para recolectar la secuencia de portales
function recolectarSecuencia() {
  alert('Ingrese una secuencia de códigos de portales (solo letras minúsculas, sin espacios). Presione OK para confirmar.');

  const secuencia = prompt('Ingrese la secuencia de portales (ej. xyxyxy):');
  console.log('Entrada del usuario:', { secuencia });

  if (secuencia === null) {
    console.log('Usuario canceló el prompt');
    alert('Ingreso de secuencia cancelado.');
    return '';
  }

  const secuenciaValida = secuencia.trim();
  if (secuenciaValida === '') {
    console.log('Usuario ingresó cadena vacía');
    alert('La secuencia no puede estar vacía.');
    return '';
  }

  if (!/^[a-z]+$/.test(secuenciaValida)) {
    console.log('Secuencia inválida: contiene caracteres no permitidos', { secuenciaValida });
    alert('La secuencia debe contener solo letras minúsculas (a-z).');
    return '';
  }

  console.log('Secuencia válida recolectada:', secuenciaValida);
  return secuenciaValida;
}

// Ejecutar la verificación de portal fuera de fase
console.log('Iniciando recolección de secuencia de portales...');
const secuencia = recolectarSecuencia();

if (secuencia === '') {
  alert('No se ingresó una secuencia válida.');
  console.log('No se ingresó una secuencia válida.', { secuencia });
} else {
  const indice = portalFueraDeFase(secuencia);
  const mensaje = indice === -1
    ? 'Todos los portales están en fase (se repiten).'
    : `Primer portal fuera de fase en el índice ${indice} (letra: ${secuencia[indice]}).`;
  alert(mensaje);
  console.log(mensaje, { secuencia, indice });
}