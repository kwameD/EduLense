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
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800" }}>Profile</Text>
        <Text style={{ color: "#4b5563", marginTop: 4 }}>
          {user?.name ?? "Student"} • {user?.email ?? ""}
        </Text>

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
          testID="btnSignOut"
          onPress={() => signOut()}
        />
      </View>
    </ScreenContainer>
  );
}
