import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";

export function SettingsScreen() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Settings</Text>

        <Card title="Accessibility Preferences" subtitle="Toggles for demo purposes" accessibilityLabel="Accessibility settings card" />

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <Text style={{ fontWeight: "700" }}>Reduce motion</Text>
          <Switch accessibilityLabel="Reduce motion toggle" value={reduceMotion} onValueChange={setReduceMotion} />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontWeight: "700" }}>High contrast</Text>
          <Switch accessibilityLabel="High contrast toggle" value={highContrast} onValueChange={setHighContrast} />
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <ScreenContainer accessibilityLabel="Settings screen">
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Settings
        </Text>

        <Card
          title="Accessibility Preferences"
          subtitle="Toggles for demo purposes"
          testID="cardAccessibilityPrefs"
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Reduce motion</Text>
          <Switch
            testID="toggleReduceMotion"
            accessibilityRole="switch"
            accessibilityLabel="Reduce motion"
            accessibilityHint="Toggles reduced motion animations"
            accessibilityState={{ checked: reduceMotion }}
            value={reduceMotion}
            onValueChange={setReduceMotion}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "700" }}>High contrast</Text>
          <Switch
            testID="toggleHighContrast"
            accessibilityRole="switch"
            accessibilityLabel="High contrast"
            accessibilityHint="Toggles high contrast mode"
            accessibilityState={{ checked: highContrast }}
            value={highContrast}
            onValueChange={setHighContrast}
          />
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
        </View>
      </View>
    </ScreenContainer>
  );
}
