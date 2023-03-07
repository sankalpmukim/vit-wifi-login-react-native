import { StyleSheet } from "react-native";

import EditSavedInfo from "../components/EditSavedInfo";
import { Text, View } from "../components/Themed";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiButtons from "../components/ApiButtons";

export default function TabOneScreen() {
  useEffect(() => {
    console.log("TabOneScreen");
    AsyncStorage.getItem("userName").then(console.log);
    AsyncStorage.getItem("password").then(console.log);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Login to VIT WiFi`}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ApiButtons />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditSavedInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
