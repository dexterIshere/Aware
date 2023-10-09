import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

interface IntervalBTNProps {
  pin: string;
}

export const IntervalBTns: React.FC<IntervalBTNProps> = ({ pin }) => {
  return (
    <View style={styles.btnZ}>
      <View style={styles.btnC}>
        <LinearGradient
          colors={["#cac8ff", "#e4e3ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.background}
        >
          <Text style={styles.BtnT}>5</Text>
        </LinearGradient>
      </View>
      <Text style={styles.pin}>{pin}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btnZ: {
    position: "relative",
  },
  btnC: {
    aspectRatio: 1,
    borderRadius: 15,
    paddingHorizontal: 1,
    paddingVertical: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  BtnT: {
    fontSize: 40,
    fontWeight: "700",
    color: "#fff",
  },
  pin: {
    borderRadius: 15,
    position: "absolute",
    color: "#a29eff",
    backgroundColor: "#fff",
    fontWeight: "500",
    paddingHorizontal: 6,
    paddingVertical: 1,
    fontSize: 8,
    bottom: 0,
    right: -5,
  },
});
