import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {BLACK_70, GREEN_18, WHITE} from '../utils/color';
const Header = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headerTitle}>The Breaking bad</Text>
      </View>
      <View style={styles.flexRow}>
        <Feather
          name="search"
          size={24}
          color={WHITE}
          onPress={() => {
            navigation.navigate('search');
          }}
        />
        <FontAwesome
          name="heart"
          size={24}
          color={GREEN_18}
          style={styles.ml20}
          onPress={() => {
            navigation.navigate('fav');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 74,
    width: '100%',
    backgroundColor: BLACK_70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: GREEN_18,
    fontSize: 23,
    fontWeight: '700',
  },
  flexRow: {
    flexDirection: 'row',
  },
  ml20: {
    marginLeft: 20,
  },
});

export default Header;
