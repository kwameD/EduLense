import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { TabParamList } from "./types";
import { HomeScreen } from "../screens/HomeScreen";
import { CoursesScreen } from "../screens/CoursesScreen";
import { ScheduleScreen } from "../screens/ScheduleScreen";
import { ProgressScreen } from "../screens/ProgressScreen";
import { ProfileScreen } from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator<TabParamList>();

export function TabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile" }} />
      <Tab.Screen name="Progress" component={ProgressScreen} options={{ title: "Progress" }} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ title: "Schedule" }} />
      <Tab.Screen name="Courses" component={CoursesScreen} options={{ title: "Courses" }} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Dashboard" }} />
    </Tab.Navigator>
  );
}
