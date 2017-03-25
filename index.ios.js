/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Page_1 from './page_1';
import Page_2 from './page_2';
import Page_3 from './page_3'

const App = () => {
  return(
    <Page_3 />
  )
};

AppRegistry.registerComponent('twitch', () => App);
