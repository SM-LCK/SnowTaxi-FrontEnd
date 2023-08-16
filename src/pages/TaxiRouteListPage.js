import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

function TaxiRouteListPage({navigation}) {
  /*
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value != null) {
        //console.log(value);
        try {
          axios({
            method: 'get',
            url: 'http://localhost:9090/user/login',
            headers: {
              Authorization: `Bearer ${value}`,
            },
          }).then(response => {
            console.log('res', response.data);
          });
        } catch (error) {
          console.log('test err', error);
        }
      }
    } catch (e) {
      console.log('getData', e);
    }
  };
*/

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text
          style={{
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 15,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          출발지
        </Text>
      </View>

      <View
        style={{
          marginBottom: 15,
          borderBottomColor: '#A1A1A1',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={{fontSize: 15}}>도착지는 숙대입구 후문입니다.</Text>
          <Text style={{fontSize: 15, marginTop: 5}}>
            출발지를 선택해주세요.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('TaxiPotList', {id: '숙대입구'})}
          style={styles.routes}>
          <Image
            style={styles.button}
            source={require('../../assets/sookmyung.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TaxiPotList', {id: '효창공원앞'})}
          style={styles.routes}>
          <Image
            style={styles.button}
            source={require('../../assets/hyochang.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TaxiPotList', {id: '서울역'})}
          style={styles.routes}>
          <Image
            style={styles.button}
            source={require('../../assets/seoul.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TaxiPotList', {id: '남영역'})}
          style={styles.routes}>
          <Image
            style={styles.button}
            source={require('../../assets/namyoung.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  routes: {
    marginTop: 15,
    marginBottom: 15,
  },
  text: {
    // alignItems: 'center',
    // justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
    color: '#5C5C5C',
  },
});

export default TaxiRouteListPage;
