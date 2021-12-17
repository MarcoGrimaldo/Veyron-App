/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabNavs from './src/views/TabNavs';
import LogIn from './src/views/LogIn';

const App = () => {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn" screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Tabs" component={TabNavs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
