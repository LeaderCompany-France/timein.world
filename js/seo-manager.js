// SEO Manager for dynamic meta tags and structured data
class SEOManager {
    constructor() {
        this.baseUrl = 'https://timein.world';
        this.defaultImage = `${this.baseUrl}/images/og-image.png`;
    }
    
    updateMeta(pageType, cityCode = null) {
        const lang = window.state?.currentLang || 'en';
        const t = translations[lang];
        
        switch (pageType) {
            case 'home':
                this.setHomeMeta(lang, t);
                break;
            case 'city':
                this.setCityMeta(cityCode, lang, t);
                break;
            case 'allCities':
                this.setAllCitiesMeta(lang, t);
                break;
            case 'timeConverter':
                this.setToolMeta('timeConverter', lang, t);
                break;
            case 'meetingPlanner':
                this.setToolMeta('meetingPlanner', lang, t);
                break;
            case 'api':
                this.setApiMeta(lang, t);
                break;
            case '404':
                this.set404Meta(lang);
                break;
            default:
                this.setDefaultMeta(lang, t);
        }
        
        // Update hreflang tags
        this.updateHreflangTags(pageType, cityCode);
    }
    
    setHomeMeta(lang, t) {
        const title = `${t.worldClock} - ${t.currentTime} in 240+ Cities | TimeIn.World`;
        const description = `Check current time in 240+ cities worldwide. Real-time world clock with time zones, time converter, meeting planner. Available in 12 languages.`;
        
        this.updateBasicMeta(title, description);
        this.updateOpenGraph(title, description, this.baseUrl);
        this.updateStructuredData({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "TimeIn.World",
            "description": description,
            "url": this.baseUrl,
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
            }
        });
    }
    
    setCityMeta(cityCode, lang, t) {
        const city = cityDatabase.find(c => c.code === cityCode);
        if (!city) return;
        
        const title = t.pageTitle.replace('{city}', city.name);
        const description = t.metaDescription.replace('{city}', city.name);
        const url = `${this.baseUrl}/${lang}/${cityUrlSlugs[lang]}-${cityCode}`;
        
        this.updateBasicMeta(title, description);
        this.updateOpenGraph(title, description, url);
        
        // Structured data for city
        this.updateStructuredData({
            "@context": "https://schema.org",
            "@type": "Place",
            "name": city.name,
            "description": `Current time and timezone information for ${city.name}, ${city.country}`,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": city.name,
                "addressCountry": city.country
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": city.lat,
                "longitude": city.lng
            },
            "url": url
        });
        
        // Add FAQ schema for common questions
        this.addFAQSchema(city, lang);
    }
    
    setAllCitiesMeta(lang, t) {
        const title = `${t.allCities} - World Clock Directory | TimeIn.World`;
        const description = `Browse all 240+ cities with real-time clocks. Complete directory of world time zones organized by continent.`;
        
        this.updateBasicMeta(title, description);
        this.updateOpenGraph(title, description, `${this.baseUrl}/world`);
    }
    
    setToolMeta(tool, lang, t) {
        const titles = {
            timeConverter: `${t.timeConverter} - Convert Time Between Cities | TimeIn.World`,
            meetingPlanner: `${t.meetingPlanner} - Schedule Across Time Zones | TimeIn.World`
        };
        
        const descriptions = {
            timeConverter: `Convert time between any two cities instantly. Free time zone converter supporting 240+ cities worldwide.`,
            meetingPlanner: `Find the best meeting time across multiple time zones. Free meeting scheduler for international teams.`
        };
        
        const title = titles[tool];
        const description = descriptions[tool];
        
        this.updateBasicMeta(title, description);
        this.updateOpenGraph(title, description, `${this.baseUrl}/${tool.toLowerCase()}`);
    }
    
    setApiMeta(lang, t) {
        const title = `World Clock API - Free Time Zone API | TimeIn.World`;
        const description = `Free REST API for world clock data. Get current time, convert between time zones, access 240+ cities data.`;
        
        this.updateBasicMeta(title, description);
        this.updateOpenGraph(title, description, `${this.baseUrl}/api`);
    }
    
    set404Meta(lang) {
        const title = `Page Not Found - TimeIn.World`;
        const description = `The page you're looking for doesn't exist. Return to the world clock homepage.`;
        
        this.updateBasicMeta(title, description);
        this.setMetaTag('robots', 'noindex, nofollow');
    }
    
    setDefaultMeta(lang, t) {
        const title = `${t.worldClock} - TimeIn.World`;
        const description = `World clock showing current time in cities worldwide. Time converter and meeting planner included.`;
        
        this.updateBasicMeta(title, description);
    }
    
    // Helper methods
    updateBasicMeta(title, description) {
        document.title = title;
        this.setMetaTag('description', description);
    }
    
    updateOpenGraph(title, description, url) {
        this.setMetaTag('og:title', title, 'property');
        this.setMetaTag('og:description', description, 'property');
        this.setMetaTag('og:url', url, 'property');
        this.setMetaTag('og:type', 'website', 'property');
        this.setMetaTag('og:image', this.defaultImage, 'property');
        
        // Twitter Card
        this.setMetaTag('twitter:card', 'summary_large_image', 'property');
        this.setMetaTag('twitter:title', title, 'property');
        this.setMetaTag('twitter:description', description, 'property');
        this.setMetaTag('twitter:image', this.defaultImage, 'property');
    }
    
    updateStructuredData(data) {
        // Remove existing structured data
        const existing = document.querySelector('script[type="application/ld+json"][data-dynamic]');
        if (existing) {
            existing.remove();
        }
        
        // Add new structured data
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-dynamic', 'true');
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
    }
    
    addFAQSchema(city, lang) {
        const t = translations[lang];
        const faqData = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": `What time is it in ${city.name}?`,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": `The current time in ${city.name} is displayed above in real-time. ${city.name} is in the ${city.timezone} timezone.`
                    }
                },
                {
                    "@type": "Question",
                    "name": `What is the time difference between ${city.name} and my location?`,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": `The time difference is calculated automatically based on your local timezone and displayed on this page.`
                    }
                }
            ]
        };
        
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-faq', 'true');
        script.textContent = JSON.stringify(faqData);
        document.head.appendChild(script);
    }
    
    updateHreflangTags(pageType, cityCode) {
        // Remove existing hreflang tags
        document.querySelectorAll('link[hreflang]').forEach(tag => tag.remove());
        
        // Generate URLs for all languages
        const urls = this.generateMultilingualUrls(pageType, cityCode);
        
        // Add hreflang tags
        Object.entries(urls).forEach(([lang, url]) => {
            const link = document.createElement('link');
            link.rel = 'alternate';
            link.hreflang = lang;
            link.href = url;
            document.head.appendChild(link);
        });
        
        // Add x-default
        const defaultLink = document.createElement('link');
        defaultLink.rel = 'alternate';
        defaultLink.hreflang = 'x-default';
        defaultLink.href = urls.en;
        document.head.appendChild(defaultLink);
    }
    
    generateMultilingualUrls(pageType, cityCode) {
        const urls = {};
        const languages = Object.keys(translations);
        
        languages.forEach(lang => {
            switch (pageType) {
                case 'home':
                    urls[lang] = `${this.baseUrl}/${lang}/`;
                    break;
                case 'city':
                    urls[lang] = `${this.baseUrl}/${lang}/${cityUrlSlugs[lang]}-${cityCode}`;
                    break;
                case 'allCities':
                    urls[lang] = `${this.baseUrl}/${lang}/world`;
                    break;
                default:
                    urls[lang] = `${this.baseUrl}/${lang}/${pageType}`;
            }
        });
        
        return urls;
    }
    
    setMetaTag(name, content, attributeName = 'name') {
        let tag = document.querySelector(`meta[${attributeName}="${name}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute(attributeName, name);
            document.head.appendChild(tag);
        }
        tag.content = content;
    }
    
    // Generate sitemap dynamically (for reference)
    generateSitemapXML() {
        const languages = Object.keys(translations);
        const pages = ['', 'world', 'time-converter', 'meeting-planner', 'api'];
        const urls = [];
        
        // Add static pages
        languages.forEach(lang => {
            pages.forEach(page => {
                const loc = page ? `${this.baseUrl}/${lang}/${page}` : `${this.baseUrl}/${lang}/`;
                urls.push({
                    loc,
                    changefreq: 'weekly',
                    priority: page === '' ? '1.0' : '0.8'
                });
            });
        });
        
        // Add city pages
        cityDatabase.forEach(city => {
            languages.forEach(lang => {
                urls.push({
                    loc: `${this.baseUrl}/${lang}/${cityUrlSlugs[lang]}-${city.code}`,
                    changefreq: 'weekly',
                    priority: '0.7'
                });
            });
        });
        
        // Generate XML
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
        
        return xml;
    }
}

// Create and export SEO manager instance
const SEOManagerInstance = new SEOManager();
window.SEOManager = SEOManagerInstance;