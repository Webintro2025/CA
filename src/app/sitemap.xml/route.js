// src/app/sitemap.xml/route.js
import { locations } from "@/marketplace";
import servicesData from "@/servicesData";

export async function GET() {
  // List your static pages
  const staticPages = [
    '', // Home
    'about',
    'contact',
    'services',
    'sitemap',
  ];

  // Dynamically generate all service URLs
  const dynamicServices = servicesData.map(service => {
    // Use the service title for the query param, encode for URL
    const name = encodeURIComponent(service.title.replace(/ in India$/i, ""));
    return `services?name=${name}`;
  });

  // Dynamic location URLs
  const dynamicLocations = locations.map(
    (city) => `in/${encodeURIComponent(city.toLowerCase().replace(/\s+/g, '-'))}`
  );

  const baseUrl = 'https://eazy-tax.in/';

  const urls = [
    ...staticPages.map((page) => `${baseUrl}${page}`),
    ...dynamicServices.map((service) => `${baseUrl}${service}`),
    ...dynamicLocations.map((loc) => `${baseUrl}${loc}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `    <url>\n      <loc>${url}</loc>\n      <changefreq>weekly</changefreq>\n      <priority>0.8</priority>\n    </url>`
    )
    .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
