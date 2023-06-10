import axios from 'axios';
import React, {useState} from 'react';
import {TextInput, SafeAreaView, StyleSheet, Text, View} from 'react-native';

function SignUp({navigation}) {
  const [phone, setPhone] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const url = 'http://localhost:9090/user/signUp'; // 요청을 보낼 URL

  const onChangeText = text => {
    setPhone(text);
  };

  // 입력 값 처리를 수행하는 함수
  const onSubmitEditing = () => {
    setSubmittedText(phone); // 입력 값을 submittedText에 저장
    console.log('입력 값:', phone);

    const requestUrl = `${url}?phone=${phone}`; // 전화번호를 쿼리 매개변수로 추가
    axios
      .post(requestUrl, null, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        // 성공적인 응답을 처리합니다.
        console.log(response.data);
        navigation.navigate('MainTab', {screen: 'TaxiRouteList'});
      })
      .catch(error => {
        // 에러를 처리합니다.
        console.error(error);
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
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
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
});

export default SignUp;
