import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ApiButtons from './components/ApiButtons';
import EditSavedInfo from './components/EditSavedInfo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Login to VIT WiFi`}</Text>
      <View style={styles.separator} />
      <ApiButtons />
      <View style={styles.separator} />
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
