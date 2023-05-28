import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function HistoryItem({data}) {
  //const {from, ridingTime, createdAt, people, state} = data.item;
  const navigation = useNavigation();

  return (
    <Pressable style={styles.itemContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{margin: 15}}>
          <Text style={{fontSize: 18, fontWeight: 500}}></Text>
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

export default HistoryItem;
