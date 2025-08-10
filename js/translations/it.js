// Italian translations
const translationsIT = {
    // Header
    worldClock: "Orologio Mondiale",
    currentTime: "Ora Attuale",
    
    // Navigation
    home: "Home",
    allCities: "Tutte le Città",
    timeConverter: "Convertitore di Orario",
    meetingPlanner: "Pianificatore Riunioni",
    timeCalculator: "Calcolatore del Tempo",
    api: "API",
    
    // Main content
    yourLocalTime: "Il Tuo Orario Locale",
    searchPlaceholder: "Cerca una città...",
    popularCities: "Città Popolari",
    popular: "Città Popolari",
    tools: "Strumenti",
    
    // City page
    currentTimeIn: "Ora attuale a",
    timezone: "Fuso orario",
    coordinates: "Coordinate",
    population: "Popolazione",
    country: "Paese",
    timeDifference: "Differenza oraria",
    hoursAhead: "ore avanti",
    hoursBehind: "ore indietro",
    sameTime: "Stesso orario",
    nearbyCities: "Città Vicine",
    about: "Informazioni su",
    
    // Tools
    convertTime: "Converti Orario",
    planMeeting: "Pianifica Riunione",
    calculateTime: "Calcola Tempo",
    apiDocumentation: "Documentazione API",
    
    // Footer
    aboutUs: "Chi Siamo",
    contact: "Contatti",
    privacy: "Privacy",
    terms: "Termini",
    rightsReserved: "Tutti i diritti riservati",
    
    // Common
    date: "Data",
    time: "Ora",
    from: "Da",
    to: "A",
    convert: "Converti",
    reset: "Reimposta",
    share: "Condividi",
    copyLink: "Copia Link",
    copied: "Copiato!",
    noResults: "Nessuna città trovata",
    
    // City descriptions
    cityDescription1: "{city} si trova in {country} e opera nel fuso orario {timezone}. Con una popolazione di {population}, è una delle città notevoli della regione.",
    cityDescription2: "L'ora attuale a {city} segue il fuso orario {timezone}. Questa città di {country} ha circa {population} residenti.",
    cityDescription3: "Situata alle coordinate {lat}°, {lng}°, {city} è un importante centro urbano in {country} con {population} abitanti.",
    
    // SEO
    metaDescription: "Controlla l'ora attuale a {city}. Orologio mondiale con informazioni sul fuso orario, convertitore e pianificatore riunioni.",
    pageTitle: "Ora Attuale a {city} - Orologio Mondiale"
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translationsIT;
} else {
    window.translationsIT = translationsIT;
}