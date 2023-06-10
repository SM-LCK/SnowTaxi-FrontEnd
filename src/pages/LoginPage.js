import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';

function LoginPage({navigation}) {
  const [webViewVisible, setWebViewVisible] = useState(false);
  const [webViewSource, setWebViewSource] = useState(''); //웹뷰의 소스 URI 저장변수

  const handleLogin = () => {
    axios
      .get('http://localhost:9090/user/login')
      .then(response => {
        console.log('user/login 콘솔', response.data);
        setWebViewSource(response.data);
        setWebViewVisible(true);
      })
      .catch(error => {
        console.error('로그인 실패:', error);
      });
  };

  const onMessage = e => {
    console.log('data', e.nativeEvent.data); //WebView에서 수신한 메세지? (JSON형식)
    console.log('url', e.nativeEvent.url);
    const data = e.nativeEvent.url;
    getCode(data);
    //handleLoginComplete(); // 메시지 수신 후 로그인 완료 처리
  };

  const getCode = target => {
    const exp = 'code=';
    const condition = target.indexOf(exp);
    if (condition !== -1) {
      //setRequestCode(target.substring(condition + exp.length));
      const requestCode = target.substring(condition + exp.length);

      //if (requestCode != null) {
      axios
        .get('http://localhost:9090/user/validation')
        .then(response => {
          console.log('user/validation 콘솔', response.data);
          if (response.data == 'Main') {
            navigation.navigate('MainTab', {screen: 'TaxiRouteList'});
          } else {
            navigation.navigate(response.data); //Signup
          }
        })
        .catch(error => {
          console.error(' 실패:', error);
        });

      console.log('requestCode', requestCode);
    }
  };

  const handleLoginComplete = () => {
    if (requestCode != null) {
      navigation.navigate('MainTab', {screen: 'TaxiRouteList'});
    } else {
      navigation.navigate('SignUp');
    }
  };

  const INJECTED_JS = `window.ReactNativeWebView.postMessage('message from WEB')`;

  return (
    <>
      {webViewVisible ? (
        <WebView
          style={styles.webview}
          source={{uri: webViewSource}}
          onMessage={onMessage}
          injectedJavaScript={INJECTED_JS} //WebView->RN으로 메세지 전달
        />
      ) : (
        <View style={styles.container}>
          <View
            style={{
              marginVertical: 30,
              alignItems: 'center',
            }}>
            <Image
              style={{width: 180, height: 180}}
              source={require('../../assets/appName.png')}
            />
            <Image
              style={{width: 180, height: 180, resizeMode: 'contain'}}
              source={require('../../assets/taxiImage.png')}
            />
          </View>
          <TouchableOpacity onPress={handleLogin}>
            <Image
              style={{borderRadius: 10, marginVertical: 30, width: 200}}
              source={require('../../assets/kakao.png')}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AFC1FF',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#2D64FF',
  },
  webview: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default LoginPage;
