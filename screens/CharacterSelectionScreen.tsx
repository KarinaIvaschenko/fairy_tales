import React, { FC } from "react";
import { View, ImageBackground } from "react-native";
import GenderCarousel from "../components/GenderCarousel";

const CharacterSelectionScreen: FC<any> = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate("AskName");
    };
    return (
        <ImageBackground
            source={require("../assets/mainBackgBlurry.jpeg")}
            resizeMode="cover"
            style={{ height: "100%" }}
        >
            <GenderCarousel onPress={onPress} />
        </ImageBackground>
    );
};

export default CharacterSelectionScreen;
