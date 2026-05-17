import Login from './screens/login/login.jsx';
import SignUp from './screens/signup/signup.jsx';
import Register from './screens/register/register.jsx';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name='login' component={Login} options={{headerShown: false}}/>

                <Stack.Screen name='signup' component={SignUp} options={{
                    // headerShown: false
                    headerShadowVisible: false,
                    title: "",
                    headerBackTitle: "Voltar"
                }}/>

                <Stack.Screen name='register' component={Register} options={{
                    // headerShown: false
                    headerShadowVisible: false,
                    title: "",
                    headerBackTitle: "Voltar"
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
