import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mdsaifali.me/',
      images: [
        'https://mdsaifali.me/portfolioimg.png',
        'https://mdsaifali.me/og-image.png',
      ],
    },
  ];
}
