import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import people from '../people.json';
import final from '../final.json';

function CashCard({data}) {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={{
        width: 350,
        height: 200,
        resizeMode: 'contain',
      }}
      source={require('../../assets/card.png')}>
      <Text style={{marginHorizontal: 30, marginTop: 15, fontSize: 28}}>
        {data}₩
      </Text>
      <View style={{position: 'absolute', left: 220, bottom: 25}}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#3D70FF',
            borderRadius: 10,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
            width: 110,
          }}
          onPress={() => {
            navigation.navigate('MyCashCharge', {cash: data});
          }}>
          <Text style={{color: '#fff', fontSize: 15}}>충전하러 가기</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default CashCard;
