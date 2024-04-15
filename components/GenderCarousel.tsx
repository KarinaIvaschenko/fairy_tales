import {StyleSheet, View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import PagerView from 'react-native-pager-view';

export default function GenderCarousel() {
    return (
        <View style={styles.container}>
            <PagerView style={styles.container} initialPage={0}>
                <TouchableWithoutFeedback key="1">
                    <Image
                        source={require("../assets/icon.png")}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback key="2">
                    <Image
                        source={require("../assets/icon.png")}
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
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
