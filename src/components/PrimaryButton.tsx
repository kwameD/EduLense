import React from "react";
import { Pressable, Text } from "react-native";

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  disabled?: boolean;
  testID?: string;
};

export function PrimaryButton({
  title,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  disabled = false,
  testID,
}: PrimaryButtonProps) {
  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => ({
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 12,
        backgroundColor: "#111827",
        opacity: disabled ? 0.5 : pressed ? 0.85 : 1,
        alignItems: "center",
      })}
    >
      <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
        {title}
      </Text>
    </Pressable>
  );
}