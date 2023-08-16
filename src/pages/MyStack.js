import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyPage from './MyPage';
import MyCashChargePage from './MyCashChargePage';
import MyHistoryPage from './MyHistoryPage';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{title: '마이 페이지'}}
      />
      <Stack.Screen
        name="MyCashCharge"
        component={MyCashChargePage}
        options={{title: '캐시 충전하기'}}
      />
      <Stack.Screen
        name="MyHistory"
        component={MyHistoryPage}
        options={{title: '참여 내역'}}
      />
    </Stack.Navigator>
  );
}
export default MyStack;
