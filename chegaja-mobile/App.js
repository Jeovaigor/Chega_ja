import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { styles } from './style';
import icons from './src/constants/icons';
import Button from './src/components/button/button.jsx';

export default function App() {

  const nome = "Mateus";

  return (
    <View style={styles.container}>
      <Text style={styles.textos}>Hello {nome}</Text>
      <Image style={styles.imagem} source={icons.logo}/>
      <Button texto="Acessar"/>
    </View>
      
  );
}

// JSX