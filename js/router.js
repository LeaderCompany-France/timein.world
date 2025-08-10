// SPA Router System
class SPARouter {
    constructor() {
        this.routes = [];
        this.currentPath = '';
        this.init();
    }
    
    init() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            this.handleRoute(window.location.pathname);
        });
        
        // Handle all link clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[data-link]');
            if (link) {
                e.preventDefault();
                const href = link.getAttribute('href');
                this.navigate(href);
            }
        });
        
        // Initial route
        this.handleRoute(window.location.pathname);
    }
    
    navigate(path) {
        if (path !== this.currentPath) {
            window.history.pushState(null, '', path);
            this.handleRoute(path);
        }
    }
    
    handleRoute(path) {
        // Clean up path
        path = path.toLowerCase().replace(/\/$/, '') || '/';
        this.currentPath = path;
        
        // Stop any running clocks before changing page
        if (window.stopClocks) {
            window.stopClocks();
        }
        
        // Parse path components
        const segments = path.split('/').filter(Boolean);
        
        // Handle root path
        if (path === '/' || path === '') {
            this.loadHomePage();
            return;
        }
        
        // Handle language-specific root (e.g., /fr/)
        if (segments.length === 1 && Object.keys(translations).includes(segments[0])) {
            const lang = segments[0];
            // Only change language if different from current
            if (window.state && window.state.currentLang !== lang) {
                window.state.currentLang = lang;
                if (window.updateLanguageUI) {
                    window.updateLanguageUI();
                }
            }
            this.loadHomePage();
            return;
        }
        
        // Handle static pages
        if (segments.length === 1) {
            switch (segments[0]) {
                case 'world':
                case 'all-cities':
                    this.loadAllCitiesPage();
                    return;
                case 'time-converter':
                    this.loadTimeConverterPage();
                    return;
                case 'meeting-planner':
                    this.loadMeetingPlannerPage();
                    return;
                case 'time-calculator':
                    this.loadTimeCalculatorPage();
                    return;
                case 'api':
                    this.loadApiPage();
                    return;
            }
        }
        
        // Handle city pages with language
        if (segments.length === 2) {
            const [langOrSlug, cityPart] = segments;
            
            // Check if first segment is a language code
            if (Object.keys(translations).includes(langOrSlug)) {
                // Extract city code from URL
                const cityCode = this.extractCityCode(cityPart, langOrSlug);
                if (cityCode) {
                    // Only change language if different from current
                    if (window.state && window.state.currentLang !== langOrSlug) {
                        window.state.currentLang = langOrSlug;
                        if (window.updateLanguageUI) {
                            window.updateLanguageUI();
                        }
                    }
                    this.loadCityPage(cityCode);
                    return;
                }
            } else {
                // Try as English city page without language prefix
                const cityCode = this.extractCityCode(path.substring(1), 'en');
                if (cityCode) {
                    this.loadCityPage(cityCode);
                    return;
                }
            }
        }
        
        // 404 - Page not found
        this.load404Page();
    }
    
    extractCityCode(urlPart, lang) {
        const prefix = cityUrlSlugs[lang] + '-';
        if (urlPart.startsWith(prefix)) {
            const potentialCode = urlPart.substring(prefix.length);
            // Check if this city exists in our database
            if (cityDatabase.find(c => c.code === potentialCode)) {
                return potentialCode;
            }
        }
        return null;
    }
    
    getCurrentPath() {
        return this.currentPath;
    }
    
    // Page loaders
    loadHomePage() {
        if (window.renderHomePage) {
            window.renderHomePage();
        }
        this.updateMeta('home');
        this.scrollToTop();
        // Re-attach event listeners after rendering
        setTimeout(() => {
            if (window.setupEventListeners) {
                window.setupEventListeners();
            }
        }, 100);
    }
    
    loadCityPage(cityCode) {
        if (window.renderCityPage) {
            window.renderCityPage(cityCode);
        }
        this.updateMeta('city', cityCode);
        this.scrollToTop();
    }
    
    loadAllCitiesPage() {
        if (window.renderAllCitiesPage) {
            window.renderAllCitiesPage();
        }
        this.updateMeta('allCities');
        this.scrollToTop();
    }
    
    loadTimeConverterPage() {
        this.loadToolPage('timeConverter');
    }
    
    loadMeetingPlannerPage() {
        this.loadToolPage('meetingPlanner');
    }
    
    loadTimeCalculatorPage() {
        this.loadToolPage('timeCalculator');
    }
    
    loadApiPage() {
        this.loadToolPage('api');
    }
    
    loadToolPage(tool) {
        const t = translations[window.state?.currentLang || 'en'];
        const content = this.getToolContent(tool, t);
        
        document.getElementById('app').innerHTML = content;
        this.updateMeta(tool);
        this.scrollToTop();
        
        // Initialize tool-specific functionality
        if (tool === 'timeConverter') {
            this.initTimeConverter();
        } else if (tool === 'meetingPlanner') {
            this.initMeetingPlanner();
        }
    }
    
    load404Page() {
        if (window.render404Page) {
            window.render404Page();
        }
        this.updateMeta('404');
        this.scrollToTop();
    }
    
    scrollToTop() {
        window.scrollTo(0, 0);
    }
    
    updateMeta(pageType, cityCode = null) {
        // This will be handled by seo-manager.js
        if (window.SEOManager) {
            window.SEOManager.updateMeta(pageType, cityCode);
        }
    }
    
    // Tool page content generators
    getToolContent(tool, t) {
        const toolContents = {
            timeConverter: `
                <div class="tool-page">
                    <h1>${t.timeConverter}</h1>
                    <div class="converter-container">
                        <div class="converter-section">
                            <label for="source-city">${t.from}</label>
                            <select id="source-city" class="city-select">
                                <option value="">Select a city...</option>
                                ${cityDatabase.sort((a, b) => a.name.localeCompare(b.name))
                                    .map(city => `<option value="${city.timezone}">${city.name}, ${city.country}</option>`)
                                    .join('')}
                            </select>
                            <input type="time" id="source-time" class="time-input">
                            <input type="date" id="source-date" class="date-input">
                        </div>
                        
                        <div class="converter-arrow">→</div>
                        
                        <div class="converter-section">
                            <label for="target-city">${t.to}</label>
                            <select id="target-city" class="city-select">
                                <option value="">Select a city...</option>
                                ${cityDatabase.sort((a, b) => a.name.localeCompare(b.name))
                                    .map(city => `<option value="${city.timezone}">${city.name}, ${city.country}</option>`)
                                    .join('')}
                            </select>
                            <div class="result-time" id="result-time">--:--</div>
                            <div class="result-date" id="result-date">----</div>
                        </div>
                    </div>
                    
                    <div class="converter-actions">
                        <button class="button button-primary" onclick="Router.convertTime()">${t.convert}</button>
                        <button class="button button-secondary" onclick="Router.resetConverter()">${t.reset}</button>
                    </div>
                </div>
            `,
            
            meetingPlanner: `
                <div class="tool-page">
                    <h1>${t.meetingPlanner}</h1>
                    <div class="planner-container">
                        <div class="planner-input">
                            <label>Add Participants</label>
                            <select id="participant-city" class="city-select">
                                <option value="">Select a city...</option>
                                ${cityDatabase.sort((a, b) => a.name.localeCompare(b.name))
                                    .map(city => `<option value="${city.timezone}" data-city="${city.name}">${city.name}, ${city.country}</option>`)
                                    .join('')}
                            </select>
                            <button class="button button-add" onclick="Router.addParticipant()">Add</button>
                        </div>
                        
                        <div class="participants-list" id="participants-list"></div>
                        
                        <div class="time-slots">
                            <h3>Suggested Meeting Times</h3>
                            <div id="time-slots-grid"></div>
                        </div>
                    </div>
                </div>
            `,
            
            timeCalculator: `
                <div class="tool-page">
                    <h1>${t.timeCalculator}</h1>
                    <div class="calculator-container">
                        <p>Calculate time differences, add or subtract hours from a specific time.</p>
                        <!-- Calculator implementation would go here -->
                    </div>
                </div>
            `,
            
            api: `
                <div class="tool-page">
                    <h1>${t.api}</h1>
                    <div class="api-docs">
                        <h2>TimeIn.World API Documentation</h2>
                        <p>Access world clock data programmatically with our simple REST API.</p>
                        
                        <h3>Base URL</h3>
                        <code class="code-block">https://timein.world/api/v1</code>
                        
                        <h3>Endpoints</h3>
                        
                        <div class="endpoint">
                            <h4>GET /time/:city</h4>
                            <p>Get current time for a specific city</p>
                            <code class="code-block">GET /api/v1/time/new-york</code>
                            <pre class="response-example">{
  "city": "New York",
  "country": "United States",
  "timezone": "America/New_York",
  "current_time": "2024-01-15T14:30:45-05:00",
  "utc_offset": "-05:00"
}</pre>
                        </div>
                        
                        <div class="endpoint">
                            <h4>GET /cities</h4>
                            <p>List all available cities</p>
                            <code class="code-block">GET /api/v1/cities</code>
                        </div>
                        
                        <div class="endpoint">
                            <h4>GET /convert</h4>
                            <p>Convert time between timezones</p>
                            <code class="code-block">GET /api/v1/convert?from=new-york&to=london&time=14:30</code>
                        </div>
                    </div>
                </div>
            `
        };
        
        return toolContents[tool] || '<div class="error-page"><h1>Tool not found</h1></div>';
    }
    
    // Time Converter functionality
    initTimeConverter() {
        const sourceCity = document.getElementById('source-city');
        const sourceTime = document.getElementById('source-time');
        const sourceDate = document.getElementById('source-date');
        const targetCity = document.getElementById('target-city');
        
        // Set default date to today
        const today = new Date().toISOString().split('T')[0];
        if (sourceDate) {
            sourceDate.value = today;
        }
        
        // Set default time to current time
        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        if (sourceTime) {
            sourceTime.value = currentTime;
        }
        
        // Auto-convert on change
        [sourceCity, sourceTime, sourceDate, targetCity].forEach(element => {
            if (element) {
                element.addEventListener('change', () => this.convertTime());
            }
        });
    }
    
    convertTime() {
        const sourceTimezone = document.getElementById('source-city')?.value;
        const targetTimezone = document.getElementById('target-city')?.value;
        const sourceTime = document.getElementById('source-time')?.value;
        const sourceDate = document.getElementById('source-date')?.value;
        
        if (!sourceTimezone || !targetTimezone || !sourceTime || !sourceDate) {
            return;
        }
        
        // Create date object in source timezone
        const [hours, minutes] = sourceTime.split(':');
        const sourceDateObj = new Date(`${sourceDate}T${sourceTime}:00`);
        
        // Convert to target timezone
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: targetTimezone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        
        const parts = formatter.formatToParts(sourceDateObj);
        const getPart = (type) => parts.find(p => p.type === type)?.value || '';
        
        const resultTime = `${getPart('hour')}:${getPart('minute')}`;
        const resultDate = `${getPart('year')}-${getPart('month')}-${getPart('day')}`;
        
        const resultTimeEl = document.getElementById('result-time');
        const resultDateEl = document.getElementById('result-date');
        
        if (resultTimeEl) resultTimeEl.textContent = resultTime;
        if (resultDateEl) resultDateEl.textContent = resultDate;
    }
    
    resetConverter() {
        const elements = ['source-city', 'target-city', 'source-time', 'source-date'];
        elements.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                if (id === 'source-date') {
                    el.value = new Date().toISOString().split('T')[0];
                } else if (id === 'source-time') {
                    const now = new Date();
                    el.value = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
                } else {
                    el.value = '';
                }
            }
        });
        
        const resultTimeEl = document.getElementById('result-time');
        const resultDateEl = document.getElementById('result-date');
        if (resultTimeEl) resultTimeEl.textContent = '--:--';
        if (resultDateEl) resultDateEl.textContent = '----';
    }
    
    // Meeting Planner functionality
    initMeetingPlanner() {
        this.participants = [];
        this.updateParticipantsList();
    }
    
    addParticipant() {
        const select = document.getElementById('participant-city');
        if (!select || !select.value) return;
        
        const option = select.selectedOptions[0];
        const timezone = select.value;
        const cityName = option.getAttribute('data-city');
        
        // Check if already added
        if (this.participants.find(p => p.timezone === timezone)) {
            return;
        }
        
        this.participants.push({
            city: cityName,
            timezone: timezone
        });
        
        select.value = '';
        this.updateParticipantsList();
        this.findBestMeetingTimes();
    }
    
    removeParticipant(index) {
        this.participants.splice(index, 1);
        this.updateParticipantsList();
        this.findBestMeetingTimes();
    }
    
    updateParticipantsList() {
        const container = document.getElementById('participants-list');
        if (!container) return;
        
        if (this.participants.length === 0) {
            container.innerHTML = '<p class="no-participants">No participants added yet</p>';
            return;
        }
        
        container.innerHTML = this.participants.map((p, index) => `
            <div class="participant-item">
                <span>${p.city}</span>
                <span class="timezone">${p.timezone}</span>
                <button class="remove-btn" onclick="Router.removeParticipant(${index})">×</button>
            </div>
        `).join('');
    }
    
    findBestMeetingTimes() {
        const container = document.getElementById('time-slots-grid');
        if (!container || this.participants.length < 2) {
            if (container) container.innerHTML = '';
            return;
        }
        
        // Find meeting times that work for all participants
        // This is a simplified version - in production, you'd want more sophisticated logic
        const slots = [];
        const baseDate = new Date();
        baseDate.setHours(0, 0, 0, 0);
        
        // Check every hour for the next 24 hours
        for (let hour = 0; hour < 24; hour++) {
            const testDate = new Date(baseDate);
            testDate.setHours(hour);
            
            let isGoodTime = true;
            const localTimes = [];
            
            for (const participant of this.participants) {
                const localTime = new Date(testDate.toLocaleString('en-US', { timeZone: participant.timezone }));
                const localHour = localTime.getHours();
                
                // Consider 9 AM to 5 PM as working hours
                if (localHour < 9 || localHour >= 17) {
                    isGoodTime = false;
                    break;
                }
                
                localTimes.push({
                    city: participant.city,
                    time: localTime.toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: false 
                    })
                });
            }
            
            if (isGoodTime) {
                slots.push({
                    baseHour: hour,
                    localTimes: localTimes
                });
            }
        }
        
        // Display the results
        if (slots.length === 0) {
            container.innerHTML = '<p>No suitable meeting times found within working hours for all participants.</p>';
        } else {
            container.innerHTML = slots.slice(0, 6).map(slot => `
                <div class="time-slot">
                    ${slot.localTimes.map(lt => `
                        <div class="slot-time">
                            <span class="slot-city">${lt.city}:</span>
                            <span class="slot-hour">${lt.time}</span>
                        </div>
                    `).join('')}
                </div>
            `).join('');
        }
    }
}

// Create and export router instance
const Router = new SPARouter();
window.Router = Router;