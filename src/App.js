import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { Platform, UIManager, LogBox } from "react-native";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import { S_Login, S_Menu } from "./modules";

enableScreens();
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
    if (Platform.OS === "android") UIManager?.setLayoutAnimationEnabledExperimental(true);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="S_Login" screenOptions={{ gestureEnabled: true, headerShown: false }}>
        <Stack.Screen name="S_Login" component={S_Login} />
        <Stack.Screen name="S_Menu" component={S_Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
