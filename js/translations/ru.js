// Russian translations
const translationsRU = {
    // Header
    worldClock: "Мировые Часы",
    currentTime: "Текущее Время",
    
    // Navigation
    home: "Главная",
    allCities: "Все Города",
    timeConverter: "Конвертер Времени",
    meetingPlanner: "Планировщик Встреч",
    timeCalculator: "Калькулятор Времени",
    api: "API",
    
    // Main content
    yourLocalTime: "Ваше Местное Время",
    searchPlaceholder: "Поиск города...",
    popularCities: "Популярные Города",
    popular: "Популярные Города",
    tools: "Инструменты",
    
    // City page
    currentTimeIn: "Текущее время в",
    timezone: "Часовой пояс",
    coordinates: "Координаты",
    population: "Население",
    country: "Страна",
    timeDifference: "Разница во времени",
    hoursAhead: "часов вперед",
    hoursBehind: "часов назад",
    sameTime: "Одинаковое время",
    nearbyCities: "Ближайшие Города",
    about: "О городе",
    
    // Tools
    convertTime: "Конвертировать Время",
    planMeeting: "Планировать Встречу",
    calculateTime: "Рассчитать Время",
    apiDocumentation: "Документация API",
    
    // Footer
    aboutUs: "О Нас",
    contact: "Контакты",
    privacy: "Конфиденциальность",
    terms: "Условия",
    rightsReserved: "Все права защищены",
    
    // Common
    date: "Дата",
    time: "Время",
    from: "Из",
    to: "В",
    convert: "Конвертировать",
    reset: "Сбросить",
    share: "Поделиться",
    copyLink: "Копировать Ссылку",
    copied: "Скопировано!",
    noResults: "Города не найдены",
    
    // City descriptions
    cityDescription1: "{city} находится в {country} и работает в часовом поясе {timezone}. С населением {population}, это один из примечательных городов региона.",
    cityDescription2: "Текущее время в {city} соответствует часовому поясу {timezone}. Этот город в {country} насчитывает около {population} жителей.",
    cityDescription3: "Расположенный на координатах {lat}°, {lng}°, {city} является важным городским центром в {country} с населением {population} человек.",
    
    // SEO
    metaDescription: "Узнайте текущее время в {city}. Мировые часы с информацией о часовых поясах, конвертером и планировщиком встреч.",
    pageTitle: "Текущее Время в {city} - Мировые Часы"
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translationsRU;
} else {
    window.translationsRU = translationsRU;
}