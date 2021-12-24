import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "black" }}></View>
      <View style={{ flex: 2, backgroundColor: "red" }}></View>
      <View style={{ flex: 1, backgroundColor: "yellow" }}></View>
    </View>
  );
}
