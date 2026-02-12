import React from "react";
import { Text, View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";
import { PROGRESS } from "../data/progress";

export function ProgressScreen() {
  return (
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Progress</Text>
        {PROGRESS.map((m) => (
          <Card
            key={m.id}
            title={m.label}
            rightText={m.value}
            accessibilityLabel={`${m.label} progress card`}
            testID={`progress-${m.id}`}
          />
        ))}
      </View>
    </ScreenContainer>
  );
}
