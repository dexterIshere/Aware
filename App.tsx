import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  BrightnessLvl,
  DataSettings,
  RingMode,
  SetterView,
  Volume,
} from "./components/Views";
import { RestOffVol, Skeletoon } from "./components/Skeletoons";
import { ActiveSetsPanel } from "./components/ActualParams";
import * as TaskManager from "expo-task-manager";
import * as BackgroundFetch from "expo-background-fetch";
import React from "react";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <SetterView title_text={"Volume"}>
        <Skeletoon restoff={<RestOffVol emoji="🔕" />} />
      </SetterView>
      <DataSettings prctage={false}>
        <RingMode />
      </DataSettings>
      <SetterView title_text={"Brightness"}>
        <Skeletoon restoff={<RestOffVol emoji="☀️" />} />
      </SetterView>
      <DataSettings prctage={true}>
        <BrightnessLvl />
      </DataSettings>
      <ActiveSetsPanel />

      <StatusBar style="auto" />
    </ScrollView>
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
