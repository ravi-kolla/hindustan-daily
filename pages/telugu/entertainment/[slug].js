import React from 'react'
import Head from 'next/head'
import Moment from 'moment'
import Article from '../../../components/article'
import Layout from '../../../components/Layout'
import SuggestedArticles from '../../../components/suggestedArticles'

const ReviewPost = props =>{

  const date = props.post.fields.date;
  const formattedDate = Moment(date).format('MMMM Do YYYY, H:mm');

  return (
    <Layout>
    <Head>
      <title>{props.post.fields.title} | from Hindustan Daily</title>
      <meta name="title" content={props.post.fields.teluguTitle} />
      <meta name="keywords" content={`${props.post.fields.teluguTitle}, by Hindustan Daily`} />
      <meta name="description" content={props.post.fields.teluguDescription} />
      <meta property="og:url"           content={`https://hindustandaily.com/entertainment/${props.post.fields.slug}`} />
      <meta property="og:type"          content="website" />
      <meta property="og:title"         content={props.post.fields.teluguTitle} />
      <meta property="og:description"   content={props.post.fields.teluguDescription} />
      <meta property="og:image"         content={props.post.fields.image.fields.file.url} />
      <meta property="og:site_name" content="Hindustan Daily, Online news portal" />
      <meta property="fb:app_id" content="itshdmedia" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@itsHDGroup" />
      <meta name="twitter:creator" content="@itsHDGroup" />
      <meta name="twitter:title" content={props.post.fields.teluguTitle} />
      <meta name="twitter:description" content={props.post.fields.teluguDescription} />
      <meta name="twitter:image" content={`https:${props.post.fields.image.fields.file.url}`} />
    </Head>
    <div className="container">
    <div className="mt-3 row col-md-12">
      <div className="col-lg-9">
        <Article
          date={formattedDate}
          image={props.post.fields.image.fields}
          title={props.post.fields.teluguTitle}
          url={props.post.fields.slug}
          body={props.post.fields.teluguDescription}
          category="entertainment"
        />
      </div>
      <div className="col-lg-3 mt-5">
        <h5 className="bg-light">మరిన్ని అంశాలు</h5>
        <div className="row">
        {props.suggestions.length > 0
          ? props.suggestions.map(p => (
              <SuggestedArticles
                date={p.fields.date}
                key={p.fields.teluguTitle}
                image={p.fields.image.fields}
                title={p.fields.teluguTitle}
                slug={p.fields.slug}
              />
            ))
          : null}
          </div>
      </div>
    </div>
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
  const result = await client.getEntries({content_type: "entertainment","fields.slug": context.params.slug}).then((response) => response.items)
  const suggestions = await client.getEntries({content_type: "entertainment", 'fields.slug[ne]': context.params.slug, 'fields.teluguDescription[exists]': true, 'order': "-fields.date", 'limit': "4" }).then((response) => response.items);

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
      post,suggestions
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
    .getEntries({ content_type: "entertainment" })
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

export default ReviewPost
