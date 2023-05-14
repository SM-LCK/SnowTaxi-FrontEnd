import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RidingTaxiPage from './RidingTaxiPage';
import DutchPayPage from './DutchPayPage';

const Stack = createNativeStackNavigator();

function RidingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RidingTaxi" component={RidingTaxiPage} />
      <Stack.Screen name="DutchPay" component={DutchPayPage} />
    </Stack.Navigator>
  );
}
export default RidingStack;
