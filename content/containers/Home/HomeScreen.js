import React, { Component }  from 'react';
import { StyleSheet,Image,TouchableOpacity,DrawerLayoutAndroid, Text, View,Dimensions,ToolbarAndroid } from 'react-native';
import IconFont from '../../component/IconFont';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator,StackNavigator } from 'react-navigation';
import CrowdfundScreen from "./../Crowdfund/CrowdfundScreen"
import AuctionScreen from "./../Auction/AuctionScreen"
import BidScreen from "./../Bid/BidScreen"
import UserScreen from "./../User/UserScreen"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import DrawerLayout from './../DrawerLayout'
const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height
const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}
const NavigatorWrappingScreen = TabNavigator({
  Crowdfund: {
    screen: CrowdfundScreen,
    navigationOptions: {
      tabBarLabel: '众筹',
      tabBarIcon: ({ tintColor, focused }) => (
        <IconFont
        font="&#xe60c;"
        style={{fontSize: 26,color: tintColor }}
    />
      ),
    },
  },
  Auction: {
    screen: AuctionScreen,
    navigationOptions: {
      tabBarLabel: '拍卖',
      tabBarIcon: ({ tintColor, focused }) => (
        <IconFont
        font="&#xe60d;"
        style={{fontSize: 26,color: tintColor }}
    />
      ),
    },
  },
  Bid: {
    screen: BidScreen,
    navigationOptions: {
      tabBarLabel: '投标',
      tabBarIcon: ({ tintColor, focused }) => (
        <IconFont
        font="&#xe69a;"
        style={{fontSize: 26,color: tintColor }}
    />
      ),
    },
  },
  User: {
    screen: UserScreen,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  }
}, {
  animationEnabled:true,
  tabBarOptions: {
    activeTintColor: '#e3b76d',
  },
});
const HomeScreen = StackNavigator({
  Home: { screen: NavigatorWrappingScreen }
},{
  headerMode: 'none',
});


  
  export default HomeScreen
//  module.exports = SimpleApp;