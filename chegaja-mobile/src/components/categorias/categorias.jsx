import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./categorias.style.js";

function Categorias(props) {
    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    props.dados.map((categorias, index) => {
                        return (
                            <View key={index} style={[
                                styles.categoria, {backgroundColor: categorias.cor}
                            ]}>
                                <Image style={styles.icone} source={categorias.icone}/>
                                <Text style={styles.descricao}>{categorias.descricao}</Text> 
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

export default Categorias;