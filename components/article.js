import React from "react"
import Markdown from "react-markdown"
import SocialShare from "./socialShare"
import PostComment from './postComment'

function Article({ date, image, title, url, body, category }) {
  return (
    <div>
      <div className="mx-auto blog-post">
      <div className="mb-1">
        <h1 className="mb-0">{title}</h1>
        <small>{date}</small>
      </div>
      <div>
      <SocialShare dataText={title}
              dataUid={url}
              imageAlt={image.title}
              category={category}
      />
      </div>
      <div className="mt-2 mb-3">
        <img className="article-img img-fluid" src={image.file.url} alt={image.title} />
      </div>
      <div>
      <Markdown source={body} escapeHtml={true} />
      </div>
      </div>
      <PostComment uid={url} />
    </div>
  )
}

export default Article
