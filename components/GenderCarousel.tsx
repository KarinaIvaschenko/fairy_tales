import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    Image,
} from "react-native";
import PagerView from "react-native-pager-view";
import baseStyles from "../styles/baseStyles";
import { TitleWithoutButton } from "./Title";

export default function GenderCarousel() {
    return (
        <View style={[styles.container, baseStyles.container]}>
            <TitleWithoutButton text="Who are you?" />
            <PagerView style={styles.container} initialPage={0}>
                <TouchableWithoutFeedback style={styles.choiceBtn} key="1">
                    <Image
                        style={styles.choiceGender}
                        source={require("../assets/boy.jpeg")}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.choiceBtn} key="2">
                    <Image
                        style={styles.choiceGender}
                        source={require("../assets/girl.jpg")}
                    />
                </TouchableWithoutFeedback>
            </PagerView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    choiceBtn: {},
    choiceGender: {},
    // page: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
});
