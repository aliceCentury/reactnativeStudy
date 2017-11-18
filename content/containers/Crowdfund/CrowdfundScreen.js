import React from 'react';
import {Dimensions,StyleSheet,View,Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import OnGoingList from "./OnGoingList"
let scale = Dimensions.get('window').scale ;
const CrowdfundScreen = TabNavigator({
  CrowdfundNew: {
    screen: OnGoingList,
    navigationOptions: {
      tabBarLabel:({ tintColor, focused }) => (
        <View style={styles.topBar}>
          <Text style={{fontSize: 16,color:tintColor}}>最新</Text>
          <View style={{marginTop:6,width:25,borderRadius:4,height:3,backgroundColor:focused?tintColor:'#1f1e1e'}}></View>
        </View>
      ),
      
    },
  },
  CrowdfundHistory: {
    screen: OnGoingList,
    navigationOptions: {
      tabBarLabel:({ tintColor, focused }) => (
        <View style={styles.topBar}>
          <Text style={{fontSize: 16,color:tintColor}}>历史</Text>
          <View style={{marginTop:6,width:25,borderRadius:4,height:3,backgroundColor:focused?tintColor:'#1f1e1e'}}></View>
       </View>
      ),
      
    },
  }
}, {
  tabBarPosition:'top',
  animationEnabled:true,
  tabBarOptions: {
    activeTintColor: '#e3b76d',
    inactiveTintColor:'#ccc',
    labelStyle: {
      fontSize: 18,
    },
    style: {
      paddingTop:5,
      paddingBottom:5,
      backgroundColor: '#1f1e1e',
    },
  },
});
const styles = StyleSheet.create({
  topBar:{
    justifyContent:'center',
    alignItems:'center',
  }
})
export default CrowdfundScreen