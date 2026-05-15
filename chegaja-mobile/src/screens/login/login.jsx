import { View } from "react-native-web";
import { styles } from "./login.style.js";
import Logo from "../../components/logo/logo.jsx"

function Login() {
    return (
        <View style={styles.container}>
            <Logo />
        </View>
    );
}

export default Login;