import React, {useState, useEffect} from 'react';
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
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

function MyPage({navigation}) {
  const [name, setName] = useState('');
  const [phonenum, setPhonenum] = useState('');
  const [cash, setCash] = useState('');

  const isFocused = useIsFocused();

  useEffect(() => {
    getData();
  }, [cash,isFocused]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value != null) {
        try {
          axios({
            method: 'get',
            url: 'http://localhost:9090/user/me',
            headers: {
              Authorization: `Bearer ${value}`,
            },
          }).then(response => {
            console.log('res >>', response.data);
            setName(response.data.nickname);
            setPhonenum(response.data.phone);
            setCash(response.data.amount);
          });
        } catch (error) {
          console.log('test err', error);
        }
      }
    } catch (e) {
      console.log('getData', e);
    }
  };

  const remove = async () => {
    try {
      await AsyncStorage.removeItem('@token');
    } catch (e) {
      console.log('remove', e);
    }
  };

  const goOut = () => {
    // navigation.navigate('Login');
    navigation.popToTop();
  };

  const Logout = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value != null) {
        try {
          axios({
            method: 'get',
            url: 'http://localhost:9090/user/logout',
            headers: {
              Authorization: `Bearer ${value}`,
            },
          }).then(response => {
            remove();
            goOut();
            console.log('로그아웃 성공', response.data);
          });
        } catch (error) {
          console.log('로그아웃 err', error);
        }
      }
    } catch (e) {
      console.log('로그아웃', e);
    }
  };

  const secess = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value != null) {
        try {
          axios({
            method: 'get',
            url: 'http://localhost:9090/user/unlink',
            headers: {
              Authorization: `Bearer ${value}`,
            },
          }).then(response => {
            remove();
            goOut();
            console.log('탈퇴 성공', response.data);
          });
        } catch (error) {
          console.log('탈퇴 err', error);
        }
      }
    } catch (e) {
      console.log('탈퇴', e);
    }
  };

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
          Logout();
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
          secess();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginHorizontal: 15,
            marginVertical: 15,
          }}>
          나의 정보
        </Text>
        <View style={styles.myInfo.profile}>
          <View style={styles.myInfo.profile.desc}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>{name}님</Text>
            <Text style={{marginTop: 10, fontSize: 15}}>{phonenum}</Text>
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
            fontSize: 20,
            fontWeight: 'bold',
            marginHorizontal: 15,
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
              fontSize: 20,
              fontWeight: 'bold',
              marginVertical: 15,
              marginHorizontal: 15,
            }}>
            로그아웃
          </Text>
          <View style={{margin: 15}}>
            <Pressable onPress={logout}>
              <Icon name="right" size={20} />
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
              fontSize: 20,
              fontWeight: 'bold',
              marginVertical: 15,
              marginHorizontal: 15,
            }}>
            회원 탈퇴
          </Text>
          <View style={{margin: 15}}>
            <Pressable onPress={secession}>
              <Icon name="right" size={20} />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
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
