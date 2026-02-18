import React from "react";
import { Text, TextInput, View } from "react-native";

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
=======
  accessibilityHint,
  errorText,
>>>>>>> origin/assignment6-rn
=======
  accessibilityHint,
  errorText,
>>>>>>> assignment6-rn
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
<<<<<<< HEAD
<<<<<<< HEAD
        accessibilityLabel={accessibilityLabel}
<<<<<<< HEAD
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
=======
>>>>>>> origin/Assignment5
=======
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityHint={mergedHint || undefined}
>>>>>>> origin/assignment6-rn
=======
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityHint={mergedHint || undefined}
>>>>>>> assignment6-rn
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType ?? "default"}
        secureTextEntry={secureTextEntry}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
<<<<<<< HEAD
<<<<<<< HEAD
=======
        autoCapitalize={autoCapitalize}
        style={{
          borderWidth: 1,
          borderColor: hasError ? "#b91c1c" : "#d1d5db",
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
=======
        autoCapitalize={autoCapitalize}
        style={{
          borderWidth: 1,
          borderColor: hasError ? "#b91c1c" : "#d1d5db",
>>>>>>> origin/assignment6-rn
=======
        autoCapitalize={autoCapitalize}
        style={{
          borderWidth: 1,
          borderColor: hasError ? "#b91c1c" : "#d1d5db",
>>>>>>> assignment6-rn
          paddingHorizontal: 12,
          paddingVertical: 10,
          borderRadius: 12,
        }}
      />
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

      {hasError ? (
        <Text
          accessibilityRole="alert"
          style={{ marginTop: 6, color: "#b91c1c", fontWeight: "600" }}
        >
          {errorText}
        </Text>
      ) : null}
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
    </View>
  );
}
