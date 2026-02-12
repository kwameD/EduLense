import React from "react";
import { View } from "react-native";
import { useResponsiveMaxWidth } from "../hooks/useResponsiveMaxWidth";

export function ScreenContainer({ children }: { children: React.ReactNode }) {
  const maxWidth = useResponsiveMaxWidth();
  return (
    <View style={{ flex: 1, padding: 16, alignItems: "center" }}>
      <View style={{ width: "100%", maxWidth }}>
        {children}
      </View>
    </View>
  );
}
