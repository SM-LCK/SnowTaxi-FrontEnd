import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function MyPage({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <View style={styles.myInfo}>
        <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>
          나의 정보
        </Text>
        <View style={styles.myInfo.profile}>
          <Image
            style={styles.myInfo.profile.picture}
            source={require('../../assets/profile.png')}
          />
          <View style={styles.myInfo.profile.desc}>
            <Text style={{fontWeight: 'bold'}}>최수연님</Text>
            <Text>010-7399-5383</Text>
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
        <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>
          나의 캐시
        </Text>
        <Image
          style={{
            width: 350,
            resizeMode: 'contain',
            //justifyContent: 'center',
            //alignItems: 'center',
            marginLeft: 12,
            marginTop: -280,
          }}
          source={require('../../assets/card.png')}
        />
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
          <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>
            참여 내역
          </Text>
          <Icon name="right" size={20} />
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
          <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>
            로그아웃
          </Text>
          <Icon name="right" size={20} />
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
          <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>
            회원 탈퇴
          </Text>
          <Icon name="right" size={20} />
        </View>
      </View>
    </View>
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
