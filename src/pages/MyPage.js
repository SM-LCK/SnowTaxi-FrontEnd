import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import CashCard from '../components/CashCard';
import people from '../people.json';
import axios from 'axios';

function MyPage({navigation}) {
  //console.warn(final.data);
  let myUser;
  Object.keys(people.data).forEach(key => {
    if (people.data[key].id == 111) {
      //id 1인 사람정보 추출
      myUser = people.data[key];
    }
  });

  const logout = () => {
    Alert.alert('로그아웃 하시겠습니까?', '', [
      {
        text: '아니오',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: '네',
        onPress: () => {
          axios
            .get('http://localhost:9090/user/logout')
            .then(response => {
              console.log('로그아웃 성공', response.data);
            })
            .catch(error => {
              console.error('로그아웃 실패:', error);
            });
        },
      },
    ]);
  };

  const secession = () => {
    Alert.alert('탈퇴 하시겠습니까?', '', [
      {
        text: '아니오',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: '네',
        onPress: () => {
          axios
            .delete('http://localhost:9090/user/unlink')
            .then(response => {
              console.log('탈퇴 성공', response.data);
            })
            .catch(error => {
              console.error('탈퇴 실패:', error);
            });
        },
      },
    ]);
  };

  const {name, phone, cash} = myUser;
  // const windowWidth = Dimensions.get('window').width;
  // const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginHorizontal: 10,
            marginVertical: 10,
          }}>
          나의 정보
        </Text>
        <View style={styles.myInfo.profile}>
          <Image
            style={styles.myInfo.profile.picture}
            source={require('../../assets/profile.png')}
          />
          <View style={styles.myInfo.profile.desc}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>{name}님</Text>
            <Text style={{marginTop: 5}}>{phone}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View style={{}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginHorizontal: 10,
            marginVertical: 15,
          }}>
          나의 캐시
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <CashCard data={cash} />
        </View>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: 30,
        }}
      />

      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginVertical: 15,
              marginHorizontal: 10,
            }}>
            참여 내역
          </Text>
          <View style={{margin: 10}}>
            <Pressable onPress={() => navigation.navigate('MyHistory')}>
              <Icon name="right" size={18} />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginVertical: 15,
              marginHorizontal: 10,
            }}>
            로그아웃
          </Text>
          <View style={{margin: 10}}>
            <Pressable onPress={logout}>
              <Icon name="right" size={18} />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginVertical: 15,
              marginHorizontal: 10,
            }}>
            회원 탈퇴
          </Text>
          <View style={{margin: 10}}>
            <Pressable onPress={secession}>
              <Icon name="right" size={18} />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
  myInfo: {
    profile: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      picture: {marginLeft: 10},
      desc: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20,
      },
    },
  },

  myText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default MyPage;
