
import React from 'react';
import Link from 'next/link';

//import { getNewsHref, getNewsLink } from '../helpers/urlHelper';

function EtNews({ date, image, title, slug }) {
  return (
    <>
    <Link href={`/entertainment/${slug}`} as={`/entertainment/${slug}`}>
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
    <hr />
    </>
  )
}

export default EtNews
