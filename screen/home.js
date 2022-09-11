/* eslint-disable react-native/no-inline-styles */
import {View, Platform, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Header from '../component/Header';
import {BLACK_70} from '../utils/color';
import axios from 'axios';
import List from '../component/List';

const Home = ({navigation}) => {
  const [charactorData, setCharactorData] = useState([]);
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const configurationObject = {
      method: 'get',
      url: `https://www.breakingbadapi.com/api/characters`,
    };
    const response = await axios(configurationObject);
    setCharactorData(response.data);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <List data={charactorData} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK_70,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default Home;
