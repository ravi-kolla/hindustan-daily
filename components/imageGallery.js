import React from 'react'
import Markdown from "react-markdown"
import {Row, Col, Card, Container} from 'react-bootstrap'

const ImageGallery = props => (
  <>
    <div>
    <h5>{props.title}</h5>
    </div>
    <small>{props.date}</small>
    {props.description ? <Markdown source={props.description} escapeHtml={true} /> : null}
    <Row>
    {props.images.map(image => (
      <Col key={image.fields.title} md={6} lg={4} className="mt-3">
        <Card>
          <Card.Img src={image.fields.file.url} alt={image.fields.title} />
        </Card>
      </Col>
    ))}
    </Row>
  </>
)

export default ImageGallery
