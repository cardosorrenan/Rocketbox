import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes'

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

export default class App extends React.Component {
  render() {
    return (
      <Routes/>
    );
  }
}
 