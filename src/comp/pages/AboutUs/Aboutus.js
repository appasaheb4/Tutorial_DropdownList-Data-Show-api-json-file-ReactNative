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
export default class Aboutus extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (  
        <View style={{marginTop:50}}>
        <Text>About Us</Text>


  <Button
          onPress={() => {
            this.props.navigation.navigate("AboutusDetails");
          }}
        >
          <Text>About us Details </Text>
        </Button>


      </View>
    );
  }
}
