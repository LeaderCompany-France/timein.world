// Major cities data - 45 cities
const citiesData = [
    // North America
    { name: "New York", country: "United States", timezone: "America/New_York", lat: 40.7128, lng: -74.0060, population: 8336817, code: "new-york" },
    { name: "Los Angeles", country: "United States", timezone: "America/Los_Angeles", lat: 34.0522, lng: -118.2437, population: 3979576, code: "los-angeles" },
    { name: "Chicago", country: "United States", timezone: "America/Chicago", lat: 41.8781, lng: -87.6298, population: 2693976, code: "chicago" },
    { name: "Toronto", country: "Canada", timezone: "America/Toronto", lat: 43.6532, lng: -79.3832, population: 2731571, code: "toronto" },
    { name: "Mexico City", country: "Mexico", timezone: "America/Mexico_City", lat: 19.4326, lng: -99.1332, population: 8918653, code: "mexico-city" },
    { name: "Vancouver", country: "Canada", timezone: "America/Vancouver", lat: 49.2827, lng: -123.1207, population: 631486, code: "vancouver" },
    
    // Europe
    { name: "London", country: "United Kingdom", timezone: "Europe/London", lat: 51.5074, lng: -0.1278, population: 8982000, code: "london" },
    { name: "Paris", country: "France", timezone: "Europe/Paris", lat: 48.8566, lng: 2.3522, population: 2148271, code: "paris" },
    { name: "Berlin", country: "Germany", timezone: "Europe/Berlin", lat: 52.5200, lng: 13.4050, population: 3769495, code: "berlin" },
    { name: "Madrid", country: "Spain", timezone: "Europe/Madrid", lat: 40.4168, lng: -3.7038, population: 3223334, code: "madrid" },
    { name: "Rome", country: "Italy", timezone: "Europe/Rome", lat: 41.9028, lng: 12.4964, population: 2872800, code: "rome" },
    { name: "Amsterdam", country: "Netherlands", timezone: "Europe/Amsterdam", lat: 52.3676, lng: 4.9041, population: 821752, code: "amsterdam" },
    { name: "Barcelona", country: "Spain", timezone: "Europe/Madrid", lat: 41.3851, lng: 2.1734, population: 1620343, code: "barcelona" },
    { name: "Moscow", country: "Russia", timezone: "Europe/Moscow", lat: 55.7558, lng: 37.6173, population: 11920000, code: "moscow" },
    { name: "Istanbul", country: "Turkey", timezone: "Europe/Istanbul", lat: 41.0082, lng: 28.9784, population: 15029231, code: "istanbul" },
    
    // Asia
    { name: "Tokyo", country: "Japan", timezone: "Asia/Tokyo", lat: 35.6762, lng: 139.6503, population: 13960000, code: "tokyo" },
    { name: "Beijing", country: "China", timezone: "Asia/Shanghai", lat: 39.9042, lng: 116.4074, population: 21540000, code: "beijing" },
    { name: "Shanghai", country: "China", timezone: "Asia/Shanghai", lat: 31.2304, lng: 121.4737, population: 24870000, code: "shanghai" },
    { name: "Hong Kong", country: "China", timezone: "Asia/Hong_Kong", lat: 22.3193, lng: 114.1694, population: 7496981, code: "hong-kong" },
    { name: "Singapore", country: "Singapore", timezone: "Asia/Singapore", lat: 1.3521, lng: 103.8198, population: 5850342, code: "singapore" },
    { name: "Seoul", country: "South Korea", timezone: "Asia/Seoul", lat: 37.5665, lng: 126.9780, population: 9776000, code: "seoul" },
    { name: "Mumbai", country: "India", timezone: "Asia/Kolkata", lat: 19.0760, lng: 72.8777, population: 12478447, code: "mumbai" },
    { name: "Delhi", country: "India", timezone: "Asia/Kolkata", lat: 28.7041, lng: 77.1025, population: 11034555, code: "delhi" },
    { name: "Bangkok", country: "Thailand", timezone: "Asia/Bangkok", lat: 13.7563, lng: 100.5018, population: 8281099, code: "bangkok" },
    { name: "Dubai", country: "United Arab Emirates", timezone: "Asia/Dubai", lat: 25.2048, lng: 55.2708, population: 3137000, code: "dubai" },
    { name: "Kuala Lumpur", country: "Malaysia", timezone: "Asia/Kuala_Lumpur", lat: 3.1390, lng: 101.6869, population: 1768000, code: "kuala-lumpur" },
    { name: "Jakarta", country: "Indonesia", timezone: "Asia/Jakarta", lat: -6.2088, lng: 106.8456, population: 10770487, code: "jakarta" },
    
    // Oceania
    { name: "Sydney", country: "Australia", timezone: "Australia/Sydney", lat: -33.8688, lng: 151.2093, population: 5312163, code: "sydney" },
    { name: "Melbourne", country: "Australia", timezone: "Australia/Melbourne", lat: -37.8136, lng: 144.9631, population: 5078193, code: "melbourne" },
    { name: "Auckland", country: "New Zealand", timezone: "Pacific/Auckland", lat: -36.8485, lng: 174.7633, population: 1657200, code: "auckland" },
    { name: "Brisbane", country: "Australia", timezone: "Australia/Brisbane", lat: -27.4698, lng: 153.0251, population: 2514184, code: "brisbane" },
    { name: "Perth", country: "Australia", timezone: "Australia/Perth", lat: -31.9505, lng: 115.8605, population: 2059484, code: "perth" },
    
    // South America
    { name: "São Paulo", country: "Brazil", timezone: "America/Sao_Paulo", lat: -23.5505, lng: -46.6333, population: 12325232, code: "sao-paulo" },
    { name: "Rio de Janeiro", country: "Brazil", timezone: "America/Sao_Paulo", lat: -22.9068, lng: -43.1729, population: 6747815, code: "rio-de-janeiro" },
    { name: "Buenos Aires", country: "Argentina", timezone: "America/Argentina/Buenos_Aires", lat: -34.6037, lng: -58.3816, population: 2890151, code: "buenos-aires" },
    { name: "Lima", country: "Peru", timezone: "America/Lima", lat: -12.0464, lng: -77.0428, population: 9751717, code: "lima" },
    { name: "Santiago", country: "Chile", timezone: "America/Santiago", lat: -33.4489, lng: -70.6693, population: 5614000, code: "santiago" },
    { name: "Bogotá", country: "Colombia", timezone: "America/Bogota", lat: 4.7110, lng: -74.0721, population: 7674366, code: "bogota" },
    
    // Africa
    { name: "Cairo", country: "Egypt", timezone: "Africa/Cairo", lat: 30.0444, lng: 31.2357, population: 9500000, code: "cairo" },
    { name: "Lagos", country: "Nigeria", timezone: "Africa/Lagos", lat: 6.5244, lng: 3.3792, population: 14862000, code: "lagos" },
    { name: "Johannesburg", country: "South Africa", timezone: "Africa/Johannesburg", lat: -26.2041, lng: 28.0473, population: 5635127, code: "johannesburg" },
    { name: "Cape Town", country: "South Africa", timezone: "Africa/Johannesburg", lat: -33.9249, lng: 18.4241, population: 4617560, code: "cape-town" },
    { name: "Nairobi", country: "Kenya", timezone: "Africa/Nairobi", lat: -1.2921, lng: 36.8219, population: 4397073, code: "nairobi" },
    { name: "Casablanca", country: "Morocco", timezone: "Africa/Casablanca", lat: 33.5731, lng: -7.5898, population: 3359818, code: "casablanca" }
];
window.cityDatabase = citiesData;