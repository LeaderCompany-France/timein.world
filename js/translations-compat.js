// Translations compatibility file
// This file ensures all translations are properly loaded

// Initialize translations object
window.translations = window.translations || {};

// Check if translation files have been loaded and assign them
if (typeof translationsEN !== 'undefined') window.translations.en = translationsEN;
if (typeof translationsFR !== 'undefined') window.translations.fr = translationsFR;
if (typeof translationsES !== 'undefined') window.translations.es = translationsES;
if (typeof translationsDE !== 'undefined') window.translations.de = translationsDE;
if (typeof translationsPT !== 'undefined') window.translations.pt = translationsPT;
if (typeof translationsIT !== 'undefined') window.translations.it = translationsIT;
if (typeof translationsRU !== 'undefined') window.translations.ru = translationsRU;
if (typeof translationsZH !== 'undefined') window.translations.zh = translationsZH;
if (typeof translationsJA !== 'undefined') window.translations.ja = translationsJA;
if (typeof translationsKO !== 'undefined') window.translations.ko = translationsKO;
if (typeof translationsAR !== 'undefined') window.translations.ar = translationsAR;
if (typeof translationsHI !== 'undefined') window.translations.hi = translationsHI;

// Count loaded languages
const loadedLanguages = Object.keys(window.translations).length;
console.log(`Loaded ${loadedLanguages} language translations`);

// List missing translations
const expectedLanguages = ['en', 'fr', 'es', 'de', 'pt', 'it', 'ru', 'zh', 'ja', 'ko', 'ar', 'hi'];
const missingLanguages = expectedLanguages.filter(lang => !window.translations[lang]);

if (missingLanguages.length > 0) {
    console.warn('Missing translations for:', missingLanguages.join(', '));
    
    // Use English as fallback for missing languages
    missingLanguages.forEach(lang => {
        if (window.translations.en) {
            window.translations[lang] = { ...window.translations.en };
            console.log(`Using English fallback for ${lang}`);
        }
    });
}

// If no translations at all, provide emergency fallback
if (Object.keys(window.translations).length === 0) {
    console.error('CRITICAL: No translations loaded! Using emergency fallback.');
    window.translations = {
        en: {
            worldClock: "World Clock",
            currentTime: "Current Time",
            home: "Home",
            allCities: "All Cities",
            timeConverter: "Time Converter",
            meetingPlanner: "Meeting Planner",
            timeCalculator: "Time Calculator",
            api: "API",
            yourLocalTime: "Your Local Time",
            searchPlaceholder: "Search for a city...",
            popularCities: "Popular Cities",
            popular: "Popular Cities",
            tools: "Tools",
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
            convertTime: "Convert Time",
            planMeeting: "Plan Meeting",
            calculateTime: "Calculate Time",
            apiDocumentation: "API Documentation",
            aboutUs: "About Us",
            contact: "Contact",
            privacy: "Privacy",
            terms: "Terms",
            rightsReserved: "All rights reserved",
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
            cityDescription1: "{city} is located in {country} and operates on {timezone} timezone. With a population of {population}, it's one of the notable cities in the region.",
            cityDescription2: "The current time in {city} follows the {timezone} timezone. This {country} city has approximately {population} residents.",
            cityDescription3: "Located at coordinates {lat}°, {lng}°, {city} is a significant urban center in {country} with {population} inhabitants.",
            metaDescription: "Check current time in {city}. World clock with timezone information, time converter, and meeting planner.",
            pageTitle: "Current Time in {city} - World Clock"
        }
    };
    
    // Copy English to other languages as emergency fallback
    expectedLanguages.forEach(lang => {
        if (lang !== 'en') {
            window.translations[lang] = { ...window.translations.en };
        }
    });
}

console.log('Translations compatibility loaded. Available languages:', Object.keys(window.translations).join(', '));