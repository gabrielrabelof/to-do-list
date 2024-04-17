import { useFonts, Inter_400Regular, Inter_700Bold, Inter_900Black } from "@expo-google-fonts/inter"

import { Home } from "./src/screens/home";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold, Inter_900Black })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Home />
      <StatusBar
          
        backgroundColor="transparent"
        translucent={true}
      />
    </>
  )
}
