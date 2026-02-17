import React from "react";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CourseDetailScreen } from "../src/screens/CourseDetailScreen";
import { LessonPlayerScreen } from "../src/screens/LessonPlayerScreen";

type StackParamList = {
  CourseDetail: { courseId: string };
  LessonPlayer: { courseId: string; lessonId: string };
};

const Stack = createNativeStackNavigator<StackParamList>();

describe("branch coverage boosters", () => {
  test("CourseDetailScreen shows 'Course not found' for invalid courseId", () => {
    const ui = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="CourseDetail"
            component={CourseDetailScreen}
            initialParams={{ courseId: "bad-course-id" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

    expect(ui.getByText("Course not found.")).toBeTruthy();
  });

  test("LessonPlayerScreen shows 'Lesson not found' for invalid lessonId", () => {
    const ui = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LessonPlayer"
            component={LessonPlayerScreen}
            initialParams={{ courseId: "c1", lessonId: "bad-lesson-id" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

    expect(ui.getByText("Lesson not found.")).toBeTruthy();
  });
});
