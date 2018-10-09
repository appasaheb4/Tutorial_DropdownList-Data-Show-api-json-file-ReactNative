import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  Image,
  AsyncStorage
} from "react-native";
import { createRootNavigator } from "./src/auth/router";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn:true
    }   

  }
  render() {
    const { signedIn } = this.state;
    const Layout = createRootNavigator(signedIn);
    return <Layout />;

   
  }
}
