import React, { Component } from 'react';
import './Preview.css';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import Avatar from './Avatar/Avatar';
import verifyFile from '../../Helpers/verifyFile';
import { imageMaxSize, acceptedFileTypes } from '../../../Constants/constants';

class Preview extends Component {
  static propTypes = {
    contact: PropTypes.object,
    updateImage: PropTypes.func,
    imgSrc: PropTypes.string
  };

  handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      verifyFile(rejectedFiles);
    }

    if (files && files.length > 0) {
      const isVerified = verifyFile(files);
      if (isVerified) {
        const currentFile = files[0];
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          this.props.updateImage(reader.result);
        }, false);
        reader.readAsDataURL(currentFile);
      }
    }
  }

  render() {
    return (
      <div className="previewBox">
        <h3>HCARD PREVIEW</h3>
        <div className="vcard">
          <div className="header">
            <div className="previewName">
              <h1 className="fn">{`${this.props.contact.givenName} ${this.props.contact.surname}`}</h1>
            </div>
            {this.props.imgSrc !== null ?
              <Avatar imgSrc={this.props.imgSrc} /> :
              <Dropzone
                className="avatarContainer"
                onDrop={this.handleOnDrop}
                accept={acceptedFileTypes}
                multiple={false}
                maxSize={imageMaxSize}><i className="fas fa-user fa-8x"></i></Dropzone>}
          </div>
          <div className="previewBody">
            <div className="previewDetail">
              <div className="previewLabel">EMAIL:</div>
              <div className="previewData email">{this.props.contact.email}</div>
            </div>
            <hr />
            <div className="previewDetail">
              <div className="previewLabel">PHONE:</div>
              <div className="previewData tel">{this.props.contact.phone}</div>
            </div>
            <hr />
            <div className="previewDetail">
              <div className="previewLabel">ADDRESS:</div>
              <div className="previewData street-address">{`${this.props.contact.number} ${this.props.contact.street}`}</div>
            </div>
            <hr />
            <div className="previewDetail">
              <div className="previewLabel" style={{ opacity: '0' }}>ADDRESS2:</div>
              <div className="previewData"><span className="locality">{`${this.props.contact.suburb}${this.props.contact.suburb ? ',' : ''} `}</span><span className="region">{this.props.contact.state}</span></div>
            </div>
            <hr />
            <div className="previewFoot">
              <div className="footContainerPost">
                <div className="previewPostcode">POSTCODE</div>
                <div className="previewPostdata postal-code">{this.props.contact.postCode}</div>
              </div>
              <div className="footContainerCountry">
                <div className="previewCountrycode">COUNTRY</div>
                <div className="previewCountrydata country-name">{this.props.contact.country}</div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;