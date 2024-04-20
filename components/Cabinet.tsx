import React, {FC} from "react";
import {StyleSheet, Image, TouchableWithoutFeedback} from "react-native";

interface CabinetProps {
    onPress: () => void;
}

const Cabinet: FC<CabinetProps> = ({onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Image source={require("../assets/account.png")} style={styles.imgIcon}/>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    imgIcon: {
        height: 50,
        width: 50,
        borderColor: "#fff",
    },
});

export default Cabinet;
