/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';

import AppNaviation from './navigation/AppNaviation';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {FavReducer} from './Redux/Reducer/favReducer';

const App = () => {

  const rootReducer = combineReducers({
    fav: FavReducer,
  });
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <AppNaviation />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
