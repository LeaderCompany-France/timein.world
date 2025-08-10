// Script to generate sitemap.xml
// This would typically run on the server side or during build process

function generateSitemap() {
    const baseUrl = 'https://timein.world';
    const languages = ['en', 'fr', 'es', 'de', 'pt', 'it', 'ru', 'zh', 'ja', 'ko', 'ar', 'hi'];
    const staticPages = [
        { path: '', priority: '1.0', changefreq: 'daily' },
        { path: 'world', priority: '0.9', changefreq: 'weekly' },
        { path: 'time-converter', priority: '0.8', changefreq: 'weekly' },
        { path: 'meeting-planner', priority: '0.8', changefreq: 'weekly' },
        { path: 'time-calculator', priority: '0.7', changefreq: 'weekly' },
        { path: 'api', priority: '0.7', changefreq: 'monthly' }
    ];
    
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
    xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
    
    // Add home page for each language
    languages.forEach(lang => {
        xml += '  <url>\n';
        xml += `    <loc>${baseUrl}/${lang}/</loc>\n`;
        xml += '    <changefreq>daily</changefreq>\n';
        xml += '    <priority>1.0</priority>\n';
        
        // Add hreflang for all languages
        languages.forEach(altLang => {
            xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}/${altLang}/" />\n`;
        });
        xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en/" />\n`;
        
        xml += '  </url>\n';
    });
    
    // Add static pages for each language
    staticPages.forEach(page => {
        if (page.path === '') return; // Skip home page as it's already added
        
        languages.forEach(lang => {
            xml += '  <url>\n';
            xml += `    <loc>${baseUrl}/${lang}/${page.path}</loc>\n`;
            xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
            xml += `    <priority>${page.priority}</priority>\n`;
            xml += '  </url>\n';
        });
    });
    
    // Add city pages for each language
    const allCities = [...citiesData, ...capitalsData];
    allCities.forEach(city => {
        languages.forEach(lang => {
            const slug = cityUrlSlugs[lang];
            xml += '  <url>\n';
            xml += `    <loc>${baseUrl}/${lang}/${slug}-${city.code}</loc>\n`;
            xml += '    <changefreq>weekly</changefreq>\n';
            xml += '    <priority>0.7</priority>\n';
            
            // Add hreflang for city pages
            languages.forEach(altLang => {
                const altSlug = cityUrlSlugs[altLang];
                xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}/${altLang}/${altSlug}-${city.code}" />\n`;
            });
            
            xml += '  </url>\n';
        });
    });
    
    xml += '</urlset>';
    
    return xml;
}

// To use this script:
// 1. Run it in Node.js environment with access to the city data
// 2. Save the output to sitemap.xml
// 3. Upload to the root of your domain

// Example usage (Node.js):
/*
const fs = require('fs');
const sitemap = generateSitemap();
fs.writeFileSync('sitemap.xml', sitemap);
console.log('Sitemap generated successfully!');
*/