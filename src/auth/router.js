import React from "react";
import { Platform, StatusBar, AsyncStorage } from "react-native";
import {
  StackNavigator,
  TabNavigator,
  SwitchNavigator,
  TabBarBottom
} from "react-navigation";
import { Icon } from "react-native-elements";

import Login from "../comp/pages/Login/Login";
import SignUp from  "../comp/pages/SignUp/SignUp";

import Home from "../comp/pages/Home/Home";
import AboutUs from "../comp/pages/AboutUs/Aboutus";
import AboutusDetails from "../comp/pages/AboutUs/tabs/AboutusDetails";
import Help from "../comp/pages/Help/Help";
import Settings from "../comp/pages/Setting/Settings";





export const SignedOut = StackNavigator({
    Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  }
});




export const AboutUsRouter = StackNavigator({
    AboutUs: {
    screen: AboutUs,
    navigationOptions: {
      header: null
    }
  },
  AboutusDetails: {
    screen: AboutusDetails,
    navigationOptions: {
      header: null
    }
  }
});




export const SignedIn = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color={tintColor} />
        )
      }
    },
    AboutUs: {
      screen: AboutUsRouter,   
      navigationOptions: {
        tabBarLabel: "About Us",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="list" size={30} color={tintColor} />
        )
      }
    },
    Help: {
      screen: Help,
      navigationOptions: {
        tabBarLabel: "Help",

        tabBarIcon: ({ tintColor }) => (
          <Icon name="help" size={30} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="settings" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarComponent: ({ jumpToIndex, ...props }) => (
      <TabBarBottom
        {...props}
        jumpToIndex={index => {
          if (props.navigation.state.index === index) {
            props.navigation.clickButton(); //----> pass props params (code processes)
          } else {
            jumpToIndex(index);
          }
        }}
      />
    ),
    tabBarPosition: "bottom",
    swipeEnabled: true,
    lazy: true,
    tabBarOptions: {
      labelStyle: { fontSize: 10 },
      activeTintColor: "#ffffff",
      inactiveTintColor: "#B0B0B0",
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: "#000000",
        borderTopColor: "#003c8f",
        borderTopWidth: 1
      },
      indicatorStyle: {
        backgroundColor: "#ffffff",
        width: 0,
        height: 0,
        padding: 0,
        margin: 0
      }
    }
  }
);


export const createRootNavigator = (
  signedIn = false
) => {
    return SwitchNavigator(
      {
        SignedIn: {
          screen: SignedIn
        },
        SignedOut: {
          screen: SignedOut
        },
       
      },
      {
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
    );
};