import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import MainBanner from '../components/mainBanner'
import Headlines from '../components/headlines'
import GalleryList from '../components/galleryList'

const HomePage = props => (
    <>
      <Layout>
      <div className="container">
      {props.mainBanner.length > 0 ?
      <>
        <div className="row">
          <div className="mt-1 col-md-12">
            <div>
              <MainBanner image = {props.mainBanner[0].fields.banner.fields} link = {props.mainBanner[0].fields.link} />
            </div>
          </div>
        </div>
      </> : null }
      <div className="row">
      <div className="col-md-6 col-lg-4 mt-3">
        <h5 className="bg-light font-weight-bold">Top Stories</h5>
        {props.topStories.length > 0
          ? props.topStories.map(p => (
              <Headlines category="news" date={p.fields.date} key={p.fields.title} image={p.fields.image.fields} title={p.fields.title} slug={p.fields.slug} />
            )) : null}
        </div>
        <div className="col-md-6 col-lg-4 mt-3">
          <h5 className="bg-light font-weight-bold">Big News</h5>
          {props.bigNews.length > 0
            ? props.bigNews.map(p => (
              <Headlines category="news" date={p.fields.date} key={p.fields.title} image={p.fields.image.fields} title={p.fields.title} slug={p.fields.slug} />
              )) : null}
        </div>
            <div className="col-md-6 col-lg-4 mt-3">
              <h5 className="bg-light font-weight-bold">Health</h5>
              {props.health.length > 0
                ? props.health.map(p => (
                  <Headlines category="health" date={p.fields.date} key={p.fields.title} image={p.fields.image.fields} title={p.fields.title} slug={p.fields.slug} />
                  ))
                : <p>Coming Soon</p>}
              </div>
              <div className="col-md-6 col-lg-4 mt-3">
                <h5 className="bg-light font-weight-bold">Reviews</h5>
                {props.reviews.length > 0
                  ? props.reviews.map(p => (
                    <Headlines category="reviews" date={p.fields.date} key={p.fields.title} image={p.fields.image.fields} title={p.fields.title} slug={p.fields.slug} />
                    ))
                  : null}
                </div>
                  <div className="col-md-6 col-lg-4 mt-3">
                    <h5 className="bg-light font-weight-bold">Entertainment</h5>
                    {props.etNews.length > 0
                      ? props.etNews.map(p => (
                          <Headlines category="entertainment" date={p.fields.date} key={p.fields.title} image={p.fields.image.fields} title={p.fields.title} slug={p.fields.slug}
                          />
                        )) : null}
                    </div>
                      <div className="col-md-6 col-lg-4 mt-3">
                        <h5 className="bg-light font-weight-bold">Auto News</h5>
                        {props.autoNews.length > 0
                          ? props.autoNews.map(p => (
                            <Headlines category="news" date={p.fields.date} key={p.fields.title} image={p.fields.image.fields} title={p.fields.title} slug={p.fields.slug} />
                            )) : null}
                      </div>
                      <div className="col-md-6 col-lg-4 mt-3">
                        <h5 className="bg-light font-weight-bold">Gallery</h5>
                        {props.gallery.length > 0
                          ? props.gallery.map(p => (
                              <GalleryList category="gallery" date={p.fields.date} key={p.fields.title} image={p.fields.images[0].fields} title={p.fields.title} slug={p.fields.slug}
                              />
                            )) : null}
                        </div>
            </div>
        </div>
        </Layout>
    </>
)


HomePage.getInitialProps = async context => {

  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })

  const mainBanner = await client.getEntries({content_type: "mainBanner"}).then((response) => response.items);
  const topStories = await client.getEntries({ content_type: "post", 'fields.category[match]': "top-stories", 'fields.language[ne]': "telugu", 'order': "-fields.date", 'limit': "4" }).then((response) => response.items);
  const bigNews = await client.getEntries({ content_type: "post", 'fields.category[match]': "big-news", 'fields.language[ne]': "telugu", 'order': "-fields.date", 'limit': "4"  }).then((response) => response.items);
  const reviews = await client.getEntries({ content_type: "post", 'fields.category[match]': "movie-reviews", 'fields.language[ne]': "telugu", 'order': "-fields.date", 'limit': "4"  }).then((response) => response.items);
  const autoNews = await client.getEntries({ content_type: "post", 'fields.category[match]': "auto-news", 'fields.language[ne]': "telugu", 'order': "-fields.date", 'limit': "4"  }).then((response) => response.items);
  const gallery = await client.getEntries({ content_type: "gallery", 'order': "-fields.date", 'limit': "4"  }).then((response) => response.items);
  const etNews = await client.getEntries({ content_type: "entertainment", 'order': "-fields.date", 'fields.language[ne]': "telugu", 'limit': "4"  }).then((response) => response.items);
  const health = await client.getEntries({ content_type: "health", 'order': "-fields.date", 'fields.language[ne]': "telugu", 'limit': "4"  }).then((response) => response.items);

  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }

  return { mainBanner, topStories, bigNews, reviews, gallery, etNews, health, autoNews }
}

export default HomePage
