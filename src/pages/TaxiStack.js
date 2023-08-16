import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaxiRouteListPage from './TaxiRouteListPage';
import TaxiPotListPage from './TaxiPotListPage';

const Stack = createNativeStackNavigator();

function TaxiStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="TaxiRouteList"
        component={TaxiRouteListPage}
        options={{title: '출발지'}}
      />
      <Stack.Screen
        name="TaxiPotList"
        component={TaxiPotListPage}
        options={{title: '팟 고르기'}}
      />
    </Stack.Navigator>
  );
}
export default TaxiStack;
