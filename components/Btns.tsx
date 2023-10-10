import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface IntervalBTNProps {
  pin: string;
  onChangeValue: any;
}

export const IntervalBTns: React.FC<IntervalBTNProps> = ({
  pin,
  onChangeValue,
}) => {
  const [value, setValue] = useState<string>("");

  const inputChange = (text: string) => {
    const num = parseInt(text, 10);

    if (text === "") {
      setValue("");
      onChangeValue("");
    } else if (!isNaN(num) && num >= 0 && num <= 12) {
      setValue(text);
      onChangeValue(text);
    }
  };

  return (
    <View style={styles.btnZ}>
      <View style={styles.btnC}>
        <LinearGradient
          colors={["#cac8ff", "#e4e3ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.background}
        >
          <TextInput
            keyboardType="numeric"
            style={styles.BtnT}
            onChangeText={inputChange}
            maxLength={2}
            value={value}
          />
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
