// Hindi translations
const translationsHI = {
    // Header
    worldClock: "विश्व घड़ी",
    currentTime: "वर्तमान समय",
    
    // Navigation
    home: "होम",
    allCities: "सभी शहर",
    timeConverter: "समय परिवर्तक",
    meetingPlanner: "मीटिंग योजनाकार",
    timeCalculator: "समय कैलकुलेटर",
    api: "API",
    
    // Main content
    yourLocalTime: "आपका स्थानीय समय",
    searchPlaceholder: "शहर खोजें...",
    popularCities: "लोकप्रिय शहर",
    popular: "लोकप्रिय शहर",
    tools: "उपकरण",
    
    // City page
    currentTimeIn: "वर्तमान समय",
    timezone: "समय क्षेत्र",
    coordinates: "निर्देशांक",
    population: "जनसंख्या",
    country: "देश",
    timeDifference: "समय अंतर",
    hoursAhead: "घंटे आगे",
    hoursBehind: "घंटे पीछे",
    sameTime: "समान समय",
    nearbyCities: "नजदीकी शहर",
    about: "के बारे में",
    
    // Tools
    convertTime: "समय परिवर्तित करें",
    planMeeting: "मीटिंग योजना बनाएं",
    calculateTime: "समय गणना करें",
    apiDocumentation: "API दस्तावेज़",
    
    // Footer
    aboutUs: "हमारे बारे में",
    contact: "संपर्क",
    privacy: "गोपनीयता",
    terms: "शर्तें",
    rightsReserved: "सर्वाधिकार सुरक्षित",
    
    // Common
    date: "दिनांक",
    time: "समय",
    from: "से",
    to: "तक",
    convert: "परिवर्तित करें",
    reset: "रीसेट",
    share: "साझा करें",
    copyLink: "लिंक कॉपी करें",
    copied: "कॉपी हो गया!",
    noResults: "कोई शहर नहीं मिला",
    
    // City descriptions
    cityDescription1: "{city} {country} में स्थित है और {timezone} समय क्षेत्र में काम करता है। {population} की आबादी के साथ, यह क्षेत्र के उल्लेखनीय शहरों में से एक है।",
    cityDescription2: "{city} में वर्तमान समय {timezone} समय क्षेत्र का अनुसरण करता है। {country} के इस शहर में लगभग {population} निवासी हैं।",
    cityDescription3: "निर्देशांक {lat}°, {lng}° पर स्थित, {city} {country} में एक महत्वपूर्ण शहरी केंद्र है जिसमें {population} निवासी हैं।",
    
    // SEO
    metaDescription: "{city} में वर्तमान समय देखें। समय क्षेत्र जानकारी, समय परिवर्तक और मीटिंग योजनाकार के साथ विश्व घड़ी।",
    pageTitle: "{city} में वर्तमान समय - विश्व घड़ी"
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translationsHI;
} else {
    window.translationsHI = translationsHI;
}