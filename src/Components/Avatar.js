import React from 'react'
import './Avatar.css'

const Avatar = (props) => {
  if (props.image) {
    return (
      <div className="container">
        <div className="imageContainer">
          <img
            alt="user"
            src={props.image}
            style={{ width: 120, height: 150 }}
            resizeMode='contain' />
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <i className="fas fa-user fa-8x"></i>
    </div>
  )
}

export default Avatar