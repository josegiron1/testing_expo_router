import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
    return (
        <SafeAreaView>
            <View>
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}
