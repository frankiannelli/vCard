import React, { Component } from 'react';
import Avatar from './Avatar/Avatar';
import './Preview.css';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

const imageMaxSize = 1000000000; //bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg';
const acceptedFileTypesArray = acceptedFileTypes.split(',').map((item) => { return item.trim(); });

class Preview extends Component {

  // state = {
  //   imgSrc: null
  // }

  verifyFile = (files) => {
    if (files && files.length > 0) {
      const currentFile = files[0];
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;
      if (currentFileSize > imageMaxSize) {
        alert(`This File is too big. Max size is ${imageMaxSize} bytes`);
        return false;
      }
      if (!acceptedFileTypesArray.includes(currentFileType)) {
        alert('Incorrect file type. Only images allowed');
        return false;
      }
      return true;
    }
  }

  handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      // console.log(rejectedFiles);
      this.verifyFile(rejectedFiles);
    }

    if (files && files.length > 0) {
      const isVerified = this.verifyFile(files);
      if (isVerified) {
        const currentFile = files[0];
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          // console.log(reader.result);
          // this.setState({ imgSrc: reader.result });
          this.props.updateImage( reader.result );
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
            {/* <Avatar
              image={this.props.image}
              imageSize={{ width: 120, height: 150 }} /> */}
            {this.props.imgSrc !== null ?
              <div className="container">
                <div className="imageContainer">
                  <img
                    alt="user"
                    // src={this.state.imgSrc}
                    src={this.props.imgSrc}
                    // style={{ width: 120, height: 150 }}
                    resizemode='contain' />
                </div>
              </div> :
              <Dropzone
                className="container"
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
              <div className="previewLabel" style={{ opacity: '0' }}>text</div>
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

Preview.propTypes = {
  contact: PropTypes.object,
  // image: PropTypes.string,
  updateImage: PropTypes.func,
  imgSrc: PropTypes.string
};

export default Preview;