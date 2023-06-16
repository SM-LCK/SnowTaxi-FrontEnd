import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BlueButton, GrayButton} from '../components/MyButtons';

function MeItem({data}) {
  const {nickname, paid, phone} = data;
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 85,
        backgroundColor: '#F8F8F8',
        marginBottom: 15,
        borderRadius: 15,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 17}}>{nickname}</Text>
          </View>
        </View > 
        <View style={{marginRight: 5}}>
        { paid ?
            <Text style={{fontSize: 15, color:'#4B4BEF'}}>정산완료</Text> :
            <Text style={{fontSize: 15, color:'#4B4BEF'}}>미정산</Text>
        }
        </View>
      </View>
      <View style={{marginRight: 5}}>
        {paid ? (
          <Text style={{fontSize: 15, color: '#4B4BEF'}}>정산완료</Text>
        ) : (
          <Text style={{fontSize: 15, color: '#F07446'}}>미정산</Text>
        )}
      </View>
    </View>
  );
}

export default MeItem;
