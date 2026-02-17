import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { TextField } from "../components/TextField";
import { PrimaryButton } from "../components/PrimaryButton";
import { useAuth } from "../context/AuthContext";

export function SignInScreen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScreenContainer accessibilityLabel="Sign in screen">
      <View style={{ paddingTop: 18 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Welcome back
        </Text>

        <TextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="name@example.com"
          // Let TextField default label; add learnability hint:
          accessibilityHint="Enter your email address"
          testID="inputEmail"
        />

        <TextField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="********"
          accessibilityHint="Enter your password"
          testID="inputPassword"
        />

        <PrimaryButton
          title="Sign In"
          accessibilityLabel="Sign in"
          accessibilityHint="Attempts to sign in with the entered email and password"
          testID="btnSubmitSignIn"
          onPress={async () => {
            const res = await signIn(email, password);
            if (!res.ok) Alert.alert("Sign in failed", res.error ?? "Unknown error");
          }}
        />
      </View>
    </ScreenContainer>
  );
}
