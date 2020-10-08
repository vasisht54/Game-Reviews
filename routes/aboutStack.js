import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

const AboutStack = ({ navigation }) => (
  <Navigator 
    initialRouteName = "About"
    headerMode = "screen"
    screenOptions = {{
      headerTintColor: '#444',
      headerTitleStyle: {fontWeight: "bold"},
      //headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#87CEFA', height: 60}
    }}>
    <Screen 
      name="About" 
      component={About} 
      options = {{headerTitle: () => <Header navigation = {navigation} title = 'About GameZone'/>}}
    />
  </Navigator>
);

export default AboutStack;