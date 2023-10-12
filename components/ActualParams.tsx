import { StyleSheet, Text, View } from "react-native";
import { BrightnessLvl, Volume } from "./Views";
import { useEffect, useRef, useState } from "react";
import { VolumeManager } from "react-native-volume-manager";

export const ActiveSetsPanel = () => {
  const [currentSystemVolume, setReportedSystemVolume] = useState<number>(0);
  const [currentVolume, setReportedVolume] = useState<number>(0);
  const [currentAlarmVolume, setReportedAlarmVolume] = useState<number>(0);
  const volumeChangedByListener = useRef(true);

  useEffect(() => {
    VolumeManager.getVolume().then((result) => {
      setReportedSystemVolume(result.ring || 0);
      setReportedVolume(result.volume);
      setReportedAlarmVolume(result.alarm || 0);
    });
  });

  useEffect(() => {
    const VolumeListner = VolumeManager.addVolumeListener((result) => {
      volumeChangedByListener.current = true;
      setReportedSystemVolume(result.ring || 0);
      setReportedVolume(result.volume);
      setReportedAlarmVolume(result.alarm || 0);
    });
  });

  return (
    <View style={style.pannelC}>
      <Text style={style.pannelTitle}>
        Actual Settings <Text style={style.pannelLTitle}>(visual only)</Text>
      </Text>
      <View>
        <Text style={style.pannelT}>🔔 Vol</Text>
        <Volume clickable={false} currentVolume={currentSystemVolume} />
        <Text style={style.pannelT}>🎵 Vol</Text>
        <Volume clickable={false} currentVolume={currentVolume} />
        <Text style={style.pannelT}>⏰ Vol</Text>
        <Volume clickable={false} currentVolume={currentAlarmVolume} />
        <Text style={style.pannelT}>☀️ lum</Text>
        <BrightnessLvl min={1} max={16} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  pannelC: {
    borderTopColor: "#fff",
    marginTop: 20,
    borderTopWidth: 0.5,
  },
  pannelTitle: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
  },
  pannelLTitle: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 12,
  },
  pannelT: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
  },
});
