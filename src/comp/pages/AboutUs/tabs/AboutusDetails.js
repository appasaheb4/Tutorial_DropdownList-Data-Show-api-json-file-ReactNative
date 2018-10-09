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
export default class AboutusDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {    
    return (
      <View style={{marginTop:50}}>
        <Text>About us Details</Text>

         <Button
          onPress={() => {
            this.props.navigation.navigate("AboutUs");
          }}
        >
          <Text>About us Details </Text>
        </Button>
      </View>
    );
  }
}
