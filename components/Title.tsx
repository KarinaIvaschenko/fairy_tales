import React, { FC } from "react";
import {
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Text,
} from "react-native";
import baseStyles from "../styles/baseStyles";

interface ITitleWithButton {
    onPressStart: () => void;
    text: string;
}

interface ITitleWithoutButton {
    text: string;
}

const TitleWithButton: FC<ITitleWithButton> = ({ onPressStart, text }) => {
    return (
        <ImageBackground
            source={require("../assets/marker.png")}
            style={style.marker}
        >
            <TouchableOpacity style={style.startBtn} onPress={onPressStart}>
                <Text style={[style.textBtn, baseStyles.text]}>{text}</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const TitleWithoutButton: FC<ITitleWithoutButton> = ({ text }) => {
    return (
        <ImageBackground
            source={require("../assets/marker.png")}
            style={style.marker}
        >
            <Text style={[style.textBtn, baseStyles.text]}>{text}</Text>
        </ImageBackground>
    );
};

const style = StyleSheet.create({
    marker: {
        height: 100,
        minWidth: 370,
        marginTop: 40,
        marginBottom: 20,
        marginLeft: "auto",
        marginRight: "auto",
    },
    startBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textBtn: {
        fontSize: 48,
        color: "#fff",
        textAlign: "center",
    },
});

export { TitleWithButton, TitleWithoutButton };
