import React from "react";
import { Pressable, Text } from "react-native";

<<<<<<< HEAD
=======
type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  disabled?: boolean;
  testID?: string;
};

>>>>>>> assignment6-rn
export function PrimaryButton({
  title,
  onPress,
  accessibilityLabel,
<<<<<<< HEAD
  testID,
}: {
  title: string;
  onPress: () => void;
  accessibilityLabel: string;
  testID?: string;
}) {
=======
  accessibilityHint,
  disabled = false,
  testID,
}: PrimaryButtonProps) {
>>>>>>> assignment6-rn
  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
<<<<<<< HEAD
      accessibilityLabel={accessibilityLabel}
=======
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      disabled={disabled}
>>>>>>> assignment6-rn
      onPress={onPress}
      style={({ pressed }) => ({
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 12,
        backgroundColor: "#111827",
<<<<<<< HEAD
        opacity: pressed ? 0.85 : 1,
        alignItems: "center",
      })}
    >
      <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>{title}</Text>
    </Pressable>
  );
}
=======
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
>>>>>>> assignment6-rn
