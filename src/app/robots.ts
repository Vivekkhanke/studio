import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // IMPORTANT: Replace this with your actual domain when you deploy
  const siteUrl = 'https://sql-accelerator-demo.web.app'; 
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
