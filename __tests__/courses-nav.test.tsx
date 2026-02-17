import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CoursesScreen } from "../src/screens/CoursesScreen";
import { CourseDetailScreen } from "../src/screens/CourseDetailScreen";
import { LessonPlayerScreen } from "../src/screens/LessonPlayerScreen";

type TestStackParamList = {
  Courses: undefined;
  CourseDetail: { courseId: string };
  LessonPlayer: { courseId: string; lessonId: string };
};

const Stack = createNativeStackNavigator<TestStackParamList>();

function TestNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Courses" component={CoursesScreen} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
      <Stack.Screen name="LessonPlayer" component={LessonPlayerScreen} />
    </Stack.Navigator>
  );
}

describe("courses navigation", () => {
  test("navigate Courses → CourseDetail → LessonPlayer", async () => {
    const ui = render(
      <NavigationContainer>
        <TestNavigator />
      </NavigationContainer>
    );

    // Courses list renders
    await waitFor(() => {
      expect(ui.getByText("Courses")).toBeTruthy();
    });

    // Because Card attaches testID to both Pressable and inner View, use getAllByTestId
    const courseCards = await ui.findAllByTestId("course-c1");
    fireEvent.press(courseCards[0]);

    // Course detail screen
    await waitFor(() => {
      expect(ui.getByText("Intro to Data Structures")).toBeTruthy();
    });
    expect(ui.getByText("Lessons")).toBeTruthy();

    const lessonCards = await ui.findAllByTestId("lesson-l1");
    fireEvent.press(lessonCards[0]);

    // Lesson player screen
    await waitFor(() => {
      expect(ui.getByText("Arrays & Big-O")).toBeTruthy();
    });
  });
});
