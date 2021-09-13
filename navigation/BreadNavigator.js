import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadsScreen';
import BreadDetailScreen from '../screens/BreadDetailScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

const ROUTES = {
  HOME: 'Home',
}

const BreadNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
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
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: 'Carrito' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default BreadNavigator;
