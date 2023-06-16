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
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginPage({navigation}) {
  const [webViewVisible, setWebViewVisible] = useState(false);
  const [webViewSource, setWebViewSource] = useState(''); //웹뷰의 소스 URI 저장변수

  const handleLogin = () => {
    setWebViewSource(
      'https://kauth.kakao.com/oauth/authorize?client_id=60968cb46ee97afe3cb98d0b6cac5aa5&redirect_uri=http://localhost:9090/user/kakao&response_type=code',
    );
    setWebViewVisible(true);
  };

  function LogInProgress(data) {
    // access code는 url에 붙어 장황하게 날아온다.
    // substring으로 url에서 code=뒤를 substring하면 된다.
    const exp = 'code=';
    var condition = data.indexOf(exp);
    if (condition != -1) {
      var request_code = data.substring(condition + exp.length);
      //  console.log('인가코드: ' + request_code);
      // 토큰값 받기
      requestToken(request_code);
    }
  }

  const requestToken = async request_code => {
    var returnValue = 'none';
    var request_token_url = 'https://kauth.kakao.com/oauth/token';

    axios({
      method: 'post',
      url: request_token_url,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      params: {
        grant_type: 'authorization_code',
        client_id: '60968cb46ee97afe3cb98d0b6cac5aa5',
        redirect_uri: 'http://localhost:9090/user/kakao',
        code: request_code, //인가코드 서버에 보내기
      },
    })
      .then(function (response) {
        returnToken = response.data.access_token;
        //  console.log('사람토큰: ' + returnToken); //사람토큰
        //storeData(returnToken);
        gettokenAsync(returnToken);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@token', value);
      //console.log('[Login] store@token', value);
    } catch (e) {
      // saving error
      console.log('storeData err', e);
    }
  };

  const gettokenAsync = returnToken => {
    let stringData = '';
    try {
      axios({
        method: 'post',
        url: 'http://localhost:9090/user/isUser',
        data: {kakao_token: returnToken},
      })
        .then(response => {
          //console.log('response data1', response.data);
          stringData = response.data;

          if (stringData == 'SignUp') {
            navigation.navigate(stringData, {id: returnToken});
          } else {
            try {
              axios({
                method: 'post',
                url: 'http://localhost:9090/user/auth',
                data: {kakao_token: returnToken},
              })
                .then(response => {
                  // console.log(response.headers.get('Authorization'));
                  const value = response.headers.get('Authorization');
                  //asyncstorage
                  storeData(value);
                })
                .catch(error => {
                  console.log(error);
                });

              navigation.navigate('MainTab', {screen: 'TaxiRouteList'});
            } catch (err) {
              console.log(err);
            }
          }
        })
        .catch(err => {
          console.log(err);
        });

      //console.log(stringData);
    } catch (err) {
      console.log(err);
    }
  };

  /*
  const Auth = () => {
    try {
      axios({
        method: 'post',
        url: 'http://localhost:9090/user/auth',
        data: {kakao_token: returnToken},
      }).then(response => {
        console.log(response.headers.get('Authorization'));
      });
    } catch (error) {
      console.log('auth err', error);
    }
  };

*/
  /*
  try {
    axios({
      method: 'get',
      url: 'http://localhost:9090/user/isUser',
      // headers: {
      //   Authorization: `Bearer ${returnToken}`,
      // },
      data: {kakao_token: returnToken},
    }).then(response => {
      console.log(response.data);
      if (response.data === 'SignUp') {
        navigation.navigate(response.data, {id: returnToken});
      } else {
        //Auth();
        navigation.navigate('MainTab', {screen: 'TaxiRouteList'});
      }
    });
  }catch (error) {
    console.log('authorizaiton err', err);
  }

*/

  /*
  const storeData = async returnValue => {
    try {
      await AsyncStorage.setItem('userAccessToken', returnValue);
      console.log('userAccessToken', returnValue);
    } catch (e) {
      // saving error
      console.log('storeData');
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userAccessToken');
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
*/
  const INJECTED_JS = `window.ReactNativeWebView.postMessage('message from WEB')`;

  return (
    <>
      {webViewVisible ? (
        <WebView
          style={styles.webview}
          source={{
            uri: webViewSource,
          }}
          onMessage={e => {
            LogInProgress(e.nativeEvent['url']);
          }}
          injectedJavaScript={INJECTED_JS} //WebView->RN으로 메세지 전달
          javaScriptEnabled={true}
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
