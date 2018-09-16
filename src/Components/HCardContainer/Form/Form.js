import React, { Component } from 'react';
import './Form.css';
import InputField from './InputField/InputField';
import validator from 'validator';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import verifyFile from '../../Helpers/verifyFile';
import { imageMaxSize, acceptedFileTypes } from '../../../Constants/constants';

class Form extends Component {

  static propTypes = {
    contact: PropTypes.object,
    imgSrc: PropTypes.string,
    onChange: PropTypes.func,
    fieldErrors: PropTypes.object,
    updateImage: PropTypes.func
  }

  onInputChange = ({ name, value, error }) => {
    this.props.onChange({ name, value, error });
  }

  validate = () => {
    const { fieldErrors } = this.props;
    const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

    return !errMessages.length;
  }

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
    let dropzoneRef;
    return (
      <div className="form">
        <h1>hCard Builder</h1>
        <h4>PERSONAL DETAILS</h4>
        <hr />
        <div className="personal">
          <InputField
            onChange={this.onInputChange}
            value={this.props.contact.givenName}
            name="givenName"
            labelname="GIVEN NAME"
            validate={val => (val ? false : 'Given name required')}
          />
          <InputField
            onChange={this.onInputChange}
            value={this.props.contact.surname}
            validate={val => (val ? false : 'Surname required')}
            name="surname"
            labelname="SURNAME" />
          <InputField
            onChange={this.onInputChange}
            value={this.props.contact.email}
            validate={val => (validator.isEmail(val) ? false : 'Email must be valid')}
            name="email"
            labelname="EMAIL" />
          <InputField
            onChange={this.onInputChange}
            value={this.props.contact.phone}
            validate={val => (val ? false : 'Phone required')}
            name="phone"
            labelname="PHONE" />
        </div>
        <h4>ADDRESS</h4>
        <hr />
        <div className="address">
          <InputField
            onChange={this.onInputChange}
            value={this.props.contact.address}
            validate={val => (val ? false : 'Address required')}
            name="number"
            labelname="HOUSE NAME OR #" />
          <InputField
            onChange={this.onInputChange}
            value={this.props.contact.street}
            validate={val => (val ? false : 'Street required')}
            name="street"
            labelname="STREET" />
          <InputField
            onChange={this.onInputChange}
            value={this.props.contact.suburb}
            validate={val => (val ? false : 'Suburb required')}
            name="suburb"
            labelname="SUBURB" />
          <InputField
            onChange={this.onInputChange}
            value={this.props.contact.state}
            validate={val => (val ? false : 'State required')}
            name="state"
            labelname="STATE" />
          <InputField
            onChange={this.onInputChange}
            value={this.props.contact.postCode}
            validate={val => (val ? false : 'Postcode required')}
            name="postCode"
            labelname="POSTCODE" />
          <InputField
            onChange={this.onInputChange}
            value={this.props.contact.country}
            validate={val => (val ? false : 'Country required')}
            name="country"
            labelname="COUNTRY" />
        </div>
        <div className="buttons">
          <button
            onClick={() => { dropzoneRef.open(); }}
            className="upload">
            {this.props.imgSrc ? 'Change avatar' : 'Upload Avatar'}
          </button>
          <Dropzone
            ref={(node) => { dropzoneRef = node; }}
            style={{ display: 'none' }}
            onDrop={this.handleOnDrop}
            accept={acceptedFileTypes}
            multiple={false}
            maxSize={imageMaxSize}><i className="fas fa-user fa-8x"></i></Dropzone>
          <button >Create hCard</button>
        </div>
      </div>
    );
  }
}

export default Form;