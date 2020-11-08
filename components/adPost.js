import React from 'react'
import Link from 'next/link'

function adPost({link,image}) {
  return(
    <Link href={link} as={link}>
      <a target="_blank">
      <img className="border sm-ad-banner img-fluid" src={image.file.url} alt={image.title} />
    </a>
    </Link>
  )
}

export default adPost;
