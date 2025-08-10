// Arabic translations
const translationsAR = {
    // Header
    worldClock: "الساعة العالمية",
    currentTime: "الوقت الحالي",
    
    // Navigation
    home: "الرئيسية",
    allCities: "جميع المدن",
    timeConverter: "محول الوقت",
    meetingPlanner: "مخطط الاجتماعات",
    timeCalculator: "حاسبة الوقت",
    api: "API",
    
    // Main content
    yourLocalTime: "التوقيت المحلي",
    searchPlaceholder: "البحث عن مدينة...",
    popularCities: "المدن الشائعة",
    popular: "المدن الشائعة",
    tools: "الأدوات",
    
    // City page
    currentTimeIn: "الوقت الحالي في",
    timezone: "المنطقة الزمنية",
    coordinates: "الإحداثيات",
    population: "السكان",
    country: "البلد",
    timeDifference: "فرق التوقيت",
    hoursAhead: "ساعات متقدمة",
    hoursBehind: "ساعات متأخرة",
    sameTime: "نفس الوقت",
    nearbyCities: "المدن القريبة",
    about: "حول",
    
    // Tools
    convertTime: "تحويل الوقت",
    planMeeting: "تخطيط اجتماع",
    calculateTime: "حساب الوقت",
    apiDocumentation: "وثائق API",
    
    // Footer
    aboutUs: "من نحن",
    contact: "اتصل بنا",
    privacy: "الخصوصية",
    terms: "الشروط",
    rightsReserved: "جميع الحقوق محفوظة",
    
    // Common
    date: "التاريخ",
    time: "الوقت",
    from: "من",
    to: "إلى",
    convert: "تحويل",
    reset: "إعادة تعيين",
    share: "مشاركة",
    copyLink: "نسخ الرابط",
    copied: "تم النسخ!",
    noResults: "لم يتم العثور على مدن",
    
    // City descriptions
    cityDescription1: "تقع {city} في {country} وتعمل في المنطقة الزمنية {timezone}. مع عدد سكان {population}، وهي واحدة من المدن البارزة في المنطقة.",
    cityDescription2: "الوقت الحالي في {city} يتبع المنطقة الزمنية {timezone}. هذه المدينة في {country} لديها حوالي {population} من السكان.",
    cityDescription3: "تقع في الإحداثيات {lat}°، {lng}°، {city} هي مركز حضري مهم في {country} مع {population} من السكان.",
    
    // SEO
    metaDescription: "تحقق من الوقت الحالي في {city}. ساعة عالمية مع معلومات المنطقة الزمنية ومحول الوقت ومخطط الاجتماعات.",
    pageTitle: "الوقت الحالي في {city} - الساعة العالمية"
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translationsAR;
} else {
    window.translationsAR = translationsAR;
}