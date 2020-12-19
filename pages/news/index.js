import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Headlines from '../../components/headlines'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

const Newspage = props => (
    <>
      <Layout>
      <div className="container">
      <div className="row">
      <div className="col-md-8 mt-3">
      <div>
      <h5 className="bg-light">News</h5>
      {props.news.length > 0
        ? props.news.map(p => (
            <Headlines
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.image.fields}
              title={p.fields.title}
              slug={p.fields.slug}
              category="news"
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

Newspage.getInitialProps = async context => {

  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })

  const news = await client.getEntries({ content_type: "post", 'fields.category[ne]': "movie-reviews", 'fields.englishDescription[exists]': true}).then((response) => response.items);

  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }

  return { news }
}

export default Newspage
