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

import { Dropdown } from "react-native-material-dropdown";
import * as data from "../../../assets/jsonfiles/dropdownlist.json"
const word = data;

export default class Home extends Component {
  constructor(props) {
    super(props);

      this.state = ({
        categoryList:[],
        subCategoryList:[]
      }); 
      this.getdata = this.getdata.bind(this);
      this.onChangeText = this.onChangeText.bind(this);
  }  


  componentWillMount(){
    this.getdata();
  }


    //TODO: Popup Dropdown all Medication List get
    getdata() {
      var temp = [];
      // fetch("http://localhost:8080/dropdownlist", {
      //   method: "Get",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json"
      //   }
      // })  
      //   .then(response => response.json())
      //   .then(responseJson => {
      //     var len = responseJson.data.length;
      //     if (len > 0) {
      //       for (let i = 0; i < len; i++) {
      //         var data = responseJson.data[i];
      //         var joined = { value: data.question};
      //         temp.push(joined);
      //       }
      //     }
      //     console.log('catelgory List Data=',JSON.stringify(temp));
      //     this.setState({
      //       categoryList: temp
      //     });
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });
  
       // TODO: Json File data  
        if(word){
          var len = word.data.length;
          if (len > 0) {
            for (let i = 0; i < len; i++) {
              var data = word.data[i];
              var joined = { value: data.question };
              temp.push(joined);
            }
          }
          this.setState({
            categoryList: temp  
          });
        }        
    }


  
    //TODO: Drop down selted values show group values
    onChangeText(text) {
      var temp = [];
      // fetch("http://localhost:8080/dropdownlist", {
      //   method: "Get",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json"
      //   }
      // })
      //   .then(response => response.json())
      //   .then(responseJson => {
      //     var len = responseJson.data.length;
      //     if (len > 0) {
      //       for (let i = 0; i < len; i++) {
      //         var data = responseJson.data[i];
      //         if (data.question == text) {
      //           var len1 = data.answer.length;
      //           if (len1 > 0) {
      //             for (let j = 0; j < len1; j++) {
      //               var choice = data.answer[j];
      //               var joined = { value: choice.choice };
      //               temp.push(joined);
      //             }
      //           }
      //         }
      //       }  
      //     }
      //     this.setState({
      //       subCategoryList: temp
      //     });
      //   })  
      //   .catch(error => {
      //     console.error(error);
      //   });
    
        if(word){
          var len = word.data.length;
          if (len > 0) {
            for (let i = 0; i < len; i++) {
              var data = word.data[i];
              if (data.question == text) {
                var len1 = data.answer.length;
                if (len1 > 0) {
                  for (let j = 0; j < len1; j++) {
                    var choice = data.answer[j];
                    var joined = { value: choice.choice };
                    temp.push(joined);
                  }  
                }
              }
            }
          }
          this.setState({
            subCategoryList: temp  
          });
  
        }  
  
    }




  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <View style={{ padding: 10 }}>
          <Dropdown
            label="Main Category"
            onChangeText={this.onChangeText}
            data={this.state.categoryList}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Dropdown
            label="SubCategory"  
            data={this.state.subCategoryList}   
          />
        </View>
      </View>
    );
  }
}
