import {Pressable, StyleSheet, Text} from "react-native";
import React, {FC} from "react";

interface BtnClassicIProps {
    onPress: () => void;
    text: string;
}

const BtnClassic: FC<BtnClassicIProps> = ({onPress, text}) => {
    return (
        <Pressable style={styles.btn} onPress={onPress}>
            <Text style={styles.btnText}>
                {text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#558B2F",
        borderRadius: 15,
    },
    btnText: {
        color: "white",
        fontSize: 18,
        paddingVertical: 8,
        paddingHorizontal: 25,
        textAlign: "center",
        fontFamily: "Pacifico-Regular",
    },
})

export default BtnClassic