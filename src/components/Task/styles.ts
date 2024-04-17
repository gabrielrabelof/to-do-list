import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 12
  },
  task: {
    flex: 1,
    lineHeight: 24,
    color: '#F2F2F2',
    fontFamily: 'Inter_400Regular',
    padding: 12
  },
  checkbox: {
    borderRadius: 50, // Border radius de 50
  },
})