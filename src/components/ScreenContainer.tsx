import React from "react";
import { View } from "react-native";
import { useResponsiveMaxWidth } from "../hooks/useResponsiveMaxWidth";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
export function ScreenContainer({ children }: { children: React.ReactNode }) {
  const maxWidth = useResponsiveMaxWidth();
  return (
    <View style={{ flex: 1, padding: 16, alignItems: "center" }}>
      <View style={{ width: "100%", maxWidth }}>
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
    <View
      testID={testID}
      accessible={false}
      accessibilityLabel={accessibilityLabel}
      style={{ flex: 1, padding: 16, alignItems: "center" }}
    >
      <View accessible={false} style={{ width: "100%", maxWidth }}>
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
        {children}
      </View>
    </View>
  );
}
