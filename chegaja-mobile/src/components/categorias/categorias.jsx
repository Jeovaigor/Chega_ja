import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./categorias.style.js";

function Categorias({dados, direction = "row", contentStyle = {}, itemStyle = {}, cardStyle = {} }) {

    const isRow = direction == "row"
    
    return (
        <View>
            <Text style={styles.titulo}>Categorias</Text>
            <ScrollView
                horizontal={isRow}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.sectionCategorias}
                contentContainerStyle={[
                    { flexDirection: direction, flexWrap: "wrap" },
                    contentStyle // ← estilos extras
                ]}
            >
                {dados.map((categoria, index) => (
                    <View key={index}  style={[direction === "column" ? { width: "50%" } : {}, itemStyle]}>
                        <TouchableOpacity
                            style={[styles.categoria, { backgroundColor: categoria.cor }, cardStyle]}
                        >
                            <Image style={styles.icone} source={categoria.icone} />
                            <Text style={styles.descricao}>{categoria.descricao}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

export default Categorias;