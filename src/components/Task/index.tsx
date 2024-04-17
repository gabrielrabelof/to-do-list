import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Checkbox } from "react-native-paper"
import AntDesign from 'react-native-vector-icons/AntDesign'

import { styles } from "./styles"

type Props = {
  task: string
  isChecked: boolean
  onRemove: () => void
  onCheck: (isChecked: boolean) => void
}

export function Task({ task, isChecked, onRemove, onCheck }: Props) {
  const [checked, setChecked] = useState(false)

  return (
    <View style={styles.container}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => [onCheck(!isChecked), setChecked(!checked)]}
        uncheckedColor="#4EA8DE"
        color="#5E60CE"
      />

      {
        !checked ? <Text style={styles.taskCreated}>{task}</Text> 
        : <Text style={styles.taskCompleted}>{task}</Text>       
      }
      
      <TouchableOpacity onPress={onRemove}>
        <AntDesign
          name="delete"
          size={22}
          color="#808080"        
        />
      </TouchableOpacity>
    </View>
  )
}