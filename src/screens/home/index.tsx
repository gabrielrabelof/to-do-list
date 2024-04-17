import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from "./styles";
import { Task } from "../../components/Task";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [text, setText] = useState("")

  function handleAddTask() {
    if (text == "") {
      return Alert.alert("Empty task", "Enter text to register a task.")
    }

    if (tasks.includes(text)) {
      return Alert.alert("Repeated task", "This task has already been registered.")
    }

    setTasks(prevState => [...prevState, text])
    setText("")
  }

  function handleRemoveTask(str: string) {
    Alert.alert("Remove task", "Are you sure you want to remove this task?", [
      {
        text: 'Yes',
        onPress: () => setTasks(tasks.filter(task => task !== str))
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ])
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.logo}>
          <LinearGradient
            colors={['#4EA8DE', '#5E60CE']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.logoIcon}
          >
            <MaterialCommunityIcons name="rocket-launch-outline" size={24} color="#F2F2F2" />
          </LinearGradient>

          <Text style={styles.logoText1}>to</Text>
          <Text style={styles.logoText2}>do</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder="Add a new task"
            placeholderTextColor="#808080"
            onChangeText={setText}
            value={text}
          />

          <TouchableOpacity 
            style={styles.addButton} 
            activeOpacity={0.8}
            onPress={handleAddTask}
          >
            <MaterialCommunityIcons 
              name="plus-circle-outline"
              size={24}
              color="#F2F2F2"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.taskHeader}>
          <View style={styles.status}>
            <Text style={styles.statusCreated}>Created</Text>
            <Text style={styles.tasksLength}>0</Text>
          </View>

          <View style={styles.status}>
            <Text style={styles.statusCompleted}>Completed</Text>
            <Text style={styles.tasksLength}>0</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Task 
              task={item}
              onRemove={() => handleRemoveTask(item)}  
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  )
}