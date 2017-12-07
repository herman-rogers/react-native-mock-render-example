import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

export default class Example extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired
  };

  render() {
    return (
      <TextInput value={this.props.value} />
    );
  }
}
