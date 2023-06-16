import React from 'react';
import {
  Text,
  View,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BlueButton, GrayButton} from '../components/MyButtons';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';


function MeItem({data}) {
  console.log('sdfsdf', data);
  const {nickname, paid, phone} = data;
  
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value != null) {
        try {
          const requestUrl = 'http://localhost:9090/cash/pay';
          axios({
            method: 'post',
            url: requestUrl,
            headers: {
              Authorization: `Bearer ${value}`,
            },
          }).then(response => {
            console.log("respseif")
            if (response.data == 'success') {
              Alert.alert('정산이 완료되었습니다.', '');
            } else {
              Alert.alert('잔액이 부족합니다.', '');
            }
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
      <View
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            height: 85,
            backgroundColor: '#F8F8F8',
            marginBottom: 15,
            borderRadius: 15,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>{nickname + ' (나)'}</Text>
            </View>
            <Text style={{marginTop: 8, fontSize: 16}}>{phone}</Text>
          </View>
        </View > 
        <View>
        { paid ?
            <GrayButton
                text="정산완료"
            /> :
            <BlueButton
                onPress={handleSubmit}
                text="정산하기"
            />
        }
        </View>
      </View>
    
  );
}

export default MeItem;
