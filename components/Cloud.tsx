import React, { FC } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import baseStyles from "../styles/baseStyles";

interface ICloud {
    text: string;
}
const Cloud: FC<ICloud> = ({ text }) => {
    return (
        <View style={styles.wrapperCloud}>
            <ImageBackground
                source={require("../assets/cloud.png")}
                style={styles.imgCloud}
            >
                <Text style={baseStyles.textGreen}>{text}</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapperCloud: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    imgCloud: {
        width: 370,
        height: 225,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
    },
});

export default Cloud;
