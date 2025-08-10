<?php
/**
 * Sitemap dynamique pour TimeIn.World
 * Génère automatiquement le sitemap XML avec toutes les combinaisons langue/ville
 * 
 * À placer à la racine du site comme sitemap.php
 * Puis ajouter une règle dans .htaccess pour servir comme sitemap.xml
 */

// Configuration
$SITE_URL = 'https://timein.world';
$CURRENT_DATE = date('Y-m-d');

// Langues disponibles
$LANGUAGES = ['en', 'fr', 'es', 'de', 'pt', 'it', 'ru', 'zh', 'ja', 'ko', 'ar', 'hi'];

// Slugs URL par langue
$CITY_URL_SLUGS = [
    'en' => 'time-in',
    'fr' => 'heure-a',
    'es' => 'hora-en',
    'de' => 'zeit-in',
    'pt' => 'hora-em',
    'it' => 'ora-a',
    'ru' => 'vremya-v',
    'zh' => 'shijian',
    'ja' => 'jikan',
    'ko' => 'sigan',
    'ar' => 'alwaqt-fi',
    'hi' => 'samay'
];

// Liste complète des villes avec priorités SEO optimisées
// À copier dans votre fichier sitemap.php dans la variable $CITIES

$CITIES = [
    // ========== TIER 1 - TOP MONDIAL (0.95) ==========
    ['code' => 'new-york', 'priority' => 0.95],
    ['code' => 'london', 'priority' => 0.95],
    ['code' => 'tokyo', 'priority' => 0.95],
    ['code' => 'paris', 'priority' => 0.95],
    
    // ========== TIER 2 - HUBS MAJEURS (0.9) ==========
    ['code' => 'dubai', 'priority' => 0.9],
    ['code' => 'singapore', 'priority' => 0.9],
    ['code' => 'hong-kong', 'priority' => 0.9],
    ['code' => 'sydney', 'priority' => 0.9],
    ['code' => 'los-angeles', 'priority' => 0.9],
    ['code' => 'shanghai', 'priority' => 0.9],
    
    // ========== TIER 3 - GRANDES MÉTROPOLES (0.85) ==========
    ['code' => 'chicago', 'priority' => 0.85],
    ['code' => 'toronto', 'priority' => 0.85],
    ['code' => 'mexico-city', 'priority' => 0.85],
    ['code' => 'beijing', 'priority' => 0.85],
    ['code' => 'mumbai', 'priority' => 0.85],
    ['code' => 'delhi', 'priority' => 0.85],
    ['code' => 'moscow', 'priority' => 0.85],
    ['code' => 'berlin', 'priority' => 0.85],
    ['code' => 'madrid', 'priority' => 0.85],
    ['code' => 'rome', 'priority' => 0.85],
    ['code' => 'seoul', 'priority' => 0.85],
    ['code' => 'bangkok', 'priority' => 0.85],
    ['code' => 'istanbul', 'priority' => 0.85],
    ['code' => 'sao-paulo', 'priority' => 0.85],
    
    // ========== TIER 4 - VILLES IMPORTANTES (0.8) ==========
    ['code' => 'jakarta', 'priority' => 0.8],
    ['code' => 'manila', 'priority' => 0.8],
    ['code' => 'kuala-lumpur', 'priority' => 0.8],
    ['code' => 'cairo', 'priority' => 0.8],
    ['code' => 'lagos', 'priority' => 0.8],
    ['code' => 'johannesburg', 'priority' => 0.8],
    ['code' => 'rio-de-janeiro', 'priority' => 0.8],
    ['code' => 'buenos-aires', 'priority' => 0.8],
    ['code' => 'miami', 'priority' => 0.8],
    ['code' => 'san-francisco', 'priority' => 0.8],
    ['code' => 'boston', 'priority' => 0.8],
    ['code' => 'washington-dc', 'priority' => 0.8],
    ['code' => 'vancouver', 'priority' => 0.8],
    ['code' => 'montreal', 'priority' => 0.8],
    ['code' => 'barcelona', 'priority' => 0.8],
    ['code' => 'milan', 'priority' => 0.8],
    ['code' => 'frankfurt', 'priority' => 0.8],
    ['code' => 'munich', 'priority' => 0.8],
    ['code' => 'amsterdam', 'priority' => 0.8],
    ['code' => 'brussels', 'priority' => 0.8],
    ['code' => 'zurich', 'priority' => 0.8],
    ['code' => 'vienna', 'priority' => 0.8],
    ['code' => 'stockholm', 'priority' => 0.8],
    ['code' => 'copenhagen', 'priority' => 0.8],
    ['code' => 'dublin', 'priority' => 0.8],
    ['code' => 'lisbon', 'priority' => 0.8],
    ['code' => 'athens', 'priority' => 0.8],
    ['code' => 'tel-aviv', 'priority' => 0.8],
    ['code' => 'riyadh', 'priority' => 0.8],
    ['code' => 'doha', 'priority' => 0.8],
    ['code' => 'taipei', 'priority' => 0.8],
    ['code' => 'osaka', 'priority' => 0.8],
    ['code' => 'melbourne', 'priority' => 0.8],
    ['code' => 'auckland', 'priority' => 0.8],
    
    // ========== TIER 5 - CAPITALES & CENTRES RÉGIONAUX (0.75) ==========
    ['code' => 'atlanta', 'priority' => 0.75],
    ['code' => 'seattle', 'priority' => 0.75],
    ['code' => 'dallas', 'priority' => 0.75],
    ['code' => 'houston', 'priority' => 0.75],
    ['code' => 'phoenix', 'priority' => 0.75],
    ['code' => 'philadelphia', 'priority' => 0.75],
    ['code' => 'denver', 'priority' => 0.75],
    ['code' => 'las-vegas', 'priority' => 0.75],
    ['code' => 'orlando', 'priority' => 0.75],
    ['code' => 'calgary', 'priority' => 0.75],
    ['code' => 'ottawa', 'priority' => 0.75],
    ['code' => 'quebec-city', 'priority' => 0.75],
    ['code' => 'lima', 'priority' => 0.75],
    ['code' => 'bogota', 'priority' => 0.75],
    ['code' => 'santiago', 'priority' => 0.75],
    ['code' => 'caracas', 'priority' => 0.75],
    ['code' => 'quito', 'priority' => 0.75],
    ['code' => 'brasilia', 'priority' => 0.75],
    ['code' => 'montevideo', 'priority' => 0.75],
    ['code' => 'asuncion', 'priority' => 0.75],
    ['code' => 'manchester', 'priority' => 0.75],
    ['code' => 'birmingham', 'priority' => 0.75],
    ['code' => 'edinburgh', 'priority' => 0.75],
    ['code' => 'glasgow', 'priority' => 0.75],
    ['code' => 'lyon', 'priority' => 0.75],
    ['code' => 'marseille', 'priority' => 0.75],
    ['code' => 'nice', 'priority' => 0.75],
    ['code' => 'toulouse', 'priority' => 0.75],
    ['code' => 'hamburg', 'priority' => 0.75],
    ['code' => 'cologne', 'priority' => 0.75],
    ['code' => 'stuttgart', 'priority' => 0.75],
    ['code' => 'dusseldorf', 'priority' => 0.75],
    ['code' => 'valencia', 'priority' => 0.75],
    ['code' => 'seville', 'priority' => 0.75],
    ['code' => 'porto', 'priority' => 0.75],
    ['code' => 'naples', 'priority' => 0.75],
    ['code' => 'turin', 'priority' => 0.75],
    ['code' => 'florence', 'priority' => 0.75],
    ['code' => 'venice', 'priority' => 0.75],
    ['code' => 'oslo', 'priority' => 0.75],
    ['code' => 'helsinki', 'priority' => 0.75],
    ['code' => 'warsaw', 'priority' => 0.75],
    ['code' => 'prague', 'priority' => 0.75],
    ['code' => 'budapest', 'priority' => 0.75],
    ['code' => 'bucharest', 'priority' => 0.75],
    ['code' => 'sofia', 'priority' => 0.75],
    ['code' => 'kiev', 'priority' => 0.75],
    ['code' => 'minsk', 'priority' => 0.75],
    ['code' => 'abu-dhabi', 'priority' => 0.75],
    ['code' => 'kuwait-city', 'priority' => 0.75],
    ['code' => 'manama', 'priority' => 0.75],
    ['code' => 'muscat', 'priority' => 0.75],
    ['code' => 'amman', 'priority' => 0.75],
    ['code' => 'beirut', 'priority' => 0.75],
    ['code' => 'damascus', 'priority' => 0.75],
    ['code' => 'baghdad', 'priority' => 0.75],
    ['code' => 'tehran', 'priority' => 0.75],
    ['code' => 'karachi', 'priority' => 0.75],
    ['code' => 'islamabad', 'priority' => 0.75],
    ['code' => 'lahore', 'priority' => 0.75],
    ['code' => 'bangalore', 'priority' => 0.75],
    ['code' => 'chennai', 'priority' => 0.75],
    ['code' => 'kolkata', 'priority' => 0.75],
    ['code' => 'hyderabad', 'priority' => 0.75],
    ['code' => 'pune', 'priority' => 0.75],
    ['code' => 'ahmedabad', 'priority' => 0.75],
    ['code' => 'dhaka', 'priority' => 0.75],
    ['code' => 'colombo', 'priority' => 0.75],
    ['code' => 'kathmandu', 'priority' => 0.75],
    ['code' => 'almaty', 'priority' => 0.75],
    ['code' => 'tashkent', 'priority' => 0.75],
    ['code' => 'baku', 'priority' => 0.75],
    ['code' => 'tbilisi', 'priority' => 0.75],
    ['code' => 'yerevan', 'priority' => 0.75],
    ['code' => 'kyoto', 'priority' => 0.75],
    ['code' => 'nagoya', 'priority' => 0.75],
    ['code' => 'kobe', 'priority' => 0.75],
    ['code' => 'yokohama', 'priority' => 0.75],
    ['code' => 'sapporo', 'priority' => 0.75],
    ['code' => 'busan', 'priority' => 0.75],
    ['code' => 'guangzhou', 'priority' => 0.75],
    ['code' => 'shenzhen', 'priority' => 0.75],
    ['code' => 'chengdu', 'priority' => 0.75],
    ['code' => 'tianjin', 'priority' => 0.75],
    ['code' => 'wuhan', 'priority' => 0.75],
    ['code' => 'hanoi', 'priority' => 0.75],
    ['code' => 'ho-chi-minh-city', 'priority' => 0.75],
    ['code' => 'phnom-penh', 'priority' => 0.75],
    ['code' => 'vientiane', 'priority' => 0.75],
    ['code' => 'yangon', 'priority' => 0.75],
    ['code' => 'brisbane', 'priority' => 0.75],
    ['code' => 'perth', 'priority' => 0.75],
    ['code' => 'adelaide', 'priority' => 0.75],
    ['code' => 'wellington', 'priority' => 0.75],
    ['code' => 'christchurch', 'priority' => 0.75],
    
    // ========== TIER 6 - VILLES MOYENNES (0.7) ==========
    ['code' => 'san-diego', 'priority' => 0.7],
    ['code' => 'portland', 'priority' => 0.7],
    ['code' => 'sacramento', 'priority' => 0.7],
    ['code' => 'san-jose', 'priority' => 0.7],
    ['code' => 'austin', 'priority' => 0.7],
    ['code' => 'san-antonio', 'priority' => 0.7],
    ['code' => 'nashville', 'priority' => 0.7],
    ['code' => 'memphis', 'priority' => 0.7],
    ['code' => 'new-orleans', 'priority' => 0.7],
    ['code' => 'charlotte', 'priority' => 0.7],
    ['code' => 'raleigh', 'priority' => 0.7],
    ['code' => 'detroit', 'priority' => 0.7],
    ['code' => 'minneapolis', 'priority' => 0.7],
    ['code' => 'st-louis', 'priority' => 0.7],
    ['code' => 'kansas-city', 'priority' => 0.7],
    ['code' => 'milwaukee', 'priority' => 0.7],
    ['code' => 'cincinnati', 'priority' => 0.7],
    ['code' => 'columbus', 'priority' => 0.7],
    ['code' => 'indianapolis', 'priority' => 0.7],
    ['code' => 'baltimore', 'priority' => 0.7],
    ['code' => 'pittsburgh', 'priority' => 0.7],
    ['code' => 'tampa', 'priority' => 0.7],
    ['code' => 'jacksonville', 'priority' => 0.7],
    ['code' => 'winnipeg', 'priority' => 0.7],
    ['code' => 'edmonton', 'priority' => 0.7],
    ['code' => 'halifax', 'priority' => 0.7],
    ['code' => 'guadalajara', 'priority' => 0.7],
    ['code' => 'monterrey', 'priority' => 0.7],
    ['code' => 'tijuana', 'priority' => 0.7],
    ['code' => 'havana', 'priority' => 0.7],
    ['code' => 'santo-domingo', 'priority' => 0.7],
    ['code' => 'san-juan', 'priority' => 0.7],
    ['code' => 'panama-city', 'priority' => 0.7],
    ['code' => 'san-jose-cr', 'priority' => 0.7],
    ['code' => 'guatemala-city', 'priority' => 0.7],
    ['code' => 'san-salvador', 'priority' => 0.7],
    ['code' => 'tegucigalpa', 'priority' => 0.7],
    ['code' => 'managua', 'priority' => 0.7],
    ['code' => 'belize-city', 'priority' => 0.7],
    ['code' => 'kingston', 'priority' => 0.7],
    ['code' => 'port-au-prince', 'priority' => 0.7],
    ['code' => 'la-paz', 'priority' => 0.7],
    ['code' => 'medellin', 'priority' => 0.7],
    ['code' => 'cali', 'priority' => 0.7],
    ['code' => 'guayaquil', 'priority' => 0.7],
    ['code' => 'belo-horizonte', 'priority' => 0.7],
    ['code' => 'salvador', 'priority' => 0.7],
    ['code' => 'fortaleza', 'priority' => 0.7],
    ['code' => 'recife', 'priority' => 0.7],
    ['code' => 'porto-alegre', 'priority' => 0.7],
    ['code' => 'curitiba', 'priority' => 0.7],
    ['code' => 'cordoba', 'priority' => 0.7],
    ['code' => 'rosario', 'priority' => 0.7],
    ['code' => 'mendoza', 'priority' => 0.7],
    ['code' => 'valparaiso', 'priority' => 0.7],
    
    // ========== TIER 7 - VILLES SECONDAIRES (0.65) ==========
    ['code' => 'liverpool', 'priority' => 0.65],
    ['code' => 'leeds', 'priority' => 0.65],
    ['code' => 'bristol', 'priority' => 0.65],
    ['code' => 'cardiff', 'priority' => 0.65],
    ['code' => 'belfast', 'priority' => 0.65],
    ['code' => 'bordeaux', 'priority' => 0.65],
    ['code' => 'strasbourg', 'priority' => 0.65],
    ['code' => 'nantes', 'priority' => 0.65],
    ['code' => 'lille', 'priority' => 0.65],
    ['code' => 'montpellier', 'priority' => 0.65],
    ['code' => 'rennes', 'priority' => 0.65],
    ['code' => 'reims', 'priority' => 0.65],
    ['code' => 'tours', 'priority' => 0.65],
    ['code' => 'grenoble', 'priority' => 0.65],
    ['code' => 'dijon', 'priority' => 0.65],
    ['code' => 'angers', 'priority' => 0.65],
    ['code' => 'nimes', 'priority' => 0.65],
    ['code' => 'aix-en-provence', 'priority' => 0.65],
    ['code' => 'clermont-ferrand', 'priority' => 0.65],
    ['code' => 'le-havre', 'priority' => 0.65],
    ['code' => 'toulon', 'priority' => 0.65],
    ['code' => 'saint-etienne', 'priority' => 0.65],
    ['code' => 'rouen', 'priority' => 0.65],
    ['code' => 'nancy', 'priority' => 0.65],
    ['code' => 'metz', 'priority' => 0.65],
    ['code' => 'orleans', 'priority' => 0.65],
    ['code' => 'caen', 'priority' => 0.65],
    ['code' => 'amiens', 'priority' => 0.65],
    ['code' => 'limoges', 'priority' => 0.65],
    ['code' => 'brest', 'priority' => 0.65],
    ['code' => 'perpignan', 'priority' => 0.65],
    ['code' => 'besancon', 'priority' => 0.65],
    ['code' => 'mulhouse', 'priority' => 0.65],
    ['code' => 'pau', 'priority' => 0.65],
    ['code' => 'cannes', 'priority' => 0.65],
    ['code' => 'avignon', 'priority' => 0.65],
    ['code' => 'poitiers', 'priority' => 0.65],
    ['code' => 'la-rochelle', 'priority' => 0.65],
    ['code' => 'calais', 'priority' => 0.65],
    ['code' => 'dunkirk', 'priority' => 0.65],
    
    // Ajoutez d'autres villes si nécessaire pour atteindre 240
];

// Pages utilitaires
$UTILITY_PAGES = [
    ['path' => 'time-converter', 'priority' => 0.8, 'changefreq' => 'weekly'],
    ['path' => 'meeting-planner', 'priority' => 0.8, 'changefreq' => 'weekly'],
    ['path' => 'world', 'priority' => 0.7, 'changefreq' => 'daily'],
    ['path' => 'api', 'priority' => 0.6, 'changefreq' => 'monthly'],
    ['path' => 'about', 'priority' => 0.5, 'changefreq' => 'monthly'],
    ['path' => 'contact', 'priority' => 0.5, 'changefreq' => 'monthly']
];

// Headers XML
header('Content-Type: application/xml; charset=utf-8');

// Commencer le sitemap
echo '<?xml version="1.0" encoding="UTF-8"?>';
?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
<?php

// 1. Page d'accueil (racine)
?>
    <url>
        <loc><?php echo $SITE_URL; ?>/</loc>
        <lastmod><?php echo $CURRENT_DATE; ?></lastmod>
        <changefreq>hourly</changefreq>
        <priority>1.0</priority>
        <?php foreach ($LANGUAGES as $lang): ?>
        <xhtml:link rel="alternate" hreflang="<?php echo $lang; ?>" href="<?php echo $SITE_URL; ?>/<?php echo $lang; ?>/" />
        <?php endforeach; ?>
        <xhtml:link rel="alternate" hreflang="x-default" href="<?php echo $SITE_URL; ?>/" />
    </url>
<?php

// 2. Pages d'accueil pour chaque langue
foreach ($LANGUAGES as $lang) {
    ?>
    <url>
        <loc><?php echo $SITE_URL; ?>/<?php echo $lang; ?>/</loc>
        <lastmod><?php echo $CURRENT_DATE; ?></lastmod>
        <changefreq>hourly</changefreq>
        <priority>1.0</priority>
        <?php foreach ($LANGUAGES as $altLang): ?>
        <xhtml:link rel="alternate" hreflang="<?php echo $altLang; ?>" href="<?php echo $SITE_URL; ?>/<?php echo $altLang; ?>/" />
        <?php endforeach; ?>
    </url>
    <?php
}

// 3. Pages de villes (avec hreflang pour SEO multilingue)
foreach ($CITIES as $city) {
    foreach ($LANGUAGES as $lang) {
        $cityUrl = $SITE_URL . '/' . $lang . '/' . $CITY_URL_SLUGS[$lang] . '-' . $city['code'];
        ?>
    <url>
        <loc><?php echo $cityUrl; ?></loc>
        <lastmod><?php echo $CURRENT_DATE; ?></lastmod>
        <changefreq>always</changefreq>
        <priority><?php echo $city['priority']; ?></priority>
        <?php 
        // Ajouter les liens alternatifs pour le SEO multilingue
        foreach ($LANGUAGES as $altLang): 
            $altUrl = $SITE_URL . '/' . $altLang . '/' . $CITY_URL_SLUGS[$altLang] . '-' . $city['code'];
        ?>
        <xhtml:link rel="alternate" hreflang="<?php echo $altLang; ?>" href="<?php echo $altUrl; ?>" />
        <?php endforeach; ?>
    </url>
        <?php
    }
}

// 4. Pages utilitaires
foreach ($UTILITY_PAGES as $page) {
    foreach ($LANGUAGES as $lang) {
        ?>
    <url>
        <loc><?php echo $SITE_URL; ?>/<?php echo $lang; ?>/<?php echo $page['path']; ?></loc>
        <lastmod><?php echo $CURRENT_DATE; ?></lastmod>
        <changefreq><?php echo $page['changefreq']; ?></changefreq>
        <priority><?php echo $page['priority']; ?></priority>
    </url>
        <?php
    }
}
?>
</urlset>