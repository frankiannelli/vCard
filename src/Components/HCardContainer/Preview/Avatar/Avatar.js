import React from 'react';
import './Avatar.css';
import PropTypes from 'prop-types';

const Avatar = (props) => (
  <div className="avatarContainer">
    <div className="imageContainer">
      <img
        alt="user"
        src={props.imgSrc}
        resizemode='contain' />
    </div>
  </div>
);

Avatar.propTypes = {
  imgSrc: PropTypes.string
};

export default Avatar;