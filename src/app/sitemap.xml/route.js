import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://dsg7.fr";
  const urls = [
    "/",
    "/produits",
    "/about-us",
    "/contact",
    "/faq",
    "/aide-en-ligne",
    "/politique-de-cookies",
    "/mentions-legales",
    "/produits/calculateur-dc4",
    "/produits/calculateur-dc4-dc0",
    "/produits/calculateur-dw5",
    "/produits/mecatronique-dq200",
    "/produits/calculateur-dq200",
    "/produits/calculateur-dq381-382",
    "/produits/dsg7-dq381",
    "/produits/calculateur-dsg7-dq200",
    "/produits/mecatronique-dsg7-dq200",
    "/produits/mecatronique-dsg6-dq250",
    "/produits/captur-dc4",
    "/produits/clio-dc4",
    "/produits/clioRS-dc4",
    "/produits/megane-dc4",
    "/produits/scenic-dc4",
    "/produits/dw5-clio5",
    "/produits/dw5-megane5",
    "/produits/dw5-scenic5",
    "/produits/dc4-dc0-duster",
    "/produits/dc4-dc0-twingo3",
    "/produits/dc4-dc0-megane4",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${baseUrl}${url}</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
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
