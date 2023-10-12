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
import React, { useCallback, useEffect, useState } from "react";
import * as Notifications from "expo-notifications";

export default function App() {
  const [ringData, setRingData] = useState<number[]>([]);

  const getRingInterval = useCallback(
    (interval: number[]) => {
      if (JSON.stringify(interval) !== JSON.stringify(ringData)) {
        setRingData(interval);
      }
    },
    [ringData]
  );

  return (
    <ScrollView style={styles.container}>
      <SetterView title_text={"Volume"}>
        <Skeletoon
          onChangeInterval={getRingInterval}
          restoff={<RestOffVol emoji="🔕" />}
        />
      </SetterView>
      <DataSettings prctage={false}>
        <RingMode intervalData={ringData} />
      </DataSettings>
      <SetterView title_text={"Brightness"}>
        <Skeletoon restoff={<RestOffVol emoji="☀️" />} />
      </SetterView>
      <DataSettings prctage={true}>
        <BrightnessLvl min={1} max={16} />
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
