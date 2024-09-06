import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // disallow: ["/blog/create", "/community", "/magicians"],
      },
    ],
    sitemap: "https://www.dremable.com/sitemap.xml",
  };
}
