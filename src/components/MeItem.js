import React from 'react';
import {
  Text,
  View,
} from 'react-native';
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
              <Text style={{fontWeight: 'bold', fontSize: 17}}>{nickname + ' (나)'}</Text>
            </View>
            <Text style={{marginTop: 8, fontSize: 16}}>{phone}</Text>
          </View>
        </View > 
        <View>
        { paid ?
            <GrayButton
                text="정산완료"
            /> :
            <BlueButton
                onPress={() => navigation.navigate('DutchPay')}
                text="정산하기"
            />
        }
        </View>
      </View>
    
  );
}

export default MeItem;
