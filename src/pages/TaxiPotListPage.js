import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
} from 'react-native';
import PotListItem from '../components/PotListItem';
import pot from '../pot.json';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import {CreateButton} from '../components/MyButtons';

function TaxiPotListPage({route, navigation}) {
  const {id} = route.params;

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
  const todays = `${year}.${month}.${date}`;

  const [hereData, setHereData] = useState(
    pot.data.filter(data => data.from === id && data.date === todays),
  );

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
      from: id,
      ridingTime: time.toLocaleTimeString().slice(0, -3),
      createdAt: '',
      state: '참여중',
      people: 1,
      date: todays,
    };
    setHereData([...hereData, newData]);
    hideDatePicker();
  };

  // const goBack = () => {
  //   navigation.goBack();
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.first}>
        {/* <Pressable onPress={goBack} style={{left: 10}}>
            <Icon name="left" size={25} style={{margin: 15}} />
          </Pressable> */}
        <Text style={styles.first.title}>
          {id}
          {' → 숙명여대 후문'}
        </Text>
        {id == '숙대입구' ? (
          <Image source={require('../../assets/sookmyung2.png')} />
        ) : id == '효창공원앞' ? (
          <Image source={require('../../assets/hyochang2.png')} />
        ) : id == '남영역' ? (
          <Image source={require('../../assets/namyoung2.png')} />
        ) : (
          <Image source={require('../../assets/seoul2.png')} />
        )}
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
          <CreateButton text="팟 만들기" onPress={showDatePicker} />
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
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 15, marginBottom: 5}}>
              아직 모집중인 팟이 없습니다.
            </Text>
            <Text style={{fontSize: 15}}>팟을 생성해보세요!</Text>
          </View>
        ) : (
          <FlatList
            data={hereData}
            renderItem={({item}) => <PotListItem data={item} key={item.id} />}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  first: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
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
