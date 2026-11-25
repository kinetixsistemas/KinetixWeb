export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  quote: string;
  href: string;
}

export const googleReviews: GoogleReview[] = [
  {
    id: 'dalleragency',
    author: 'dalleragency',
    rating: 5,
    quote: 'Excelente servicio, muy responsables, cumple con las exigencias.',
    href: 'https://share.google/zD7uIdzP15ugWSidQ',
  },
  {
    id: 'adonis-daller',
    author: 'Adonis Daller',
    rating: 5,
    quote:
      'Excelente servicio, me encantó cómo quedó mi página web. 100% responsables y cumple con las exigencias.',
    href: 'https://share.google/KFUxZOIsMvUY5SDGo',
  },
];
