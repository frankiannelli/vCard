import React, { Component } from 'react';
import './Form.css'
import InputField from './InputField'
import validator from 'validator'


class Form extends Component {

  onInputChange = ({ name, value, error }) => {
    this.props.onChange({ name, value, error })
  }

  validate = () => {
    const { fieldErrors } = this.props
    const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k])

    if (!errMessages.length) return true

    return false
  }

  handleFileSelected = (event) => {
    if (event.target.files[0]) {
      this.props.handleImage(event.target.files[0])
    }
  }

  render() {
    return (
      <div className="form">
        <h1>hCard Builder</h1>
        <h4>PERSONAL DETAILS</h4>
        <hr />
        <div className="personal n">
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
          <input
            style={{ display: 'none' }}
            type="file"
            onChange={this.handleFileSelected}
            ref={fileInput => this.fileInput = fileInput}
            className="inputfile" />
          <button
            onClick={() => this.fileInput.click()}
            className="upload">
            {this.props.image ? "Change avatar" : "Upload Avatar"}
          </button>
          <button >Create hCard</button>
        </div>
      </div>
    )
  }
}

export default Form 