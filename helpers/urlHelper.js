export const getNewsLink = (slug) => `/news/${slug}`;
export const getNewsHref = (slug) => ({
    pathname: '/news/[slug]',
    query: {slug: slug},
});
