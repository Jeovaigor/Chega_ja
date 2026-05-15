import { View } from "react-native-web";
import Login from "./src/screens/login/login.jsx";
import { styles } from "./style.js";

export default function App() {

  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

// JSX