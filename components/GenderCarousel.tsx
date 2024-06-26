import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Image,
    Text,
} from "react-native";
import PagerView from "react-native-pager-view";
import baseStyles from "../styles/baseStyles";
import { TitleWithoutButton } from "./Title";
import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";

const GenderCarousel: FC<any> = ({ onPress }) => {
    return (
        <View style={[styles.container, baseStyles.container]}>
            <TitleWithoutButton text="Who are you?" />
            <PagerView style={styles.container} initialPage={0}>
                <TouchableWithoutFeedback
                    style={styles.choiceBtn}
                    key="1"
                    onPress={onPress}
                >
                    <View style={styles.choiceBtnContainer}>
                        <Image
                            style={styles.choiceGender}
                            source={require("../assets/boy.jpeg")}
                        />
                        <AntDesign
                            name="rightcircleo"
                            size={28}
                            color="white"
                            style={styles.arrowRight}
                        />
                        <Text style={baseStyles.text}>Boy</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    style={styles.choiceBtn}
                    key="2"
                    onPress={onPress}
                >
                    <View style={styles.choiceBtnContainer}>
                        <Image
                            style={styles.choiceGender}
                            source={require("../assets/girl.jpg")}
                        />
                        <AntDesign
                            name="leftcircleo"
                            size={28}
                            color="white"
                            style={styles.arrowLeft}
                        />
                        <Text style={baseStyles.text}>Girl</Text>
                    </View>
                </TouchableWithoutFeedback>
            </PagerView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    choiceBtn: {},
    choiceGender: {
        width: "100%",
        height: "80%",
        borderRadius: 70,
    },
    choiceBtnContainer: {
        position: "relative",
        width: "100%",
        height: "100%",
    },
    arrowLeft: {
        position: "absolute",
        top: "40%",
        left: "3%",
        zIndex: 0,
    },
    arrowRight: {
        position: "absolute",
        top: "40%",
        left: "90%",
        zIndex: 0,
    },

    // page: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
});

export default GenderCarousel;
