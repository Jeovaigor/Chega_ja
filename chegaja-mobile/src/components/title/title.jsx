import { View, Text } from "react-native-web";
import { styles } from "./title.style";


function Title(props) {
    return(
        <View style={styles.header}>
            <Text style={styles.titulo}>{props.titulo}</Text>
        </View>
    );
}

export default Title;