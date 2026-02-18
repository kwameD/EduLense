import React from "react";
import { Pressable, Text } from "react-native";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/assignment6-rn
=======
>>>>>>> assignment6-rn
type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  disabled?: boolean;
  testID?: string;
};

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
export function PrimaryButton({
  title,
  onPress,
  accessibilityLabel,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
  testID,
}: {
  title: string;
  onPress: () => void;
  accessibilityLabel: string;
  testID?: string;
}) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  accessibilityHint,
  disabled = false,
  testID,
}: PrimaryButtonProps) {
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
=======
  accessibilityHint,
  disabled = false,
  testID,
}: PrimaryButtonProps) {
>>>>>>> origin/assignment6-rn
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      accessibilityLabel={accessibilityLabel}
=======
=======
>>>>>>> origin/assignment6-rn
=======
>>>>>>> assignment6-rn
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      disabled={disabled}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> assignment6-rn
=======
      accessibilityLabel={accessibilityLabel}
>>>>>>> Assignment5
=======
      accessibilityLabel={accessibilityLabel}
>>>>>>> origin/Assignment5
=======
>>>>>>> origin/assignment6-rn
=======
>>>>>>> assignment6-rn
      onPress={onPress}
      style={({ pressed }) => ({
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 12,
        backgroundColor: "#111827",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
        opacity: pressed ? 0.85 : 1,
=======
        opacity: disabled ? 0.5 : pressed ? 0.85 : 1,
>>>>>>> origin/assignment6-rn
=======
        opacity: disabled ? 0.5 : pressed ? 0.85 : 1,
>>>>>>> assignment6-rn
        alignItems: "center",
      })}
    >
      <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
        {title}
      </Text>
<<<<<<< HEAD
    </Pressable>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
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
=======
>>>>>>> origin/Assignment5
=======
}
>>>>>>> origin/assignment6-rn
=======
    </Pressable>
  );
}
>>>>>>> assignment6-rn
