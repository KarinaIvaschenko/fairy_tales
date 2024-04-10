import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OpenAppScreen from "./screens/OpenAppScreen";
import CharacterSelectionScreen from "./screens/CharacterSelectionScreen";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
