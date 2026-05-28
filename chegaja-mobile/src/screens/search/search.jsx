import { View, Image, SafeAreaView, TouchableOpacity, Text, ScrollView, TextInput } from "react-native";
import { styles } from "./search.style";
import icons from "../../constants/icons.js";
import Categorias from "../../components/categorias/categorias.jsx";
import { categorias} from "../../constants/dados.js";

function Search() {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Buscar produtos</Text>
            </View>

            <View style={styles.containerSearch}>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder={"Pesquise por empresa ou produto..."}/>
                    <Image source={icons.search} style={styles.iconSearch} />
                </View>

                <View style={styles.containerButtons}> 
                    <TouchableOpacity style={styles.btn}> 
                        <Text style={styles.textos}>Empresa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}> 
                        <Text style={styles.textos}>Produto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnFilter}> 
                        <Image source={icons.filter} style={styles.iconFilter} resizeMode="contain"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.divider} />  {/* linha horizontal */}

                <View>
                    {/* <Text>Categorias</Text> */}

                    <ScrollView>
                        <Categorias 
                            dados={categorias} 
                            direction="column"
                            contentStyle={{ 
                                flexDirection: "row", 
                                flexWrap: "wrap", 
                                paddingRight: 8,
                                paddingBottom: 16 
                            }}
                            itemStyle={{ 
                                width: "50%",
                                padding: 4,
                                marginBottom: 8,
                            }}
                            cardStyle={{
                                width: "100%",
                                height: 80,
                                borderRadius: 12,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingVertical: 12,
                            }}
                        />
                    </ScrollView>
                </View>
            </View>
            
        </SafeAreaView>
    );
}

export default Search;