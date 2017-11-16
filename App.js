
import React from 'react';
import { AppRegistry } from 'react-native';
import HomeScreen from './content/containers/Home/HomeScreen';
import {Provider} from 'react-redux';
import configureStore from './content/store/configureStore';
const store = configureStore();
class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
        </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);

export default App;
