/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Router from './router';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Router />
    </SafeAreaView>
  );
}

export default App;
