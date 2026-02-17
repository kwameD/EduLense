import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { AppStackParamList } from "../nav/types";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";
import { COURSES } from "../data/courses";

export function CoursesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Courses</Text>
=======
    <ScreenContainer accessibilityLabel="Courses screen">
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Courses
        </Text>

>>>>>>> assignment6-rn
=======
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Courses</Text>
>>>>>>> Assignment5
=======
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Courses</Text>
>>>>>>> origin/Assignment5
        {COURSES.map((c) => (
          <Card
            key={c.id}
            title={c.title}
            subtitle={`${c.instructor}`}
            rightText={`${c.progressPct}%`}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            accessibilityLabel={`${c.title} course card`}
=======
            accessibilityLabel={`Open course: ${c.title}`}
            accessibilityHint="Opens course details"
>>>>>>> assignment6-rn
=======
            accessibilityLabel={`${c.title} course card`}
>>>>>>> Assignment5
=======
            accessibilityLabel={`${c.title} course card`}
>>>>>>> origin/Assignment5
            testID={`course-${c.id}`}
            onPress={() => navigation.navigate("CourseDetail", { courseId: c.id })}
          />
        ))}
      </View>
    </ScreenContainer>
  );
}
