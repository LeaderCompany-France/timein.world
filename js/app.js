// Main application logic
const state = {
    currentLang: 'en',
    clockIntervals: [],
    userTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    theme: localStorage.getItem('theme') || 'light'
};

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeLanguage();
    setupEventListeners();
});

// Theme management
function initializeTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeToggle();
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('theme', state.theme);
    updateThemeToggle();
}

function updateThemeToggle() {
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
        toggle.setAttribute('aria-pressed', state.theme === 'dark');
    }
}

// Language management
function initializeLanguage() {
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.split('-')[0];
    const supportedLang = Object.keys(translations).includes(browserLang) ? browserLang : 'en';
    
    state.currentLang = savedLang || supportedLang;
    updateLanguageUI();
}

function changeLanguage(lang) {
    if (!translations[lang]) return;
    
    state.currentLang = lang;
    localStorage.setItem('language', lang);
    updateLanguageUI();
    
    // Update current page content without triggering router
    const app = document.getElementById('app');
    if (app && window.Router && window.Router.getCurrentPath) {
        const currentPath = window.Router.getCurrentPath();
        
        // Parse the current path to get the page type
        const segments = currentPath.split('/').filter(Boolean);
        
        // If we're on a city page, re-render it
        if (segments.length >= 2 || (segments.length === 1 && segments[0].includes('-'))) {
            const cityPart = segments[segments.length - 1];
            const cityCode = extractCityCodeFromUrl(cityPart);
            if (cityCode && window.renderCityPage) {
                window.renderCityPage(cityCode);
            }
        } else if (currentPath === '/' || currentPath === '' || (segments.length === 1 && Object.keys(translations).includes(segments[0]))) {
            // Home page
            if (window.renderHomePage) {
                window.renderHomePage();
            }
        } else if (currentPath.includes('world') || currentPath.includes('all-cities')) {
            if (window.renderAllCitiesPage) {
                window.renderAllCitiesPage();
            }
        }
        
        // Update SEO meta tags
        if (window.SEOManager) {
            window.SEOManager.updateMeta('home');
        }
    }
}

function extractCityCodeFromUrl(urlPart) {
    // Try all language slugs to extract city code
    for (const [lang, slug] of Object.entries(cityUrlSlugs)) {
        const prefix = slug + '-';
        if (urlPart.startsWith(prefix)) {
            return urlPart.substring(prefix.length);
        }
    }
    // Also try without language prefix
    const parts = urlPart.split('-');
    if (parts.length >= 3 && parts[0] === 'time' && parts[1] === 'in') {
        return parts.slice(2).join('-');
    }
    return null;
}

function updateLanguageUI() {
    // Update active language button
    updateActiveLanguageButton();
    
    // Update all translated elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[state.currentLang][key]) {
            element.textContent = translations[state.currentLang][key];
        }
    });
    
    // Update footer links to use current language
    updateFooterLinks();
    
    // Update HTML lang attribute
    document.documentElement.lang = state.currentLang;
}

function updateFooterLinks() {
    const footerLinks = document.querySelectorAll('.footer-section a[data-link]');
    footerLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes('/time-in-') || href.includes('/heure-a-') || href.includes('/hora-en-')) {
            // Extract city code from any language URL
            const match = href.match(/-(new-york|london|tokyo|paris)$/);
            if (match) {
                const cityCode = match[1];
                const newHref = `/${state.currentLang}/${cityUrlSlugs[state.currentLang]}-${cityCode}`;
                link.setAttribute('href', newHref);
            }
        }
    });
}

// Event listeners setup
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.onclick = toggleTheme;
        console.log('Theme toggle listener attached');
    }
    
    // Language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    if (langButtons.length > 0) {
        console.log(`Found ${langButtons.length} language buttons`);
        
        langButtons.forEach(button => {
            button.onclick = function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                console.log('Language button clicked:', lang);
                changeLanguage(lang);
                
                // Update active state
                langButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            };
        });
        
        // Set initial active button
        updateActiveLanguageButton();
        
        console.log('Language button listeners attached successfully');
    } else {
        console.error('No language buttons found');
    }
}

// Update active language button
function updateActiveLanguageButton() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        if (button.getAttribute('data-lang') === state.currentLang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Clock functions
function startClock(elementId, timezone = null) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const updateClock = () => {
        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: timezone || state.userTimezone
        };
        
        element.textContent = now.toLocaleTimeString(state.currentLang, options);
    };
    
    updateClock();
    const interval = setInterval(updateClock, 1000);
    state.clockIntervals.push(interval);
    
    return interval;
}

function startClocks() {
    // Clear existing intervals
    state.clockIntervals.forEach(interval => clearInterval(interval));
    state.clockIntervals = [];
    
    // Start all clocks on the page
    document.querySelectorAll('[data-clock]').forEach(element => {
        const timezone = element.getAttribute('data-timezone');
        startClock(element.id, timezone);
    });
}

function stopClocks() {
    state.clockIntervals.forEach(interval => clearInterval(interval));
    state.clockIntervals = [];
}

// Time formatting functions
function formatTime(date, timezone, format = 'full') {
    const options = {
        full: {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: timezone
        },
        short: {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: timezone
        }
    };
    
    return date.toLocaleTimeString(state.currentLang, options[format]);
}

function formatDate(date, timezone) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: timezone
    };
    
    return date.toLocaleDateString(state.currentLang, options);
}

// Time difference calculation
function getTimeDifference(timezone1, timezone2) {
    const now = new Date();
    
    const date1 = new Date(now.toLocaleString('en-US', { timeZone: timezone1 }));
    const date2 = new Date(now.toLocaleString('en-US', { timeZone: timezone2 }));
    
    const diff = (date1 - date2) / (1000 * 60 * 60); // Difference in hours
    
    return Math.round(diff);
}

// City search functionality
function searchCities(query) {
    if (!query || query.length < 2) return [];
    
    const searchTerm = query.toLowerCase();
    
    return cityDatabase.filter(city => 
        city.name.toLowerCase().includes(searchTerm) ||
        city.country.toLowerCase().includes(searchTerm)
    ).slice(0, 10); // Limit to 10 results
}

function searchCitiesInDatabase(query) {
    return searchCities(query);
}

// Render functions for different pages
function renderHomePage() {
    const app = document.getElementById('app');
    if (!app) {
        console.error('App element not found');
        return;
    }
    
    const t = translations[state.currentLang];
    
    const popularCities = [
        'new-york', 'london', 'tokyo', 'paris', 'dubai', 'singapore',
        'hong-kong', 'sydney', 'los-angeles', 'beijing', 'mumbai', 'toronto'
    ].map(code => cityDatabase.find(c => c.code === code)).filter(Boolean);
    
    const html = `
        <div class="hero">
            <h1 class="hero-title">${t.worldClock}</h1>
            <div class="local-time-card">
                <h2>${t.yourLocalTime}</h2>
                <div class="clock-display" id="local-clock" data-clock></div>
                <div class="date-display">${formatDate(new Date(), state.userTimezone)}</div>
            </div>
            
            <div class="search-container">
                <input type="search" 
                       class="search-input" 
                       placeholder="${t.searchPlaceholder}"
                       id="city-search"
                       autocomplete="off">
                <div class="search-results" id="search-results"></div>
            </div>
        </div>
        
        <section class="popular-cities">
            <h2>${t.popularCities}</h2>
            <div class="cities-grid">
                ${popularCities.map(city => `
                    <a href="/${state.currentLang}/${cityUrlSlugs[state.currentLang]}-${city.code}" 
                       class="city-card" 
                       data-link>
                        <h3>${city.name}</h3>
                        <div class="city-time" id="clock-${city.code}" data-clock data-timezone="${city.timezone}"></div>
                        <div class="city-country">${city.country}</div>
                    </a>
                `).join('')}
            </div>
        </section>
        
        <section class="tools-section">
            <h2>${t.tools}</h2>
            <div class="tools-grid">
                <a href="/time-converter" class="tool-card" data-link>
                    <svg class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                    </svg>
                    <h3>${t.timeConverter}</h3>
                    <p>${t.convertTime}</p>
                </a>
                <a href="/meeting-planner" class="tool-card" data-link>
                    <svg class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <h3>${t.meetingPlanner}</h3>
                    <p>${t.planMeeting}</p>
                </a>
                <a href="/time-calculator" class="tool-card" data-link>
                    <svg class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="4" y1="9" x2="20" y2="9"></line>
                        <line x1="4" y1="15" x2="20" y2="15"></line>
                        <line x1="10" y1="3" x2="8" y2="21"></line>
                        <line x1="16" y1="3" x2="14" y2="21"></line>
                    </svg>
                    <h3>${t.timeCalculator}</h3>
                    <p>${t.calculateTime}</p>
                </a>
                <a href="/api" class="tool-card" data-link>
                    <svg class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    </svg>
                    <h3>${t.api}</h3>
                    <p>${t.apiDocumentation}</p>
                </a>
            </div>
        </section>
    `;
    
    app.innerHTML = html;
    
    // Setup search functionality
    const searchInput = document.getElementById('city-search');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput && searchResults) {
        let searchTimeout;
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim();
            
            if (query.length < 2) {
                searchResults.innerHTML = '';
                searchResults.style.display = 'none';
                return;
            }
            
            searchTimeout = setTimeout(() => {
                const results = searchCities(query);
                
                if (results.length > 0) {
                    searchResults.innerHTML = results.map(city => `
                        <a href="/${state.currentLang}/${cityUrlSlugs[state.currentLang]}-${city.code}" 
                           class="search-result-item" 
                           data-link>
                            <span class="city-name">${city.name}</span>
                            <span class="city-country">${city.country}</span>
                        </a>
                    `).join('');
                    searchResults.style.display = 'block';
                } else {
                    searchResults.innerHTML = `<div class="no-results">${t.noResults || 'No cities found'}</div>`;
                    searchResults.style.display = 'block';
                }
            }, 300);
        });
        
        // Hide results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
    
    // Start clocks
    startClocks();
}

function renderCityPage(cityCode) {
    const app = document.getElementById('app');
    if (!app) {
        console.error('App element not found');
        return;
    }
    
    const city = cityDatabase.find(c => c.code === cityCode);
    if (!city) {
        render404Page();
        return;
    }
    
    const t = translations[state.currentLang];
    const now = new Date();
    const timeDiff = getTimeDifference(city.timezone, state.userTimezone);
    
    // Find nearby cities (within 500km)
    const nearbyCities = cityDatabase
        .filter(c => c.code !== city.code)
        .map(c => ({
            ...c,
            distance: calculateDistance(city.lat, city.lng, c.lat, c.lng)
        }))
        .filter(c => c.distance < 500)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 6);
    
    const html = `
        <div class="city-page">
            <div class="city-header">
                <h1>${t.currentTimeIn} ${city.name}</h1>
                <div class="city-info">
                    <span>${city.country}</span>
                    <span>•</span>
                    <span>${t.timezone}: ${city.timezone}</span>
                </div>
            </div>
            
            <div class="time-display-card">
                <div class="main-clock" id="city-clock" data-clock data-timezone="${city.timezone}"></div>
                <div class="date-display">${formatDate(now, city.timezone)}</div>
                
                <div class="time-difference">
                    ${timeDiff === 0 ? t.sameTime : 
                      timeDiff > 0 ? `${Math.abs(timeDiff)} ${t.hoursAhead}` : 
                      `${Math.abs(timeDiff)} ${t.hoursBehind}`}
                </div>
            </div>
            
            <div class="city-details">
                <div class="detail-item">
                    <h3>${t.coordinates}</h3>
                    <p>${city.lat.toFixed(4)}°, ${city.lng.toFixed(4)}°</p>
                </div>
                <div class="detail-item">
                    <h3>${t.population}</h3>
                    <p>${city.population.toLocaleString(state.currentLang)}</p>
                </div>
            </div>
            
            ${nearbyCities.length > 0 ? `
                <section class="nearby-cities">
                    <h2>${t.nearbyCities}</h2>
                    <div class="nearby-grid">
                        ${nearbyCities.map(nearby => `
                            <a href="/${state.currentLang}/${cityUrlSlugs[state.currentLang]}-${nearby.code}" 
                               class="nearby-card" 
                               data-link>
                                <h4>${nearby.name}</h4>
                                <div class="nearby-time" id="nearby-${nearby.code}" data-clock data-timezone="${nearby.timezone}"></div>
                                <div class="nearby-distance">${Math.round(nearby.distance)} km</div>
                            </a>
                        `).join('')}
                    </div>
                </section>
            ` : ''}
            
            <section class="city-content">
                <h2>${t.about || 'About'} ${city.name}</h2>
                <p>${generateCityContent(city)}</p>
            </section>
        </div>
    `;
    
    app.innerHTML = html;
    startClocks();
}

function renderAllCitiesPage() {
    const app = document.getElementById('app');
    if (!app) {
        console.error('App element not found');
        return;
    }
    
    const t = translations[state.currentLang];
    
    // Group cities by continent
    const citiesByContinent = {
        'North America': [],
        'South America': [],
        'Europe': [],
        'Africa': [],
        'Asia': [],
        'Oceania': []
    };
    
    // Simple continent detection based on timezone
    cityDatabase.forEach(city => {
        if (city.timezone.includes('America')) {
            if (city.lat > 15) {
                citiesByContinent['North America'].push(city);
            } else {
                citiesByContinent['South America'].push(city);
            }
        } else if (city.timezone.includes('Europe')) {
            citiesByContinent['Europe'].push(city);
        } else if (city.timezone.includes('Africa')) {
            citiesByContinent['Africa'].push(city);
        } else if (city.timezone.includes('Asia')) {
            citiesByContinent['Asia'].push(city);
        } else if (city.timezone.includes('Australia') || city.timezone.includes('Pacific')) {
            citiesByContinent['Oceania'].push(city);
        } else {
            // Default to Asia for unclear cases
            citiesByContinent['Asia'].push(city);
        }
    });
    
    const html = `
        <div class="all-cities-page">
            <h1>${t.allCities}</h1>
            <p class="cities-count">${cityDatabase.length} cities</p>
            
            ${Object.entries(citiesByContinent).map(([continent, cities]) => `
                <section class="continent-section">
                    <h2>${continent}</h2>
                    <div class="cities-list">
                        ${cities.sort((a, b) => a.name.localeCompare(b.name)).map(city => `
                            <a href="/${state.currentLang}/${cityUrlSlugs[state.currentLang]}-${city.code}" 
                               class="city-link" 
                               data-link>
                                ${city.name}, ${city.country}
                            </a>
                        `).join('')}
                    </div>
                </section>
            `).join('')}
        </div>
    `;
    
    app.innerHTML = html;
}

function render404Page() {
    const t = translations[state.currentLang];
    const app = document.getElementById('app');
    
    if (!app) {
        console.error('App element not found');
        return;
    }
    
    const html = `
        <div class="error-page">
            <h1>404</h1>
            <p>Page not found</p>
            <a href="/" class="button" data-link>${t.home}</a>
        </div>
    `;
    
    app.innerHTML = html;
}

// Helper functions
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function generateCityContent(city) {
    const t = translations[state.currentLang];
    
    // Get the template based on city code hash
    const templateIndex = city.code.charCodeAt(0) % 3 + 1;
    const templateKey = `cityDescription${templateIndex}`;
    const template = t[templateKey] || t.cityDescription1;
    
    // Replace placeholders
    return template
        .replace('{city}', city.name)
        .replace('{country}', city.country)
        .replace('{timezone}', city.timezone)
        .replace('{population}', city.population.toLocaleString(state.currentLang))
        .replace('{lat}', city.lat.toFixed(2))
        .replace('{lng}', city.lng.toFixed(2));
}

// Export functions for router
window.renderHomePage = renderHomePage;
window.renderCityPage = renderCityPage;
window.renderAllCitiesPage = renderAllCitiesPage;
window.render404Page = render404Page;
window.startClocks = startClocks;
window.stopClocks = stopClocks;
window.changeLanguage = changeLanguage;
window.updateLanguageUI = updateLanguageUI;
window.setupEventListeners = setupEventListeners;
window.state = state;
window.formatTime = formatTime;
window.formatDate = formatDate;
window.getTimeDifference = getTimeDifference;
window.searchCitiesInDatabase = searchCitiesInDatabase;