import React from 'react';
import Link from 'next/link';

import { getGalleryHref, getGalleryLink } from '../helpers/urlHelper';

function GalleryList({ date, image, title, slug }) {
  return (
    <Link href={getGalleryHref(slug)} as={getGalleryLink(slug)}>
      <a className="headline-link">
      <div className="d-flex mb-2">
      <div className="headline-left">
      <img className="headline-left-img" src={image.file.url} alt={image.title} />
      </div>
      <div className="headline-right">
        <p>{title}</p>
      </div>
      </div>
    </a>
    </Link>
  )
}

export default GalleryList
