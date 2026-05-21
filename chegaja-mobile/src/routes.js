import Login from './screens/login/login.jsx';
import SignUp from './screens/signup/signup.jsx';
import Register from './screens/register/register.jsx';
import Home from './screens/home/home.jsx';
import Profile from './screens/profile/profile.jsx';
import Search from './screens/search/search.jsx';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Perfil" component={Profile}/>
            <Tab.Screen name="Search" component={Search}/>
        </Tab.Navigator>
    );
}

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator>

                {/* TabNavigator como tela principal */}
                <Stack.Screen name='home' component={TabNavigator} options={{
                    headerShown: false
                }}/>

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

