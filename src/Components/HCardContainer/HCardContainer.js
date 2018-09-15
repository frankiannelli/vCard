import React, { Component } from 'react';
import './HCardContainer.css';
import Form from './Form';
import Preview from './Preview';
import PropTypes from 'prop-types';

class HCardContainer extends Component {
  state = {
    contact: {
      givenName: '',
      surname: '',
      email: '',
      phone: '',
      number: '',
      street: '',
      suburb: '',
      state: '',
      postCode: '',
      country: '',
    },
    fieldErrors: {},
    selectedFile: null
  }

  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onInputChange: PropTypes.func
  }

  onInputChange = ({ name, value, error }) => {
    const contact = Object.assign({}, this.state.contact);
    const fieldErrors = Object.assign({}, this.state.fieldErrors);

    contact[name] = value;
    fieldErrors[name] = error;

    this.setState({ contact, fieldErrors });
  }

  handleImage = (file) => {
    let selectedFile = URL.createObjectURL(file);
    this.setState({ selectedFile });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container-1">
          <div className="box-1">
            <Form
              contact={this.state.contact}
              image={this.state.selectedFile}
              onChange={this.onInputChange}
              fieldErrors={this.state.fieldErrors}
              handleImage={this.handleImage}
            />
          </div>
          <div className="box-2">
            <Preview
              contact={this.state.contact}
              image={this.state.selectedFile} />
          </div>
        </div>
      </div>
    );
  }
}

export default HCardContainer;