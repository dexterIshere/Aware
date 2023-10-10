import { StyleSheet, Text, View } from "react-native";
import { IntervalBTns } from "./Btns";
import { FC, ReactNode, useState } from "react";

interface SkeletoonProp {
  restoff?: ReactNode;
  emoji?: string;
}

export const Skeletoon: FC<SkeletoonProp> = ({ restoff }) => {
  const [amValue, setAmValue] = useState<string>("");
  const [pmValue, setPmValue] = useState<string>("");

  const handleAmChange = (newVal: string) => {
    setAmValue(newVal);
  };

  const handlePmChange = (newVal: string) => {
    setPmValue(newVal);
  };
  return (
    <View style={styles.SkeletC}>
      <View style={styles.intervalsC}>
        <IntervalBTns pin={"am"} onChangeValue={handleAmChange} />
        <Text style={styles.SkeletT}>to</Text>
        <IntervalBTns pin={"pm"} onChangeValue={handlePmChange} />
      </View>
      {restoff}
    </View>
  );
};

export const RestOffVol: FC<SkeletoonProp> = ({ emoji }) => {
  return (
    <View style={styles.restOfft}>
      <Text style={styles.pin}>rest of the time</Text>
      <View>
        <Text style={styles.restOfftT}>{emoji}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SkeletC: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  intervalsC: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: "65%",
    borderRightColor: "#fff",
    flex: 1,
    borderRightWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  SkeletT: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "500",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  restOfft: {
    position: "relative",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "rgba(84,84,84,0.3)",
    flexDirection: "row",
    width: "35%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  restOfftT: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "600",
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
    top: -6,
    right: "25%",
  },
});
