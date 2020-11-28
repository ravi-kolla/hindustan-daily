import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import AdPost from '../../components/adPost'
import Headlines from '../../components/headlines'

const Reviewspage = props => (
    <>
      <Layout>
      <div className="container">
      <div className="row">
      <div className="col-md-6 col-lg-8 mt-3">
      <div>
      <h5 className="bg-light">Reviews</h5>
      {props.reviews.length > 0
        ? props.reviews.map(p => (
            <Headlines
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.image.fields}
              title={p.fields.title}
              slug={p.fields.slug}
              category="reviews"
            />
          ))
        : null}
        </div>
        </div>
        <div className="col-md-4 mt-5">
        <div>
        {props.ads.length > 0
          ?props.ads.map(p => (
            <AdPost
                image = {p.fields.adPost.fields}
                link = {p.fields.link}
              />
          ))  : null
        }
        </div>
        </div>
        </div>
        </div>
        </Layout>
    </>
)

Reviewspage.getInitialProps = async context => {

  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })

  const ads = await client.getEntries({content_type: "addPost"}).then((response) => response.items);
  const reviews = await client.getEntries({ content_type: "post", 'fields.category[match]': "movie-reviews", 'fields.language[ne]': "telugu" }).then((response) => response.items);

  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }

  return { ads, reviews }
}

export default Reviewspage
