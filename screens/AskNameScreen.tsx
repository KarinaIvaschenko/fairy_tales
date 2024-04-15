import React, { FC } from "react";
import { ImageBackground, View, Button } from "react-native";
import Cloud from "../components/Cloud";
import baseStyles from "../styles/baseStyles";
import Assistant from "../components/Assistant";

const AskNameScreen: FC<any> = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate("GreetingsUser");
    };
    return (
        <ImageBackground
            source={require("../assets/mainBackgBlurry.jpeg")}
            resizeMode="cover"
            style={{ height: "100%" }}
        >
            <View style={baseStyles.container}>
                <Assistant />
                <Cloud text="What is your name?" />
                <Button title="fvgh" onPress={onPress} />
            </View>
        </ImageBackground>
    );
};

export default AskNameScreen;
