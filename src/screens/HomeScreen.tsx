import React from "react";
import { Text, View } from "react-native";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useNavigation } from "@react-navigation/native";
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
=======
import { useNavigation } from "@react-navigation/native";
>>>>>>> origin/assignment6-rn
=======
import { useNavigation } from "@react-navigation/native";
>>>>>>> assignment6-rn
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";
import { PROGRESS } from "../data/progress";
import { COURSES } from "../data/courses";

export function HomeScreen() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
=======
  const navigation = useNavigation<any>();
>>>>>>> origin/assignment6-rn
=======
  const navigation = useNavigation<any>();
>>>>>>> assignment6-rn
  const topCourse = COURSES[0];

  return (
    <ScreenContainer accessibilityLabel="Dashboard screen">
      <View style={{ paddingTop: 12 }}>
<<<<<<< HEAD
<<<<<<< HEAD
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Dashboard</Text>
<<<<<<< HEAD
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
=======
>>>>>>> origin/Assignment5
=======
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Dashboard
        </Text>
>>>>>>> origin/assignment6-rn
=======
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Dashboard
        </Text>
>>>>>>> assignment6-rn

        <Card
          title="Continue learning"
          subtitle={`${topCourse.title} • ${topCourse.instructor}`}
          rightText={`${topCourse.progressPct}%`}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
          accessibilityLabel="Continue learning card"
        />

        <Text style={{ fontSize: 16, fontWeight: "800", marginBottom: 8 }}>This week</Text>
<<<<<<< HEAD
<<<<<<< HEAD
=======
          onPress={() => navigation.navigate("Courses")}
          accessibilityLabel={`Continue learning: ${topCourse.title}`}
          accessibilityHint="Opens your courses"
          testID="cardContinueLearning"
        />

=======
          onPress={() => navigation.navigate("Courses")}
          accessibilityLabel={`Continue learning: ${topCourse.title}`}
          accessibilityHint="Opens your courses"
          testID="cardContinueLearning"
        />

>>>>>>> origin/assignment6-rn
=======
          onPress={() => navigation.navigate("Courses")}
          accessibilityLabel={`Continue learning: ${topCourse.title}`}
          accessibilityHint="Opens your courses"
          testID="cardContinueLearning"
        />

>>>>>>> assignment6-rn
        <Text style={{ fontSize: 16, fontWeight: "800", marginBottom: 8 }}>
          This week
        </Text>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
=======
>>>>>>> origin/assignment6-rn
=======
>>>>>>> assignment6-rn
        {PROGRESS.map((m) => (
          <Card
            key={m.id}
            title={m.label}
            rightText={m.value}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
            accessibilityLabel={`${m.label} card`}
>>>>>>> origin/Assignment5
=======
            // Not pressable, so keep it simple: no accessibilityLabel needed.
            testID={`cardMetric-${m.id}`}
>>>>>>> origin/assignment6-rn
=======
            // Not pressable, so keep it simple: no accessibilityLabel needed.
            testID={`cardMetric-${m.id}`}
>>>>>>> assignment6-rn
          />
        ))}
      </View>
    </ScreenContainer>
  );
}
