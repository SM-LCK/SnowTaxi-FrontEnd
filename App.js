import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './src/pages/LoginPage';
import MainTab from './src/pages/MainTab';
import SignUp from './src/pages/SignUp';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

function App() {
  // 사용자 로그인 여부에 따라 리다이렉션할 경로를 결정합니다.
  //const isLoggedIn = false; // 로그인 여부에 따라서 변경하세요
  //<Stack.Screen name="Login" component={LoginPage} />
  //<Stack.Screen name="Signup" component={SignUp} />

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainTab" component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>

    /*
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/main" component={MainTab} />
        <Redirect to={isLoggedIn ? '/main' : '/login'} />
      </Switch>
    </Router>
  );
  */
  );
}
export default App;
