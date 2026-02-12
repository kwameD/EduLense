import React from "react";
import { Pressable, Text, View } from "react-native";

export function Card({
  title,
  subtitle,
  rightText,
  onPress,
  accessibilityLabel,
  testID,
}: {
  title: string;
  subtitle?: string;
  rightText?: string;
  onPress?: () => void;
  accessibilityLabel: string;
  testID?: string;
}) {
  const Body = (
    <View
      // ✅ Always attach testID to a real native element (fixes ProgressScreen test)
      testID={testID}
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
          {!!subtitle && <Text style={{ marginTop: 4, color: "#4b5563" }}>{subtitle}</Text>}
        </View>
        {!!rightText && <Text style={{ fontWeight: "700" }}>{rightText}</Text>}
      </View>
    </View>
  );

  if (!onPress) return Body;

  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}
    >
      {Body}
    </Pressable>
  );
}
