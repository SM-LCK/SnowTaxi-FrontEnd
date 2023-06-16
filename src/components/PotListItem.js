import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BlueButton, GrayButton} from './MyButtons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function PotListItem({data, isParticipating}) {
  // const {potlistId, departure, ridingTime, headCount, createAt, paidRequest} =
  //   data.item;

  const {isMyPot, pot} = data;
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
          const requestUrl = `http://localhost:9090/potlist/${pot.departure}/join?potlistId=${pot.potlistId}`;
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
          paddingHorizontal: 6
        }}>
        <View style={{margin: 15}}>
          <Text style={{fontSize: 18, fontWeight: 500}}>{pot.ridingTime}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
            {Array(pot.headCount).fill(<Icon name="person" size={18} />)}
            {Array(4 - pot.headCount).fill(
              <Icon name="person-outline" size={18} />,
            )}
          </View>
        </View>
        <View style={{margin: 15}}>
          { isParticipating ?
            ( isMyPot ?
              <BlueButton
            text={'참여중'}
            onPress={() => {
              navigation.navigate('RidingStack', {
                screen: 'RidingTaxi',
              });
            }}
          /> :
            <GrayButton
              text="참여하기"
            />
            )
          :
          <BlueButton
          text={'참여하기'}
          onPress={() => {
            postData();
            setTimeout(2000);
            navigation.navigate('RidingStack', {
              screen: 'RidingTaxi',
            });
          }}
        />
          }
        
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    height: 85,
    backgroundColor: '#F8F8F8',
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 13,
  },
});

export default PotListItem;
