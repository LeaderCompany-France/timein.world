// Portuguese translations
const translationsPT = {
    // Header
    worldClock: "Relógio Mundial",
    currentTime: "Hora Atual",
    
    // Navigation
    home: "Início",
    allCities: "Todas as Cidades",
    timeConverter: "Conversor de Horário",
    meetingPlanner: "Planejador de Reuniões",
    timeCalculator: "Calculadora de Tempo",
    api: "API",
    
    // Main content
    yourLocalTime: "Seu Horário Local",
    searchPlaceholder: "Procurar uma cidade...",
    popularCities: "Cidades Populares",
    popular: "Cidades Populares",
    tools: "Ferramentas",
    
    // City page
    currentTimeIn: "Hora atual em",
    timezone: "Fuso horário",
    coordinates: "Coordenadas",
    population: "População",
    country: "País",
    timeDifference: "Diferença horária",
    hoursAhead: "horas à frente",
    hoursBehind: "horas atrás",
    sameTime: "Mesmo horário",
    nearbyCities: "Cidades Próximas",
    about: "Sobre",
    
    // Tools
    convertTime: "Converter Horário",
    planMeeting: "Planejar Reunião",
    calculateTime: "Calcular Tempo",
    apiDocumentation: "Documentação da API",
    
    // Footer
    aboutUs: "Sobre Nós",
    contact: "Contato",
    privacy: "Privacidade",
    terms: "Termos",
    rightsReserved: "Todos os direitos reservados",
    
    // Common
    date: "Data",
    time: "Hora",
    from: "De",
    to: "Para",
    convert: "Converter",
    reset: "Redefinir",
    share: "Compartilhar",
    copyLink: "Copiar Link",
    copied: "Copiado!",
    noResults: "Nenhuma cidade encontrada",
    
    // City descriptions
    cityDescription1: "{city} está localizada em {country} e opera no fuso horário {timezone}. Com uma população de {population}, é uma das cidades notáveis da região.",
    cityDescription2: "A hora atual em {city} segue o fuso horário {timezone}. Esta cidade de {country} tem aproximadamente {population} residentes.",
    cityDescription3: "Localizada nas coordenadas {lat}°, {lng}°, {city} é um centro urbano significativo em {country} com {population} habitantes.",
    
    // SEO
    metaDescription: "Verifique a hora atual em {city}. Relógio mundial com informações de fuso horário, conversor e planejador de reuniões.",
    pageTitle: "Hora Atual em {city} - Relógio Mundial"
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translationsPT;
} else {
    window.translationsPT = translationsPT;
}