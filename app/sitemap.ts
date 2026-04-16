import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.kulmipay.com";

  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    {
      path: "/accept-online-payments",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/business", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/business-payments",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/mpesa-api", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/split-payments",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/security", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/hiring", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/referrals", priority: 0.7, changeFrequency: "monthly" as const },
    {
      path: "/branding-and-trust-badges",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    { path: "/exchange", priority: 0.6, changeFrequency: "daily" as const },
    { path: "/paybills", priority: 0.6, changeFrequency: "monthly" as const },
    {
      path: "/swift-codes",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/chargebacks",
      priority: 0.5,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/troubleshooting",
      priority: 0.5,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/privacy-policy",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
