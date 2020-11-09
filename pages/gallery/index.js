import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import AdPost from '../../components/adPost'
import GalleryList from '../../components/galleryList'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

function Gallerypage() {
  async function fetchGallery() {
    const entries = await client.getEntries({ content_type: "gallery" })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  async function fetchAds() {
    const entries = await client.getEntries({ content_type: "addPost" })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [gallery, setGallery] = useState([])
  const [ads, setAds] = useState([])

  useEffect(() => {
    async function getPosts() {
      const gallery = await fetchGallery()
      setGallery([...gallery])
      console.log(gallery);
      const allAds = await fetchAds()
      setAds([...allAds])
      console.log(allAds);
    }
    getPosts()
  }, [])

  return (
    <>
      <Layout>
      <div className="container">
      <div className="row">
      <div className="col-md-6 col-lg-8 mt-3">
      <div>
      {ads.length > 0
        ? <AdPost
            image = {ads[2].fields.adPost.fields}
            link = {ads[2].fields.link}
          /> : null
      }
      </div>
      <div className="mt-3">
      {gallery.length > 0
        ? <h5 className="bg-light">Gallery</h5> : null }
      {gallery.length > 0
        ? gallery.map(p => (
            <GalleryList
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.images[0].fields}
              title={p.fields.title}
              slug={p.fields.slug}
            />
          ))
        : null}
        </div>
        </div>
        </div>
        </div>
        </Layout>
    </>
  )
}

export default Gallerypage
