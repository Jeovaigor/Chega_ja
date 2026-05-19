import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./categorias.style.js";

function Categorias(props) {
    return (
        <View>
            <Text style={styles.titulo}>Categorias</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            style={styles.sectionCategorias}>
                {
                    props.dados.map((categoria, index) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity  
                                    style={[
                                        styles.categoria, 
                                        {backgroundColor: categoria.cor}
                                    ]}
                                >
                                    <Image style={styles.icone} source={categoria.icone}/>
                                    <Text style={styles.descricao}>{categoria.descricao}</Text>
                                </TouchableOpacity> 
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

export default Categorias;