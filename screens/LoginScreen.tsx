import React, {FC, useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert, Text, ImageBackground} from 'react-native';
import {signInWithEmailAndPassword} from "firebase/auth";
import {db, auth} from "../firebase/firebase";
import baseStyles from "../styles/baseStyles";

const LoginScreen: FC<any> = ({navigation}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSignIn = async () => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
            const user = userCredential.user;
            setLoading(false);
            console.log(user);
            Alert.alert('Logged in!', `Email: ${email}, Password: ${password}`);
        } catch (error) {
            setLoading(false);
            console.error('Error logging:', error);
            Alert.alert('Error', 'Failed to log in. Please try again.');
        }
    };

    const handleSignUp = () => {
        navigation.navigate("SignUp");
    };

    return (
        <ImageBackground
            source={require("../assets/mainBackgBlurry.jpeg")}
            resizeMode="cover"
            style={{height: "100%"}}
        >
            <View style={[baseStyles.container, styles.container]}>
                {!loading ?
                    (<><TextInput
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
                        <Button title="Login" onPress={handleSignIn}/>
                        <Button title="Register" onPress={handleSignUp}/>
                    </>)
                    : <Text>Loading data</Text>
                }
            </View>
        </ImageBackground>
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

export default LoginScreen;
