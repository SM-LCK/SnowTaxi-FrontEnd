import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MyCashChargePage({navigation}) {
  return (
    <View style={styles.container}>
      <Text>MyPage</Text>
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
});

export default MyCashChargePage;
