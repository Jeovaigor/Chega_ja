import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./signup.style.js";
import Logo from "../../components/logo/logo.jsx"
import TextBox from "../../components/textbox/textbox.jsx";
import { useState } from "react";
import Button from "../../components/button/button.jsx";

function SignUp() {

    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    return (
        <ScrollView>
            <View style={styles.container}>
                <Logo />

                <View style={styles.formGroup}>
                    <View style={styles.form}>
                        <TextBox value={fullName} onChangeText={setFullName} placeholder="Nome Completo:"/>
                    </View>

                    <View style={styles.form}>
                        <TextBox value={userName} onChangeText={setUserName} placeholder="Usuário:"/>
                    </View>

                    <View style={styles.form}>
                        <TextBox value={password} onChangeText={setPassword} placeholder="Crie uma senha:" isPassword={true}/>
                    </View>

                    <View style={styles.form}>
                        <TextBox value={password} onChangeText={setPassword} placeholder="Confirme a senha:" isPassword={true}/>
                    </View>

                    <View style={styles.form}>
                        <Button texto="Próximo passo"/>
                    </View>

                    <View style={styles.form}>
                        <TouchableOpacity>
                            <Text style={styles.footerText}>Acessar minha conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </ScrollView>
    );
}

export default SignUp;