// Japanese translations
const translationsJA = {
    // Header
    worldClock: "世界時計",
    currentTime: "現在時刻",
    
    // Navigation
    home: "ホーム",
    allCities: "すべての都市",
    timeConverter: "時刻変換",
    meetingPlanner: "会議プランナー",
    timeCalculator: "時間計算機",
    api: "API",
    
    // Main content
    yourLocalTime: "現地時刻",
    searchPlaceholder: "都市を検索...",
    popularCities: "人気の都市",
    popular: "人気の都市",
    tools: "ツール",
    
    // City page
    currentTimeIn: "現在の時刻",
    timezone: "タイムゾーン",
    coordinates: "座標",
    population: "人口",
    country: "国",
    timeDifference: "時差",
    hoursAhead: "時間進んでいる",
    hoursBehind: "時間遅れている",
    sameTime: "同じ時刻",
    nearbyCities: "近隣都市",
    about: "について",
    
    // Tools
    convertTime: "時刻を変換",
    planMeeting: "会議を計画",
    calculateTime: "時間を計算",
    apiDocumentation: "APIドキュメント",
    
    // Footer
    aboutUs: "私たちについて",
    contact: "お問い合わせ",
    privacy: "プライバシー",
    terms: "利用規約",
    rightsReserved: "著作権所有",
    
    // Common
    date: "日付",
    time: "時刻",
    from: "から",
    to: "まで",
    convert: "変換",
    reset: "リセット",
    share: "共有",
    copyLink: "リンクをコピー",
    copied: "コピーしました！",
    noResults: "都市が見つかりません",
    
    // City descriptions
    cityDescription1: "{city}は{country}に位置し、{timezone}タイムゾーンで動作しています。人口{population}人を擁し、地域の重要な都市の一つです。",
    cityDescription2: "{city}の現在時刻は{timezone}タイムゾーンに従います。この{country}の都市には約{population}人の住民がいます。",
    cityDescription3: "座標{lat}°、{lng}°に位置する{city}は、{country}の重要な都市中心地で、{population}人の住民が住んでいます。",
    
    // SEO
    metaDescription: "{city}の現在時刻を確認。タイムゾーン情報、時刻変換、会議プランナー付きの世界時計。",
    pageTitle: "{city}の現在時刻 - 世界時計"
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translationsJA;
} else {
    window.translationsJA = translationsJA;
}