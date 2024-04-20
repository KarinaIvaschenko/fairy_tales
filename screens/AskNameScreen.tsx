import React, { FC, useState } from "react";
import {
    ImageBackground,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from "react-native";
import { Cloud } from "../components/Cloud";
import baseStyles from "../styles/baseStyles";
import Assistant from "../components/Assistant";
import Cabinet from "../components/Cabinet";

const AskNameScreen: FC<any> = ({ navigation }) => {
    const [name, setName] = useState("");
    const onPressUser = () => {
        navigation.navigate("GreetingsUser");
    };
    const onPressName = () => {};
    const onPressCabinet = () => {
        navigation.navigate("Login");
    }
    return (
        <ImageBackground
            source={require("../assets/mainBackgBlurry.jpeg")}
            resizeMode="cover"
            style={{ height: "100%" }}
        >
            <View style={baseStyles.container}>
                <View style={styles.wrapper}>
                    <Assistant />
                    <Cabinet onPress={onPressCabinet}/>
                </View>
                <Cloud text="What is your name?" />
                <View style={styles.inputContainer}>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={[styles.inputName, baseStyles.textInput]}
                    />
                    <TouchableOpacity style={styles.okBtn}>
                        <Text style={baseStyles.textConfirmBtn}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    bgImg: {
        width: 185,
        height: 112,
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputName: {
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: "70%",
        height: 60,
        backgroundColor: "white",
        borderRadius: 50,
        alignSelf: "flex-end",
    },
    okBtn: {
        backgroundColor: "#558B2F",
        borderRadius: 50,
        padding: 15,
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginTop: 30
    }
});

export default AskNameScreen;
