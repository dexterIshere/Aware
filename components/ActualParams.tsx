import { StyleSheet, Text, View } from "react-native";
import { Volume } from "./Views";

export const ActiveSetsPanel = () => {
  return (
    <View style={style.pannelC}>
      <Text style={style.pannelTitle}>Actual Settings</Text>
      <View>
        <Volume clickable={false} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  pannelC: {
    marginTop: 30,
    borderTopColor: "#fff",
    borderTopWidth: 0.5,
  },
  pannelTitle: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});
