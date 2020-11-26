import React from 'react';
import {Card, Button} from 'react-bootstrap'

function SuggestedArticles({ image, title, slug }) {
  return (
    <>
    <div className="col-md-6 col-lg-12 mb-2">
      <Card className="blog-card">
          <a href={slug}>
            <Card.Img className="blog-image" variant="top" src={image.file.url} alt={image.title} />
            <Card.Body className="p-2">
              <Card.Text>
                <p className="card-title">
                {title}
                </p>
              </Card.Text>
            </Card.Body>
          </a>
      </Card>
    </div>
    </>
  )
}

export default SuggestedArticles
