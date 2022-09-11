/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet} from 'react-native';
import React from 'react';
import {BLACK_70} from '../utils/color';
import List from '../component/List';
import {useSelector} from 'react-redux';
import FavHeader from '../component/FavHeader';

const FavouritesItem = ({navigation}) => {
  const favData = useSelector(state => state.fav.FavouritesItem);
  return (
    <View style={styles.container}>
      <FavHeader navigation={navigation} />
      <List data={favData} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK_70,
  },
});

export default FavouritesItem;
