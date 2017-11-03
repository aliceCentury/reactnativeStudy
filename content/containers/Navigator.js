import React, { Component }  from 'react';
import { StyleSheet,Image,TouchableOpacity,DrawerLayoutAndroid, Text, View,Dimensions,ToolbarAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Routing from "./Routing"
import TabNavigator from 'react-native-tab-navigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from './DrawerLayout'
const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height
const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

  class NavigatorApp extends Component {
    state= {
      selectedTab: 'chat'
    };
    openDrawer(){     
      this.refs.drawerLayout.openDrawer()
  }
    render() {
      var navigationView = (
        <DrawerLayout/>
      );
      return (
        <DrawerLayoutAndroid
        ref="drawerLayout"
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
       <Routing/>
        </DrawerLayoutAndroid>
      );
    }
  }
  const styles = StyleSheet.create({
   
  });
  export default NavigatorApp
//  module.exports = SimpleApp;