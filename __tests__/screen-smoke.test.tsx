import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

// Mock auth hook to avoid real navigation/auth dependencies
jest.mock("../src/context/AuthContext", () => ({
  useAuth: () => ({
    user: { name: "Test User", email: "test@example.com" },
    signIn: async () => ({ ok: true }),
    signUp: async () => ({ ok: true }),
    signOut: jest.fn(),
  }),
}));

import { SignInScreen } from "../src/screens/SignInScreen";
import { SettingsScreen } from "../src/screens/SettingsScreen";
import { NotificationsScreen } from "../src/screens/NotificationsScreen";
import { ScheduleScreen } from "../src/screens/ScheduleScreen";
import { ProfileScreen } from "../src/screens/ProfileScreen";
import { AchievementsScreen } from "../src/screens/AchievementsScreen";

// Mock navigation for screens that call useNavigation
jest.mock("@react-navigation/native", () => {
  const actual = jest.requireActual("@react-navigation/native");
  return {
    ...actual,
    useNavigation: () => ({ navigate: jest.fn() }),
  };
});

describe("screen smoke coverage", () => {
  test("SignInScreen renders inputs and sign in button", () => {
    const ui = render(<SignInScreen />);
    expect(ui.getByTestId("inputEmail")).toBeTruthy();
    expect(ui.getByTestId("inputPassword")).toBeTruthy();
    expect(ui.getByTestId("btnSubmitSignIn")).toBeTruthy();
  });

  test("SettingsScreen toggles switches", () => {
    const ui = render(<SettingsScreen />);
    const reduce = ui.getByTestId("toggleReduceMotion");
    const contrast = ui.getByTestId("toggleHighContrast");

    fireEvent(reduce, "valueChange", true);
    fireEvent(contrast, "valueChange", true);

    expect(reduce.props.value).toBe(true);
    expect(contrast.props.value).toBe(true);
  });

  test("NotificationsScreen toggles switches", () => {
    const ui = render(<NotificationsScreen />);
    const course = ui.getByTestId("toggleCourseReminders");
    const deadline = ui.getByTestId("toggleDeadlineReminders");

    fireEvent(course, "valueChange", false);
    fireEvent(deadline, "valueChange", false);

    expect(course.props.value).toBe(false);
    expect(deadline.props.value).toBe(false);
  });

  test("ScheduleScreen renders schedule cards", () => {
    const ui = render(<ScheduleScreen />);
    // We added testIDs schedule-${id}
    expect(ui.getByTestId("schedule-s1")).toBeTruthy();
  });

  test("ProfileScreen renders nav cards and sign out button", () => {
    const ui = render(<ProfileScreen />);
    expect(ui.getByTestId("navAchievements")).toBeTruthy();
    expect(ui.getByTestId("navNotifications")).toBeTruthy();
    expect(ui.getByTestId("navSettings")).toBeTruthy();
    expect(ui.getByTestId("btnSignOut")).toBeTruthy();
  });

  test("AchievementsScreen renders achievements list", () => {
    const ui = render(<AchievementsScreen />);
    expect(ui.getByTestId("achievement-a1")).toBeTruthy();
    expect(ui.getByTestId("achievement-a2")).toBeTruthy();
    expect(ui.getByTestId("achievement-a3")).toBeTruthy();
  });
});
