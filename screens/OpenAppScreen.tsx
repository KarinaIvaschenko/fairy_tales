import React, { FC } from "react";
import { View, ImageBackground } from "react-native";
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
            style={baseStyles.mainBackg}
        >
            <View style={baseStyles.container}>
                <TitleWithButton onPressStart={onPressStart} text="Start" />
            </View>
        </ImageBackground>
    );
};

export default OpenAppScreen;
