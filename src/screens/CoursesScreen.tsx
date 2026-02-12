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
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Courses</Text>
        {COURSES.map((c) => (
          <Card
            key={c.id}
            title={c.title}
            subtitle={`${c.instructor}`}
            rightText={`${c.progressPct}%`}
            accessibilityLabel={`${c.title} course card`}
            testID={`course-${c.id}`}
            onPress={() => navigation.navigate("CourseDetail", { courseId: c.id })}
          />
        ))}
      </View>
    </ScreenContainer>
  );
}
