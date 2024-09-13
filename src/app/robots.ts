import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // Prevent crawling API routes
          "/admin/", // Prevent crawling admin section
          "/private/", // Example of private or sensitive pages
          "/404", // Prevent crawling 404 error pages
          "/search", // Block search results from being indexed
        ],
      },
    ],
    sitemap: "https://www.dremable.com/sitemap.xml",
    host: "https://www.dremable.com", // Specify the site host
  };
}
