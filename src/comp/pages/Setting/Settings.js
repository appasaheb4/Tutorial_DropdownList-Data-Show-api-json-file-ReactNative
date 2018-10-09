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
export default class Settings extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{marginTop:50}}>
         <Button
          onPress={() => {
            this.props.navigation.navigate("SignedOut");
          }}
        >
          <Text>Logout</Text>
        </Button>
      </View>
    );
  }
}
  