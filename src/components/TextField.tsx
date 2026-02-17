import React from "react";
import { Text, TextInput, View } from "react-native";

<<<<<<< HEAD
<<<<<<< HEAD
=======
type TextFieldProps = {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address";
  accessibilityLabel?: string;
  accessibilityHint?: string;
  errorText?: string;
  testID?: string;

  // optional semantics (use only where supported in your RN version)
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
};

>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
export function TextField({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  accessibilityLabel,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
  testID,
}: {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address";
  accessibilityLabel: string;
  testID?: string;
}) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={{ marginBottom: 6, fontWeight: "600" }}>{label}</Text>
      <TextInput
        testID={testID}
        accessibilityLabel={accessibilityLabel}
<<<<<<< HEAD
=======
  accessibilityHint,
  errorText,
  testID,
  autoCapitalize = "none",
}: TextFieldProps) {
  const hasError = Boolean(errorText);

  // If there's an error, include it in the hint so screen readers announce it on focus.
  const mergedHint =
    (accessibilityHint ? `${accessibilityHint}. ` : "") +
    (hasError ? `Error: ${errorText}` : "");

  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={{ marginBottom: 6, fontWeight: "600" }}>{label}</Text>

      <TextInput
        testID={testID}
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityHint={mergedHint || undefined}
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType ?? "default"}
        secureTextEntry={secureTextEntry}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
<<<<<<< HEAD
=======
        autoCapitalize={autoCapitalize}
        style={{
          borderWidth: 1,
          borderColor: hasError ? "#b91c1c" : "#d1d5db",
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
          paddingHorizontal: 12,
          paddingVertical: 10,
          borderRadius: 12,
        }}
      />
<<<<<<< HEAD
<<<<<<< HEAD
=======

      {hasError ? (
        <Text
          accessibilityRole="alert"
          style={{ marginTop: 6, color: "#b91c1c", fontWeight: "600" }}
        >
          {errorText}
        </Text>
      ) : null}
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
    </View>
  );
}
