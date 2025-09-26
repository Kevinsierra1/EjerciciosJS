/**
 * Encuentra los archivos comprometidos que han sido modificados después de la última descarga segura.
 * @param {number} ultimoTimestampDescarga El timestamp de la última descarga segura.
 * @param {Array<Array<number>>} modificaciones Un array de arrays con el formato [ID del archivo, timestamp de modificación].
 * @returns {Array<number>} Un array con los ID de los archivos comprometidos.
 */
function encontrarArchivosComprometidos(ultimoTimestampDescarga, modificaciones) {
  const resultado = [];

  // Validate inputs
  if (typeof ultimoTimestampDescarga !== 'number' || isNaN(ultimoTimestampDescarga)) {
    throw new Error('ultimoTimestampDescarga must be a valid number');
  }
  if (!Array.isArray(modificaciones)) {
    throw new Error('modificaciones must be an array');
  }

  for (const modificacion of modificaciones) {
    // Validate each modification entry
    if (!Array.isArray(modificacion) || modificacion.length !== 2 || 
        typeof modificacion[0] !== 'number' || typeof modificacion[1] !== 'number') {
      console.warn('Skipping invalid modification entry:', modificacion);
      continue;
    }

    const [idArchivo, timestampModificacion] = modificacion;
    if (timestampModificacion > ultimoTimestampDescarga) {
      resultado.push(idArchivo);
    }
  }

  return resultado;
}

// Example usage
const ultimoBackup = 1627845600; // A fictional timestamp
const modificacionesRecientes = [
  [101, 1627845500], // Modified before backup (safe)
  [102, 1627845700], // Modified after backup (compromised)
  [103, 1627845600], // Modified at backup time (safe)
  [104, 1627845800], // Modified after backup (compromised)
  [105, 1627845400]  // Modified before backup (safe)
];

// Get user input and convert to number
let userInput = prompt("Ingrese el timestamp de la última descarga segura:");
const ultimoTimestampDescarga = parseInt(userInput, 10);

// Check if input is valid
if (isNaN(ultimoTimestampDescarga)) {
  alert("Por favor, ingrese un timestamp válido.");
} else {
  const archivosSospechosos = encontrarArchivosComprometidos(ultimoTimestampDescarga, modificacionesRecientes);
  console.log("Archivos comprometidos:", archivosSospechosos);
  alert("Archivos comprometidos: " + archivosSospechosos.join(", "));
}