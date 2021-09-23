import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './tab/TabNavigator';


const MainNavigator = () => {
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
       <TabNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;