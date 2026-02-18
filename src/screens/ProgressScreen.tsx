import React from "react";
import { Text, View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";
import { PROGRESS } from "../data/progress";

export function ProgressScreen() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Progress</Text>
=======
    <ScreenContainer accessibilityLabel="Progress screen">
      <View style={{ paddingTop: 12 }}>
=======
    <ScreenContainer accessibilityLabel="Progress screen">
      <View style={{ paddingTop: 12 }}>
>>>>>>> origin/assignment6-rn
=======
    <ScreenContainer accessibilityLabel="Progress screen">
      <View style={{ paddingTop: 12 }}>
>>>>>>> assignment6-rn
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Progress
        </Text>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> assignment6-rn
=======
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Progress</Text>
>>>>>>> Assignment5
=======
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Progress</Text>
>>>>>>> origin/Assignment5
=======
>>>>>>> origin/assignment6-rn
=======
>>>>>>> assignment6-rn
        {PROGRESS.map((m) => (
          <Card
            key={m.id}
            title={m.label}
            rightText={m.value}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            accessibilityLabel={`${m.label} progress card`}
=======
>>>>>>> assignment6-rn
=======
            accessibilityLabel={`${m.label} progress card`}
>>>>>>> Assignment5
=======
            accessibilityLabel={`${m.label} progress card`}
>>>>>>> origin/Assignment5
=======
>>>>>>> origin/assignment6-rn
=======
>>>>>>> assignment6-rn
            testID={`progress-${m.id}`}
          />
        ))}
      </View>
    </ScreenContainer>
  );
}
