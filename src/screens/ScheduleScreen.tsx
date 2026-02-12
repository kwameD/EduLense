import React from "react";
import { Text, View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";
import { SCHEDULE } from "../data/schedule";

export function ScheduleScreen() {
  return (
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Schedule</Text>
        {SCHEDULE.map((s) => (
          <Card
            key={s.id}
            title={s.title}
            subtitle={`${s.date} • ${s.time}${s.location ? ` • ${s.location}` : ""}`}
            accessibilityLabel={`${s.title} schedule item`}
          />
        ))}
      </View>
    </ScreenContainer>
  );
}
