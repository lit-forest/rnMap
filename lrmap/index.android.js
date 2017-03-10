/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

//import Login from './src/js/Login';
import Login from './src/js/MyScene';

class lrmap extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let defaultName = 'Login';
    let defaultComponent = Login;
    return (
      <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.VerticalUpSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    )
  }
}

AppRegistry.registerComponent('lrmap', () => lrmap);
