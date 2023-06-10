import React, {useState} from 'react';
import {
  Image,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function PeopleItem({data}) {
  // {id: 1, phone: '010-0000-0000', profile: '../assets/profile.png', name: '최수연', cash: 10000},
  const {phone, profile, name, captain} = data.item;
  const navigation = useNavigation();
  //<Button onPress={{Linking.openURL(`tel:01012341234`)}} />
  {
    /*<TouchableOpacity
        style={styles.titleBoxBottomBtn}
        onPress={()=>{Linking.openURL(`tel:${phoneNumber}`)}}
        >
        <Text>전화하기</Text>
    </TouchableOpacity>
*/
  }
  return (
    <Pressable style={styles.itemContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.profile}>
          {/* <Image
            style={styles.profile.picture}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          /> */}
          <View style={styles.profile.desc}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {captain > 0 ? (
                <>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>
                    👑 {name}
                  </Text>
                </>
              ) : (
                <Text style={{fontWeight: 'bold', fontSize: 15}}>{name}</Text>
              )}
            </View>
            <Text style={{marginTop: 5}}>{phone}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={{marginRight: 10}}>
          <Image
            style={{width: 35, height: 35, resizeMode: 'cover'}}
            source={require('../../assets/telephone.png')}
          />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 70,
    backgroundColor: '#F8F8F8',
    marginBottom: 15,
    borderRadius: 20,
  },
  profile: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    picture: {marginLeft: 10},
    desc: {
      flexDirection: 'column',
      marginTop: 5,
      marginLeft: 20,
    },
  },
});

export default PeopleItem;
