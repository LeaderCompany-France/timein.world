// Chinese (Simplified) translations
const translationsZH = {
    // Header
    worldClock: "世界时钟",
    currentTime: "当前时间",
    
    // Navigation
    home: "首页",
    allCities: "所有城市",
    timeConverter: "时间转换器",
    meetingPlanner: "会议计划器",
    timeCalculator: "时间计算器",
    api: "API",
    
    // Main content
    yourLocalTime: "您的本地时间",
    searchPlaceholder: "搜索城市...",
    popularCities: "热门城市",
    popular: "热门城市",
    tools: "工具",
    
    // City page
    currentTimeIn: "当前时间在",
    timezone: "时区",
    coordinates: "坐标",
    population: "人口",
    country: "国家",
    timeDifference: "时差",
    hoursAhead: "小时快",
    hoursBehind: "小时慢",
    sameTime: "相同时间",
    nearbyCities: "附近城市",
    about: "关于",
    
    // Tools
    convertTime: "转换时间",
    planMeeting: "计划会议",
    calculateTime: "计算时间",
    apiDocumentation: "API文档",
    
    // Footer
    aboutUs: "关于我们",
    contact: "联系方式",
    privacy: "隐私政策",
    terms: "使用条款",
    rightsReserved: "版权所有",
    
    // Common
    date: "日期",
    time: "时间",
    from: "从",
    to: "到",
    convert: "转换",
    reset: "重置",
    share: "分享",
    copyLink: "复制链接",
    copied: "已复制！",
    noResults: "未找到城市",
    
    // City descriptions
    cityDescription1: "{city}位于{country}，使用{timezone}时区。拥有{population}人口，是该地区的重要城市之一。",
    cityDescription2: "{city}的当前时间遵循{timezone}时区。这座{country}的城市大约有{population}居民。",
    cityDescription3: "位于坐标{lat}°，{lng}°的{city}是{country}的重要城市中心，拥有{population}居民。",
    
    // SEO
    metaDescription: "查看{city}的当前时间。世界时钟提供时区信息、时间转换器和会议计划器。",
    pageTitle: "{city}当前时间 - 世界时钟"
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translationsZH;
} else {
    window.translationsZH = translationsZH;
}