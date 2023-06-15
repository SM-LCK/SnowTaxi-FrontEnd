import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BlueButton} from './MyButtons';

function PotListItem({data}) {
  const {potlistId, departure, ridingTime, headCount, createAt, paidRequest} =
    data;
  console.log('potlist', data);
  // const {date, from, ridingTime, createdAt, people, state} = data;
  const navigation = useNavigation();

  //   "potlistId": 1,
  //   "departure": "효창공원앞",
  //   "ridingTime": "10시",
  //   "headCount": 2,
  //   "createdAt": "2023-06-15",
  //   "paidRequest": false

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
              state: state,
            },
          }),
      },
    ]);
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
