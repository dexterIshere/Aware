import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { IntervalBTns } from "./Btns";
import { Skeletoon } from "./Skeletoons";
import { FC, ReactNode, useEffect, useState } from "react";
import Feather from "react-native-vector-icons/Feather";

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

export const DataSettings = () => {
  return (
    <View style={styleSet.visuC}>
      <View style={{ width: "65%" }}>
        <Volume clickable={true} />
      </View>
      <PrctgSelector />
    </View>
  );
};

export const Volume: FC<VolumeProps> = ({
  clickable = true,
  currentVolume: number,
}) => {
  const currentVolume = 2;
  const [selectedVolume, setSelectedVolume] = useState(0);

  const barPress = (volume: number) => {
    if (clickable) {
      setSelectedVolume(volume);
    }
  };
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
                currentVolume >= volume && styleSet.activeBar,
              ]}
              onPress={() => barPress(volume)}
            />
          ))}
      {}
    </LinearGradient>
  );
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
    marginTop: 5,
    height: 30,
    width: "100%",
    paddingHorizontal: 1,
    paddingVertical: 1,
    flexDirection: "row",
    marginBottom: 30,
    borderBottomColor: "#fff",
    borderBottomWidth: 0.5,
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
});

const styles = StyleSheet.create({
  setterContainer: {
    width: "100%",
    height: "16%",
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
  },
  titleText: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "600",
  },
});

////////////////////////////////////////////////////////////////////
