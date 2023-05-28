import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import CashCard from '../components/CashCard';
import people from '../people.json';

function MyPage({navigation}) {
  //console.warn(final.data);
  let myUser;
  Object.keys(people.data).forEach(key => {
    if (people.data[key].id == 111) {
      //id 1인 사람정보 추출
      myUser = people.data[key];
    }
  });

  const {name, phone, cash} = myUser;
  // const windowWidth = Dimensions.get('window').width;
  // const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold', margin: 10}}>
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

      <View style={styles.myCash}>
        <Text style={{fontSize: 18, fontWeight: 'bold', margin: 10}}>
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
        }}
      />

      <View style={styles.myArrow}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', margin: 10}}>
            참여 내역
          </Text>
          <Pressable onPress={() => navigation.navigate('MyHistory')}>
            <Icon name="right" size={18} />
          </Pressable>
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
          <Text style={{fontSize: 18, fontWeight: 'bold', margin: 10}}>
            로그아웃
          </Text>
          <Icon name="right" size={18} />
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
          <Text style={{fontSize: 18, fontWeight: 'bold', margin: 10}}>
            회원 탈퇴
          </Text>
          <Icon name="right" size={18} />
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
    flexGrow: 1,
    flex: 1,
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
  myCash: {
    flexGrow: 2,
    flex: 2,
  },
  myArrow: {
    flexGrow: 1,
    flex: 3,
  },
  myText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default MyPage;
