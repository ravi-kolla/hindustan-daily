import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Headlines from '../../components/headlines'

const EtPage = props => (
    <>
      <Layout>
      <div className="container">
      <div className="row">
      <div className="col-md-6 col-lg-8 mt-3">
      <div>
      <h5 className="bg-light">Entertainment</h5>
      {props.etNews.length > 0
        ? props.etNews.map(p => (
            <Headlines
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.image.fields}
              title={p.fields.title}
              slug={p.fields.slug}
              category="entertainment"
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

EtPage.getInitialProps = async context => {

  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })

  const etNews = await client.getEntries({ content_type: "entertainment", 'fields.language[match]': "english" }).then((response) => response.items);

  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }

  return { etNews }
}

export default EtPage
