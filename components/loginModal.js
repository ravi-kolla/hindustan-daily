import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useRouter } from 'next/router'
import { Magic } from 'magic-sdk'

function LoginModal(props) {

  const [showSpinner, setShowSpinner] = useState(false);
  const router = useRouter()
  const handleLogin = async (event) => {
    event.preventDefault()
    setShowSpinner(true);
    const { elements } = event.target

    // the Magic code
    const did = await new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY)
      .auth
      .loginWithMagicLink({ email: elements.email.value })

    // Once we have the did from magic, login with our own API
    const authRequest = await fetch('/api/login', {
      method: 'POST',
      headers: { Authorization: `Bearer ${did}` }
    })

    if (authRequest.ok) {
      // We successfully logged in, our API
      // set authorization cookies and now we
      // can redirect to the dashboard!
      console.log("Logged In");
      props.onHide();
      location.reload();
    } else { /* handle errors */ }
  }

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <form  onSubmit={handleLogin}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        {showSpinner ?
          <div class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div> :
          <button type="submit" class="btn btn-primary">Login</button>
        }
      </form>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal
