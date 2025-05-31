import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://dsg7.fr";
  const urls = [
    { path: "/", priority: 1.0 },
    { path: "/produits", priority: 0.9 },
    { path: "/about-us", priority: 0.9 },
    { path: "/contact", priority: 0.9 },
    { path: "/faq", priority: 0.7 },
    { path: "/aide-en-ligne", priority: 0.7 },
    { path: "/politique-de-cookies", priority: 0.7 },
    { path: "/mentions-legales", priority: 0.7 },
    { path: "/produits/calculateur-dc4", priority: 0.7 },
    { path: "/produits/calculateur-dc4-dc0", priority: 0.7 },
    { path: "/produits/calculateur-dw5", priority: 0.7 },
    { path: "/produits/mecatronique-dq200", priority: 0.7 },
    { path: "/produits/calculateur-dq200", priority: 0.7 },
    { path: "/produits/calculateur-dq381-382", priority: 0.7 },
    { path: "/produits/dsg7-dq381", priority: 0.7 },
    { path: "/produits/calculateur-dsg7-dq200", priority: 0.7 },
    { path: "/produits/mecatronique-dsg7-dq200", priority: 0.7 },
    { path: "/produits/mecatronique-dsg6-dq250", priority: 0.7 },
    { path: "/produits/captur-dc4", priority: 0.7 },
    { path: "/produits/clio-dc4", priority: 0.7 },
    { path: "/produits/clioRS-dc4", priority: 0.7 },
    { path: "/produits/megane-dc4", priority: 0.7 },
    { path: "/produits/scenic-dc4", priority: 0.7 },
    { path: "/produits/dw5-clio5", priority: 0.7 },
    { path: "/produits/dw5-megane4", priority: 0.7 },
    { path: "/produits/dw5-scenic5", priority: 0.7 },
    { path: "/produits/dc4-dc0-duster", priority: 0.7 },
    { path: "/produits/dc4-dc0-twingo3", priority: 0.7 },
    { path: "/produits/dc4-dc0-megane4", priority: 0.7 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        ({ path, priority }) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${priority}</priority>
      </url>
    `
      )
      .join("")}
  </urlset>
  `;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
