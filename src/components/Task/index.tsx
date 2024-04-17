import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";
import AntDesign from 'react-native-vector-icons/AntDesign';

import { styles } from "./styles";

type Props = {
  task: string
  onRemove: () => void
}

export function Task({ task, onRemove }: Props) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked)
        }}
        uncheckedColor="#4EA8DE"
        color="#5E60CE"
      />


      <Text style={styles.task}>{task}</Text>
      
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