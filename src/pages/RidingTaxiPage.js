import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function RidingTaxiPage({navigation}) {
  //const {id} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.no}>
        <Text>참여 중인</Text>
        <Text>택시 팟이 없습니다..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  no: {flex: 1, fontSize: 20, alignItems: 'center', justifyContent: 'center'},
  yes: {},
});

export default RidingTaxiPage;
