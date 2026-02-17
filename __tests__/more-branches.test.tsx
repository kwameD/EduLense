import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Card } from "../src/components/Card";
import { HomeScreen } from "../src/screens/HomeScreen";
import { ScheduleScreen } from "../src/screens/ScheduleScreen";
import { SettingsScreen } from "../src/screens/SettingsScreen";
import { NotificationsScreen } from "../src/screens/NotificationsScreen";

type StackParamList = {
  Home: undefined;
  Schedule: undefined;
  Settings: undefined;
  Notifications: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

describe("more branch coverage", () => {
  test("Card renders optional fields and pressable variant", () => {
    const pressed = jest.fn();

    const ui = render(
      <>
        {/* no subtitle/rightText, no onPress */}
        <Card title="Simple" accessibilityLabel="simple card" testID="card-simple" />

        {/* subtitle + rightText + onPress */}
        <Card
          title="Pressable"
          subtitle="Sub"
          rightText="99%"
          onPress={pressed}
          accessibilityLabel="pressable card"
          testID="card-pressable"
        />
      </>
    );

    expect(ui.getByText("Simple")).toBeTruthy();
<<<<<<< HEAD
    expect(ui.getByText("Pressable")).toBeTruthy();
    expect(ui.getByText("Sub")).toBeTruthy();
    expect(ui.getByText("99%")).toBeTruthy();

=======
    expect(ui.getByTestId("card-pressable")).toBeTruthy();
    expect(ui.getByLabelText("pressable card")).toBeTruthy();
    
>>>>>>> assignment6-rn
    // There can be more than one element with the same testID because Card sets it on View + Pressable
    fireEvent.press(ui.getAllByTestId("card-pressable")[0]);
    expect(pressed).toHaveBeenCalled();
  });

  test("Render Home, Schedule, Settings, Notifications screens", () => {
    const ui = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Schedule" component={ScheduleScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );

    // Home
    expect(ui.getByText("Dashboard")).toBeTruthy();
    expect(ui.getByText("This week")).toBeTruthy();

    // Navigate to Schedule
    // (We can re-render by mounting schedule directly isn't needed; but navigation adds some branches)
  });
});
