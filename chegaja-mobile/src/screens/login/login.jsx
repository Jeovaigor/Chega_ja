import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./login.style.js";
import Logo from "../../components/logo/logo.jsx"
import TextBox from "../../components/textbox/textbox.jsx";
import { useState } from "react";
import Button from "../../components/button/button.jsx";

function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View style={styles.container}>
            <Logo />

            <View style={styles.formGroup}>
                <View style={styles.form}>
                    <TextBox value={userName} onChangeText={setUserName} placeholder="Usuário:"/>
                </View>

                <View style={styles.form}>
                    <TextBox value={password} onChangeText={setPassword} placeholder="Senha:" isPassword={true}/>
                </View>

                <View style={styles.form}>
                    <Button texto="Entrar"/>
                </View>

                <View style={styles.form}>
                    <TouchableOpacity>
                        <Text style={styles.footerText}>Criar conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            
            
        </View>
    );
}

export default Login;