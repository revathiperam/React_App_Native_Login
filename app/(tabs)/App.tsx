import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login';
import SignUpScreen from './signup';
import ForgotPasswordScreen from './forgotpassword';

// Define the Root Stack Param List here
export type RootStackParamList = {
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
};

// Create the Stack Navigator using RootStackParamList
const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            </Stack.Navigator>
        </>
    );
};

export default App;
