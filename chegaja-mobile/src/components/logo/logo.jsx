import { Image, View} from "react-native";
import { styles } from "./logo.style.js";
import icons from "../../constants/icons.js"

function Logo() {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo} 
                source={icons.logo}
                // dimensionamento da imagem
                resizeMode="contain" /> 
        </View>
    );
}
export default Logo;