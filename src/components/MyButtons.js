import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function BlueButton({onPress, text}) {
  return (
    <TouchableOpacity style={styles.blueContainer} onPress={onPress}>
      <Text style={{color: '#fff', fontSize: 15}}>{text}</Text>
    </TouchableOpacity>
  );
}
function OrButton({onPress, text}) {
  return (
    <TouchableOpacity style={styles.orContainer} onPress={onPress}>
      <Text style={{color: '#fff', fontSize: 15}}>{text}</Text>
    </TouchableOpacity>
  );
}
function GrayButton({onPress, text}) {
  return (
    <TouchableOpacity style={styles.grayContainer} onPress={onPress}>
      <Text style={{color: '#fff', fontSize: 15}}>{text}</Text>
    </TouchableOpacity>
  );
}

function CreateButton({onPress, text}) {
  return (
    <TouchableOpacity style={styles.createContainer} onPress={onPress}>
      <Icon name="plus" size={15} style={{paddingLeft: 5}} />
      <Text style={styles.createtext}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  blueContainer: {
    alignItems: 'center',
    backgroundColor: '#3D70FF',
    borderRadius: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  grayContainer: {
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
    borderRadius: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  orContainer: {
    alignItems: 'center',
    backgroundColor: '#FF8642',
    borderRadius: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  createContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: '#FF8642',
    borderRadius: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
  },
  bluetext: {
    color: '#fff',
    fontSize: 15,
  },
  createtext: {
    color: '#fff',
    fontSize: 15,
    padding: 5,
  },
});
export {BlueButton, GrayButton, OrButton, CreateButton};
