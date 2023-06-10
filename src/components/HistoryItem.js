import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//2023.6.10
//오전 10:30 (ridingTime)
//숙대입구(departure) -> 숙명여대 후문
//1600₩ 결제완료 (isPaid)

function HistoryItem() {
  const navigation = useNavigation();

  return <FlatList></FlatList>;
}
const styles = StyleSheet.create({
  itemContainer: {
    height: 70,
    backgroundColor: '#F8F8F8',
    marginBottom: 15,
    borderRadius: 20,
  },
});

export default HistoryItem;
