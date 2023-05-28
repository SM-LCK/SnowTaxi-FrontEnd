import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MyHistoryPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text>MyHistory</Text>
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

export default MyHistoryPage;
