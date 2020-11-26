import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

const SocialShare = (props) => (
  <div className="container row">
    <div>
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-text={props.dataText} data-via="itsHDGroup" data-related="hindustandaily" data-lang="en" data-show-count="true"></a>
    </div>
    <div className="pl-md-1">
      <iframe src={`https://www.facebook.com/plugins/like.php?href=https://hindustandaily.com/${props.category}/${props.dataUid}&width=450&layout=standard&action=like&size=small&share=true&height=35&appId=217894516383173`} width="450" height="35" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>
  </div>
)

export default SocialShare;
