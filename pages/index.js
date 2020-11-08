import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import AdPost from '../components/adPost'
import MainBanner from '../components/mainBanner'
import Headlines from '../components/headlines'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

function HomePage() {
  async function fetchTopStories() {
    const entries = await client.getEntries({ content_type: "post", 'fields.category[match]': "top-stories" })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  async function fetchBigNews() {
    const entries = await client.getEntries({ content_type: "post", 'fields.category[match]': "big-news" })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  async function fetchTrending() {
    const entries = await client.getEntries({ content_type: "post", 'fields.category[match]': "trending" })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  async function fetchReviews() {
    const entries = await client.getEntries({ content_type: "post", 'fields.category[match]': "movie-reviews" })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  async function fetchAds() {
    const entries = await client.getEntries({ content_type: "addPost" })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  async function fetchMainBanner() {
    const entries = await client.getEntries({ content_type: "mainBanner" })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [topStories, setTopStories] = useState([])
  const [bigNews, setBigNews] = useState([])
  const [trending, setTrending] = useState([])
  const [ads, setAds] = useState([])
  const [mainBanner, setMainBanner] = useState([])
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    async function getPosts() {
      const topStories = await fetchTopStories()
      setTopStories([...topStories])
      console.log(topStories);
      const bigNews = await fetchBigNews()
      setBigNews([...bigNews])
      console.log(bigNews);
      const trending = await fetchTrending()
      setTrending([...trending])
      console.log(trending);
      const allAds = await fetchAds()
      setAds([...allAds])
      console.log(allAds);
      const mainBanner = await fetchMainBanner()
      setMainBanner([...mainBanner])
      console.log(mainBanner);
      const reviews = await fetchReviews()
      setReviews([...reviews])
      console.log(reviews);
    }
    getPosts()
  }, [])

  return (
    <>
      <Layout>
      <div className="container">
      <div className="row">
      <div className="mt-1">
      <div>
      {mainBanner.length > 0
        ? <MainBanner
            image = {mainBanner[0].fields.banner.fields}
            link = {mainBanner[0].fields.link}
          /> : null
      }
      </div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-6 col-lg-4 mt-3">
      <div>
      {ads.length > 0
        ? <AdPost
            image = {ads[0].fields.adPost.fields}
            link = {ads[0].fields.link}
          /> : null
      }
      </div>
      <div className="mt-3">
      <h5 className="bg-light">Top Stories</h5>
      {topStories.length > 0
        ? topStories.map(p => (
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
        <div className="col-md-6 col-lg-4 mt-3">
          <div>
          {ads.length > 1
            ? <AdPost
                image = {ads[1].fields.adPost.fields}
                link = {ads[1].fields.link}
              /> : null
          }
          </div>
          <div className="mt-3">
          <h5 className="bg-light">Big News</h5>
          {bigNews.length > 0
            ? bigNews.map(p => (
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
            <div className="col-md-6 col-lg-4 mt-3">
              <div>
              {ads.length > 2
                ? <AdPost
                    image = {ads[2].fields.adPost.fields}
                    link = {ads[2].fields.link}
                  /> : null
              }
              </div>
              <div className="mt-3">
              <h5 className="bg-light">Trending</h5>
              {trending.length > 0
                ? trending.map(p => (
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
              <div className="col-md-6 col-lg-4 mt-3">
                <div className="mt-3">
                <h5 className="bg-light">Reviews</h5>
                {reviews.length > 0
                  ? reviews.map(p => (
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

export default HomePage
