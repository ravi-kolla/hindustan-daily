import React from 'react'
import Head from 'next/head'
import Moment from 'moment'
import Article from '../../components/article'
import Layout from '../../components/Layout'

const HealthPost = props =>{

  const date = props.post.fields.date;
  const formattedDate = Moment(date).format('MMMM Do YYYY, H:mm');

  return (
    <Layout>
    <Head>
      <title>{props.post.fields.title} | from Hindustan Daily</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="title" content={props.post.fields.title} />
      <meta name="keywords" content={`${props.post.fields.title}, by Hindustan Daily`} />
      <meta name="description" content={`${props.post.fields.title} | by Hindustan Daily`} />
      <meta property="og:url"           content={`https://hindustandaily.com/health/${props.post.fields.slug}`} />
      <meta property="og:type"          content="website" />
      <meta property="og:title"         content={props.post.fields.title} />
      <meta property="og:description"   content="read on Hindustan Daily" />
      <meta property="og:image"         content={props.post.fields.image.fields.file.url} />
      <meta property="og:site_name" content="Hindustan Daily, Online news portal" />
      <meta property="fb:app_id" content="itshdmedia" />
      <meta name="twitter:site" content="@itsHDGroup" />
    </Head>
    <div className="container mt-5">
      <Article
        date={formattedDate}
        image={props.post.fields.image.fields}
        title={props.post.fields.title}
        url={props.post.fields.urlPath}
        body={props.post.fields.body}
      />
    </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })

  // Fetch all results where `fields.slug` is equal to the `slug` param
  const result = await client
    .getEntries({
      content_type: "health",
      "fields.slug": context.params.slug,
    })
    .then((response) => response.items)

  // Since `slug` was set to be a unique field, we can be confident that
  // the only result in the query is the correct post.
  const post = result.pop()

  // If nothing was found, return an empty object for props, or else there would
  // be an error when Next tries to serialize an `undefined` value to JSON.
  if (!post) {
    return { props: {} }
  }

  // Return the post as props
  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })

  // Query Contentful for all blog posts in the space
  const posts = await client
    .getEntries({ content_type: "health" })
    .then((response) => response.items)

  // Map the result of that query to a list of slugs.
  // This will give Next the list of all blog post pages that need to be
  // rendered at build time.
  const paths = posts.map(({ fields: { slug } }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default HealthPost
