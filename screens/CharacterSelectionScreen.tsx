import React from "react";
import {View, ImageBackground} from "react-native";
import GenderCarousel from "../components/GenderCarousel";

const CharacterSelectionScreen = () => {
    return (
        <ImageBackground
            source={require("../assets/mainBackgBlurry.jpeg")}
            resizeMode="cover"
            style={{height: "100%"}}
        >
            <GenderCarousel/>
        </ImageBackground>
    );
};

export default CharacterSelectionScreen;
