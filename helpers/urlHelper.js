export const getNewsLink = (slug) => `/news/${slug}`;
export const getNewsHref = (slug) => ({
    pathname: '/news/[slug]',
    query: {slug: slug},
});

export const getGalleryLink = (slug) => `/gallery/${slug}`;
export const getGalleryHref = (slug) => ({
    pathname: '/gallery/[slug]',
    query: {slug: slug},
});

export const getReviewsLink = (slug) => `/reviews/${slug}`;
export const getReviewsHref = (slug) => ({
    pathname: '/reviews/[slug]',
    query: {slug: slug},
});
