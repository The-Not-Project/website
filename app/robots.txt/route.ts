export function GET() {
  const body = `
# *
User-agent: *
Allow: /

# *
User-agent: *
Disallow: /admin

# Host
Host: https://www.thenotproject.com

# Sitemaps
Sitemap: https://www.thenotproject.com/sitemap.xml
  `.trim();

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
