import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
class UserScreen extends React.Component {
    static navigationOptions = {
      title: 'Chat with Lucy',
    };
    render() {
      return (
        <View>
          <Text>个人中心</Text>
        </View>
      );
    }
  }
  export default UserScreen