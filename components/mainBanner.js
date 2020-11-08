import React from 'react'
import Link from 'next/link'

function MainBanner({link,image}) {
  return(
      <img className="main-banner-img img-fluid" src={image.file.url} alt={image.title} />
  )
}

export default MainBanner;
