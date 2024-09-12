import type { MetadataRoute } from "next";
import { getAllBlog } from "@/actions/blog.action";

const base_url = "https://www.dremable.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getAllBlog({
    query: "",
    category: "",
    page: 1,
    limit: 1000,
  });

  const pages = [
    "about",
    "blog",
    "wedding_magicians/goa",
    "wedding_magicians/goa/makeup_artists",
    "wedding_magicians/goa/photographers",
    "wedding_magicians/goa/wedding_planners",
    "wedding_magicians/kolkata",
    "wedding_magicians/kolkata/makeup_artists",
    "wedding_magicians/kolkata/photographers",
    "wedding_magicians/kolkata/wedding_planners",
    "wedding_venues/goa",
    "wedding_venues/goa/banquet_halls",
    "wedding_venues/goa/luxury_wedding_venues",
    "wedding_venues/goa/wedding_resorts",
    "wedding_venues/kolkata",
    "wedding_venues/kolkata/banquet_halls",
    "wedding_venues/kolkata/luxury_wedding_venues",
    "wedding_venues/kolkata/wedding_resorts",
  ];

  const blogEntries: MetadataRoute.Sitemap = blogs?.data.map(
    ({ urlKey, date }: { urlKey: string; date: string }) => ({
      url: `${base_url}/blog/${urlKey}`,
      lastModified: new Date(date),
      changeFrequency: "daily",
      priority: 0.8,
    })
  );

  const pageEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${base_url}/${page}`,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: base_url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...pageEntries,
    ...blogEntries,
  ];
}
