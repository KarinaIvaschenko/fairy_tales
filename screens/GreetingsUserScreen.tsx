import React, { FC } from "react";
import { ImageBackground, View } from "react-native";
import baseStyles from "../styles/baseStyles";
import Assistant from "../components/Assistant";
import { Cloud } from "../components/Cloud";

const GreetingsUserScreen: FC<any> = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../assets/mainBackgBlurry.jpeg")}
            resizeMode="cover"
            style={{ height: "100%" }}
        >
            <View style={baseStyles.container}>
                <Assistant />
                <Cloud text="Hello my little friend. Let's start" />
            </View>
        </ImageBackground>
    );
};

export default GreetingsUserScreen;
