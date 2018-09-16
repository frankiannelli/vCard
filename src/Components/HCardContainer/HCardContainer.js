import React, { Component } from 'react';
import './HCardContainer.css';
import Form from './Form/Form';
import Preview from './Preview/Preview';
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
    uploadedFile: null
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

  // handleImage = (file) => {
  //   let uploadedFile = URL.createObjectURL(file);
  //   this.setState({ uploadedFile });
  // }

  handleUpdateImage = (image) => {
    this.setState({uploadedFile: image}, () => {
      console.dir(this.state)
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="hCardContainer">
          <div className="formContainer">
            <Form
              contact={this.state.contact}
              image={this.state.uploadedFile}
              onChange={this.onInputChange}
              fieldErrors={this.state.fieldErrors}
              handleImage={this.handleImage}
              updateImage={this.handleUpdateImage}
            />
          </div>
          <div className="previewContainer">
            <Preview
              contact={this.state.contact}
              // image={this.state.uploadedFile}
              imgSrc={this.state.uploadedFile}
              updateImage={this.handleUpdateImage} />
          </div>
        </div>
      </div>
    );
  }
}

export default HCardContainer;