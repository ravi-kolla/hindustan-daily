
import React from 'react';

function Headlines({ date, image, title, slug, category }) {
  return (
    <>
      <a href={`${category}/${slug}`} className="headline-link">
      <div className="d-flex mb-2">
      <div className="headline-left">
      <img className="headline-left-img" src={image.file.url} alt={image.title} />
      </div>
      <div className="headline-right">
        <p>{title}</p>
      </div>
      </div>
    </a>
    </>
  )
}

export default Headlines
