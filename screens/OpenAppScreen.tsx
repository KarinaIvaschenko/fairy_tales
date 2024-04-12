import React, { FC } from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
} from "react-native";
import baseStyles from "../styles/baseStyles";
import Title from "../components/Title";

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
                <Title
                    children={
                        <TouchableOpacity
                            style={style.startBtn}
                            onPress={onPressStart}
                        >
                            <Text style={[style.textBtn, baseStyles.text]}>
                                Start
                            </Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        </ImageBackground>
    );
};

const style = StyleSheet.create({
    mainBackg: { height: "100%" },
    startBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textBtn: { fontSize: 60, color: "#fff" },
});
export default OpenAppScreen;
