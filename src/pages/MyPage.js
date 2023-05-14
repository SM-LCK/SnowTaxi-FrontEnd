import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function MyPage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.myInfo}>
        <Text style={styles.myText}>나의 정보</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={styles.myCash}>
        <Text style={styles.myText}>나의 캐시</Text>
        <Image
          style={{width: 300, resizeMode: 'contain'}}
          source={require('../../assets/card.png')}
        />
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <Text style={styles.myText}>참여 내역</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <Text style={styles.myText}>로그아웃</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <Text style={styles.myText}>회원 탈퇴</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  myInfo: {},
  myCash: {
    flex: 2,
  },
  myText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default MyPage;
