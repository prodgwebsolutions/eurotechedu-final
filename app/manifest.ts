import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/metadata';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'EuroTechEDU',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0066cc',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-IN',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
    categories: ['education', 'business'],
    shortcuts: [
      {
        name: 'Free Consultation',
        short_name: 'Consult',
        description: 'Get free study abroad consultation',
        url: '/#contact',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'MBBS Programs',
        short_name: 'MBBS',
        description: 'Explore MBBS abroad options',
        url: '/programs/mbbs',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Engineering Programs',
        short_name: 'Engineering',
        description: 'Explore Engineering abroad options',
        url: '/programs/engineering',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'MBA Programs',
        short_name: 'MBA',
        description: 'Explore MBA abroad options',
        url: '/programs/mba',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
