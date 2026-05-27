import { View, Image, SafeAreaView, TouchableOpacity, Text, ScrollView, TextInput } from "react-native";
import { styles } from "./search.style";
import icons from "../../constants/icons.js";

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

            </View>
            
        </SafeAreaView>
    );
}

export default Search;