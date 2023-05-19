import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaxiRouteListPage from './TaxiRouteListPage';
import TaxiPotListPage from './TaxiPotListPage';
import RidingTaxiPage from './RidingTaxiPage';

const Stack = createNativeStackNavigator();

function TaxiStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TaxiRouteList" component={TaxiRouteListPage} />
      <Stack.Screen name="TaxiPotList" component={TaxiPotListPage} />
      <Stack.Screen name="RidingTaxi" component={RidingTaxiPage} />
    </Stack.Navigator>
  );
}
export default TaxiStack;
