import { Text, View, Image } from "react-native";
import { styles } from "./style.jsx";
import Button from "../src/components/button/button.jsx";

export default function Index() {

  const nome = "Mateus"
  return (
    <View>
      <Text style={styles.textos}>Hello {nome}!</Text>
      <Image style={styles.imagem} 
        source={{uri: "https://kinsta.com/pt/wp-content/uploads/sites/3/2020/10/tipos-de-arquivo-de-imagem.png"}}
      />
      <Button texto="Acessar"/>
    </View>
  );
}
