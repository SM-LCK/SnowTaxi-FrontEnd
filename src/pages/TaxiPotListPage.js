import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList, Image} from 'react-native';
import PotListItem from '../components/PotListItem';
import DATA from '../data';
import DateTimePicker from '@react-native-community/datetimepicker';

function TaxiPotListPage({route, navigation}) {
  const {id} = route.params; //{"id":'서울역 '}
  const hereData = [];
  DATA.map(data => {
    if (data.from === id) hereData.push(data);
  });

  const currentdate = new Date();
  const year = currentdate.getFullYear();
  const month = currentdate.getMonth() + 1;
  const date = currentdate.getDate();
  let day;
  let weak = ['일', '월', '화', '수', '목', '금', '토'];
  for (let i = 0; i <= 6; i++) {
    if (currentdate.getDay() == i) {
      day = weak[i];
    }
  }
  const today = `${year}.${month}.${date} ${day}`;

  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.first.title}>
          {id}
          {' → 숙명여대 후문'}
        </Text>
        <Image source={require('../../assets/sookmyung2.png')} />
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={styles.second}>
        <Text style={styles.second.today}>{today}</Text>
        <View style={styles.second.desc}>
          <Text>오늘 탈 택시 팟에 참여할 수 있어요.🚖</Text>
          <Text>모든 정산 금액은 기본 요금인 4800원입니다.</Text>
        </View>
        <View style={styles.second.buttons}>
          <Text>팟 만들기</Text>
          {/*<Button title="팟 생성하기" onPress={onDatePicker} />
          <DateTimePicker
            mode="time"
            value={new Date()}
            disabled={datePickerVisible}
      />*/}
          <DateTimePicker mode="time" value={new Date()} />
        </View>

        {hereData.length == 0 ? (
          <View
            style={{
              flex: 1,
              fontSize: 18,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>아직 모집중인 팟이 없습니다.</Text>
            <Text>팟을 생성해보세요!</Text>
          </View>
        ) : (
          <View style={styles.second.flat}>
            <FlatList
              data={hereData}
              renderItem={item => <PotListItem data={item} />}
              keyExtractor={item => item.id}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  first: {
    flex: 1,
    height: 150,
    alignItems: 'center',
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
    },
  },
  second: {
    flex: 2,
    margin: 15,
    today: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    desc: {
      fontSize: 10,
      marginTop: 5,
    },
    buttons: {
      alignItems: 'center',
      marginLeft: 230,
      marginBottom: 10,
    },
    flat: {
      flex: 1,
    },
  },
});
export default TaxiPotListPage;
