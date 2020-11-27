import React, {useState, useEffect} from 'react'
import DisplayComments from './displayComments'
import { Container, Row, Col, Button } from 'react-bootstrap'
import useAuth from "../hooks/useAuth";
import LoginModal from './loginModal'

function PostComment (props) {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const uid = props.uid;
  const [reloadComments, setReloadComments] = useState();
  const [modalShow, setModalShow] = React.useState(false);
  const { user, loading } = useAuth();

async function postComment(e) {
    e.preventDefault();
    const body = {
            name: name,
            email: user.email,
            message: message,
            uid: uid
    };
    console.log(body);
    const res = await fetch('/api/post-comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      setReloadComments(!reloadComments);
      console.log(userObj);
    } else {
      console.log('Error fetching comments')
      setErrorMessage('Error fetching comments');
    }
    setName("");
    setMessage("");
  }

  return (
    <div className="comments-section">
    <div className="mt-3">
    <div className="row">
    <div className="m-auto pl-3 pr-3">
    <DisplayComments uid={props.uid} reloadComments={reloadComments} />
    <hr/>
    <h6>Share your thoughts!</h6>
    <form>
    <div className="form-group mb-2">
      <textarea type="text" className="form-control"
            id="message" aria-describedby="message"
            placeholder="Comment"  aria-label="enter your comment here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
      />
    </div>
    <div class="comment-input row mb-2">
        <div class="col">
            <input type="text" className="form-control"
                  id="name" aria-describedby="name"
                  placeholder="Name"  aria-label="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
            />
        </div>
      </div>
      <div className="comment-button-container d-flex justify-content-end mb-2">
        {user == null ?
          <>
            <Button variant="primary" onClick={() => setModalShow(true)}>Login to comment</Button>
            <LoginModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </>
        : <button type="submit" className={`btn btn-primary state=="LOADING" ? "btn-secondary" : ""`}  onClick={postComment}>Post Comment</button>
        }
      </div>
    </form>
    </div>
    </div>
    </div>
    </div>
  )

}

export default PostComment;
