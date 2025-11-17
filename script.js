// script.js - Funcionalidad básica para el template de notas de entrega

// Función para formatear la fecha actual
function formatearFecha(fecha) {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opciones);
}

// Función para generar un número de documento
function generarNumeroDocumento() {
    const prefijo = 'NE';
    const numero = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${prefijo}${numero}`;
}

// Inicialización cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Establecer fecha actual
    document.getElementById('fecha').textContent = formatearFecha(new Date());
    
    // Generar número de documento
    document.getElementById('numero-documento').textContent = generarNumeroDocumento();
    
    // Aquí puedes agregar lógica para cargar datos dinámicamente
    // desde una base de datos o API
});