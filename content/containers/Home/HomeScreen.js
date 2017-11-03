import React, { Component }  from 'react';
import { StyleSheet,Image,TouchableOpacity,DrawerLayoutAndroid, Text, View,Dimensions,ToolbarAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator,DrawerNavigator } from 'react-navigation';
import ChatScreen from "./../Chat/ChatScreen"
import ZoneScreen from "./../Zone/ZoneScreen"
import UserScreen from "./../User/UserScreen"
import TabNavigator from 'react-native-tab-navigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from './../DrawerLayout'
const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height
const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

  class HomeScreen extends Component {
    // static navigationOptions = {
    //   title: '聊天',
    // }
  
    state= {
      selectedTab: 'chat'
    };
   
    render() {
      var navigationView = (
        <DrawerLayout/>
      );
      return (
        <View>
          <View style={styles.topBar}>
          <TouchableOpacity  onPress={() => this.props.openDrawer()}>
          <Image style={styles.icon} source={require('./../../assets/images/user.png')} /></TouchableOpacity>
            <Text style={styles.topBarText}>{this.state.selectedTab === 'chat'?'聊天':this.state.selectedTab === 'zone'?'小饼圈':'我的'}</Text>
            <Ionicons name="md-add" size={px2dp(22)} color="#fff"/>
             </View>
        <TabNavigator style={styles.container}>
          <TabNavigator.Item
          selected={this.state.selectedTab === 'chat'}
          title="聊天"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Ionicons name="ios-chatboxes" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Ionicons name="ios-chatboxes-outline" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'chat'})}>
          <ChatScreen/>
        </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'zone'}
            title="小饼圈"
            selectedTitleStyle={{color: "#3496f0"}}
            renderIcon={() => <Ionicons name="ios-megaphone" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Ionicons name="ios-megaphone-outline" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({selectedTab: 'zone'})}>
            <ZoneScreen/>
          </TabNavigator.Item>
          
          <TabNavigator.Item
            selected={this.state.selectedTab === 'my'}
            title="我的"
            selectedTitleStyle={{color: "#3496f0"}}
            renderIcon={() => <Ionicons name="ios-person" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Ionicons name="ios-person-outline" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({selectedTab: 'my'})}>
            <UserScreen/>
          </TabNavigator.Item>
        </TabNavigator>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 0,
      height:deviceH-80,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    topBarText:{
      color:"#fff"
    },
    topBar:{
     height:50,
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingLeft:10,
     paddingRight:10,
     alignItems: 'center',
     backgroundColor: '#3496f0'
    //  flex: 0
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
    icon:{
      width: 40,
      height: 40,
      borderRadius: 20,
      // marginTop:10,
    }
  });


  
  export default HomeScreen
//  module.exports = SimpleApp;