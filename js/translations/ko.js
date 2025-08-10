// Korean translations
const translationsKO = {
    // Header
    worldClock: "세계 시계",
    currentTime: "현재 시간",
    
    // Navigation
    home: "홈",
    allCities: "모든 도시",
    timeConverter: "시간 변환기",
    meetingPlanner: "회의 계획",
    timeCalculator: "시간 계산기",
    api: "API",
    
    // Main content
    yourLocalTime: "현지 시간",
    searchPlaceholder: "도시 검색...",
    popularCities: "인기 도시",
    popular: "인기 도시",
    tools: "도구",
    
    // City page
    currentTimeIn: "현재 시간",
    timezone: "시간대",
    coordinates: "좌표",
    population: "인구",
    country: "국가",
    timeDifference: "시차",
    hoursAhead: "시간 빠름",
    hoursBehind: "시간 느림",
    sameTime: "같은 시간",
    nearbyCities: "인근 도시",
    about: "정보",
    
    // Tools
    convertTime: "시간 변환",
    planMeeting: "회의 계획",
    calculateTime: "시간 계산",
    apiDocumentation: "API 문서",
    
    // Footer
    aboutUs: "회사 소개",
    contact: "연락처",
    privacy: "개인정보",
    terms: "이용약관",
    rightsReserved: "모든 권리 보유",
    
    // Common
    date: "날짜",
    time: "시간",
    from: "시작",
    to: "종료",
    convert: "변환",
    reset: "초기화",
    share: "공유",
    copyLink: "링크 복사",
    copied: "복사됨!",
    noResults: "도시를 찾을 수 없음",
    
    // City descriptions
    cityDescription1: "{city}는 {country}에 위치하며 {timezone} 시간대로 운영됩니다. {population}명의 인구를 가진 이 지역의 주요 도시 중 하나입니다.",
    cityDescription2: "{city}의 현재 시간은 {timezone} 시간대를 따릅니다. 이 {country} 도시에는 약 {population}명의 주민이 있습니다.",
    cityDescription3: "좌표 {lat}°, {lng}°에 위치한 {city}는 {country}의 중요한 도시 중심지로 {population}명의 주민이 거주합니다.",
    
    // SEO
    metaDescription: "{city}의 현재 시간 확인. 시간대 정보, 시간 변환기 및 회의 계획이 포함된 세계 시계.",
    pageTitle: "{city} 현재 시간 - 세계 시계"
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translationsKO;
} else {
    window.translationsKO = translationsKO;
}