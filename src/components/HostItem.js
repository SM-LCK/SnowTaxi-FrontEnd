import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BlueButton, GrayButton} from '../components/MyButtons';

function HostItem({data}) {
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
            borderRadius: 15,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 19}}>{'🚘 ' + nickname + ' (방장)'}</Text>
            </View>
            <Text style={{marginTop: 8, fontSize: 18}}>{phone}</Text>
          </View>
        </View > 
      </View>
    
  );
}

export default HostItem;
