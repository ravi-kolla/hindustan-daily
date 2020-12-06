import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import GalleryList from '../../components/galleryList'

const Gallerypage = props => (
    <>
      <Layout>
      <div className="container">
      <div className="row">
      <div className="col-md-6 col-lg-8 mt-3">
      {props.gallery.length > 0
        ? <h5 className="bg-light">Gallery</h5> : null }
      {props.gallery.length > 0
        ? props.gallery.map(p => (
            <GalleryList
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.images[0].fields}
              title={p.fields.title}
              slug={p.fields.slug}
              category="gallery"
            />
          ))
        : null}
        </div>
        </div>
        </div>
        </Layout>
    </>
)

Gallerypage.getInitialProps = async context => {

  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })

  const ads = await client.getEntries({content_type: "addPost"}).then((response) => response.items);
  const gallery = await client.getEntries({ content_type: "gallery"}).then((response) => response.items);

  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }

  return { ads, gallery }
}

export default Gallerypage
