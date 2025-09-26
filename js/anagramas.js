function esAnagrama(palabra1, palabra2) {
    // Convertir a minúsculas y eliminar espacios
    palabra1 = palabra1.toLowerCase().replace(/\s/g, '');
    palabra2 = palabra2.toLowerCase().replace(/\s/g, '');

    // Verificar si las longitudes son diferentes
    if (palabra1.length !== palabra2.length) {
        return false;
    }

    // Convertir palabras a arrays, ordenar y comparar
    const sortedPalabra1 = palabra1.split('').sort().join('');
    const sortedPalabra2 = palabra2.split('').sort().join('');

    return sortedPalabra1 === sortedPalabra2;
}

// Solicitar palabras al usuario
const palabra1 = prompt('Ingresa la primera palabra:');
const palabra2 = prompt('Ingresa la segunda palabra:');

if (palabra1 && palabra2) {
    const sonAnagramas = esAnagrama(palabra1, palabra2);
    alert(sonAnagramas 
        ? `"${palabra1}" y "${palabra2}" son anagramas.` 
        : `"${palabra1}" y "${palabra2}" no son anagramas.`);
} else {
    alert('Por favor, ingresa ambas palabras.');
}