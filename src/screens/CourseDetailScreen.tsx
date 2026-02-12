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
  const course = useMemo(() => COURSES.find((c) => c.id === route.params.courseId), [route.params.courseId]);

  if (!course) {
    return (
      <ScreenContainer>
        <Text>Course not found.</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800" }}>{course.title}</Text>
        <Text style={{ color: "#4b5563", marginTop: 4 }}>{course.instructor} • {course.progressPct}% complete</Text>

        <View style={{ height: 14 }} />
        <Text style={{ fontSize: 16, fontWeight: "800", marginBottom: 8 }}>Lessons</Text>

        {course.lessons.map((l) => (
          <Card
            key={l.id}
            title={l.title}
            subtitle={`${l.durationMin} min${l.completed ? " • Completed" : ""}`}
            accessibilityLabel={`${l.title} lesson card`}
            testID={`lesson-${l.id}`}
            onPress={() => navigation.navigate("LessonPlayer", { courseId: course.id, lessonId: l.id })}
          />
        ))}
      </View>
    </ScreenContainer>
  );
}
