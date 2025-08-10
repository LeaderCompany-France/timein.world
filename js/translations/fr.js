// French translations
const translationsFR = {
    // Header
    worldClock: "Horloge Mondiale",
    currentTime: "Heure Actuelle",
    
    // Navigation
    home: "Accueil",
    allCities: "Toutes les Villes",
    timeConverter: "Convertisseur d'Heure",
    meetingPlanner: "Planificateur de Réunion",
    timeCalculator: "Calculatrice d'Heure",
    api: "API",
    
    // Main content
    yourLocalTime: "Votre Heure Locale",
    searchPlaceholder: "Rechercher une ville...",
    popularCities: "Villes Populaires",
    popular: "Villes Populaires",
    tools: "Outils",
    
    // City page
    currentTimeIn: "Heure actuelle à",
    timezone: "Fuseau horaire",
    coordinates: "Coordonnées",
    population: "Population",
    country: "Pays",
    timeDifference: "Décalage horaire",
    hoursAhead: "heures d'avance",
    hoursBehind: "heures de retard",
    sameTime: "Même heure",
    nearbyCities: "Villes Proches",
    about: "À propos de",
    
    // Tools
    convertTime: "Convertir l'Heure",
    planMeeting: "Planifier une Réunion",
    calculateTime: "Calculer l'Heure",
    apiDocumentation: "Documentation API",
    
    // Footer
    aboutUs: "À Propos",
    contact: "Contact",
    privacy: "Confidentialité",
    terms: "Conditions",
    rightsReserved: "Tous droits réservés",
    
    // Common
    date: "Date",
    time: "Heure",
    from: "De",
    to: "À",
    convert: "Convertir",
    reset: "Réinitialiser",
    share: "Partager",
    copyLink: "Copier le Lien",
    copied: "Copié!",
    noResults: "Aucune ville trouvée",
    
    // City descriptions
    cityDescription1: "{city} est située en {country} et fonctionne sur le fuseau horaire {timezone}. Avec une population de {population}, c'est l'une des villes notables de la région.",
    cityDescription2: "L'heure actuelle à {city} suit le fuseau horaire {timezone}. Cette ville de {country} compte environ {population} habitants.",
    cityDescription3: "Située aux coordonnées {lat}°, {lng}°, {city} est un centre urbain important en {country} avec {population} habitants.",
    
    // SEO
    metaDescription: "Consultez l'heure actuelle à {city}. Horloge mondiale avec informations de fuseau horaire, convertisseur et planificateur.",
    pageTitle: "Heure Actuelle à {city} - Horloge Mondiale"
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translationsFR;
} else {
    window.translationsFR = translationsFR;
}