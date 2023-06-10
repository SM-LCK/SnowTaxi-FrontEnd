import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import HistoryItem from '../components/HistoryItem';

function MyHistoryPage({navigation}) {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
});

export default MyHistoryPage;
