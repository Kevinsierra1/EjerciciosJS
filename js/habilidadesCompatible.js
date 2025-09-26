/**
 * Encuentra los IDs de candidatos que cumplen al menos el 70% de las habilidades requeridas por una oferta.
 * @param {string[]} oferta - Array de habilidades requeridas por la oferta.
 * @param {Object[]} candidatos - Array de objetos con id (string) y skills (string[]).
 * @returns {string[]} - Array de IDs de candidatos compatibles, ordenados alfabéticamente.
 */
function candidatosCompatibles(oferta, candidatos) {
  // Validar entradas
  if (!Array.isArray(oferta) || !Array.isArray(candidatos) || oferta.length === 0) {
    console.log('Validación fallida: Oferta o candidatos inválidos', { oferta, candidatos });
    return [];
  }

  // Calcular el umbral del 70% (redondeado hacia abajo)
  const umbral = Math.floor(oferta.length * 0.7);
  console.log(`Umbral: ${umbral} de ${oferta.length} habilidades requeridas`);

  // Normalizar las habilidades de la oferta a minúsculas
  const ofertaNormalizada = new Set(oferta.map(skill => skill.toLowerCase()));

  // Filtrar candidatos que cumplen el umbral
  const compatibles = candidatos
    .filter(candidato => {
      if (!candidato.id || !Array.isArray(candidato.skills)) {
        console.log('Candidato inválido:', candidato);
        return false;
      }

      // Contar habilidades coincidentes (case-insensitive)
      const coincidencias = candidato.skills.filter(skill =>
        ofertaNormalizada.has(skill.toLowerCase())
      ).length;
      console.log(`Candidato ${candidato.id}: ${coincidencias} habilidades coincidentes`);
      return coincidencias >= umbral;
    })
    .map(candidato => candidato.id);

  // Ordenar alfabéticamente
  const resultado = compatibles.sort();
  console.log('Candidatos compatibles:', resultado);
  return resultado;
}

// Función para recolectar habilidades de la oferta
function recolectarHabilidades() {
  const habilidades = [];
  let continuar = true;

  alert('Ingrese las habilidades requeridas una por una. Deje el campo vacío y presione OK para terminar.');

  while (continuar) {
    const habilidad = prompt('Ingrese una habilidad (ej. JavaScript, React):');
    console.log('Entrada del usuario:', { habilidad });

    if (habilidad === null) {
      console.log('Usuario canceló el prompt');
      alert('Ingreso de habilidades cancelado. Use las habilidades ingresadas hasta ahora.');
      continuar = false;
    } else if (habilidad.trim() === '') {
      console.log('Usuario ingresó cadena vacía, terminando ingreso');
      continuar = false;
    } else if (habilidades.some(h => h.toLowerCase() === habilidad.trim().toLowerCase())) {
      console.log('Habilidad duplicada detectada:', habilidad.trim());
      alert(`La habilidad "${habilidad.trim()}" ya fue ingresada. Por favor, ingrese una habilidad única.`);
    } else if (habilidad.trim().length < 2) {
      console.log('Habilidad inválida (demasiado corta):', habilidad.trim());
      alert('La habilidad debe tener al menos 2 caracteres.');
    } else {
      habilidades.push(habilidad.trim());
      console.log('Habilidad añadida:', habilidad.trim(), 'Habilidades actuales:', [...habilidades]);
    }
  }

  console.log('Habilidades recolectadas:', habilidades);
  return habilidades;
}

// Datos de candidatos (predefinidos para el ejemplo)
const candidatos = [
  { id: 'juan', skills: ['JavaScript', 'React', 'Node', 'Git'] },
  { id: 'ana', skills: ['JavaScript', 'CSS', 'React', 'Node', 'Git'] },
  { id: 'leo', skills: ['HTML', 'CSS'] },
  { id: 'lu', skills: ['JavaScript', 'Node'] },
];

// Ejecutar la verificación de compatibilidad
console.log('Iniciando recolección de habilidades para la oferta...');
const oferta = recolectarHabilidades();

if (oferta.length === 0) {
  alert('No se ingresaron habilidades para la oferta.');
  console.log('No se ingresaron habilidades para la oferta.', { oferta, candidatos });
} else {
  const compatibles = candidatosCompatibles(oferta, candidatos);
  const mensaje = compatibles.length > 0
    ? `Candidatos compatibles (mínimo ${Math.floor(oferta.length * 0.7)} habilidades): ${compatibles.join(', ')}`
    : 'No se encontraron candidatos compatibles.';
  alert(mensaje);
  console.log(mensaje, { oferta, candidatos, compatibles });
}