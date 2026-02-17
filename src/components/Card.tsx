import React from "react";
import { Pressable, Text, View } from "react-native";

type CardProps = {
  title: string;
  subtitle?: string;
  rightText?: string;
  onPress?: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  testID?: string;
};

export function Card({
  title,
  subtitle,
  rightText,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID,
}: CardProps) {
  const isPressable = Boolean(onPress);

  const computedLabel = accessibilityLabel ?? (isPressable ? `Open ${title}` : title);

  const Body = (
    <View
      // If pressable, keep the wrapper as the accessible element to avoid double-reading.
      importantForAccessibility={isPressable ? "no-hide-descendants" : "auto"}
      style={{
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 14,
        padding: 14,
        marginBottom: 12,
        backgroundColor: "white",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 12 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "700" }}>{title}</Text>
          {!!subtitle && (
            <Text style={{ marginTop: 4, color: "#4b5563" }}>{subtitle}</Text>
          )}
        </View>
        {!!rightText && <Text style={{ fontWeight: "700" }}>{rightText}</Text>}
      </View>
    </View>
  );

  if (!onPress) {
    return (
      <View testID={testID}>
        {Body}
      </View>
    );
  }

  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={computedLabel}
      accessibilityHint={accessibilityHint}
      onPress={onPress}
      style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}
    >
      {Body}
    </Pressable>
  );
}
