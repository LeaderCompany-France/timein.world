// German translations
const translationsDE = {
    // Header
    worldClock: "Weltuhr",
    currentTime: "Aktuelle Zeit",
    
    // Navigation
    home: "Startseite",
    allCities: "Alle Städte",
    timeConverter: "Zeitumrechner",
    meetingPlanner: "Besprechungsplaner",
    timeCalculator: "Zeitrechner",
    api: "API",
    
    // Main content
    yourLocalTime: "Ihre Ortszeit",
    searchPlaceholder: "Stadt suchen...",
    popularCities: "Beliebte Städte",
    popular: "Beliebte Städte",
    tools: "Werkzeuge",
    
    // City page
    currentTimeIn: "Aktuelle Zeit in",
    timezone: "Zeitzone",
    coordinates: "Koordinaten",
    population: "Einwohner",
    country: "Land",
    timeDifference: "Zeitunterschied",
    hoursAhead: "Stunden voraus",
    hoursBehind: "Stunden zurück",
    sameTime: "Gleiche Zeit",
    nearbyCities: "Städte in der Nähe",
    about: "Über",
    
    // Tools
    convertTime: "Zeit umrechnen",
    planMeeting: "Besprechung planen",
    calculateTime: "Zeit berechnen",
    apiDocumentation: "API-Dokumentation",
    
    // Footer
    aboutUs: "Über uns",
    contact: "Kontakt",
    privacy: "Datenschutz",
    terms: "Bedingungen",
    rightsReserved: "Alle Rechte vorbehalten",
    
    // Common
    date: "Datum",
    time: "Zeit",
    from: "Von",
    to: "Nach",
    convert: "Umrechnen",
    reset: "Zurücksetzen",
    share: "Teilen",
    copyLink: "Link kopieren",
    copied: "Kopiert!",
    noResults: "Keine Städte gefunden",
    
    // City descriptions
    cityDescription1: "{city} befindet sich in {country} und liegt in der Zeitzone {timezone}. Mit einer Bevölkerung von {population} ist es eine der bemerkenswerten Städte der Region.",
    cityDescription2: "Die aktuelle Zeit in {city} folgt der Zeitzone {timezone}. Diese Stadt in {country} hat ungefähr {population} Einwohner.",
    cityDescription3: "An den Koordinaten {lat}°, {lng}° gelegen, ist {city} ein bedeutendes urbanes Zentrum in {country} mit {population} Einwohnern.",
    
    // SEO
    metaDescription: "Aktuelle Zeit in {city} anzeigen. Weltuhr mit Zeitzoneninformationen, Zeitumrechner und Besprechungsplaner.",
    pageTitle: "Aktuelle Zeit in {city} - Weltuhr"
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translationsDE;
} else {
    window.translationsDE = translationsDE;
}