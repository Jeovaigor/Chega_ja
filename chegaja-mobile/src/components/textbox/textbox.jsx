import { View, TextInput } from "react-native";
import { styles } from "./textbox.style.js";

function TextBox(props) {
    return (
        <View style={styles.container}>

            <TextInput 
                value={props.value}
                onChangeText={props.onChangeText}
                placeholder={props.placeholder}
                secureTextEntry={props.isPassword}
                style={[
                    styles.input,
                    !props.value && { fontStyle: "italic" },
                    props.value && { fontStyle: "normal", color: "#000" }
                ]}
            />
        </View>
    )
}

export default TextBox;