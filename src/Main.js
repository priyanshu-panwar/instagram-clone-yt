import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>How are you doing</Text>
      <Text>yo we are good redux is setup</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
