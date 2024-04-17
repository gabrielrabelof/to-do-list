import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: '#0D0D0D'
  },
  content: {
    flex: 0.7,
    paddingHorizontal: 24,
    backgroundColor: '#1A1A1A'
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  logoIcon: {
    color: '#F2F2F2',
    fontSize: 36,
    marginRight: 24,
    borderRadius: 15, 
    padding: 10
  },
  logoText1: {
    color: '#4EA8DE',
    fontSize: 42,
    fontFamily: 'Inter_900Black'
  },
  logoText2: {
    color: '#5E60CE',
    fontSize: 42,
    fontFamily: 'Inter_900Black'
  },
  form: {
    flexDirection: 'row',
    marginTop: -30
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    marginRight: 6,
    paddingLeft: 16,
    fontSize: 16,
    color: '#F2F2F2',
    borderWidth: 0.8,
    borderRadius: 5,
    borderColor: '#0D0D0D'
  },
  addButton: {
    backgroundColor: '#1E6F9F',
    height: 52,
    width: 52,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22
  },
  status: {
    flexDirection: 'row',
    marginTop: 32
  },
  statusCreated: {
    color: '#4EA8DE',
    fontFamily: 'Inter_700Bold',
    fontSize: 16
  },
  statusCompleted: {
    color: '#8284FA',
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
  },
  tasksLength: {
    width: 26,
    height: 22,
    borderRadius: 50,
    marginLeft: 12,
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#D9D9D9',
    backgroundColor: '#333333',
    fontFamily: 'Inter_700Bold',
    fontSize: 14
  }
})