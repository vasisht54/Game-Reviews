import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = ({ navigation }) => (
  <Navigator  
    initialRouteName = "Home"
    headerMode = "screen"
    screenOptions = {{
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: "bold"},
      //headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#87CEFA', height: 60}
    }}>
    <Screen 
      name="Home" 
      component={Home} 
      options = {{headerTitle: () => <Header navigation = {navigation} title = 'GameZone'/>}}  
    />
    <Screen 
      name="ReviewDetails" 
      component={ReviewDetails} 
      options = {{
        title: 'Review Details',
      }}  
    />
  </Navigator>
);

export default HomeStack;