import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CheckIn from './CheckIn';
import CalendarView from './CalendarView';
import UserInfo from './UserInfo';

const TabNavs = () => {
    const Tab = createBottomTabNavigator();

    return (
        
            <Tab.Navigator initialRouteName="Checar">
                <Tab.Screen name="Checar" component={CheckIn} />
                <Tab.Screen name="Calendario" component={CalendarView} />
                <Tab.Screen name="Perfil" component={UserInfo} />
            </Tab.Navigator>
        
    )
}

export default TabNavs
