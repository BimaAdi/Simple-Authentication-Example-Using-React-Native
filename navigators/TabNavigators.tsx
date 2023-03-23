import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { SecondScreen } from '../screens/SecondScreen';
import { HomeTabParamList, HomeTabProps } from '../types/navigation';

const Tab = createBottomTabNavigator<HomeTabParamList>();

export const TabNavigators = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Second" component={SecondScreen} />
        </Tab.Navigator>
    );
}