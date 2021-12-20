import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CheckIn from './CheckIn';
import CalendarView from './CalendarView';
import UserInfo from './UserInfo';

const TabNavs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Checar"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName:string = "";

          if (route.name === 'Checar') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'Calendario') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#841584',
        tabBarInactiveTintColor: '#841584',
      })}>
      <Tab.Screen name="Checar" component={CheckIn} />
      <Tab.Screen name="Calendario" component={CalendarView} />
      <Tab.Screen name="Perfil" component={UserInfo} />
    </Tab.Navigator>
  );
};

export default TabNavs;
