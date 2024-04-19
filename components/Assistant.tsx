import React from "react";
import { StyleSheet, Image } from "react-native";

const Assistant = () => {
    return (
        <Image source={require("../assets/icon.png")} style={styles.imgIcon} />
    );
};

const styles = StyleSheet.create({
    imgIcon: {
        height: 100,
        width: 100,
        borderColor: "#fff",
        borderWidth: 4,
        borderRadius: 50,
    },
});

export default Assistant;
