import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useState } from "react";

export default function Page() {
    return (
        <SafeAreaView>
            <View>
                <Link href={`/contact/Jose Giron`}>
                    <Text>Contact Jose Giron</Text>
                </Link>
                <Link href={`/contact/Ben`}>
                    <Text>Contact Ben</Text>
                </Link>
            </View>
        </SafeAreaView>
    );
}
