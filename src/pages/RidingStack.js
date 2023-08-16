import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RidingTaxiPage from './RidingTaxiPage';
import DutchPayPage from './DutchPayPage';

const Stack = createNativeStackNavigator();

function RidingStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="RidingTaxi"
        component={RidingTaxiPage}
        options={{title: '참여중인 팟'}}
      />
      <Stack.Screen
        name="DutchPay"
        component={DutchPayPage}
        options={{title: '정산하기'}}
      />
    </Stack.Navigator>
  );
}
export default RidingStack;
