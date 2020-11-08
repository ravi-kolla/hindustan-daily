import React from "react"
import Markdown from "react-markdown"

function Article({ date, image, title, url, body }) {
  return (
    <div>
      <div className="col-md-8 mx-auto blog-post">
      <div>
        <h1>{title}</h1>
      </div>
      <small>{date}</small>
      <div className="mt-2 mb-3">
        <img className="img-fluid" src={image.file.url} alt={image.title} />
      </div>
      <Markdown source={body} escapeHtml={true} />
      </div>
    </div>
  )
}

export default Article
