import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  Image,
  AsyncStorage
} from "react-native";

import { Button } from "native-base";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Button
          onPress={() => {
            this.props.navigation.navigate("SignedIn");
          }}
        >
          <Text>Login</Text>
        </Button>

        <Button
          onPress={() => {
            this.props.navigation.navigate("SignUp");
          }}
        >
          <Text>Sign Up</Text>
        </Button>
      </View>
    );
  }
}
