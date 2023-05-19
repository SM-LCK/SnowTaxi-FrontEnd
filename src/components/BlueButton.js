import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View, Alert} from 'react-native';

function BlueButton({children}) {
  const onPress = () => {};
  return <Button title={children} color="4274FF" onPress={onPress} />;
}

export default BlueButton;
