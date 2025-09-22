import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Erich Malberg - Full Stack Developer Portfolio',
    short_name: 'Erich Malberg',
    description: 'Professional portfolio showcasing full-stack development projects, skills, and experience',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0d9488',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    categories: ['portfolio', 'developer', 'web development'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}