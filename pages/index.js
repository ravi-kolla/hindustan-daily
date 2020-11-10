import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import AdPost from '../components/adPost'
import MainBanner from '../components/mainBanner'
import Headlines from '../components/headlines'
import GalleryList from '../components/galleryList'
import ReviewsList from '../components/reviewsList'

const HomePage = props => (
    <>
      <Layout>
      <div className="container">
      <div className="row">
      <div className="mt-1">
      <div>
      {props.mainBanner.length > 0
        ? <MainBanner image = {props.mainBanner[0].fields.banner.fields} link = {props.mainBanner[0].fields.link} /> : null
      }
      </div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-6 col-lg-4 mt-3">
      <div>
      {props.ads.length > 0
        ? <AdPost image = {props.ads[0].fields.adPost.fields} link = {props.ads[0].fields.link} /> : null
      }
      </div>
      <div className="mt-3">
      <h5 className="bg-light">Top Stories</h5>
      {props.topStories.length > 0
        ? props.topStories.map(p => (
            <Headlines date={p.fields.date} key={p.fields.title} image={p.fields.image.fields} title={p.fields.title} slug={p.fields.slug} />
          )) : null}
        </div>
        </div>
        <div className="col-md-6 col-lg-4 mt-3">
          <div>
          {props.ads.length > 1
            ? <AdPost image = {props.ads[1].fields.adPost.fields} link = {props.ads[1].fields.link} /> : null
          }
          </div>
          <div className="mt-3">
          <h5 className="bg-light">Big News</h5>
          {props.bigNews.length > 0
            ? props.bigNews.map(p => (
              <Headlines date={p.fields.date} key={p.fields.title} image={p.fields.image.fields} title={p.fields.title} slug={p.fields.slug} />
              )) : null}
            </div>
          </div>
            <div className="col-md-6 col-lg-4 mt-3">
              <div>
              {props.ads.length > 2
                ? <AdPost image = {props.ads[2].fields.adPost.fields} link = {props.ads[2].fields.link} /> : null
              }
              </div>
              <div className="mt-3">
              <h5 className="bg-light">Trending</h5>
              {props.trending.length > 0
                ? props.trending.map(p => (
                  <Headlines date={p.fields.date} key={p.fields.title} image={p.fields.image.fields} title={p.fields.title} slug={p.fields.slug} />
                  ))
                : null}
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-3">
                <div className="mt-3">
                <h5 className="bg-light">Reviews</h5>
                {props.reviews.length > 0
                  ? props.reviews.map(p => (
                    <ReviewsList date={p.fields.date} key={p.fields.title} image={p.fields.image.fields} title={p.fields.title} slug={p.fields.slug} />
                    ))
                  : null}
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mt-3">
                  <div className="mt-3">
                  <h5 className="bg-light">Gallery</h5>
                  {props.gallery.length > 0
                    ? props.gallery.map(p => (
                        <GalleryList date={p.fields.date} key={p.fields.title} image={p.fields.images[0].fields} title={p.fields.title} slug={p.fields.slug}
                        />
                      )) : null}
                    </div>
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
  const ads = await client.getEntries({content_type: "addPost"}).then((response) => response.items);
  const topStories = await client.getEntries({ content_type: "post", 'fields.category[match]': "top-stories" }).then((response) => response.items);
  const bigNews = await client.getEntries({ content_type: "post", 'fields.category[match]': "big-news" }).then((response) => response.items);
  const trending = await client.getEntries({ content_type: "post", 'fields.category[match]': "trending" }).then((response) => response.items);
  const reviews = await client.getEntries({ content_type: "post", 'fields.category[match]': "movie-reviews" }).then((response) => response.items);
  const gallery = await client.getEntries({ content_type: "gallery" }).then((response) => response.items);

  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }

  return { mainBanner, ads, topStories, bigNews, trending, reviews, gallery }
}

export default HomePage
