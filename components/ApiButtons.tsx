import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Button, StyleSheet, View, Text, Alert } from "react-native";
import login from "../api/login";
import logout from "../api/logout";

// Two Side By Side buttons that call the API
export default function ApiButtons() {
  return (
    <View style={styles.buttonContainer}>
      <Button
        onPress={async () => {
          // Call the API
          console.log("Login Button Pressed");
          const [userName, password] = await Promise.all([
            AsyncStorage.getItem("userName"),
            AsyncStorage.getItem("password"),
          ]);

          if (!userName || !password) {
            // console.log("No username or password found");
            Alert.alert("Error", "No username or password found");
            return;
          }

          const response = await login({ userName, password });
          if (response) {
            Alert.alert("Success", "Logged in successfully");
          }
        }}
        title="Login"
      />
      <Button
        onPress={async () => {
          // Call the API
          console.log("Logout Button Pressed");
          const [userName, password] = await Promise.all([
            AsyncStorage.getItem("userName"),
            AsyncStorage.getItem("password"),
          ]);

          if (!userName || !password) {
            // console.log("No username or password found");
            Alert.alert("Error", "No username or password found");
            return;
          }

          const response = await logout();
          if (response) {
            Alert.alert("Success", "Logged out successfully");
          }
        }}
        title="Logout"
      />
    </View>
  );
}

// StyleSheet for the buttons
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    color: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});
