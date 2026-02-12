import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";

export function NotificationsScreen() {
  const [courseReminders, setCourseReminders] = useState(true);
  const [deadlineReminders, setDeadlineReminders] = useState(true);

  return (
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Notifications</Text>
        <Card title="Reminder Preferences" subtitle="Toggles for demo purposes" accessibilityLabel="Notifications settings card" />

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <Text style={{ fontWeight: "700" }}>Course reminders</Text>
          <Switch accessibilityLabel="Course reminders toggle" value={courseReminders} onValueChange={setCourseReminders} />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontWeight: "700" }}>Deadline reminders</Text>
          <Switch accessibilityLabel="Deadline reminders toggle" value={deadlineReminders} onValueChange={setDeadlineReminders} />
        </View>
      </View>
    </ScreenContainer>
  );
}
