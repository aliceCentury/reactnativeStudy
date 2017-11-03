import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);  
    this.state={
      test:0
    }
  }
  componentDidMount(){
  }
  componentWillReceiveProps(nextProps) {
    
  }
  render() {
    return <View style={styles.container}>
      <Text>Hello Alice~</Text>
    </View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default HomeScreen
