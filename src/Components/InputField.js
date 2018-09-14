import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import './InputField.css'
import PropTypes from 'prop-types'

class InputField extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    validate: PropTypes.func,
    onChange: PropTypes.func.isRequired
  }

  state = {
    value: this.props.value,
    error: false
  }

  static getDerivedStateFromProps(nextProps) {
    return { value: nextProps.value }
  }

  onChange = (event) => {
    const name = this.props.name
    const value = event.target.value
    const error = this.props.validate ? this.props.validate(value) : false

    this.setState({ value, error })

    this.props.onChange({ name, value, error })
  }
  
  render() {
    return (
      <div className="data">
        <label>{this.props.labelname}</label>
        <Input
          fluid
          value={this.state.value}
          name={this.props.name}
          onChange={this.onChange}
          className={this.props.className}
        />
        <p style={{ color: 'red', marginLeft: '16px', marginTop: '5px' }}>{this.state.error}</p>
      </div>
    )
  }
}

export default InputField