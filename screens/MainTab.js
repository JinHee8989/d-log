import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedsScreen from './FeedsScreen';
import SearchScreen from './SearchScreen';
import CalendarScreen from './CalendarScreen';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feeds" component={FeedsScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="calendar" component={CalendarScreen} />
    </Tab.Navigator>
  );
}

export default MainTab;
