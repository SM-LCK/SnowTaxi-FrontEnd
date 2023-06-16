import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MyCashChargePage({route, navigation}) {
  const {cash} = route.params;
  const [text, onChangeText] = useState('');

  const handleSubmit = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value != null) {
        try {
          const requestUrl = `http://localhost:9090/cash/charge?amount=${text}`;
          axios({
            method: 'post',
            url: requestUrl,
            headers: {
              Authorization: `Bearer ${value}`,
            },
          }).then(response => {
            navigation.goBack()
          });
        } catch (error) {
          console.log('handle err', error);
        }
      }
    } catch (e) {
      console.log('postData', e);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={{marginTop: 30, fontSize: 15}}>
        천원택시 캐시를 충전합니다.
      </Text>
      <TextInput
        style={{
          height: 50,
          width: 300,
          marginVertical: 20,
          backgroundColor: '#F8F8F8',
          padding: 10,
        }}
        onChangeText={text => onChangeText(text)}
        value={text}
        placeholder="원하는 ₩만큼 입력하세요"
        keyboardType="numeric"
        onSubmitEditing={handleSubmit}
      />

      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: '#3D70FF',
          borderRadius: 10,
          height: 35,
          justifyContent: 'center',
          alignItems: 'center',
          width: 120,
        }}
        onPress={handleSubmit}>
        <Text style={{color: '#fff', fontSize: 15}}>충전하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default MyCashChargePage;
