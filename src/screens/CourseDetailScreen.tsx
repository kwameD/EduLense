import React, { useMemo } from "react";
import { Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { AppStackParamList } from "../nav/types";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";
import { COURSES } from "../data/courses";

export function CourseDetailScreen() {
  const route = useRoute<RouteProp<AppStackParamList, "CourseDetail">>();
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
  const course = useMemo(() => COURSES.find((c) => c.id === route.params.courseId), [route.params.courseId]);

  if (!course) {
    return (
      <ScreenContainer>
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const course = useMemo(
    () => COURSES.find((c) => c.id === route.params.courseId),
    [route.params.courseId]
  );

  if (!course) {
    return (
      <ScreenContainer accessibilityLabel="Course details screen">
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
=======
  const course = useMemo(
    () => COURSES.find((c) => c.id === route.params.courseId),
    [route.params.courseId]
  );

  if (!course) {
    return (
      <ScreenContainer accessibilityLabel="Course details screen">
>>>>>>> origin/assignment6-rn
=======
  const course = useMemo(
    () => COURSES.find((c) => c.id === route.params.courseId),
    [route.params.courseId]
  );

  if (!course) {
    return (
      <ScreenContainer accessibilityLabel="Course details screen">
>>>>>>> assignment6-rn
        <Text>Course not found.</Text>
      </ScreenContainer>
    );
  }

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
    <ScreenContainer>
=======
    <ScreenContainer accessibilityLabel={`Course details: ${course.title}`}>
>>>>>>> origin/assignment6-rn
=======
    <ScreenContainer accessibilityLabel={`Course details: ${course.title}`}>
>>>>>>> assignment6-rn
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800" }}>{course.title}</Text>
        <Text style={{ color: "#4b5563", marginTop: 4 }}>
          {course.instructor} • {course.progressPct}% complete
        </Text>

<<<<<<< HEAD
<<<<<<< HEAD
        <View style={{ height: 14 }} />
        <Text style={{ fontSize: 16, fontWeight: "800", marginBottom: 8 }}>Lessons</Text>
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <ScreenContainer accessibilityLabel={`Course details: ${course.title}`}>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800" }}>{course.title}</Text>
        <Text style={{ color: "#4b5563", marginTop: 4 }}>
          {course.instructor} • {course.progressPct}% complete
        </Text>

=======
>>>>>>> origin/assignment6-rn
=======
>>>>>>> assignment6-rn
        <View accessible={false} style={{ height: 14 }} />

        <Text style={{ fontSize: 16, fontWeight: "800", marginBottom: 8 }}>
          Lessons
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

        {course.lessons.map((l) => (
          <Card
            key={l.id}
            title={l.title}
            subtitle={`${l.durationMin} min${l.completed ? " • Completed" : ""}`}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            accessibilityLabel={`${l.title} lesson card`}
            testID={`lesson-${l.id}`}
            onPress={() => navigation.navigate("LessonPlayer", { courseId: course.id, lessonId: l.id })}
=======
            accessibilityLabel={`Open lesson: ${l.title}`}
            accessibilityHint="Opens lesson player"
            testID={`lesson-${l.id}`}
=======
            accessibilityLabel={`Open lesson: ${l.title}`}
            accessibilityHint="Opens lesson player"
            testID={`lesson-${l.id}`}
>>>>>>> origin/assignment6-rn
=======
            accessibilityLabel={`Open lesson: ${l.title}`}
            accessibilityHint="Opens lesson player"
            testID={`lesson-${l.id}`}
>>>>>>> assignment6-rn
            onPress={() =>
              navigation.navigate("LessonPlayer", {
                courseId: course.id,
                lessonId: l.id,
              })
            }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> assignment6-rn
=======
            accessibilityLabel={`${l.title} lesson card`}
            testID={`lesson-${l.id}`}
            onPress={() => navigation.navigate("LessonPlayer", { courseId: course.id, lessonId: l.id })}
>>>>>>> Assignment5
=======
            accessibilityLabel={`${l.title} lesson card`}
            testID={`lesson-${l.id}`}
            onPress={() => navigation.navigate("LessonPlayer", { courseId: course.id, lessonId: l.id })}
>>>>>>> origin/Assignment5
=======
>>>>>>> origin/assignment6-rn
=======
>>>>>>> assignment6-rn
          />
        ))}
      </View>
    </ScreenContainer>
  );
}
