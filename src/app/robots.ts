import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/images/', '/css/', '/js/'],
      disallow: ['/private/', '/admin/', '/api/', '_next/'],
    },
    sitemap: process.env.NEXT_PUBLIC_SITE_URL + '/sitemap.xml',
  }
}