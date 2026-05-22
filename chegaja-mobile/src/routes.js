import Login from './screens/login/login.jsx';
import SignUp from './screens/signup/signup.jsx';
import Register from './screens/register/register.jsx';
import Home from './screens/home/home.jsx';
import Profile from './screens/profile/profile.jsx';
import Search from './screens/search/search.jsx';
import Orders from './screens/orders/orders.jsx';

import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#6A2382',
                    borderTopWidth: 0,
                    elevation: 20,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -4 },
                    shadowOpacity: 0.08,
                    shadowRadius: 12,
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 10,
                },
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: '#C084E8',
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Perfil') {
                        iconName = 'person';
                    } else if (route.name === 'Search') {
                        iconName = 'search';
                    } else if (route.name === 'Pedidos') {
                        iconName = 'list-alt';
                    }

                    return (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 45,
                            height: 45,
                            borderRadius: 17,
                            backgroundColor: focused ? '#FFF' : 'transparent',
                            marginTop: 8,   
                        }}>
                            <MaterialIcons name={iconName} size={30} color={focused ? '#6A2382' : '#FFF'} />
                        </View>
                    );
                },
            })}
        >
            <Tab.Screen name="Home"   component={Home}    options={{ tabBarLabel: 'Início' }} />
            <Tab.Screen name="Search" component={Search}  options={{ tabBarLabel: 'Buscar' }} />
            <Tab.Screen name="Pedidos" component={Orders} />
            <Tab.Screen name="Perfil" component={Profile} options={{ tabBarLabel: 'Perfil' }} />
        </Tab.Navigator>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='home' component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='signup' component={SignUp} options={{
                    headerShadowVisible: false,
                    title: "",
                    headerBackTitle: "Voltar"
                }} />
                <Stack.Screen name='register' component={Register} options={{
                    headerShadowVisible: false,
                    title: "",
                    headerBackTitle: "Voltar"
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}