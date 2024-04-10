import React from "react";
import { View, ImageBackground } from "react-native";

const CharacterSelectionScreen = () => {
    return (
        <ImageBackground
            source={require("../assets/mainBackgBlurry.jpeg")}
            resizeMode="cover"
            style={{ height: "100%" }}
        ></ImageBackground>
    );
};

export default CharacterSelectionScreen;
