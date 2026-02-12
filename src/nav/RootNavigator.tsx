import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../context/AuthContext";
import { AuthLandingScreen } from "../screens/AuthLandingScreen";
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { TabsNavigator } from "./TabsNavigator";
import { CourseDetailScreen } from "../screens/CourseDetailScreen";
import { LessonPlayerScreen } from "../screens/LessonPlayerScreen";
import { AchievementsScreen } from "../screens/AchievementsScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { NotificationsScreen } from "../screens/NotificationsScreen";
import type { AuthStackParamList, AppStackParamList } from "./types";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();

function AuthFlow() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="AuthLanding" component={AuthLandingScreen} options={{ title: "EduLense" }} />
      <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ title: "Sign In" }} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ title: "Create Account" }} />
    </AuthStack.Navigator>
  );
}

function AppFlow() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />
      <AppStack.Screen name="CourseDetail" component={CourseDetailScreen} options={{ title: "Course" }} />
      <AppStack.Screen name="LessonPlayer" component={LessonPlayerScreen} options={{ title: "Lesson" }} />
      <AppStack.Screen name="Achievements" component={AchievementsScreen} options={{ title: "Achievements" }} />
      <AppStack.Screen name="Settings" component={SettingsScreen} options={{ title: "Settings" }} />
      <AppStack.Screen name="Notifications" component={NotificationsScreen} options={{ title: "Notifications" }} />
    </AppStack.Navigator>
  );
}

export function RootNavigator() {
  const { user } = useAuth();
  return user ? <AppFlow /> : <AuthFlow />;
}
