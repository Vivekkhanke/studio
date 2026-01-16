import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  // IMPORTANT: Replace this with your actual domain when you deploy
  const siteUrl = 'https://sql-accelerator-demo.web.app';
  
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
