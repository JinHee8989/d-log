import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedsScreen from './FeedsScreen';
import SearchScreen from './SearchScreen';
import CalendarScreen from './CalendarScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#009688',
      }}>
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="view-stream" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="event" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
