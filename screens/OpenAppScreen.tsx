import React, { FC } from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
} from "react-native";
import baseStyles from "../styles/baseStyles";

const OpenAppScreen: FC<any> = ({ navigation }) => {
    const onPressStart = () => {
        navigation.navigate("CharacterSelection");
    };
    return (
        <ImageBackground
            source={require("../assets/mainBackg.jpeg")}
            resizeMode="cover"
            style={{ height: "100%" }}
        >
            <View style={baseStyles.container}>
                <ImageBackground
                    source={require("../assets/marker.png")}
                    style={style.marker}
                >
                    <TouchableOpacity
                        style={style.startBtn}
                        onPress={onPressStart}
                    >
                        <Text style={style.textBtn}>Start</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </ImageBackground>
    );
};

const style = StyleSheet.create({
    marker: {
        height: 100,
        width: 350,
        marginTop: 90,
        marginLeft: "auto",
        marginRight: "auto",
    },
    startBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textBtn: { fontSize: 60, color: "#fff" },
});
export default OpenAppScreen;
