/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {GRAY} from '../utils/color';
import {BLACK_70, GREEN_18} from '../utils/color';
import axios from 'axios';
import {useEffect} from 'react';
import List from '../component/List';

const Search = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetchSearchData();
  }, [searchValue]);

  const fetchSearchData = async () => {
    const configurationObject = {
      method: 'get',
      url: `https://www.breakingbadapi.com/api/characters?name=${searchValue}`,
    };
    const response = await axios(configurationObject);
    setFilterData(response.data);
  };

  const Header = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 86,
          backgroundColor: GRAY,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 26,
          }}>
          <Feather
            name="arrow-left"
            size={22}
            color="white"
            style={{width: '10%', marginLeft: 10}}
            onPress={() => navigation.goBack()}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={'#aaaaaa'}
            style={{
              color: 'white',
              fontSize: 33,
              width: '90%',
              paddingHorizontal: 10,
              fontWeight: '100',
            }}
            value={searchValue}
            onChangeText={e => setSearchValue(e)}
          />
          <Feather
            name="x"
            size={22}
            color="white"
            style={{width: '10%', marginLeft: 10}}
            onPress={() => setSearchValue('')}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {Header()}
      <List data={filterData} />

      {filterData.length === 0 && (
        <View style={{paddingTop: 52, paddingHorizontal: 24}}>
          <Text
            style={{
              color: GREEN_18,
              fontSize: 24,
              fontWeight: '300',
              lineHeight: 28,
            }}>
            No character found
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '300',
              lineHeight: 28,
              color: '#C4C4C4',
            }}>
            Try gain
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK_70,
  },
});

export default Search;
