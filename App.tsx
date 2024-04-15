import React, { useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import OpenAppScreen from "./screens/OpenAppScreen";
import CharacterSelectionScreen from "./screens/CharacterSelectionScreen";
import AskNameScreen from "./screens/AskNameScreen";
import GreetingsUserScreen from "./screens/GreetingsUserScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const Stack = createNativeStackNavigator();

    const [fontsLoaded, fontError] = useFonts({
        "Pacifico-Regular": require("./assets/fonts/Pacifico-Regular.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <NavigationContainer>
            <View style={styles.container} onLayout={onLayoutRootView}>
                <Stack.Navigator
                    initialRouteName="OpenApp"
                    screenOptions={{
                        animation: "none",
                    }}
                >
                    <Stack.Screen
                        name="OpenApp"
                        component={OpenAppScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="CharacterSelection"
                        component={CharacterSelectionScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="AskName"
                        component={AskNameScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="GreetingsUser"
                        component={GreetingsUserScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
