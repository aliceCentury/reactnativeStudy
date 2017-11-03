import React, { Component }  from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from "./Home/HomeScreen"
const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen }
  },{
    headerMode: 'none',
    mode: 'modal'});
  
 class Routing extends React.Component {
    render() {
      return <SimpleApp />;
    }
  }
  export default Routing