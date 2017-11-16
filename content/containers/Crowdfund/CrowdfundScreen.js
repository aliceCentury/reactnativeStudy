import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ListView,
  BackAndroid,
  Platform
} from 'react-native';
var moment = require('moment');
/**
 * 触发Action
 */
import {getList} from './../../action/auction';
/**
 * 用于将UI和Reducer绑定
 */
import {connect} from 'react-redux';
class CrowdfundScreen extends React.Component {
  static navigationOptions = {
    title: '聊天',
  }
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
    this.dataSource = new ListView.DataSource({
      rowHasChanged: ((row1, row2) => row1 !== row2)
    })
  }
  /**
     * 调用数据 :
     *      1. 当触发Action方法请求数据反馈到Reducer中
     *      2. Reducer通过ActionType判断该更新哪个UI中的State
     *      3. 最后刷新界面显示数据
     */
  componentWillMount() {
    const {dispatch} = this.props;
    let data={
       "auction_status":0,
       "current_page":1,
       "page_size":10,
     }
    dispatch(getList(data));

  }

  componentDidMount() {}
  render() {
    const {girlReducer} = this.props;
    // alert(JSON.stringify(girlReducer.loading));
    // alert(JSON.stringify(girlReducer.girlList));
    if (!girlReducer.loading) {
      return (
        <View
          style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 16
          }}>加载中...</Text>

        </View>
      )
    } else {
      return (
        <ScrollView>
          <ListView
          
            dataSource={this
            .dataSource
            .cloneWithRows(girlReducer.girlList)}
            renderRow={(rowData) => <View style={styles.list}>
            <Image
              source={{
              uri: rowData.url
            }}
              style={styles.userHeader}/>
            <View style={styles.message}>
              <Text style={styles.userName}>
                {rowData.who}
              </Text>
              <Text style={styles.messageInfo}>
                {rowData.source}
              </Text>
            </View>
            <View style={styles.dateBox}>
              <Text>
                {moment(rowData.createdAt).format("HH:mm")}
              </Text>
              <Text style={styles.tip}>
                1
              </Text>
            </View>
          </View>}/>

        </ScrollView>

      );
    }

  }
}
const styles = StyleSheet.create({
  userHeader: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: '#d6d7da',
    borderBottomWidth: 0.5,
    padding: 10
  },
  message: {
    width: 200,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  userName: {
    fontSize: 16
  },
  messageInfo: {
    fontSize: 14
  },
  dateBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tip: {
    width: 20,
    height: 20,
    fontSize: 12,
    lineHeight: 18,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#dc143c",
    borderRadius: 10
  }
});
function mapStateToProps(state) {
  const {auctionReducer} = state;

  return {auctionReducer}
}
export default connect(mapStateToProps)(CrowdfundScreen);