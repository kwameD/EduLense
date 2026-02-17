import React, { useMemo } from "react";
import { Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import type { AppStackParamList } from "../nav/types";
import { ScreenContainer } from "../components/ScreenContainer";
import { COURSES } from "../data/courses";
import { Card } from "../components/Card";

export function LessonPlayerScreen() {
  const route = useRoute<RouteProp<AppStackParamList, "LessonPlayer">>();
  const { courseId, lessonId } = route.params;

  const { course, lesson } = useMemo(() => {
    const c = COURSES.find((x) => x.id === courseId);
    const l = c?.lessons.find((x) => x.id === lessonId);
    return { course: c, lesson: l };
  }, [courseId, lessonId]);

  if (!course || !lesson) {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <ScreenContainer>
=======
      <ScreenContainer accessibilityLabel="Lesson player screen">
>>>>>>> assignment6-rn
=======
      <ScreenContainer>
>>>>>>> Assignment5
        <Text>Lesson not found.</Text>
      </ScreenContainer>
    );
  }

  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800" }}>{lesson.title}</Text>
        <Text style={{ color: "#4b5563", marginTop: 4 }}>{course.title} • {lesson.durationMin} min</Text>

        <View style={{ height: 14 }} />
        <Card
          title="Lesson Content (Demo)"
          subtitle="In a real app, this would stream video, show readings, and track completion."
          accessibilityLabel="Lesson content card"
        />
        <Card
          title="Accessibility Note"
          subtitle="Controls are labeled and have button roles for screen reader compatibility."
          accessibilityLabel="Accessibility note card"
<<<<<<< HEAD
=======
    <ScreenContainer accessibilityLabel={`Lesson player: ${lesson.title}`}>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800" }}>{lesson.title}</Text>
        <Text style={{ color: "#4b5563", marginTop: 4 }}>
          {course.title} • {lesson.durationMin} min
        </Text>

        <View accessible={false} style={{ height: 14 }} />

        <Card
          title="Lesson Content (Demo)"
          subtitle="In a real app, this would stream video, show readings, and track completion."
          testID="cardLessonContent"
        />

        <Card
          title="Accessibility Note"
          subtitle="Controls are labeled and have button roles for screen reader compatibility."
          testID="cardAccessibilityNote"
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
        />
      </View>
    </ScreenContainer>
  );
}
