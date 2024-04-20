import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert, Text, ImageBackground} from 'react-native';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase/firebase";
import baseStyles from "../styles/baseStyles";
import BtnClassic from "../components/BtnClassic";

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
        <ImageBackground
            source={require("../assets/mainBackgBlurry.jpeg")}
            resizeMode="cover"
            style={{height: "100%"}}
        >
            <View style={[baseStyles.container, styles.container]}>
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
                        <BtnClassic onPress={handleSignUp} text={"Sign Up"}/>
                        <View style={styles.btnWrapper}>
                            <BtnClassic onPress={() => navigation.goBack()} text={"Back to Login"}/>
                        </View>
                    </>)
                    : <Text style={styles.loading}>Loading data</Text>
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
        fontSize: 18,
        backgroundColor: "white",
        fontFamily: "Pacifico-Regular",
        borderRadius: 15
    },
    btnWrapper: {
        marginTop: 20
    },
    loading: {
        fontSize: 18,
        color: "#558B2F",
        fontFamily: "Pacifico-Regular",
    }
});

export default SignUpScreen;