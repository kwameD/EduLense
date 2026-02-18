import React from "react";
import { View } from "react-native";
import { useResponsiveMaxWidth } from "../hooks/useResponsiveMaxWidth";

<<<<<<< HEAD
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
=======
>>>>>>> assignment6-rn
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
<<<<<<< HEAD
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
=======
  const maxWidth = useResponsiveMaxWidth();

  return (
>>>>>>> assignment6-rn
    <View
      testID={testID}
      accessible={false}
      accessibilityLabel={accessibilityLabel}
      style={{ flex: 1, padding: 16, alignItems: "center" }}
    >
      <View accessible={false} style={{ width: "100%", maxWidth }}>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
=======
>>>>>>> origin/assignment6-rn
=======
>>>>>>> assignment6-rn
        {children}
      </View>
    </View>
  );
}
