// Dynamic translations loader
window.translations = {}; // Make it global immediately
const loadedLanguages = new Set();

// Language codes mapping
window.languageCodes = {
    en: 'en',
    fr: 'fr',
    es: 'es',
    de: 'de',
    pt: 'pt',
    it: 'it',
    ru: 'ru',
    zh: 'zh',
    ja: 'ja',
    ko: 'ko',
    ar: 'ar',
    hi: 'hi'
};

// URL slug translations for city pages
window.cityUrlSlugs = {
    en: 'time-in',
    fr: 'heure-a',
    es: 'hora-en',
    de: 'zeit-in',
    pt: 'hora-em',
    it: 'ora-a',
    ru: 'vremya-v',
    zh: 'shijian',
    ja: 'jikan',
    ko: 'sigan',
    ar: 'waqt-fi',
    hi: 'samay'
};

// Map language codes to their translation variable names
const langVarMap = {
    'en': 'translationsEN',
    'fr': 'translationsFR',
    'es': 'translationsES',
    'de': 'translationsDE',
    'pt': 'translationsPT',
    'it': 'translationsIT',
    'ru': 'translationsRU',
    'zh': 'translationsZH',
    'ja': 'translationsJA',
    'ko': 'translationsKO',
    'ar': 'translationsAR',
    'hi': 'translationsHI'
};

// Load a translation file dynamically
async function loadTranslation(lang) {
    if (loadedLanguages.has(lang)) {
        console.log(`Language ${lang} already loaded`);
        return true;
    }
    
    try {
        // Create script element
        const script = document.createElement('script');
        script.src = `/js/translations/${lang}.js`;
        script.async = false;
        
        // Wait for script to load
        return new Promise((resolve, reject) => {
            script.onload = () => {
                // Get the translation object from window
                const varName = langVarMap[lang];
                if (window[varName]) {
                    translations[lang] = window[varName];
                    loadedLanguages.add(lang);
                    console.log(`✓ Loaded translation: ${lang}`);
                    resolve(true);
                } else {
                    console.error(`Translation variable ${varName} not found`);
                    reject(new Error(`Translation not found: ${lang}`));
                }
            };
            
            script.onerror = () => {
                console.error(`Failed to load translation: ${lang}`);
                // Fallback to English if available
                if (lang !== 'en' && translations.en) {
                    translations[lang] = translations.en;
                    console.log(`Using English fallback for ${lang}`);
                    resolve(true);
                } else {
                    reject(new Error(`Failed to load: ${lang}`));
                }
            };
            
            document.head.appendChild(script);
        });
    } catch (error) {
        console.error(`Error loading ${lang}:`, error);
        return false;
    }
}

// Initialize translations
async function initTranslations() {
    console.log('Initializing translations...');
    
    // Always load English as fallback
    await loadTranslation('en');
    
    // Detect user language from state or browser
    const userLang = (window.state?.currentLang || localStorage.getItem('language') || navigator.language || 'en').split('-')[0];
    
    // Load user language if different from English
    if (userLang !== 'en' && Object.keys(langVarMap).includes(userLang)) {
        await loadTranslation(userLang);
    }
    
    // Ensure current language is set
    if (!translations[window.state?.currentLang]) {
        translations[window.state?.currentLang] = translations.en;
    }
    
    console.log('Translations initialized');
    return true;
}

// Ensure translation is loaded before use
async function ensureTranslation(lang) {
    if (!translations[lang] && !loadedLanguages.has(lang)) {
        await loadTranslation(lang);
    }
    return translations[lang] || translations.en || {};
}

// Override changeLanguage to load translations on demand
if (window.changeLanguage) {
    const originalChangeLanguage = window.changeLanguage;
    window.changeLanguage = async function(lang) {
        console.log(`Changing language to: ${lang}`);
        
        // Ensure translation is loaded
        await ensureTranslation(lang);
        
        // Call original function
        if (originalChangeLanguage) {
            originalChangeLanguage(lang);
        }
    };
}

// Export for use
window.translations = translations;
window.loadTranslation = loadTranslation;
window.ensureTranslation = ensureTranslation;
window.initTranslations = initTranslations;