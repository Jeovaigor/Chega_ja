import { View, Image, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { styles } from "./home.style.js";
import icons from "../../constants/icons.js";
import Categorias from "../../components/categorias/categorias.jsx";
import { categorias, banners, estabelecimentos, recomendados } from "../../constants/dados.js";
import Banners from "../../components/banners/banners.jsx";
import Estabelecimentos from "../../components/estabelecimentos/estabelecimentos.jsx";
import Recomendados from "../../components/recomendados/recomendados.jsx";

function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={icons.logo2}/>
                <TouchableOpacity>
                    <Image style={styles.menuHamburguer} source={icons.menuHamburguer}/>
                </TouchableOpacity>
            </View>

            <View style={styles.info}>
                <Text style={styles.textSaudacao}>Olá, <strong>Fulano!</strong> <br/>O que vai ser hoje?</Text>
                <View style={styles.localizacao}>
                    <Image style={styles.iconLocalizacao} source={icons.localizacao}/>
                    <Text style={styles.textLocalizacao}>Rua das Flores, 123</Text>
                </View>
            </View>

            <Banners dados={banners}/>

            <Estabelecimentos dados={estabelecimentos}/>

            <Recomendados dados={recomendados}/>

            <Categorias dados={categorias}/>

        </SafeAreaView>
        
    );
}

export default Home;