import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {GREEN_18, WHITE} from '../utils/color';
import {addFavourites} from '../Redux/Action/favourities';
import {useDispatch, useSelector} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const List = props => {
  const ditchpatch = useDispatch();
  const data = props.data;
  const favData = useSelector(state => state.fav.FavouritesItem);
  const onPressFav = e => {
    const checksome = checkFav(e);
    if (checksome) {
      const newFilter = favData.filter((item, index) => {
        if (item.char_id !== e.char_id) {
          return item;
        }
      });
      ditchpatch(addFavourites(newFilter));
    } else {
      const data = [];
      data.push(e);
      const added = favData.concat(data);

      ditchpatch(addFavourites(added));
    }
  };

  const checkFav = e => {
    return favData.some(item => {
      return item.char_id === e.char_id;
    });
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemMainBlock}>
        <View style={styles.imgBlock}>
          <Pressable
            onPress={() => {
              props.navigation.navigate('profile', {item: item});
            }}>
            <Image
              source={{
                uri: item.img,
              }}
              style={styles.img}
            />
          </Pressable>
          <View>
            <View style={styles.nameBlock}>
              <Text style={styles.nameText}>{item.name}</Text>
              <FontAwesome
                name={checkFav(item) ? 'heart' : 'heart-o'}
                size={24}
                color={GREEN_18}
                onPress={() => onPressFav(item)}
              />
            </View>

            <Text style={styles.nickNameText}>{item.nickname}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemMainBlock: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: windowWidth / 2,
  },
  imgBlock: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: 260,
  },
  nameBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    aignItems: 'center',
  },
  nameText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'flex-start',
    marginVertical: 1,
  },
  nickNameText: {
    color: WHITE,
    fontSize: 14,
    fontWeight: '300',
    alignSelf: 'flex-start',
  },
});

export default List;
