import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {BlueButton, OrButton} from '../components/MyButtons';
import PeopleItem from '../components/PeopleItem';
import people from '../people.json';

//captain: 1, payed: 1
function DutchPayPage({route, navigation}) {
  const count = Object.keys(people.data).length;
  const pay = 4800 / count;

  const [notPay, setNotPay] = useState(
    people.data.filter(people => people.payed == 0),
  );
  const [finishPay, setFinishPay] = useState(
    people.data.filter(people => people.payed == 1 && people.captain != 1),
  );
  let captain;
  Object.keys(people.data).forEach(key => {
    if (people.data[key].captain == 1) {
      captain = people.data[key];
    }
  });
  //people.data.filter(people => people.captain == 1);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 10,
          }}>
          방장 결제 정보
        </Text>
        <View
          style={{
            marginVertical: 10,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <Image style={{}} source={require('../../assets/profile.png')} />
            <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10}}>
              👑 {captain.name}
            </Text>
            <Text style={{fontSize: 15, marginTop: 10, marginLeft: 5}}>
              {captain.phone}
            </Text>
          </View>
          <View style={{alignItems: 'flex-end', marginRight: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 5,
                  marginBottom: 5,
                  //fontWeight: 'bold',
                }}>
                기본 요금:
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 5,
                  marginBottom: 5,
                  marginLeft: 5,
                }}>
                4800원
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  //fontWeight: 'bold',
                  marginTop: 5,
                  marginBottom: 5,
                }}>
                팟 인원수:
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 5,
                  marginBottom: 5,
                  marginLeft: 5,
                }}>
                {count}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  //fontWeight: 'bold',
                  marginTop: 5,
                  marginBottom: 5,
                }}>
                인 당:
              </Text>
              <Text
                style={{
                  color: '#3D70FF',
                  fontSize: 25,
                  fontWeight: 'bold',
                  marginTop: 5,
                  marginBottom: 5,
                  marginLeft: 5,
                }}>
                {pay}원
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 15,
            marginLeft: 10,
          }}>
          미정산
        </Text>
        <View
          style={{
            marginVertical: 10,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View>
          <FlatList
            data={notPay}
            renderItem={item => <PeopleItem data={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 10,
          }}>
          정산 완료
        </Text>
        <View
          style={{
            marginVertical: 10,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View>
          <FlatList
            data={finishPay}
            renderItem={item => <PeopleItem data={item} />}
            keyExtractor={item => item.id.toString()}
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
});

export default DutchPayPage;
