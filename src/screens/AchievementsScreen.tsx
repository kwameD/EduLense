import React from "react";
import { Text, View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";

const ACH = [
  { id: "a1", title: "First Login", subtitle: "Signed in successfully" },
  { id: "a2", title: "5-Day Streak", subtitle: "Studied five days in a row" },
  { id: "a3", title: "Course Explorer", subtitle: "Viewed 3 course detail pages" },
];

export function AchievementsScreen() {
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
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Achievements</Text>
        {ACH.map((a) => (
          <Card key={a.id} title={a.title} subtitle={a.subtitle} accessibilityLabel={`${a.title} achievement`} />
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <ScreenContainer accessibilityLabel="Achievements screen">
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Achievements
        </Text>

        {ACH.map((a) => (
          <Card
            key={a.id}
            title={a.title}
            subtitle={a.subtitle}
            testID={`achievement-${a.id}`}
          />
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
        ))}
      </View>
    </ScreenContainer>
  );
}
