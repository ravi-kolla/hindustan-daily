import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import MainBanner from '../../components/mainBanner'
import Headlines from '../../components/headlines'
import GalleryList from '../../components/galleryList'

const TeluguPage = props => (
    <>
      <Layout>
      <div className="container">
      <div className="row">
      {props.teluguNews.length > 0 ?
      <div className="col-md-6 col-lg-4 mt-3">
        <h5 className="bg-light font-weight-bold">ప్రధానాంశాలు</h5>
        {props.teluguNews.length > 0
          ? props.teluguNews.map(p => (
              <Headlines category="telugu/news" date={p.fields.date} key={p.fields.title} image={p.fields.image.fields} title={p.fields.title} slug={p.fields.slug} />
            )) : null}
      </div> : null }
      {props.health.length > 0 ?
      <div className="col-md-6 col-lg-4 mt-3">
        <h5 className="bg-light font-weight-bold">ఆరోగ్యం</h5>
        {props.health.length > 0
          ? props.health.map(p => (
            <Headlines category="telugu/health" date={p.fields.date} key={p.fields.teluguTitle} image={p.fields.image.fields} title={p.fields.teluguTitle} slug={p.fields.slug} />
            ))
          : null}
      </div>  : null }
      {props.etNews.length > 0 ?
      <div className="col-md-6 col-lg-4 mt-3">
        <h5 className="bg-light font-weight-bold">సినిమా వార్తలు</h5>
        {props.etNews.length > 0
          ? props.etNews.map(p => (
              <Headlines category="telugu/entertainment" date={p.fields.date} key={p.fields.title} image={p.fields.image.fields} title={p.fields.title} slug={p.fields.slug}
              />
            )) : null}
        </div>  : null}
      {props.reviews.length > 0 ?
      <div className="col-md-6 col-lg-4 mt-3">
        <h5 className="bg-light font-weight-bold">సినిమ రీవ్యూా</h5>
        {props.reviews.length > 0
          ? props.reviews.map(p => (
            <Headlines category="telugu/reviews" date={p.fields.date} key={p.fields.title} image={p.fields.image.fields} title={p.fields.title} slug={p.fields.slug} />
            ))
          : null}
        </div> : null}
        {props.gallery.length > 0 ?
          <div className="col-md-6 col-lg-4 mt-3">
            <h5 className="bg-light font-weight-bold">ఫోటోలు</h5>
            {props.gallery.length > 0
              ? props.gallery.map(p => (
                  <GalleryList category="telugu/gallery" date={p.fields.date} key={p.fields.title} image={p.fields.images[0].fields} title={p.fields.teluguTitle} slug={p.fields.slug} />
                )) : null}
            </div> : null}
          </div>
        </div>
        </Layout>
    </>
)


TeluguPage.getInitialProps = async context => {

  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })

  const teluguNews = await client.getEntries({ content_type: "post", 'fields.category[ne]': "movie-reviews", 'fields.language[match]': "telugu", 'order': "-fields.date", 'limit': "5" }).then((response) => response.items);
  const reviews = await client.getEntries({ content_type: "post", 'fields.category[match]': "movie-reviews", 'fields.language[match]': "telugu", 'order': "-fields.date", 'limit': "5"  }).then((response) => response.items);
  const health = await client.getEntries({ content_type: "health", 'fields.teluguDescription[exists]': true, 'order': "-fields.date", 'limit': "5"  }).then((response) => response.items);
  const etNews = await client.getEntries({ content_type: "entertainment", 'fields.language[match]': "telugu", 'order': "-fields.date", 'limit': "5"  }).then((response) => response.items);
  const gallery = await client.getEntries({ content_type: "gallery", 'order': "-fields.date", 'limit': "5"  }).then((response) => response.items);

  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }

  return { teluguNews, reviews, gallery, etNews, health }
}

export default TeluguPage
