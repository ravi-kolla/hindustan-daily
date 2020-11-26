export const getGalleryLink = (slug) => `/gallery/${slug}`;
export const getGalleryHref = (slug) => ({
    pathname: '/gallery/[slug]',
    query: {slug: slug},
});
