import React from 'react'
import Markdown from "react-markdown"
import {Row, Col, Card, Container} from 'react-bootstrap'
import SocialShare from "./socialShare"
import PostComment from './postComment'

const ImageGallery = props => (
  <>
    <div>
    <h5>{props.title}</h5>
    </div>
    <small>{props.date}</small>
    <SocialShare dataText={props.title}
            dataUid={props.url}
            imageAlt={props.title}
            category={props.category}
    />
    <div>
    {props.description ? <Markdown source={props.description} escapeHtml={true} /> : null}
    </div>
    <Row>
    {props.images.map(image => (
      <Col key={image.fields.title} md={6} lg={4} className="mt-3">
        <Card>
          <Card.Img src={image.fields.file.url} alt={image.fields.title} />
        </Card>
      </Col>
    ))}
    </Row>
    <PostComment uid={props.url} />
  </>
)

export default ImageGallery
