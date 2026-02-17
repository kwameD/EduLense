import React from "react";
import { Text, View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { Card } from "../components/Card";
import { SCHEDULE } from "../data/schedule";

export function ScheduleScreen() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Schedule</Text>
=======
    <ScreenContainer accessibilityLabel="Schedule screen">
      <View style={{ paddingTop: 12 }}>
=======
    <ScreenContainer accessibilityLabel="Schedule screen">
      <View style={{ paddingTop: 12 }}>
>>>>>>> origin/assignment6-rn
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Schedule
        </Text>

<<<<<<< HEAD
>>>>>>> assignment6-rn
=======
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Schedule</Text>
>>>>>>> Assignment5
=======
    <ScreenContainer>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Schedule</Text>
>>>>>>> origin/Assignment5
=======
>>>>>>> origin/assignment6-rn
        {SCHEDULE.map((s) => (
          <Card
            key={s.id}
            title={s.title}
            subtitle={`${s.date} • ${s.time}${s.location ? ` • ${s.location}` : ""}`}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            accessibilityLabel={`${s.title} schedule item`}
=======
            testID={`schedule-${s.id}`}
>>>>>>> assignment6-rn
=======
            accessibilityLabel={`${s.title} schedule item`}
>>>>>>> Assignment5
=======
            accessibilityLabel={`${s.title} schedule item`}
>>>>>>> origin/Assignment5
=======
            testID={`schedule-${s.id}`}
>>>>>>> origin/assignment6-rn
          />
        ))}
      </View>
    </ScreenContainer>
  );
}
