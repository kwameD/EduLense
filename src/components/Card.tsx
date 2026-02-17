import React from "react";
import { Pressable, Text, View } from "react-native";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/assignment6-rn
type CardProps = {
  title: string;
  subtitle?: string;
  rightText?: string;
  onPress?: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  testID?: string;
};

<<<<<<< HEAD
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
=======
>>>>>>> origin/assignment6-rn
export function Card({
  title,
  subtitle,
  rightText,
  onPress,
  accessibilityLabel,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
=======
  accessibilityHint,
>>>>>>> origin/assignment6-rn
  testID,
}: CardProps) {
  const isPressable = Boolean(onPress);

  const computedLabel = accessibilityLabel ?? (isPressable ? `Open ${title}` : title);

  const Body = (
    <View
<<<<<<< HEAD
      // ✅ Always attach testID to a real native element (fixes ProgressScreen test)
      testID={testID}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
=======
      // If pressable, keep the wrapper as the accessible element to avoid double-reading.
      importantForAccessibility={isPressable ? "no-hide-descendants" : "auto"}
>>>>>>> origin/assignment6-rn
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {!!subtitle && <Text style={{ marginTop: 4, color: "#4b5563" }}>{subtitle}</Text>}
=======
          {!!subtitle && (
            <Text style={{ marginTop: 4, color: "#4b5563" }}>{subtitle}</Text>
          )}
>>>>>>> assignment6-rn
=======
          {!!subtitle && <Text style={{ marginTop: 4, color: "#4b5563" }}>{subtitle}</Text>}
>>>>>>> Assignment5
=======
          {!!subtitle && <Text style={{ marginTop: 4, color: "#4b5563" }}>{subtitle}</Text>}
>>>>>>> origin/Assignment5
=======
          {!!subtitle && (
            <Text style={{ marginTop: 4, color: "#4b5563" }}>{subtitle}</Text>
          )}
>>>>>>> origin/assignment6-rn
        </View>
        {!!rightText && <Text style={{ fontWeight: "700" }}>{rightText}</Text>}
      </View>
    </View>
  );

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if (!onPress) return Body;
=======
=======
>>>>>>> origin/assignment6-rn
  if (!onPress) {
    return (
      <View testID={testID}>
        {Body}
      </View>
    );
  }
<<<<<<< HEAD
>>>>>>> assignment6-rn
=======
  if (!onPress) return Body;
>>>>>>> Assignment5
=======
  if (!onPress) return Body;
>>>>>>> origin/Assignment5
=======
>>>>>>> origin/assignment6-rn

  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      accessibilityLabel={accessibilityLabel}
=======
      accessibilityLabel={computedLabel}
      accessibilityHint={accessibilityHint}
>>>>>>> assignment6-rn
=======
      accessibilityLabel={accessibilityLabel}
>>>>>>> Assignment5
=======
      accessibilityLabel={accessibilityLabel}
>>>>>>> origin/Assignment5
=======
      accessibilityLabel={computedLabel}
      accessibilityHint={accessibilityHint}
>>>>>>> origin/assignment6-rn
      onPress={onPress}
      style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}
    >
      {Body}
    </Pressable>
  );
}
