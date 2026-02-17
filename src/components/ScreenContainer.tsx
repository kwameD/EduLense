import React from "react";
import { View } from "react-native";
import { useResponsiveMaxWidth } from "../hooks/useResponsiveMaxWidth";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
export function ScreenContainer({ children }: { children: React.ReactNode }) {
=======
type ScreenContainerProps = {
  children: React.ReactNode;
  testID?: string;
  accessibilityLabel?: string;
};

export function ScreenContainer({
  children,
  testID,
  accessibilityLabel,
}: ScreenContainerProps) {
>>>>>>> origin/assignment6-rn
  const maxWidth = useResponsiveMaxWidth();

  return (
<<<<<<< HEAD
    <View style={{ flex: 1, padding: 16, alignItems: "center" }}>
      <View style={{ width: "100%", maxWidth }}>
<<<<<<< HEAD
<<<<<<< HEAD
=======
type ScreenContainerProps = {
  children: React.ReactNode;
  testID?: string;
  accessibilityLabel?: string;
};

export function ScreenContainer({
  children,
  testID,
  accessibilityLabel,
}: ScreenContainerProps) {
  const maxWidth = useResponsiveMaxWidth();

  return (
=======
>>>>>>> origin/assignment6-rn
    <View
      testID={testID}
      accessible={false}
      accessibilityLabel={accessibilityLabel}
      style={{ flex: 1, padding: 16, alignItems: "center" }}
    >
      <View accessible={false} style={{ width: "100%", maxWidth }}>
<<<<<<< HEAD
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
=======
>>>>>>> origin/assignment6-rn
        {children}
      </View>
    </View>
  );
}
