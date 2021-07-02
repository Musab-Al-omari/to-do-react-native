import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Tasks';
export default function App() {
  return (
    <View style={styles.container}>

      {/* my todo application */}
      <View style={styles.tasksWrapper}>

        <Text style={styles.sectionTitle}>LIST TO DO</Text>

        <View style={styles.items}>
             <Task text={'mosab'}/>
             <Task text={'ali'}/>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,

  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',

  },
  items:{
    marginTop:30,
  }


});
