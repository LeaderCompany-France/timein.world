// Spanish translations
const translationsES = {
    // Header
    worldClock: "Reloj Mundial",
    currentTime: "Hora Actual",
    
    // Navigation
    home: "Inicio",
    allCities: "Todas las Ciudades",
    timeConverter: "Conversor de Hora",
    meetingPlanner: "Planificador de Reuniones",
    timeCalculator: "Calculadora de Tiempo",
    api: "API",
    
    // Main content
    yourLocalTime: "Tu Hora Local",
    searchPlaceholder: "Buscar una ciudad...",
    popularCities: "Ciudades Populares",
    popular: "Ciudades Populares",
    tools: "Herramientas",
    
    // City page
    currentTimeIn: "Hora actual en",
    timezone: "Zona horaria",
    coordinates: "Coordenadas",
    population: "Población",
    country: "País",
    timeDifference: "Diferencia horaria",
    hoursAhead: "horas adelante",
    hoursBehind: "horas atrás",
    sameTime: "Misma hora",
    nearbyCities: "Ciudades Cercanas",
    about: "Acerca de",
    
    // Tools
    convertTime: "Convertir Hora",
    planMeeting: "Planificar Reunión",
    calculateTime: "Calcular Tiempo",
    apiDocumentation: "Documentación API",
    
    // Footer
    aboutUs: "Acerca de Nosotros",
    contact: "Contacto",
    privacy: "Privacidad",
    terms: "Términos",
    rightsReserved: "Todos los derechos reservados",
    
    // Common
    date: "Fecha",
    time: "Hora",
    from: "Desde",
    to: "Hasta",
    convert: "Convertir",
    reset: "Reiniciar",
    share: "Compartir",
    copyLink: "Copiar Enlace",
    copied: "¡Copiado!",
    noResults: "No se encontraron ciudades",
    
    // City descriptions
    cityDescription1: "{city} está ubicada en {country} y opera en la zona horaria {timezone}. Con una población de {population}, es una de las ciudades notables de la región.",
    cityDescription2: "La hora actual en {city} sigue la zona horaria {timezone}. Esta ciudad de {country} tiene aproximadamente {population} residentes.",
    cityDescription3: "Ubicada en las coordenadas {lat}°, {lng}°, {city} es un centro urbano importante en {country} con {population} habitantes.",
    
    // SEO
    metaDescription: "Consulta la hora actual en {city}. Reloj mundial con información de zona horaria, conversor y planificador de reuniones.",
    pageTitle: "Hora Actual en {city} - Reloj Mundial"
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translationsES;
} else {
    window.translationsES = translationsES;
}