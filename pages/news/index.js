import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import AdPost from '../../components/adpost'
import Headlines from '../../components/headlines'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

function Newspage() {
  async function fetchNews() {
    const entries = await client.getEntries({ content_type: "post" })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  async function fetchAds() {
    const entries = await client.getEntries({ content_type: "addPost" })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [news, setNews] = useState([])
  const [ads, setAds] = useState([])

  useEffect(() => {
    async function getPosts() {
      const news = await fetchNews()
      setNews([...news])
      console.log(news);
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
            image = {ads[0].fields.adPost.fields}
            link = {ads[0].fields.link}
          /> : null
      }
      </div>
      <div className="mt-3">
      <h5 className="bg-light">News</h5>
      {news.length > 0
        ? news.map(p => (
            <Headlines
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.image.fields}
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

export default Newspage
