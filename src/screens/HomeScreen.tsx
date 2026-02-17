import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";
import { PROGRESS } from "../data/progress";
import { COURSES } from "../data/courses";

export function HomeScreen() {
  const navigation = useNavigation<any>();
  const topCourse = COURSES[0];

  return (
    <ScreenContainer accessibilityLabel="Dashboard screen">
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Dashboard
        </Text>

        <Card
          title="Continue learning"
          subtitle={`${topCourse.title} • ${topCourse.instructor}`}
          rightText={`${topCourse.progressPct}%`}
          onPress={() => navigation.navigate("Courses")}
          accessibilityLabel={`Continue learning: ${topCourse.title}`}
          accessibilityHint="Opens your courses"
          testID="cardContinueLearning"
        />

        <Text style={{ fontSize: 16, fontWeight: "800", marginBottom: 8 }}>
          This week
        </Text>

        {PROGRESS.map((m) => (
          <Card
            key={m.id}
            title={m.label}
            rightText={m.value}
            // Not pressable, so keep it simple: no accessibilityLabel needed.
            testID={`cardMetric-${m.id}`}
          />
        ))}
      </View>
    </ScreenContainer>
  );
}
