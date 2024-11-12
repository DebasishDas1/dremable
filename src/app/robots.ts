import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // disallow: [
        //   "/api/",
        //   "/admin/",
        //   "/private/",
        //   "/404",
        //   "/search",
        // ],
      },
    ],
    sitemap: "https://www.dremable.com/sitemap.xml/",
    host: "https://www.dremable.com/",
  };
}
