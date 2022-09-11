import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/home';
import ProfileDetails from '../screen/profileDetails';
import Search from '../screen/Search';
import FavouritesItem from '../screen/favouritesItem';

const Stack = createNativeStackNavigator();

function AppNaviation({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          name="home"
          options={() => ({
            headerShown: false,
          })}
          component={Home}
        />
        <Stack.Screen
          name="profile"
          options={() => ({
            headerShown: false,
          })}
          component={ProfileDetails}
        />

        <Stack.Screen
          name="fav"
          options={() => ({
            headerShown: false,
          })}
          component={FavouritesItem}
        />

        <Stack.Screen
          name="search"
          options={() => ({
            headerShown: false,
          })}
          component={Search}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNaviation;
