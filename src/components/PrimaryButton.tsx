import React from "react";
import { Pressable, Text } from "react-native";

<<<<<<< HEAD
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
=======
>>>>>>> Assignment5
export function PrimaryButton({
  title,
  onPress,
  accessibilityLabel,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
  testID,
}: {
  title: string;
  onPress: () => void;
  accessibilityLabel: string;
  testID?: string;
}) {
<<<<<<< HEAD
=======
  accessibilityHint,
  disabled = false,
  testID,
}: PrimaryButtonProps) {
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
<<<<<<< HEAD
<<<<<<< HEAD
      accessibilityLabel={accessibilityLabel}
=======
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      disabled={disabled}
>>>>>>> assignment6-rn
=======
      accessibilityLabel={accessibilityLabel}
>>>>>>> Assignment5
      onPress={onPress}
      style={({ pressed }) => ({
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 12,
        backgroundColor: "#111827",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
        opacity: pressed ? 0.85 : 1,
        alignItems: "center",
      })}
    >
      <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>{title}</Text>
    </Pressable>
  );
}
<<<<<<< HEAD
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
=======
>>>>>>> Assignment5
