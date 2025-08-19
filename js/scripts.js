function copyCode(elementId) {
    const element = document.getElementById(elementId);
    const textContent = element.textContent;

    navigator.clipboard.writeText(textContent).then(() => {
        // Cambiar texto del botón temporalmente
        const button = element.parentElement.querySelector('.copy-btn');
        const originalText = button.innerHTML;
        button.innerHTML = '✅ ¡Copiado!';
        button.classList.add('bg-green-600');
        button.classList.remove('bg-blue-600');

        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('bg-green-600');
            button.classList.add('bg-blue-600');
        }, 2000);
    });
}