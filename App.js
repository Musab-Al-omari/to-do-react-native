import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { StyleSheet, TextInput, Text, View, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Tasks';
export default function App() {


  const [task, setTask] = useState()
  const [taskItems, setTaskItem] = useState([])


  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItems, task])
    setTask('')
  }


  const completeTask = (index) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    setTaskItem(itemCopy);
  }
  return (

    <View style={styles.container}>

      {/* my todo application */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>LIST TO DO</Text>
        <View style={styles.items}>

          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                  <Task  text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>


      {/* write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput clearButtonMode="always" style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper} >
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center"
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,


  },
  addText: {

  },

});
