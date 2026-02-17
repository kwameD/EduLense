import React from "react";
import { Text, View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";
import { PROGRESS } from "../data/progress";

export function ProgressScreen() {
  return (
<<<<<<< HEAD
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Progress</Text>
=======
    <ScreenContainer accessibilityLabel="Progress screen">
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Progress
        </Text>

>>>>>>> assignment6-rn
        {PROGRESS.map((m) => (
          <Card
            key={m.id}
            title={m.label}
            rightText={m.value}
<<<<<<< HEAD
            accessibilityLabel={`${m.label} progress card`}
=======
>>>>>>> assignment6-rn
            testID={`progress-${m.id}`}
          />
        ))}
      </View>
    </ScreenContainer>
  );
}
