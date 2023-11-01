import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
};

export type RootStackInternalList = {
    Home: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList & RootStackInternalList>();

export default function MainStack() {
    const defaultOptions = { headerShown: false };
    const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

    console.log('currentUser', currentUser);

    function getInitialRouteName() {
        if (currentUser) {
            return 'Home';
        }
        return 'Login';
    }

    return (
        <Stack.Navigator initialRouteName={getInitialRouteName()}>
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={defaultOptions}
            />
            <Stack.Screen
                name='Register'
                component={RegisterScreen}
                options={defaultOptions}
            />
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={defaultOptions}
            />
        </Stack.Navigator>
    );
}
