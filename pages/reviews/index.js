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
      {props.ads.length > 0
        ? <AdPost
            image = {props.ads[1].fields.adPost.fields}
            link = {props.ads[1].fields.link}
          /> : null
      }
      </div>
      <div className="mt-3">
      {props.reviews.length > 0
        ? props.reviews.map(p => (
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

Reviewspage.getInitialProps = async context => {

  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })

  const ads = await client.getEntries({content_type: "addPost"}).then((response) => response.items);
  const reviews = await client.getEntries({ content_type: "post", 'fields.category[match]': "movie-reviews" }).then((response) => response.items);

  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }

  return { ads, reviews }
}

export default Reviewspage
