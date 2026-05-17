import { styles } from "./style.js";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

import Routes from "./src/routes.js";

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Routes/>
  );
}

// JSX