// English translations
const translationsEN = {
    // Header
    worldClock: "World Clock",
    currentTime: "Current Time",
    
    // Navigation
    home: "Home",
    allCities: "All Cities",
    timeConverter: "Time Converter",
    meetingPlanner: "Meeting Planner",
    timeCalculator: "Time Calculator",
    api: "API",
    
    // Main content
    yourLocalTime: "Your Local Time",
    searchPlaceholder: "Search for a city...",
    popularCities: "Popular Cities",
    popular: "Popular Cities",
    tools: "Tools",
    
    // City page
    currentTimeIn: "Current time in",
    timezone: "Timezone",
    coordinates: "Coordinates",
    population: "Population",
    country: "Country",
    timeDifference: "Time difference",
    hoursAhead: "hours ahead",
    hoursBehind: "hours behind",
    sameTime: "Same time",
    nearbyCities: "Nearby Cities",
    about: "About",
    
    // Tools
    convertTime: "Convert Time",
    planMeeting: "Plan Meeting",
    calculateTime: "Calculate Time",
    apiDocumentation: "API Documentation",
    
    // Footer
    aboutUs: "About Us",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    rightsReserved: "All rights reserved",
    
    // Common
    date: "Date",
    time: "Time",
    from: "From",
    to: "To",
    convert: "Convert",
    reset: "Reset",
    share: "Share",
    copyLink: "Copy Link",
    copied: "Copied!",
    noResults: "No cities found",
    
    // City descriptions
    cityDescription1: "{city} is located in {country} and operates on {timezone} timezone. With a population of {population}, it's one of the notable cities in the region.",
    cityDescription2: "The current time in {city} follows the {timezone} timezone. This {country} city has approximately {population} residents.",
    cityDescription3: "Located at coordinates {lat}°, {lng}°, {city} is a significant urban center in {country} with {population} inhabitants.",
    
    // SEO
    metaDescription: "Check current time in {city}. World clock with timezone information, time converter, and meeting planner.",
    pageTitle: "Current Time in {city} - World Clock"
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translationsEN;
} else {
    window.translationsEN = translationsEN;
}