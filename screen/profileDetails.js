/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  FlatList,
  Pressable,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {BLACK_1A, GREEN_18, WHITE} from '../utils/color';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const ProfileDetails = props => {
  const itemData = props.route.params.item;
  
  const renderAppearance = ({item, index}) => {
    return (
      <View style={styles.charBlock(index)}>
        <Text style={styles.appearedTagText}>Season {item}</Text>
      </View>
    );
  };

  const renderCharactor = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          props.navigation.navigate('profile', {item: item});
        }}
        style={styles.otherCharBlock(index)}>
        <View style={styles.imgBlock}>
          <Image
            source={{
              uri: item.img,
            }}
            style={styles.imgother}
          />
          <View>
            <View style={styles.otherNameBlock}>
              <Text style={styles.otherNameText}>{item.name}</Text>
            </View>

            <Text style={styles.nickNameText}>{item.otherNickNameText}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  const [charactorData, setCharactorData] = React.useState([]);
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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={{
            uri: itemData.img,
          }}
          resizeMode="stretch"
          style={styles.bgImg}>
          <View style={styles.bgImgContentBlock}>
            <View style={styles.img}>
              <Image
                source={{
                  uri: itemData.img,
                }}
                style={styles.hw100}
              />
            </View>
            <View style={styles.pv10}>
              <Text style={styles.nameText}>{itemData.name}</Text>
              <Text style={styles.nickNameText}>{itemData.nickname}</Text>
              <Text style={styles.statusText}>{itemData.status}</Text>
            </View>

            <View style={styles.potrayedBlock}>
              <Text style={styles.potrayedText}>Potrayed</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.potrayedTextValue}>Bryan Cranston</Text>
                <View style={styles.dateBlock}>
                  <Text style={styles.DateText}>09-July-1958</Text>
                  <Feather name="gift" size={22} color={WHITE} />
                </View>
              </View>
            </View>
          </View>

          <LinearGradient
            colors={['transparent', '#000000']}
            style={styles.linearGradientStyle}
            start={{x: 1, y: 0.3}}
            end={{x: 1, y: 1}}
          />
        </ImageBackground>

        <View style={styles.headerBlock}>
          <Feather
            name="arrow-left"
            size={24}
            color={WHITE}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
          <FontAwesome name="heart" size={24} color={GREEN_18} />
        </View>

        <View style={styles.pH22}>
          <Text style={styles.occupationText}>Occupation</Text>

          <View>
            {itemData.occupation.map((item, i) => {
              return <Text style={styles.listText}>{item}</Text>;
            })}
          </View>
        </View>

        <View style={styles.w100}>
          <Text style={styles.appearedText}>Appeared in</Text>
          <View style={styles.w100}>
            <FlatList
              data={itemData.appearance}
              renderItem={renderAppearance}
              keyExtractor={(item, index) => index}
              horizontal
              contentContainerStyle={{alignSelf: 'center'}}
            />
          </View>

          <View style={{marginTop: 81}}>
            <Text style={styles.otherTitle}>Other characters</Text>
            <FlatList
              data={charactorData}
              renderItem={renderCharactor}
              keyExtractor={(item, index) => index}
              horizontal
              contentContainerStyle={{alignSelf: 'center'}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
  },
  bgImg: {
    height: 536,
    width: '100%',
    position: 'relative',
  },
  bgImgContentBlock: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22222282',
  },
  img: {
    width: 200,
    height: 270,
    borderRadius: 7,
    overflow: 'hidden',
  },
  hw100: {
    width: '100%',
    height: '100%',
  },
  pv10: {
    paddingVertical: 10,
  },
  nameText: {
    color: WHITE,
    fontSize: 31,
    fontWeight: '700',
    lineHeight: 37,
    marginTop: 10,
  },
  nickNameText: {
    color: WHITE,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '300',
    alignSelf: 'center',
  },
  statusText: {
    color: '#CA184E',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    alignSelf: 'center',
    marginVertical: 6,
  },
  potrayedBlock: {
    width: '100%',
    paddingHorizontal: 22,
  },
  potrayedText: {
    color: '#18CA75',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    marginTop: 10,
  },
  potrayedTextValue: {
    fontSize: 14,
    fontWeight: '300',
    color: WHITE,
    lineHeight: 16,
  },
  dateBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DateText: {
    fontSize: 14,
    fontWeight: '300',
    color: WHITE,
    lineHeight: 16,
    marginRight: 13,
  },
  linearGradientStyle: {
    width: '100%',
    height: 150,
    poopacity: 1,
    position: 'absolute',
    bottom: 0,
  },
  headerBlock: {
    paddingVertical: 15,
    paddingHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
  },
  pH22: {
    paddingHorizontal: 22,
  },
  occupationText: {
    color: '#18CA75',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    marginTop: 10,
    marginBottom: 9,
  },
  listText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#ffffff',
    lineHeight: 16,
  },
  appearedText: {
    color: GREEN_18,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    marginBottom: 9,
    marginHorizontal: 22,
    marginTop: 48,
  },
  w100: {
    width: '100%',
  },
  otherTitle: {
    color: WHITE,
    fontSize: 23,
    fontWeight: '700',
    lineHeight: 27,
    marginBottom: 9,
    marginHorizontal: 22,
  },
  charBlock: index => ({
    backgroundColor: BLACK_1A,
    marginHorizontal: 5,
    marginLeft: index === 0 ? 22 : 0,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 3,
    overflow: 'hidden',
  }),
  appearedTagText: {
    color: WHITE,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '300',
    alignSelf: 'center',
  },
  otherCharBlock: index => ({
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: windowWidth / 2,
    marginLeft: index === 0 ? 12 : 0,
  }),

  imgBlock: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imgother: {
    width: '100%',
    height: 260,
  },
  otherNameBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    aignItems: 'center',
  },
  otherNameText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'flex-start',
    marginVertical: 1,
  },
  otherNickNameText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    alignSelf: 'flex-start',
  },
});

export default ProfileDetails;
