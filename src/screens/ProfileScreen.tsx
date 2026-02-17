import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { AppStackParamList } from "../nav/types";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";
import { PrimaryButton } from "../components/PrimaryButton";
import { useAuth } from "../context/AuthContext";

export function ProfileScreen() {
  const { user, signOut } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  return (
<<<<<<< HEAD
    <ScreenContainer>
=======
    <ScreenContainer accessibilityLabel="Profile screen">
>>>>>>> assignment6-rn
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800" }}>Profile</Text>
        <Text style={{ color: "#4b5563", marginTop: 4 }}>
          {user?.name ?? "Student"} • {user?.email ?? ""}
        </Text>

<<<<<<< HEAD
        <View style={{ height: 14 }} />
        <Card
          title="Achievements"
          subtitle="Badges and milestones"
          accessibilityLabel="Achievements navigation card"
          onPress={() => navigation.navigate("Achievements")}
        />
        <Card
          title="Notifications"
          subtitle="Manage reminders"
          accessibilityLabel="Notifications navigation card"
          onPress={() => navigation.navigate("Notifications")}
        />
        <Card
          title="Settings"
          subtitle="App preferences"
          accessibilityLabel="Settings navigation card"
          onPress={() => navigation.navigate("Settings")}
        />

        <View style={{ height: 8 }} />
        <PrimaryButton
          title="Sign Out"
          accessibilityLabel="Sign out button"
=======
        <View accessible={false} style={{ height: 14 }} />

        <Card
          title="Achievements"
          subtitle="Badges and milestones"
          accessibilityLabel="Open achievements"
          accessibilityHint="Navigates to achievements"
          testID="navAchievements"
          onPress={() => navigation.navigate("Achievements")}
        />

        <Card
          title="Notifications"
          subtitle="Manage reminders"
          accessibilityLabel="Open notifications"
          accessibilityHint="Navigates to notifications"
          testID="navNotifications"
          onPress={() => navigation.navigate("Notifications")}
        />

        <Card
          title="Settings"
          subtitle="App preferences"
          accessibilityLabel="Open settings"
          accessibilityHint="Navigates to settings"
          testID="navSettings"
          onPress={() => navigation.navigate("Settings")}
        />

        <View accessible={false} style={{ height: 8 }} />

        <PrimaryButton
          title="Sign Out"
          accessibilityLabel="Sign out"
          accessibilityHint="Signs out of the current account"
>>>>>>> assignment6-rn
          testID="btnSignOut"
          onPress={() => signOut()}
        />
      </View>
    </ScreenContainer>
  );
}
