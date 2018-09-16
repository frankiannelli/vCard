import React, { Component } from 'react';
import './HCardContainer.css';
import Form from './Form/Form';
import Preview from './Preview/Preview';

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
    uploadedFile: null
  }

  onInputChange = ({ name, value, error }) => {
    const contact = Object.assign({}, this.state.contact);
    const fieldErrors = Object.assign({}, this.state.fieldErrors);

    contact[name] = value;
    fieldErrors[name] = error;

    this.setState({ contact, fieldErrors });
  }

  handleUpdateImage = (uploadedFile) => {
    this.setState({ uploadedFile });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="hCardContainer">
          <div className="formContainer">
            <Form
              contact={this.state.contact}
              imgSrc={this.state.uploadedFile}
              onChange={this.onInputChange}
              fieldErrors={this.state.fieldErrors}
              updateImage={this.handleUpdateImage}
            />
          </div>
          <div className="previewContainer">
            <Preview
              contact={this.state.contact}
              imgSrc={this.state.uploadedFile}
              updateImage={this.handleUpdateImage} />
          </div>
        </div>
      </div>
    );
  }
}

export default HCardContainer;