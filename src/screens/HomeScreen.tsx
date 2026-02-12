import React from "react";
import { Text, View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";
import { PROGRESS } from "../data/progress";
import { COURSES } from "../data/courses";

export function HomeScreen() {
  const topCourse = COURSES[0];
  return (
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Dashboard</Text>

        <Card
          title="Continue learning"
          subtitle={`${topCourse.title} • ${topCourse.instructor}`}
          rightText={`${topCourse.progressPct}%`}
          accessibilityLabel="Continue learning card"
        />

        <Text style={{ fontSize: 16, fontWeight: "800", marginBottom: 8 }}>This week</Text>
        {PROGRESS.map((m) => (
          <Card
            key={m.id}
            title={m.label}
            rightText={m.value}
            accessibilityLabel={`${m.label} card`}
          />
        ))}
      </View>
    </ScreenContainer>
  );
}
