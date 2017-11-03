import React from 'react'
import {View,Dimensions,StyleSheet,Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}
class Footer extends React.Component {
    constructor(props) {
        super(props)
      
    }
	

    render() {
		return (
		<View  style={styles.container}>
            <View>
            <Ionicons name="ios-chatboxes" size={px2dp(22)} color="#666"/>
            <Text>首页</Text>
            </View>
            <View>
            <Ionicons name="ios-chatboxes" size={px2dp(22)} color="#666"/>
            <Text>首页</Text>
            </View>
            <View>
            <Ionicons name="ios-chatboxes" size={px2dp(22)} color="#666"/>
            <Text>首页</Text>
            </View>
        </View>
				
		)
    }

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
  });
export default Footer
