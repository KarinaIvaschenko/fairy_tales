import React, { FC } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import baseStyles from "../styles/baseStyles";

interface ICloud {
    text: string;
}

interface ICloudBtn {
    text: string;
    onPress: () => void;
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

const CloudBtn: FC<ICloudBtn> = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.wrapperCloud} onPress={onPress}>
            <ImageBackground
                source={require("../assets/cloud.png")}
                style={styles.imgCloudBtn}
            >
                <Text style={baseStyles.textGreen}>{text}</Text>
            </ImageBackground>
        </TouchableOpacity>
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
    imgCloudBtn: {
        width: 92,
        height: 56,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});

export { Cloud, CloudBtn };
