import React from "react";
import { Text, View } from "react-native";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useNavigation } from "@react-navigation/native";
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";
import { PROGRESS } from "../data/progress";
import { COURSES } from "../data/courses";

export function HomeScreen() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
  const topCourse = COURSES[0];
  return (
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Dashboard</Text>
<<<<<<< HEAD
=======
  const navigation = useNavigation<any>();
  const topCourse = COURSES[0];

  return (
    <ScreenContainer accessibilityLabel="Dashboard screen">
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Dashboard
        </Text>
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5

        <Card
          title="Continue learning"
          subtitle={`${topCourse.title} • ${topCourse.instructor}`}
          rightText={`${topCourse.progressPct}%`}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
          accessibilityLabel="Continue learning card"
        />

        <Text style={{ fontSize: 16, fontWeight: "800", marginBottom: 8 }}>This week</Text>
<<<<<<< HEAD
=======
          onPress={() => navigation.navigate("Courses")}
          accessibilityLabel={`Continue learning: ${topCourse.title}`}
          accessibilityHint="Opens your courses"
          testID="cardContinueLearning"
        />

        <Text style={{ fontSize: 16, fontWeight: "800", marginBottom: 8 }}>
          This week
        </Text>

>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
        {PROGRESS.map((m) => (
          <Card
            key={m.id}
            title={m.label}
            rightText={m.value}
<<<<<<< HEAD
<<<<<<< HEAD
            accessibilityLabel={`${m.label} card`}
=======
            // Not pressable, so keep it simple: no accessibilityLabel needed.
            testID={`cardMetric-${m.id}`}
>>>>>>> assignment6-rn
=======
            accessibilityLabel={`${m.label} card`}
>>>>>>> Assignment5
          />
        ))}
      </View>
    </ScreenContainer>
  );
}
