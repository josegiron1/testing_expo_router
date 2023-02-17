import { Slot } from "expo-router";
import { Stack, Tabs } from "expo-router";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};

export default function Layout() {
  return <Tabs />;
}
