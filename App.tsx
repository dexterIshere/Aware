import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DataSettings, SetterView } from "./components/Views";
import { Appearance, useColorScheme } from "react-native";
import { RestOffVol, Skeletoon } from "./components/Skeletoons";
import { ActiveSetsPanel } from "./components/ActualParams";

export default function App() {
  return (
    <View style={styles.container}>
      <SetterView title_text={"Volume"}>
        <Skeletoon restoff={<RestOffVol />} />
      </SetterView>
      <DataSettings />
      <SetterView title_text={"Brightness"}>
        <Skeletoon restoff={<RestOffVol />} />
      </SetterView>
      <ActiveSetsPanel />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
});
