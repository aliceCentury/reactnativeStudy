import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
class DrawerLayout extends React.Component {
  constructor(props) {
    super(props);  
    this.state={
      test:0
    }
  }
  render() {
    return <View style={styles.container}>
    <Image
        style={styles.icon}
        source={require('./../assets/images/user.png')}
      />
         <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Hello，Alice!</Text>
        </View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center'
  },
  icon:{
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop:10,
  }
});


export default DrawerLayout
