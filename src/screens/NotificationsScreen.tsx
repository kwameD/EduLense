import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";

export function NotificationsScreen() {
  const [courseReminders, setCourseReminders] = useState(true);
  const [deadlineReminders, setDeadlineReminders] = useState(true);

  return (
    <ScreenContainer accessibilityLabel="Notifications screen">
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Notifications
        </Text>

        <Card
          title="Reminder Preferences"
          subtitle="Toggles for demo purposes"
          testID="cardNotificationPrefs"
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Course reminders</Text>
          <Switch
            testID="toggleCourseReminders"
            accessibilityRole="switch"
            accessibilityLabel="Course reminders"
            accessibilityHint="Toggles course reminder notifications"
            accessibilityState={{ checked: courseReminders }}
            value={courseReminders}
            onValueChange={setCourseReminders}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "700" }}>Deadline reminders</Text>
          <Switch
            testID="toggleDeadlineReminders"
            accessibilityRole="switch"
            accessibilityLabel="Deadline reminders"
            accessibilityHint="Toggles deadline reminder notifications"
            accessibilityState={{ checked: deadlineReminders }}
            value={deadlineReminders}
            onValueChange={setDeadlineReminders}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}
