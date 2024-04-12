import React, { FC } from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Title: FC<any> = ({ children }) => {
    return (
        <ImageBackground
            source={require("../assets/marker.png")}
            style={style.marker}
        >
            {children}
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
});

export default Title;
