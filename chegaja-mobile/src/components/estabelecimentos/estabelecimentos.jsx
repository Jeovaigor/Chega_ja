import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./estabelecimentos.style.js";

function Estabelecimentos(props) {
    return (
        <View>
            <Text style={styles.titulo}>Estabelecimentos</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.sectionEstabelecimentos}>
                {
                    props.dados.map((estabelecimento, index) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity style={styles.estabelecimento}>
                                    <Image style={styles.icone} source={estabelecimento.logotipo}/>
                                </TouchableOpacity> 
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

export default Estabelecimentos;