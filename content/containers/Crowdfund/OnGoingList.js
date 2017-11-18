import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ListView,
  BackAndroid,
  Platform,
  Button
} from 'react-native';

var moment = require('moment');
/**
 * 触发Action
 */
import {fetchGirl} from './../../action/girlAction';
/**
 * 用于将UI和Reducer绑定
 */
import {connect} from 'react-redux';
class OnGoingList extends React.Component {
  // static navigationOptions = {
  //   title: '聊天',
  // }
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
      dispatch(fetchGirl(index = 26));
      console.log(this.props.navigation.state.routeName)
    }

    componentWillReceiveProps(nextProps) {
    // alert(JSON.stringify(nextProps.girlReducer.girlList))
  }
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
    }else if(girlReducer.girlList.items==0){
      return(
        <Text>
        暂无记录
      </Text>
      )
    }
     else {
      return (
        <ScrollView>
          <ListView
            dataSource={this
            .dataSource
            .cloneWithRows(girlReducer.girlList.items)}
            renderRow={(rowData) => 
            <View style={styles.list}>
            <Image
              source={{
              uri: rowData.cover_image
            }}
              style={styles.userHeader}/>
              <View style={styles.rigth}>
            <Text>
              {moment(rowData.created_at).format("YYYY-MM-DD")}，{rowData.journal}
            </Text>
            <Text>
              {rowData.name}
            </Text>
            <View>
            <View style={styles.timeRang}>
            <Text style={styles.timeRangText}>
            距离结束：122：22：11
            </Text>
              
            </View>
            </View>
            <View style={styles.line}>
            <Text>
              单价：¥{rowData.price}+{rowData.points}乐豆
            </Text>
            <Text>
            众筹进度：{rowData.crowdfund_progress}
            </Text>
            </View>
            <View style={styles.line}>
            <Text>
            当前收益/份：¥{rowData.single_dividend}
            </Text>
            <View>
              <View style={styles.btnBox}>
              <Text style={styles.btn}>
            查看详情
            </Text>
              </View>
            
            </View>
            </View>
            </View>
          </View>}/>

        </ScrollView>

      );
    }

  }
}
const styles = StyleSheet.create({
  userHeader: {
    width: 100,
    height: 100,
    borderRadius:10
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: '#d6d7da',
    borderBottomWidth: 0.5,
    backgroundColor:"#fff",
    padding: 10,
    
  },
  rigth:{
    // flexDirection: 'column',
    marginLeft:10,
    alignContent:'space-between',
  },
  timeRang:{
    backgroundColor: '#fcf8f0',
    borderColor:'#e3b76d',
    borderTopWidth: 1,
    borderBottomWidth:1,
    borderStyle:'solid',
    height: 18,
    justifyContent:'center',
    alignItems:'center',
  },
  timeRangText:{
    fontSize: 16,
    lineHeight:16,
    color: "#e3b76d",
  },
  line:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnBox:{
    borderRadius:10,
  },
  btn:{
    backgroundColor: "#505050",
    padding:5,
    color:"#fff"
  }
});
function mapStateToProps(state) {
  const {girlReducer} = state;

  return {girlReducer}
}
export default connect(mapStateToProps)(OnGoingList);