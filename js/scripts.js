function copyCode(elementId) {
    // Obtiene el elemento del DOM usando el id proporcionado
    const element = document.getElementById(elementId);
    // Obtiene el contenido de texto del elemento (sin formato HTML)
    const textContent = element.textContent;

    // Usa la API del portapapeles para copiar el texto al portapapeles del usuario
    navigator.clipboard.writeText(textContent).then(() => {
        // Busca el botón de copiar dentro del mismo contenedor que el elemento
        const button = element.parentElement.querySelector('.copy-btn');
        // Guarda el texto original del botón para restaurarlo después
        const originalText = button.innerHTML;
        // Cambia el texto del botón para indicar que se copió correctamente
        button.innerHTML = '✅ ¡Copiado!';
        // Cambia el color de fondo del botón a verde
        button.classList.add('bg-green-600');
        // Quita el color de fondo azul original
        button.classList.remove('bg-blue-600');

        // Después de 2 segundos, restaura el texto y el color original del botón
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('bg-green-600');
            button.classList.add('bg-blue-600');
        }, 2000);
    });
}