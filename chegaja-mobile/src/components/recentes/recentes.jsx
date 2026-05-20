import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./recentes.style.js";

function Recentes(props) {
    return (
        <View>
            <Text style={styles.titulo}>Recentes</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            style={styles.sectionRecentes}>
                {
                    props.dados.map((recente, index) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity  
                                    style={styles.recente}
                                >
                                    <Image style={styles.recente} source={recente.logotipo}/>
                                </TouchableOpacity> 
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

export default Recentes;