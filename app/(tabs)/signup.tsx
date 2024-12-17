import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

// Reuse RootStackParamList from App.tsx
type RootStackParamList = {
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'SignUp'>;

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign Up</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
            </View>

            {/* Center the button */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Signed Up')}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
                Already have an account? Log In
            </Text>

            <Text style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>
                Forgot Password?
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        fontSize: 28,
        marginBottom: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 18,
        color: '#000',
        marginBottom: 8,
    },
    input: {
        height: 45,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: 'orange',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '60%',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22
    },
    link: {
        marginTop: 15,
        color: 'blue',
        textAlign: 'center',
        fontSize: 18,
    },
});

export default SignUpScreen;
