import { useRouter, useSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Name(props) {
  const { name } = useSearchParams();
  const router = useRouter();

  if (!name) {
    router.push("/contact");
  }

    return (
        <SafeAreaView>
            <View>
                <Text> { name } </Text>
                { name === "Jose Giron" && <Text>Jose Giron is a wannabe graphql!</Text> }
                { name === "Ben" && <Text>Ben is an expert in graphql!</Text> }
            </View>
        </SafeAreaView>
    );
}