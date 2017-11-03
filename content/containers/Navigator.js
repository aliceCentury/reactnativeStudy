import React, { Component }  from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator,DrawerNavigator } from 'react-navigation';
import HomeScreen from "./Home/HomeScreen"
import ChatScreen from "./Chat/ChatScreen"
import ZoneScreen from "./Zone/ZoneScreen"
import UserScreen from "./User/UserScreen"
import TabNavigator from 'react-native-tab-navigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

  class NavigatorApp extends Component {
    state= {
      selectedTab: 'home'
    };
  
    render() {
      return (
        <TabNavigator style={styles.container}>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            selectedTitleStyle={{color: "#3496f0"}}
            renderIcon={() => <FontAwesome name="bath" size={px2dp(22)} color="#666" />}
            renderSelectedIcon={() => <FontAwesome name="bath" size={px2dp(22)} color="#3496f0" />}
            //badgeText="1"
            onPress={() => this.setState({selectedTab: 'home'})}>
            <HomeScreen/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'chat'}
            title="Chat"
            selectedTitleStyle={{color: "#3496f0"}}
            renderIcon={() => <Ionicons name="md-alarm" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Ionicons name="md-alarm" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({selectedTab: 'chat'})}>
            <ChatScreen/>
          </TabNavigator.Item>
        </TabNavigator>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });


  const RootDrawer = DrawerNavigator({
    App: {
      screen: NavigatorApp,
      navigationOptions: {
        drawerLabel: 'App',
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={20}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={20}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  });
  export default RootDrawer
//  module.exports = SimpleApp;