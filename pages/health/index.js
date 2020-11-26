import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import AdPost from '../../components/adPost'
import Headlines from '../../components/headlines'

const HealthPage = props => (
    <>
      <Layout>
      <div className="container">
      <div className="row">
      <div className="col-md-6 col-lg-8 mt-3">
      <div>
      <h5 className="bg-light">Health</h5>
      {props.health.length > 0
        ? props.health.map(p => (
            <Headlines
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.image.fields}
              title={p.fields.title}
              slug={p.fields.slug}
              category="health"
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

HealthPage.getInitialProps = async context => {

  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })

  const ads = await client.getEntries({content_type: "addPost"}).then((response) => response.items);
  const health = await client.getEntries({ content_type: "health"}).then((response) => response.items);

  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }

  return { ads, health }
}

export default HealthPage
