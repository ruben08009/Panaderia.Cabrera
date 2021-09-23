import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from '../../screens/shop/CategoriesScreen';
import CategoryBreadScreen from '../../screens/shop/CategoryBreadsScreen';
import BreadDetailScreen from '../../screens/shop/BreadDetailScreen';
import { COLORS } from '../../constants/colors';

const Stack = createNativeStackNavigator();

const ROUTES = {
  HOME: 'Home',
}

const ShopNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}
  >
    <Stack.Screen
      name={ROUTES.HOME}
      component={CategoriesScreen}
      options={{
        title: 'Mi Pan',
      }}
    />
    <Stack.Screen
      name="Products"
      component={CategoryBreadScreen}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
    <Stack.Screen
      name="Detail"
      component={BreadDetailScreen}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </Stack.Navigator>
);

export default ShopNavigator;
