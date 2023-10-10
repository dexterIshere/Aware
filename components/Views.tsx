import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { IntervalBTns } from "./Btns";
import { Skeletoon } from "./Skeletoons";
import { FC, ReactNode, useEffect, useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import {
  RINGER_MODE,
  VolumeManager,
  setMode,
  useRingerMode,
} from "react-native-volume-manager";
import DeviceBrightness from "@adrianso/react-native-device-brightness";
interface SetterViewProps {
  title_text: string;
  children: ReactNode;
}

interface VolumeProps {
  clickable?: boolean;
  currentVolume?: number;
}

export const SetterView: FC<SetterViewProps> = ({ title_text, children }) => {
  return (
    <View style={styles.setterContainer}>
      <Titletext title_prop={title_text} />
      <View style={styles.container}>
        <LinearGradient
          colors={["#b0e6ff", "#cac8ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.background}
        >
          {children}
        </LinearGradient>
      </View>
    </View>
  );
};
interface DataSettingsProps {
  children: ReactNode;
  prctage: boolean;
}
export const DataSettings: FC<DataSettingsProps> = ({ children, prctage }) => {
  return (
    <View style={styleSet.visuC}>
      <View style={{ width: "65%" }}>{children}</View>
      {prctage && <PrctgSelector />}
    </View>
  );
};

export const Volume: FC<VolumeProps> = ({
  clickable = true,
  currentVolume,
}) => {
  const currentVol = currentVolume || 0;
  const [selectedVolume, setSelectedVolume] = useState(0);

  const barPress = (volume: number) => {
    if (clickable) {
      setSelectedVolume(volume);
    }
  };

  const normalizedVol = Math.floor(currentVol * 5);

  return (
    <LinearGradient
      colors={["#fff", "#fff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styleSet.volumeC}
    >
      <Text style={styleSet.volumeI}>🔉</Text>
      {clickable
        ? [1, 2, 3, 4, 5].map((volume) => (
            <TouchableOpacity
              key={volume}
              disabled={!clickable}
              style={[
                styleSet.bar,
                selectedVolume >= volume && styleSet.activeBar,
              ]}
              onPress={() => barPress(volume)}
            />
          ))
        : [1, 2, 3, 4, 5].map((volume) => (
            <TouchableOpacity
              key={volume}
              disabled={!clickable}
              style={[
                styleSet.bar,
                volume <= normalizedVol && styleSet.activeBar,
              ]}
              onPress={() => barPress(volume)}
            />
          ))}
    </LinearGradient>
  );
};

export const RingMode = () => {
  const [activeMod, setActiveMod] = useState("🔔");
  const { setMode } = useRingerMode();

  enum RINGER_MODE {
    silent = 0,
    vibrate = 1,
    normal = 2,
  }

  const modeMapping: Record<string, RINGER_MODE> = {
    "🔔": RINGER_MODE.normal,
    "🤫": RINGER_MODE.silent,
    "📳": RINGER_MODE.vibrate,
  };

  return (
    <View
      style={[
        styleSet.volumeC,
        {
          width: "50%",
          height: 40,
          justifyContent: "space-evenly",
          marginLeft: "auto",
          marginRight: "auto",
        },
      ]}
    >
      {["🔔", "🤫", "📳"].map((mod) => (
        <TouchableOpacity
          key={mod}
          style={[
            styleSet.ringModeBtn,
            activeMod === mod && styleSet.ringModeActive,
          ]}
          onPress={() => {
            setActiveMod(mod);
            setMode(modeMapping[mod]);
          }}
        >
          <Text style={styleSet.ringModeT}>{mod}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const BrightnessLvl = () => {
  const brightness = DeviceBrightness.getBrightnessLevel();
  console.log(brightness);
  return <View></View>;
};

export const PrctgSelector = () => {
  return (
    <View style={styleSet.prctZ}>
      <Text style={styleSet.prctT}>0 %</Text>

      <Feather name="chevron-down" size={20} />
    </View>
  );
};

const styleSet = StyleSheet.create({
  visuC: {
    height: 30,
    width: "100%",
    paddingHorizontal: 1,
    paddingVertical: 1,
    flexDirection: "row",
    marginBottom: 20,
  },
  volumeC: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  bar: {
    borderRadius: 5,
    flex: 1,
    aspectRatio: 3,
    backgroundColor: "rgba(44,50,105,0.3)",
    marginHorizontal: 2,
  },
  activeBar: {
    backgroundColor: "#bdffbd",
  },
  prctZ: {
    width: "auto",
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: "auto",
    marginRight: "auto",
    alignSelf: "center",
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  prctT: {
    backgroundColor: "rgba(44,50,105,0.3)",
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
    paddingHorizontal: 2,
    borderRadius: 5,
    marginRight: 3,
  },
  volumeI: {
    alignSelf: "center",
  },

  ringModeBtn: {
    borderRadius: 5,
    flex: 1,
    aspectRatio: 1,
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(44,50,105,0.3)",
    borderWidth: 0.4,
  },

  ringModeT: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  ringModeActive: {
    backgroundColor: "#bdffbd",
  },
});

const styles = StyleSheet.create({
  setterContainer: {
    width: "100%",
    height: "16%",
    marginBottom: 30,
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 1,
    paddingVertical: 1,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  background: {
    flex: 1,
    width: "100%",
    borderRadius: 15,
  },
});

interface TitletextProps {
  title_prop: string;
}

export const Titletext: React.FC<TitletextProps> = ({ title_prop }) => {
  return (
    <View style={title.titleContainer}>
      <Text style={title.titleText}>{title_prop}</Text>
    </View>
  );
};

const title = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    marginBottom: 5,
  },
  titleText: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "600",
  },
});

////////////////////////////////////////////////////////////////////
