import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';
import {BlueButton, OrButton} from '../components/MyButtons';
import PeopleItem from '../components/PeopleItem';
import people from '../people.json';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//방장+참여자들 정보(이름,전화번호,전화걸기,문자하기)
function RidingTaxiPage({navigation}) {
  const [hereData, setHereData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value != null) {
        try {
          const requestUrl = `http://localhost:9090/participation/mypot`;
          axios({
            method: 'get',
            url: requestUrl,
            headers: {
              Authorization: `Bearer ${value}`,
            },
          }).then(response => {
            console.log('res >>', response.data);
            setHereData(response.data);

            //const keys = Object.keys(jsonHere);
            // const values = Object.values(jsonHere);
            //setPotData(values[0]);
            // setMemberData(values[1]);
            console.log('here', response.data);
            console.log('here >> ', response.data.potlist.ridingTime);
            console.log('here >> ', response.data.potlist.departure);
          });
        } catch (error) {
          console.log('test err', error);
        }
      }
    } catch (e) {
      console.log('getData', e);
    }
  };

  // const {from, ridingTime} = route.params; //PotListItem에서 from, ridingTime가져옴
  const pressOrBtn = () => {
    Alert.alert('나가시겠습니까?', '', [
      {
        text: '아니오',
        onPress: () => {
          //
        },
        style: 'cancel',
      },
      {
        text: '네',
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.yesTop}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 10,
          }}>
          탑승 정보
        </Text>
        <View
          style={{
            marginVertical: 10,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View
          style={{
            alignItems: 'flex-end',
            marginRight: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                marginVertical: 5,
              }}>
              탑승시간:
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 5,
                marginVertical: 5,
              }}>
              {hereData.potlist.ridingTime}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                marginVertical: 5,
              }}>
              출발:
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginVertical: 5,
                marginLeft: 5,
              }}>
              {hereData.potlist.departure}
            </Text>
          </View>

          <Text style={{marginTop: 5}}>도착지는 숙대입구 후문입니다.</Text>
          <Text style={{marginBottom: 5}}>
            먼저 내리실 분들은 먼저 내려주세요.
          </Text>
          <View
            style={{
              marginVertical: 10,
              flexDirection: 'row',
            }}>
            <BlueButton
              onPress={() => navigation.navigate('DutchPay')}
              text="정산하기"
            />
            <OrButton onPress={pressOrBtn} text="나가기" />
          </View>
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View>
        <View style={{marginTop: 5}}>
          <FlatList
            data={hereData.members}
            renderItem={item => <PeopleItem data={item} />}
            //keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  no: {flex: 1, fontSize: 20, alignItems: 'center', justifyContent: 'center'},
});

export default RidingTaxiPage;
