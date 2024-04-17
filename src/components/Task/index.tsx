import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";
import AntDesign from 'react-native-vector-icons/AntDesign';

import { styles } from "./styles";

type Props = {
  task: string
}

export function Task({ task }: Props) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        uncheckedColor="#4EA8DE"
        color="#5E60CE"
      />


      <Text style={styles.task}>{task}</Text>
      
      <TouchableOpacity>
        <AntDesign
          name="delete"
          size={22}
          color="#808080"
        />
      </TouchableOpacity>
    </View>
  )
}