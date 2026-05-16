import { Text, Touchable, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";
import { View } from "react-native";

function Button(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.textos}>{props.texto}</Text>
            </TouchableOpacity>
        </View>
        
    );
        
        
}

export default Button;