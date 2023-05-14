import React from 'react';
import {View, Text} from 'react-native';

function CreateTaxiPotPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>해당 루트의 팟 필요 정보를 입력하기</Text>
      <Text>생성하기 누르면 생성된 루트의 TaxiPotListPage 로</Text>
    </View>
  );
}

export default CreateTaxiPotPage;
