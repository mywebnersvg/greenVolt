import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GreenVolt Energie',
    short_name: 'GreenVolt',
    description: 'GreenVolt Energie - Smarte Solartechnik',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A1210',
    theme_color: '#101E33',
  };
}
