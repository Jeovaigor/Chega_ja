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
                    <Image source={icons.search} style={styles.searchIcon} />
                </View>
            </View>

            {/* <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
    
                <View style={styles.info}>
                    <Text style={styles.textSaudacao}>Tela de busca</Text>
                </View>

                
            </ScrollView> */}
            
        </SafeAreaView>
    );
}

export default Search;