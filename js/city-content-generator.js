/**
 * City Content Generator for TimeIn.World
 * Version 1.0 - Production Ready
 * Génère dynamiquement le contenu enrichi pour chaque page de ville
 */

// Données enrichies pour les villes principales (à compléter progressivement)
const CITY_DATA_EXTRA = {
    'new-york': {
        country: 'United States',
        countryCode: 'US',
        timezone: 'EST/EDT',
        utcOffset: { standard: -5, dst: -4 },
        currency: 'USD',
        callingCode: '+1',
        businessDays: 'Monday-Friday',
        businessHours: '9:00 AM - 5:00 PM',
        stockExchange: { name: 'NYSE', hours: '9:30 AM - 4:00 PM ET' },
        majorAirport: 'JFK, LGA, EWR',
        population: '8.3 million',
        language: 'English',
        publicHolidays: [
            { date: '2025-01-01', name: "New Year's Day" },
            { date: '2025-01-20', name: 'Martin Luther King Jr. Day' },
            { date: '2025-02-17', name: "Presidents' Day" },
            { date: '2025-05-26', name: 'Memorial Day' },
            { date: '2025-07-04', name: 'Independence Day' },
            { date: '2025-09-01', name: 'Labor Day' },
            { date: '2025-11-27', name: 'Thanksgiving' },
            { date: '2025-12-25', name: 'Christmas' }
        ]
    },
    'london': {
        country: 'United Kingdom',
        countryCode: 'GB',
        timezone: 'GMT/BST',
        utcOffset: { standard: 0, dst: 1 },
        currency: 'GBP',
        callingCode: '+44',
        businessDays: 'Monday-Friday',
        businessHours: '9:00 AM - 5:30 PM',
        stockExchange: { name: 'LSE', hours: '8:00 AM - 4:30 PM GMT' },
        majorAirport: 'LHR, LGW, STN',
        population: '9 million',
        language: 'English',
        publicHolidays: [
            { date: '2025-01-01', name: "New Year's Day" },
            { date: '2025-04-18', name: 'Good Friday' },
            { date: '2025-04-21', name: 'Easter Monday' },
            { date: '2025-05-05', name: 'Early May Bank Holiday' },
            { date: '2025-05-26', name: 'Spring Bank Holiday' },
            { date: '2025-08-25', name: 'Summer Bank Holiday' },
            { date: '2025-12-25', name: 'Christmas Day' },
            { date: '2025-12-26', name: 'Boxing Day' }
        ]
    },
    'paris': {
        country: 'France',
        countryCode: 'FR',
        timezone: 'CET/CEST',
        utcOffset: { standard: 1, dst: 2 },
        currency: 'EUR',
        callingCode: '+33',
        businessDays: 'Monday-Friday',
        businessHours: '9:00 AM - 6:00 PM',
        stockExchange: { name: 'Euronext Paris', hours: '9:00 AM - 5:30 PM CET' },
        majorAirport: 'CDG, ORY',
        population: '2.2 million',
        language: 'French',
        publicHolidays: [
            { date: '2025-01-01', name: "Jour de l'An" },
            { date: '2025-04-21', name: 'Lundi de Pâques' },
            { date: '2025-05-01', name: 'Fête du Travail' },
            { date: '2025-05-08', name: 'Victoire 1945' },
            { date: '2025-05-29', name: 'Ascension' },
            { date: '2025-06-09', name: 'Lundi de Pentecôte' },
            { date: '2025-07-14', name: 'Fête Nationale' },
            { date: '2025-08-15', name: 'Assomption' },
            { date: '2025-11-01', name: 'Toussaint' },
            { date: '2025-11-11', name: 'Armistice 1918' },
            { date: '2025-12-25', name: 'Noël' }
        ]
    },
    'tokyo': {
        country: 'Japan',
        countryCode: 'JP',
        timezone: 'JST',
        utcOffset: { standard: 9, dst: 9 },
        currency: 'JPY',
        callingCode: '+81',
        businessDays: 'Monday-Friday',
        businessHours: '9:00 AM - 6:00 PM',
        stockExchange: { name: 'TSE', hours: '9:00 AM - 3:00 PM JST' },
        majorAirport: 'NRT, HND',
        population: '14 million',
        language: 'Japanese',
        publicHolidays: [
            { date: '2025-01-01', name: "New Year's Day" },
            { date: '2025-01-13', name: 'Coming of Age Day' },
            { date: '2025-02-11', name: 'Foundation Day' },
            { date: '2025-02-23', name: "Emperor's Birthday" },
            { date: '2025-03-20', name: 'Vernal Equinox' },
            { date: '2025-04-29', name: 'Showa Day' },
            { date: '2025-05-03', name: 'Constitution Day' },
            { date: '2025-05-04', name: 'Greenery Day' },
            { date: '2025-05-05', name: "Children's Day" }
        ]
    },
    'dubai': {
        country: 'United Arab Emirates',
        countryCode: 'AE',
        timezone: 'GST',
        utcOffset: { standard: 4, dst: 4 },
        currency: 'AED',
        callingCode: '+971',
        businessDays: 'Sunday-Thursday',
        businessHours: '9:00 AM - 6:00 PM',
        stockExchange: { name: 'DFM', hours: '10:00 AM - 2:00 PM GST' },
        majorAirport: 'DXB, DWC',
        population: '3.5 million',
        language: 'Arabic, English',
        publicHolidays: [
            { date: '2025-01-01', name: "New Year's Day" },
            { date: '2025-04-01', name: 'Eid al-Fitr (estimated)' },
            { date: '2025-06-07', name: 'Eid al-Adha (estimated)' },
            { date: '2025-12-02', name: 'UAE National Day' }
        ]
    },
    'singapore': {
        country: 'Singapore',
        countryCode: 'SG',
        timezone: 'SGT',
        utcOffset: { standard: 8, dst: 8 },
        currency: 'SGD',
        callingCode: '+65',
        businessDays: 'Monday-Friday',
        businessHours: '9:00 AM - 6:00 PM',
        stockExchange: { name: 'SGX', hours: '9:00 AM - 5:00 PM SGT' },
        majorAirport: 'SIN',
        population: '5.7 million',
        language: 'English, Mandarin, Malay, Tamil',
        publicHolidays: [
            { date: '2025-01-01', name: "New Year's Day" },
            { date: '2025-01-29', name: 'Chinese New Year' },
            { date: '2025-04-18', name: 'Good Friday' },
            { date: '2025-05-01', name: 'Labour Day' },
            { date: '2025-08-09', name: 'National Day' },
            { date: '2025-12-25', name: 'Christmas Day' }
        ]
    }
};

/**
 * Génère le contenu HTML enrichi pour une ville
 */
function generateCityContent(cityCode, cityData, translations) {
    const lang = getCurrentLanguage();
    const t = translations[lang] || translations['en'] || {};
    const extraData = CITY_DATA_EXTRA[cityCode] || getDefaultCityData(cityCode, cityData);
    
    // Obtenir l'heure actuelle de la ville
    const cityTime = getCityCurrentTime(cityData);
    
    // Déterminer le statut actuel
    const status = determineCityStatus(cityTime, extraData);
    
    // Générer le HTML enrichi avec SEO optimisé
    return `
        <div class="city-page-enhanced">
            <!-- Section principale avec l'heure -->
            <section class="hero-time">
                <h1>${cityData.name} ${t.currentTime || 'Current Time'}</h1>
                <div class="current-time-display">
                    <div class="time-large" id="city-time">${formatTime(cityTime)}</div>
                    <div class="date">${formatDate(cityTime, lang)}</div>
                    <div class="timezone">${extraData.timezone} • UTC${extraData.utcOffset.standard >= 0 ? '+' : ''}${extraData.utcOffset.standard}</div>
                </div>
            </section>

            <!-- Cartes de statut -->
            <section class="status-cards">
                <div class="status-grid">
                    <div class="status-card ${status.businessOpen ? 'open' : 'closed'}">
                        <span class="icon">🏢</span>
                        <strong>${t.businessHours || 'Business Hours'}</strong>
                        <span>${status.businessOpen ? t.open || 'Open' : t.closed || 'Closed'}</span>
                        <small>${extraData.businessHours}</small>
                    </div>
                    
                    <div class="status-card ${status.stockMarketOpen ? 'open' : 'closed'}">
                        <span class="icon">📈</span>
                        <strong>${t.stockMarket || 'Stock Market'}</strong>
                        <span>${extraData.stockExchange.name}</span>
                        <small>${status.stockMarketOpen ? t.open || 'Open' : t.closed || 'Closed'}</small>
                    </div>
                    
                    <div class="status-card">
                        <span class="icon">${status.isDaytime ? '☀️' : '🌙'}</span>
                        <strong>${t.daylight || 'Daylight'}</strong>
                        <span>${status.isDaytime ? t.day || 'Day' : t.night || 'Night'}</span>
                        <small>${status.sunInfo}</small>
                    </div>
                    
                    <div class="status-card ${status.goodTimeToCall ? 'good' : 'bad'}">
                        <span class="icon">📞</span>
                        <strong>${t.callStatus || 'Call Status'}</strong>
                        <span>${status.goodTimeToCall ? t.goodTime || 'Good time' : t.notIdeal || 'Not ideal'}</span>
                        <small>${extraData.callingCode}</small>
                    </div>
                </div>
            </section>

            <!-- Informations rapides -->
            <section class="quick-info">
                <h2>${t.quickInfo || 'Quick Information'}</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <strong>${t.country || 'Country'}:</strong>
                        <span>${extraData.country}</span>
                    </div>
                    <div class="info-item">
                        <strong>${t.currency || 'Currency'}:</strong>
                        <span>${extraData.currency}</span>
                    </div>
                    <div class="info-item">
                        <strong>${t.population || 'Population'}:</strong>
                        <span>${extraData.population}</span>
                    </div>
                    <div class="info-item">
                        <strong>${t.language || 'Language'}:</strong>
                        <span>${extraData.language}</span>
                    </div>
                    <div class="info-item">
                        <strong>${t.businessDays || 'Business Days'}:</strong>
                        <span>${extraData.businessDays}</span>
                    </div>
                    <div class="info-item">
                        <strong>${t.airport || 'Airport'}:</strong>
                        <span>${extraData.majorAirport}</span>
                    </div>
                </div>
            </section>

            <!-- Différences horaires avec villes principales -->
            <section class="time-differences">
                <h2>${t.timeDifferences || 'Time Differences with Major Cities'}</h2>
                <div class="diff-table">
                    ${generateTimeDifferences(cityCode, cityData, extraData)}
                </div>
            </section>

            <!-- Prochains jours fériés -->
            <section class="holidays">
                <h2>${t.upcomingHolidays || 'Upcoming Public Holidays'}</h2>
                <div class="holiday-list">
                    ${generateUpcomingHolidays(extraData.publicHolidays, lang, t)}
                </div>
            </section>

            <!-- FAQ optimisée pour SEO et IA -->
            <section class="faq">
                <h2>${t.faq || 'Frequently Asked Questions'}</h2>
                ${generateCityFAQ(cityData, extraData, t)}
            </section>

            <!-- Outils connexes -->
            <section class="related-tools">
                <h2>${t.tools || 'Useful Tools'}</h2>
                <div class="tools-grid">
                    <a href="/${lang}/time-converter?from=${cityCode}" class="tool-card">
                        <span class="icon">🔄</span>
                        <span>${t.convertTime || 'Time Converter'}</span>
                    </a>
                    <a href="/${lang}/meeting-planner?city=${cityCode}" class="tool-card">
                        <span class="icon">📅</span>
                        <span>${t.planMeeting || 'Meeting Planner'}</span>
                    </a>
                    <a href="/${lang}/world-clock?add=${cityCode}" class="tool-card">
                        <span class="icon">🌍</span>
                        <span>${t.worldClock || 'World Clock'}</span>
                    </a>
                    <a href="/${lang}/timezone-map?highlight=${cityCode}" class="tool-card">
                        <span class="icon">🗺️</span>
                        <span>${t.timezoneMap || 'Timezone Map'}</span>
                    </a>
                </div>
            </section>
        </div>
    `;
}

/**
 * Détermine le statut actuel de la ville
 */
function determineCityStatus(cityTime, extraData) {
    const hour = cityTime.getHours();
    const minute = cityTime.getMinutes();
    const dayOfWeek = cityTime.getDay();
    
    // Déterminer si c'est un jour ouvrable
    let isBusinessDay = false;
    if (extraData.businessDays.includes('Sunday') && dayOfWeek === 0) isBusinessDay = true;
    if (extraData.businessDays.includes('Monday') && dayOfWeek === 1) isBusinessDay = true;
    if (extraData.businessDays.includes('Tuesday') && dayOfWeek === 2) isBusinessDay = true;
    if (extraData.businessDays.includes('Wednesday') && dayOfWeek === 3) isBusinessDay = true;
    if (extraData.businessDays.includes('Thursday') && dayOfWeek === 4) isBusinessDay = true;
    if (extraData.businessDays.includes('Friday') && dayOfWeek === 5) isBusinessDay = true;
    if (extraData.businessDays.includes('Saturday') && dayOfWeek === 6) isBusinessDay = true;
    
    // Parser les heures d'ouverture
    const businessHours = parseBusinessHours(extraData.businessHours);
    const stockHours = parseBusinessHours(extraData.stockExchange.hours);
    
    const currentMinutes = hour * 60 + minute;
    
    return {
        businessOpen: isBusinessDay && currentMinutes >= businessHours.start && currentMinutes < businessHours.end,
        stockMarketOpen: isBusinessDay && currentMinutes >= stockHours.start && currentMinutes < stockHours.end,
        isDaytime: hour >= 6 && hour < 18,
        sunInfo: hour < 6 ? 'Before sunrise' : hour < 12 ? 'Morning' : hour < 18 ? 'Afternoon' : 'Evening',
        goodTimeToCall: hour >= 9 && hour < 21
    };
}

/**
 * Parse les heures d'ouverture
 */
function parseBusinessHours(hoursString) {
    // Format: "9:00 AM - 5:00 PM"
    const match = hoursString.match(/(\d+):(\d+)\s*(AM|PM).*?(\d+):(\d+)\s*(AM|PM)/i);
    if (!match) return { start: 540, end: 1020 }; // Default 9-17
    
    let startHour = parseInt(match[1]);
    const startMin = parseInt(match[2]);
    if (match[3].toUpperCase() === 'PM' && startHour !== 12) startHour += 12;
    if (match[3].toUpperCase() === 'AM' && startHour === 12) startHour = 0;
    
    let endHour = parseInt(match[4]);
    const endMin = parseInt(match[5]);
    if (match[6].toUpperCase() === 'PM' && endHour !== 12) endHour += 12;
    if (match[6].toUpperCase() === 'AM' && endHour === 12) endHour = 0;
    
    return {
        start: startHour * 60 + startMin,
        end: endHour * 60 + endMin
    };
}

/**
 * Génère les différences horaires
 */
function generateTimeDifferences(currentCity, cityData, extraData) {
    const majorCities = [
        { code: 'new-york', name: 'New York', offset: -5 },
        { code: 'london', name: 'London', offset: 0 },
        { code: 'paris', name: 'Paris', offset: 1 },
        { code: 'tokyo', name: 'Tokyo', offset: 9 },
        { code: 'dubai', name: 'Dubai', offset: 4 },
        { code: 'singapore', name: 'Singapore', offset: 8 }
    ];
    
    const currentOffset = extraData.utcOffset.standard;
    const differences = [];
    
    majorCities.forEach(city => {
        if (city.code !== currentCity) {
            const diff = city.offset - currentOffset;
            const otherTime = new Date();
            otherTime.setHours(otherTime.getUTCHours() + city.offset);
            
            differences.push(`
                <div class="diff-row">
                    <span class="city-name">${city.name}</span>
                    <span class="diff-hours">${diff > 0 ? '+' : ''}${diff}h</span>
                    <span class="other-time">${formatTime(otherTime)}</span>
                </div>
            `);
        }
    });
    
    return differences.join('');
}

/**
 * Génère les prochains jours fériés
 */
function generateUpcomingHolidays(holidays, lang, t) {
    const today = new Date();
    const upcoming = holidays
        .filter(h => new Date(h.date) > today)
        .slice(0, 3)
        .map(h => {
            const holidayDate = new Date(h.date);
            const daysUntil = Math.ceil((holidayDate - today) / (1000 * 60 * 60 * 24));
            return `
                <div class="holiday-item">
                    <span class="date">${formatDateShort(h.date, lang)}</span>
                    <span class="name">${h.name}</span>
                    <small>(${daysUntil} ${t.days || 'days'})</small>
                </div>
            `;
        });
    
    return upcoming.length > 0 ? upcoming.join('') : `<p>${t.noUpcomingHolidays || 'No upcoming holidays in the next months'}</p>`;
}

/**
 * Génère la FAQ optimisée pour SEO et IA
 */
function generateCityFAQ(cityData, extraData, t) {
    const faqItems = [
        {
            question: `What time is it in ${cityData.name} right now?`,
            answer: `The current time in ${cityData.name} is displayed at the top of this page in real-time. ${cityData.name} is in the ${extraData.timezone} timezone, which is UTC${extraData.utcOffset.standard >= 0 ? '+' : ''}${extraData.utcOffset.standard}.`
        },
        {
            question: `What timezone is ${cityData.name} in?`,
            answer: `${cityData.name} is located in the ${extraData.timezone} timezone. This means it is ${Math.abs(extraData.utcOffset.standard)} hours ${extraData.utcOffset.standard >= 0 ? 'ahead of' : 'behind'} UTC (Coordinated Universal Time).`
        },
        {
            question: `What are the business hours in ${cityData.name}?`,
            answer: `Standard business hours in ${cityData.name} are ${extraData.businessHours}, ${extraData.businessDays}. The ${extraData.stockExchange.name} operates from ${extraData.stockExchange.hours}.`
        },
        {
            question: `When is the best time to call ${cityData.name}?`,
            answer: `The best time to call ${cityData.name} is during business hours (${extraData.businessHours} ${extraData.timezone}). Avoid calling very early morning or late evening local time.`
        },
        {
            question: `What is the time difference between ${cityData.name} and other major cities?`,
            answer: `${cityData.name} (${extraData.timezone}) has various time differences with major world cities. You can see the real-time differences in the table above. Use our time converter tool for specific calculations.`
        },
        {
            question: `Does ${cityData.name} observe Daylight Saving Time?`,
            answer: extraData.utcOffset.dst !== extraData.utcOffset.standard 
                ? `Yes, ${cityData.name} observes Daylight Saving Time. The timezone shifts between ${extraData.timezone.split('/')[0]} (standard) and ${extraData.timezone.split('/')[1]} (daylight).`
                : `No, ${cityData.name} does not observe Daylight Saving Time. It remains on ${extraData.timezone} year-round.`
        }
    ];
    
    return faqItems.map(item => `
        <div class="faq-item">
            <h3>${item.question}</h3>
            <p>${item.answer}</p>
        </div>
    `).join('');
}

/**
 * Fonctions utilitaires
 */
function getCityCurrentTime(cityData) {
    // Utilise les données de latitude/longitude pour calculer le fuseau
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    
    // Estimation du décalage basé sur la longitude (approximation)
    const offsetHours = Math.round(cityData.lng / 15);
    const cityTime = new Date(utcTime + (offsetHours * 3600000));
    
    return cityTime;
}

function formatTime(date) {
    return date.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

function formatDate(date, lang) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    const locale = lang === 'fr' ? 'fr-FR' : 
                   lang === 'es' ? 'es-ES' : 
                   lang === 'de' ? 'de-DE' : 
                   lang === 'it' ? 'it-IT' : 
                   lang === 'pt' ? 'pt-PT' : 
                   lang === 'ja' ? 'ja-JP' : 
                   lang === 'zh' ? 'zh-CN' : 
                   lang === 'ko' ? 'ko-KR' : 
                   lang === 'ar' ? 'ar-SA' : 
                   'en-US';
                   
    return date.toLocaleDateString(locale, options);
}

function formatDateShort(dateStr, lang) {
    const date = new Date(dateStr);
    const locale = lang === 'fr' ? 'fr-FR' : 'en-US';
    return date.toLocaleDateString(locale, {
        month: 'short',
        day: 'numeric'
    });
}

function getCurrentLanguage() {
    // Récupère la langue depuis l'URL ou le localStorage
    const path = window.location.pathname;
    const langMatch = path.match(/^\/([a-z]{2})\//);
    if (langMatch) return langMatch[1];
    
    return localStorage.getItem('selectedLanguage') || 'en';
}

/**
 * Données par défaut pour les villes non configurées
 */
function getDefaultCityData(cityCode, cityData) {
    // Estimation basée sur la position géographique
    const offsetHours = Math.round((cityData.lng || 0) / 15);
    
    return {
        country: cityData.country || 'Unknown',
        countryCode: 'XX',
        timezone: `UTC${offsetHours >= 0 ? '+' : ''}${offsetHours}`,
        utcOffset: { standard: offsetHours, dst: offsetHours },
        currency: 'USD',
        callingCode: '+1',
        businessDays: 'Monday-Friday',
        businessHours: '9:00 AM - 5:00 PM',
        stockExchange: { name: 'Local Exchange', hours: '9:00 AM - 4:00 PM' },
        majorAirport: 'Local Airport',
        population: 'N/A',
        language: 'English',
        publicHolidays: []
    };
}

// Export pour utilisation dans router.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateCityContent, CITY_DATA_EXTRA };
}

// Rendre disponible globalement
window.generateCityContent = generateCityContent;
window.CITY_DATA_EXTRA = CITY_DATA_EXTRA;
