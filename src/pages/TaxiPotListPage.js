import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import PotListItem from '../components/PotListItem';
import DATA from '../data';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

function TaxiPotListPage({route, navigation}) {
  const {id} = route.params; //{"id":'서울역'}

  const [hereData, setHereData] = useState(
    DATA.filter(data => data.route === id),
  );

  const currentdate = new Date();
  const year = currentdate.getFullYear();
  const month = currentdate.getMonth() + 1;
  const date = currentdate.getDate();
  let day;
  let week = ['일', '월', '화', '수', '목', '금', '토'];
  for (let i = 0; i <= 6; i++) {
    if (currentdate.getDay() == i) {
      day = week[i];
    }
  }
  const today = `${year}.${month}.${date} ${day}`;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = time => {
    const newData = {
      id: '',
      route: id,
      ridingTime: time.toLocaleTimeString().slice(0, -3),
      createdAt: '',
      state: '참여중',
      people: 1,
    };

    setHereData([...hereData, newData]);
    hideDatePicker();
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Pressable onPress={goBack} style={{left: 10}}>
            <Icon name="left" size={25} style={{margin: 15}} />
          </Pressable>
          <Text style={styles.first.title}>
            {id}
            {' → 숙명여대 후문'}
          </Text>
        </View>
        <Image source={require('../../assets/sookmyung2.png')} />
      </View>

      <View
        style={{
          marginTop: 10,
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
          <Button title="팟 만들기" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            cancelTextIOS="취소하기"
            confirmTextIOS="탑승시간 선택"
          />
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
              keyExtractor={item => item.id.toString()}
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
    marginBottom: 10,
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 35,
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
      marginLeft: 250,
      marginBottom: 10,
    },
    flat: {
      flex: 1,
    },
  },
});
export default TaxiPotListPage;
