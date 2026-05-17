import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./register.style.js";
import Logo from "../../components/logo/logo.jsx"
import TextBox from "../../components/textbox/textbox.jsx";
import { useState } from "react";
import Button from "../../components/button/button.jsx";

function Register() {

    const [address, setAddress] = useState("");
    const [complemento, setComplemento] = useState("")
    const [bairro, setBairro] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [cep, setCep] = useState("");

    return (
        <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <Logo />

                <View style={styles.formGroup}>
                    
                    <View style={styles.formHorizontal}>

                        <View style={styles.form1}>
                            <TextBox value={address} onChangeText={setAddress} placeholder="Endereço:"/>
                        </View>
                        
                        <View style={styles.form2}>
                            <TextBox value={complemento} onChangeText={setComplemento} placeholder="Compl.:"/>
                        </View>

                    </View>

                    <View style={styles.form}>
                        <TextBox value={bairro} onChangeText={setBairro} placeholder="Bairro:"/>
                    </View>

                    <View style={styles.formHorizontal}>

                        <View style={styles.form1}>
                            <TextBox value={city} onChangeText={setCity} placeholder="Cidade:"/>
                        </View>
                        
                        <View style={styles.form2}>
                            <TextBox value={uf} onChangeText={setUf} placeholder="UF:"/>
                        </View>

                    </View>

                    <View style={styles.form}>
                        <TextBox value={cep} onChangeText={setCep} placeholder="CEP"/>
                    </View>

                    <View style={styles.form}>
                        <Button texto="Criar conta"/>
                    </View>
                </View>
                
            </View>
        </ScrollView>
    );
}

export default Register;