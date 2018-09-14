import React, { Component } from 'react'
import './Avatar.css'

class Avatar extends Component {
  render() {
    if (this.props.image) {
      return (
        <div className="container">
          <div className="imageContainer">
            <img
              src={this.props.image}
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
}

export default Avatar