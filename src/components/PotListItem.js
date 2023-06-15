import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BlueButton} from './MyButtons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function PotListItem({data}) {
  const {potlistId, departure, ridingTime, headCount, createAt, paidRequest} =
    data;
  const navigation = useNavigation();

  const goTogether = () => {
    Alert.alert('참여하시겠습니까?', '', [
      {
        text: '아니오',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: '네',
        onPress: () =>
          navigation.navigate('RidingStack', {
            screen: 'RidingTaxi',
            params: {
              from: from,
              ridingTime: ridingTime,
            },
          }),
      },
    ]);
  };

  const postData = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value != null) {
        try {
          const requestUrl = `http://localhost:9090/potlist/${departure}/join?potlistId=${potlistId}`;
          axios({
            method: 'post',
            url: requestUrl,
            headers: {
              Authorization: `Bearer ${value}`,
            },
          }).then(response => {
            console.log('post data');
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
    <Pressable style={styles.itemContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{margin: 15}}>
          <Text style={{fontSize: 18, fontWeight: 500}}>{ridingTime}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {Array(headCount).fill(<Icon name="person" size={18} />)}
            {Array(4 - headCount).fill(
              <Icon name="person-outline" size={18} />,
            )}
          </View>
        </View>
        <View style={{margin: 15}}>
          <BlueButton
            text={'참여중'}
            onPress={() => {
              postData();
              navigation.navigate('RidingStack', {
                screen: 'RidingTaxi',
              });
            }}
          />
          {/* {state === '참여중' ? (
            <BlueButton
              text={state}
              onPress={() =>
                navigation.navigate('RidingStack', {
                  screen: 'RidingTaxi',
                  params: {
                    departure: departure,
                    ridingTime: ridingTime,
                  },
                })
              }
            />
          ) : (
            <BlueButton text={state} onPress={goTogether} />
          )}  */}
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    height: 70,
    backgroundColor: '#F8F8F8',
    marginBottom: 15,
    borderRadius: 20,
  },
});

export default PotListItem;
