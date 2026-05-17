import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./login.style.js";
import Logo from "../../components/logo/logo.jsx"
import TextBox from "../../components/textbox/textbox.jsx";
import { useState } from "react";
import Button from "../../components/button/button.jsx";

function Login(props) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function realizarLogin() {
        console.log(userName, password);
    }

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
                    <Button texto="Entrar" onPress={realizarLogin}/>
                </View>

                <View style={styles.form}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
                        <Text style={styles.footerText}>Criar conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            
            
        </View>
    );
}

export default Login;