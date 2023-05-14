import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import TaxiStack from './TaxiStack';
import RidingStack from './RidingStack';
import MyStack from './MyStack';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="TaxiStack"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="TaxiStack"
        component={TaxiStack}
        options={{
          tabBarLabel: '모임 찾기',
          tabBarIcon: () => <Icon name="people-circle-outline" size={26} />,
        }}
      />
      <Tab.Screen
        name="RidingStack"
        component={RidingStack}
        options={{
          tabBarLabel: '택시 팟',
          tabBarIcon: () => <Icon name="md-chatbox-outline" size={26} />,
        }}
      />
      <Tab.Screen
        name="MyStack"
        component={MyStack}
        options={{
          tabBarLabel: '마이페이지',
          tabBarIcon: () => <Icon name="md-settings-outline" size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
