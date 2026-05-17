import { View } from "react-native-web";
import { styles } from "./style.js";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

import Login from "./src/screens/login/login.jsx";
import SignUp from "./src/screens/signup/signup.jsx";
import Register from "./src/screens/register/register.jsx";

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter: Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <Login/> */}
      {/* <SignUp /> */}
      <Register />
    </View>
  );
}

// JSX