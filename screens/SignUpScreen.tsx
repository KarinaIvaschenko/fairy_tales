import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert, Text} from 'react-native';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase/firebase";

const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSignUp = async () => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
            const user = userCredential.user;
            setLoading(false);
            console.log(user);
            Alert.alert('Registered!', `Email: ${email}, Password: ${password}`);
        } catch (error) {
            setLoading(false);
            console.error('Error signing up:', error);
            Alert.alert('Error', 'Failed to sign up. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            {!loading ?
                (<>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <Button title="Sign Up" onPress={handleSignUp}/>
                    <Button title="Back to Login" onPress={() => navigation.goBack()}/>
                </>)
                : <Text>Loading data</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default SignUpScreen;