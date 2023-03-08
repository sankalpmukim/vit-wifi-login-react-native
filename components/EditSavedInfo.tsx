import React from "react";
import { Alert, Button, StyleSheet, TextInput, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

// This component takes and stores User's WiFi Credentials

export default function EditSavedInfo() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const storeValues = async ({
    userName,
    password,
  }: {
    userName: string;
    password: string;
  }) => {
    try {
      await Promise.all([
        AsyncStorage.setItem("userName", userName),
        AsyncStorage.setItem("password", password),
      ]);
      Alert.alert("Success", "Data stored successfully");
    } catch (error) {
      Alert.alert("Error", "Error while storing data");
    }
  };

  const onPress = () => {
    storeValues({ userName, password });
    setPassword("");
    setUserName("");
  };
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text style={[styles.getStartedText, styles.formHeading]}>
          Enter your WiFi Credentials:
        </Text>
      </View>
      <View style={styles.helpContainer}>
        <View>
          {/* VIT Registration Number */}
          <Text style={styles.inputTagLabel}>Registration Number:</Text>
          <TextInput
            id="regno"
            style={styles.inputTag}
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
          {/* VIT Password */}
        </View>
        <View>
          <Text style={styles.inputTagLabel}>Password: </Text>
          <TextInput
            id="password"
            autoComplete="password"
            secureTextEntry={true}
            style={styles.inputTag}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        {/* VIT Login Button */}
        <Button title="Store locally" onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
  inputTag: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  inputTagLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
  formHeading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
