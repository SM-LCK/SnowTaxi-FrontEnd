import * as React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function TaxiRouteListPage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>도착지는 숙대입구 후문입니다.</Text>
        <Text>출발지를 선택해주세요.</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('TaxiPotList', {id: '숙대입구'})}
        style={styles.routes}>
        <Image
          style={styles.button}
          source={require('../../assets/sookmyung.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TaxiPotList', {id: '효창공원앞'})}
        style={styles.routes}>
        <Image
          style={styles.button}
          source={require('../../assets/hyochang.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TaxiPotList', {id: '서울역'})}
        style={styles.routes}>
        <Image
          style={styles.button}
          source={require('../../assets/seoul.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TaxiPotList', {id: '남영역'})}
        style={styles.routes}>
        <Image
          style={styles.button}
          source={require('../../assets/namyoung.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  routes: {
    marginTop: 15,
    marginBottom: 15,
  },
  text: {
    justifyContent: 'center',
    marginBottom: 30,
    alignItems: 'center',
    color: '#5C5C5C',
  },
});

export default TaxiRouteListPage;
