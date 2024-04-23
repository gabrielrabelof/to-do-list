import { useState } from "react"
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { styles } from "./styles"
import { Task } from "../../components/Task"

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [taskStates, setTaskStates] = useState<{ [key: string]: boolean }>({})
  const [text, setText] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [checkedCount, setCheckedCount] = useState(0)

  let createdCount = tasks.length

  function handleFocus() {
    setIsFocused(true)
  }

  function handleBlur() {
    setIsFocused(false)
  }

  function handleAddTask() {
    if (text === "") {
      return Alert.alert("Empty task", "Enter text to register a task.")
    }

    if (tasks.includes(text)) {
      return Alert.alert("Repeated task", "This task has already been registered.")
    }

    setTasks(prevState => [text, ...prevState])
    setText("")
  }

  function handleRemoveTask(str: string) {
    Alert.alert("Remove task", "Are you sure you want to remove this task?", [
      {
        text: 'Yes',
        onPress: () => {setTasks(tasks.filter(task => task != str))
          if (taskStates[str]) {
            setCheckedCount(prevCount => prevCount - 1)
          }
        }
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ])
  }

  function handleCheckTask(str: string, isChecked: boolean) {
    const isTaskChecked = taskStates[str]
  
    const updatedTaskStates = { ...taskStates, [str]: isChecked }
    setTaskStates(updatedTaskStates)
  
    const updatedTasks = isChecked
      ? tasks.filter(task => task !== str).concat(str) 
      : [str].concat(tasks.filter(task => task !== str)) 
  
    setTasks(updatedTasks)
  
    setCheckedCount(prevCount => isTaskChecked !== isChecked ? prevCount + (isChecked ? 1 : -1) : prevCount)
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
            style={[styles.input, {borderColor: isFocused ? '#5E60CE' : '#0D0D0D'}]}
            placeholder="Add a new task"
            placeholderTextColor="#808080"
            onChangeText={setText}
            value={text}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
            <Text style={styles.tasksLength}>{createdCount}</Text>
          </View>

          <View style={styles.status}>
            <Text style={styles.statusCompleted}>Completed</Text>
            <Text style={styles.tasksLength}>{checkedCount}</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task
              isChecked={taskStates[item] || false}
              onCheck={(isChecked) => handleCheckTask(item, isChecked)}
              task={item}
              onRemove={() => handleRemoveTask(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyList}>
              <MaterialCommunityIcons
                name="clipboard-text-outline"
                style={styles.emptyListIcon}
              />
              <Text style={styles.emptyListText}>You don't have tasks registered yet</Text>
              <Text style={styles.emptyListSubscription}>Create tasks and organize your to-do items</Text>
            </View>
          }
        />
      </View>
    </>
  )
}