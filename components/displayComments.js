import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Moment from 'moment'

const DisplayComments = (props) => {

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    axios.get('/api/get-comments')
    .then(response => {
      var result = response.data.comments.filter(comment => comment.uid == props.uid);
      setComments(result);
      setIsLoading(false);
    })
    .catch(error => {
      console.log(error);
    });
  },[props.reloadComments])

  return (
    <>
    {comments.length > 0 ?
    <div className="d-flex justify-content-center mt-2 mb-2">
      <h6>Comments</h6>
    </div> : null
    }
    <div className="mb-1">
        {!isLoading ? (
          comments.map(comment => {
            const date = Date(comment.commentedOn);
            const formattedDate = Moment(date).format("LL");
            return (
              <div className="comment-card card mb-1" key={comment.uid}>
                <div className="p-2">
                <p className="commentor-name mb-0 font-weight-bold">{comment.name}</p>
                <small>{formattedDate}</small>
                <p className="commentor-message mb-0">{comment.message}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}

export default DisplayComments
