import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./recomendados.style.js";

function Recomendados(props) {
    return (
        <View>
            <Text style={styles.titulo}>Recomendados</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            style={styles.sectionRecomendados}>
                {
                    props.dados.map((recomendado, index) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity  
                                    style={styles.recomendado}
                                >
                                    <Image style={styles.recomendado} source={recomendado.logotipo}/>
                                </TouchableOpacity> 
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

export default Recomendados;