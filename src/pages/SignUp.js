import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignUp({route, navigation}) {
  const {id} = route.params;
  const [phone, setPhone] = useState('');

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@token', value);
    } catch (e) {
      // saving error
      console.log('storeData err', e);
    }
  };

  // 입력 값 처리 수행하는 함수
  const handleSubmit = () => {
    console.log(phone, id);
    axios({
      method: 'post',
      url: 'http://localhost:9090/user/signUp',
      data: {
        kakao_token: id,
        phone: phone,
      },
    })
      .then(response => {
        console.log('success', response.data);
        try {
          axios({
            method: 'post',
            url: 'http://localhost:9090/user/auth',
            data: {kakao_token: returnToken},
          }).then(response => {
            const value = response.headers.get('Authorization');
            //console.log(response.headers.get('Authorization'));

            //asyncstorage
            storeData(value);

            //alert
            Alert.alert('회원가입 성공!', '');
            navigation.navigate('MainTab', {screen: 'TaxiRouteList'});
          });
        } catch (error) {
          console.log('authorization err', err);
        }
      })
      .catch(error => {
        console.log('err:', error);
        console.log('[SignUp] store@token', value);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          marginTop: 15,
          marginLeft: 15,
        }}>
        SnowTaxi 회원가입
      </Text>
      <View style={{flex: 1, marginTop: 200, alignItems: 'center'}}>
        <Text style={{margin: 10, fontSize: 15}}>
          사용하실 전화번호를 입력해주세요😀
        </Text>
        <TextInput
          style={styles.input}
          placeholder="전화번호를 입력하세요."
          keyboardType="phone-pad"
          value={phone}
          onChangeText={text => setPhone(text)}
          onSubmitEditing={handleSubmit}
        />
        <TouchableOpacity style={styles.blueContainer} onPress={handleSubmit}>
          <Text style={{color: '#fff', fontSize: 15}}>가입하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },

  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  blueContainer: {
    alignItems: 'center',
    backgroundColor: '#3D70FF',
    borderRadius: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
});

export default SignUp;
