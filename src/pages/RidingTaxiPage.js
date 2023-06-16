import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Alert,
  MeI
} from 'react-native';
import {BlueButton, OrButton} from '../components/MyButtons';
import PeopleItem from '../components/PeopleItem';
import MeItem from '../components/MeItem';
import HostItem from '../components/HostItem';
import people from '../people.json';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

//방장+참여자들 정보(이름,전화번호,전화걸기,문자하기)
function RidingTaxiPage({navigation}) {
  const [hereData, setHereData] = useState([]);
  const [time, setTime] = useState('');
  const [depart, setDepart] = useState('');
  const [me, setMe] = useState([]);
  const [host, setHost] = useState([]);
  const [isHost, setIsHost] = useState(true);

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
            setDepart(response.data.potlist.departure);
            setTime(response.data.potlist.ridingTime);
            setIsHost(response.data.potlist.isHost);
            setMe(response.data.me);
            setHost(response.data.host);
            console.log('here', response.data);
            console.log('here >> ', response.data.potlist.ridingTime);
            console.log('here >> ', response.data.potlist.departure);
            console.log('save', hereData);
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
        <Text style={{ fontSize: 18, marginTop: 15, marginLeft: 10,}}>
          탑승 정보
        </Text>

        <View
          style={{
            marginVertical: 10,
            borderBottomColor: '#A1A1A1',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <View
          style={{
            alignItems: 'flex-end',
            marginRight: 30,
            marginTop: 10,
          }}>
            
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={{ fontSize: 18, marginVertical: 5,}}>
              탑승시간 :  
            </Text>
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 5, marginVertical: 5}}>
              {'  ' + time}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={{ fontSize: 18, marginVertical: 5,}}>
              출발 :  
            </Text>
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 5, marginVertical: 5}}>
              {'  ' + depart}
            </Text>
          </View>

          <Text style={{marginTop: 10, color: '#6A6A6A'}}>
            도착지는 숙대입구 후문입니다.
          </Text>
          <Text style={{marginBottom: 10, color: '#6A6A6A'}}>
            먼저 내리실 분들은 먼저 내려주세요.
          </Text>

          <View
            style={{
              marginVertical: 10,
              flexDirection: 'row',
            }}>
            <OrButton onPress={pressOrBtn} text="나가기" />
          </View>

        </View>
        
      </View>

      <View
        style={{
          marginVertical: 15,
          borderBottomColor: '#A1A1A1',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View style={{marginHorizontal: 15}}>
        <HostItem data={host} />
      </View>

      <View
        style={{
          marginVertical: 15,
          borderBottomColor: '#A1A1A1',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10,}}>
          정산 현황
      </Text>

      <View
        style={{
          marginVertical: 15,
          borderBottomColor: '#A1A1A1',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <ScrollView>
        <View style={{marginHorizontal: 15}}>
          <MeItem data={me} />
        </View>
          
        <View style={{marginHorizontal: 15}}>
          <FlatList
            data={hereData.members}
            renderItem={item => <PeopleItem data={item} />}
            //keyExtractor={item => item.id.toString()}
          />
        </View>
      </ScrollView>
      
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
