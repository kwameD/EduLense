import React from "react";
import { Pressable, Text, View } from "react-native";

<<<<<<< HEAD
=======
type CardProps = {
  title: string;
  subtitle?: string;
  rightText?: string;
  onPress?: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  testID?: string;
};

>>>>>>> assignment6-rn
export function Card({
  title,
  subtitle,
  rightText,
  onPress,
  accessibilityLabel,
<<<<<<< HEAD
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
=======
  accessibilityHint,
  testID,
}: CardProps) {
  const isPressable = Boolean(onPress);

  const computedLabel = accessibilityLabel ?? (isPressable ? `Open ${title}` : title);

  const Body = (
    <View
      // If pressable, keep the wrapper as the accessible element to avoid double-reading.
      importantForAccessibility={isPressable ? "no-hide-descendants" : "auto"}
>>>>>>> assignment6-rn
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
<<<<<<< HEAD
          {!!subtitle && <Text style={{ marginTop: 4, color: "#4b5563" }}>{subtitle}</Text>}
=======
          {!!subtitle && (
            <Text style={{ marginTop: 4, color: "#4b5563" }}>{subtitle}</Text>
          )}
>>>>>>> assignment6-rn
        </View>
        {!!rightText && <Text style={{ fontWeight: "700" }}>{rightText}</Text>}
      </View>
    </View>
  );

<<<<<<< HEAD
  if (!onPress) return Body;
=======
  if (!onPress) {
    return (
      <View testID={testID}>
        {Body}
      </View>
    );
  }
>>>>>>> assignment6-rn

  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
<<<<<<< HEAD
      accessibilityLabel={accessibilityLabel}
=======
      accessibilityLabel={computedLabel}
      accessibilityHint={accessibilityHint}
>>>>>>> assignment6-rn
      onPress={onPress}
      style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}
    >
      {Body}
    </Pressable>
  );
}
