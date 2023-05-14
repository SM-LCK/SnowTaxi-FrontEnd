import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function LoginPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SnowTaxi</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MainTab', {screen: 'TaxiRouteList'})
        }>
        <Image
          style={styles.button}
          source={require('../../assets/kakao.png')}
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
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#2D64FF',
  },
  button: {
    width: 200,
    borderRadius: 10,
    margin: 10,
  },
});

export default LoginPage;
