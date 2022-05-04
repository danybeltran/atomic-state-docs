import React from 'react'

function Notification({ show = false, message = 'It was copied to the clipboard' }) {
  return (
    <div>
      <div id="snackbar" className={show ? 'animation-in' : 'not-show'}>
        {message}
      </div>
    </div>
  )
}

export default Notification
