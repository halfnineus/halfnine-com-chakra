function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="http://www.w3.org/1999/xhtml">
      <url>
        <loc>https://ochoa.pro/</loc>
        <xhtml:link href="https://ochoa.pro/es/" hreflang="es" rel="alternate" />
      </url>
      <url>
        <loc>https://ochoa.pro/about</loc>
        <xhtml:link href="https://ochoa.pro/es/about" hreflang="es" rel="alternate" />
      </url>
      <!-- services -->
      <url>
        <loc>https://ochoa.pro/services</loc>
        <xhtml:link href="https://ochoa.pro/es/services" hreflang="es" rel="alternate" />
      </url>
      <url>
        <loc>https://ochoa.pro/services/development</loc>
        <xhtml:link href="https://ochoa.pro/es/services/development" hreflang="es" rel="alternate" />
      </url>
      <url>
        <loc>https://ochoa.pro/services/digitalization</loc>
        <xhtml:link href="https://ochoa.pro/es/services/digitalization" hreflang="es" rel="alternate" />
      </url>
      <url>
        <loc>https://ochoa.pro/services/consultation</loc>
        <xhtml:link href="https://ochoa.pro/es/services/consultation" hreflang="es" rel="alternate" />
      </url>
      <!-- industries -->
      <url>
        <loc>https://ochoa.pro/industries/</loc>
        <xhtml:link href="https://ochoa.pro/es/industries/" hreflang="es" rel="alternate" />
      </url>
      <url>
        <loc>https://ochoa.pro/industries/manufacturing-and-production</loc>
        <xhtml:link href="https://ochoa.pro/es/industries/manufacturing-and-production" hreflang="es" rel="alternate" />
      </url>
      <url>
        <loc>https://ochoa.pro/industries/media-and-entertainment</loc>
        <xhtml:link href="https://ochoa.pro/es/industries/media-and-entertainment" hreflang="es" rel="alternate" />
      </url>
      <url>
        <loc>https://ochoa.pro/industries/security-and-safety</loc>
        <xhtml:link href="https://ochoa.pro/es/industries/security-and-safety" hreflang="es" rel="alternate" />
      </url>
      <!-- our-approach -->
      <url>
        <loc>https://ochoa.pro/our-approach</loc>
        <xhtml:link href="https://ochoa.pro/es/our-approach" hreflang="es" rel="alternate" />
      </url>
      <url>
        <loc>https://ochoa.pro/our-approach/agile</loc>
        <xhtml:link href="https://ochoa.pro/es/our-approach/agile" hreflang="es" rel="alternate" />
      </url>
      <url>
        <loc>https://ochoa.pro/our-approach/roi</loc>
        <xhtml:link href="https://ochoa.pro/es/our-approach/roi" hreflang="es" rel="alternate" />
      </url>
      <url>
        <loc>https://ochoa.pro/our-approach/pdaas</loc>
        <xhtml:link href="https://ochoa.pro/es/our-approach/pdaas" hreflang="es" rel="alternate" />
      </url>
      <!-- pages -->
      <url>
        <loc>https://ochoa.pro/pages/digital-transformation-services-in-orlando-florida</loc>
        <xhtml:link href="https://ochoa.pro/es/pages/digital-transformation-services-in-orlando-florida" hreflang="es" rel="alternate" />
      </url>
      <url>
        <loc>https://ochoa.pro/pages/iot-outsourcing-services-in-orlando-florida</loc>
        <xhtml:link href="https://ochoa.pro/es/pages/iot-outsourcing-services-in-orlando-florida" hreflang="es" rel="alternate" />
      </url>
    </urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  // We make an API call to gather the URLs for our site


  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;