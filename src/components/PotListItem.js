import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import BlueButton from './BlueButton';

function PotListItem({data}) {
  const {id, route, ridingTime, createdAt, people, state} = data.item;
  {
    /* const [from, setFrom] = useState('');
  const [title, setTitle] = useState('');
  const [state, setState] = useState('');
  const [people, setPeople] = useState(0);

  if (data.item == null) {
    <Text>아직 모집중인 팟이 없습니다.</Text>;
  } 
*/
  }
  const navigation = useNavigation();

  const gotoRidingTaxi = () => {
    Alert.alert('참여하시겠습니까?', [
      {
        text: '아니오',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: '네',
        onPress: () => navigation.navigate('RidingStack'),
      },
    ]);
  };

  return (
    <Pressable style={styles.itemContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{margin: 15}}>
          <Text style={{fontSize: 18, fontWeight: 500}}>{ridingTime}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {Array(people).fill(<Icon name="person" size={18} />)}
            {Array(4 - people).fill(<Icon name="person-outline" size={18} />)}
          </View>
        </View>
        {state === '참여중' ? (
          <Button
            style={styles.itemButton}
            title={state}
            onPress={() => navigation.navigate('RidingStack')}
          />
        ) : (
          <Button
            style={styles.itemButton}
            title={state}
            onPress={() => navigation.navigate('RidingStack')}
          />
        )}
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    height: 70,
    backgroundColor: '#EFEFEF',
    marginBottom: 15,
    borderRadius: 20,
  },
  itemButton: {
    margin: 15,
    //backgroundColor: '#007AFF',
    //borderColor: '#007AFF',
    //background: '#4274FF',
    borderRadius: 100,
  },
});

export default PotListItem;
