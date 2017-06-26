import React, { Component, PropTypes } from 'react';
import { TextInput, View } from 'react-native';

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
