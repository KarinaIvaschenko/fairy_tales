import React, { FC } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import baseStyles from "../styles/baseStyles";
import { TitleWithButton } from "../components/Title";

const OpenAppScreen: FC<any> = ({ navigation }) => {
    const onPressStart = () => {
        navigation.navigate("CharacterSelection");
    };
    return (
        <ImageBackground
            source={require("../assets/mainBackg.jpeg")}
            resizeMode="cover"
            style={style.mainBackg}
        >
            <View style={baseStyles.container}>
                <TitleWithButton onPressStart={onPressStart} text="Start" />
            </View>
        </ImageBackground>
    );
};

const style = StyleSheet.create({
    mainBackg: {
        height: "100%",
    },
});
export default OpenAppScreen;
