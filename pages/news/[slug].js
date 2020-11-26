import React from 'react'
import Head from 'next/head'
import Moment from 'moment'
import Article from '../../components/article'
import Layout from '../../components/Layout'
import AdPost from '../../components/adPost'
import DisplayComments from '../../components/displayComments'
import Headlines from '../../components/headlines'
import SuggestedArticles from '../../components/suggestedArticles'

const Post = props =>{

  const date = props.post.fields.date;
  const formattedDate = Moment(date).format('MMMM Do YYYY, H:mm');

  return (
    <Layout>
    <Head>
      <title>{props.post.fields.title} | News article from Hindustan Daily</title>
      <meta name="keywords" content={props.post.fields.title} />
      <meta name="description" content={props.post.fields.body} />
      <meta property="og:url"           content={`https://hindustandaily.com/news/${props.post.fields.slug}`} />
      <meta property="og:type"          content="website" />
      <meta property="og:title"         content={props.post.fields.title} />
      <meta property="og:description"   content={props.post.fields.body} />
      <meta property="og:image"         content={props.post.fields.image.fields.file.url} />
      <meta property="og:site_name" content="Hindustan Daily, Online news portal" />
      <meta property="fb:app_id" content="itshdmedia" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@itsHDGroup" />
      <meta name="twitter:creator" content="@itsHDGroup" />
      <meta name="twitter:title" content={props.post.fields.title} />
      <meta name="twitter:description" content={props.post.fields.body} />
      <meta name="twitter:image" content={`https:${props.post.fields.image.fields.file.url}`} />
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </Head>
    <div className="container">
    <div className="mt-4 row col-md-12">
      <div className="col-lg-9">
        <Article
          date={formattedDate}
          image={props.post.fields.image.fields}
          title={props.post.fields.title}
          url={props.post.fields.slug}
          body={props.post.fields.body}
          category="news"
        />
      </div>
      <div className="col-lg-3">
      <div className="mb-5">
      {props.ads.length > 0
        ? <AdPost
            image = {props.ads[1].fields.adPost.fields}
            link = {props.ads[1].fields.link}
          /> : null
      }
      </div>
      <h5 className="bg-light">Suggested for you</h5>
      <div className="row">
      {props.suggestions.length > 0
        ? props.suggestions.map(p => (
            <SuggestedArticles
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
  )
}

export async function getStaticProps(context) {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })

  // Fetch all results where `fields.slug` is equal to the `slug` param
  const ads = await client.getEntries({content_type: "addPost"}).then((response) => response.items);
  const result = await client.getEntries({content_type: "post", "fields.slug": context.params.slug}).then((response) => response.items)
  const suggestions = await client.getEntries({ content_type: "post", 'fields.slug[ne]': context.params.slug, 'fields.category[ne]': "movie-reviews", 'order': "-fields.date", 'limit': "4" }).then((response) => response.items);

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
      ads,post,suggestions
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
    .getEntries({ content_type: "post" })
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

export default Post
