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
    <ScreenContainer>
      <View style={{ paddingTop: 18 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Welcome back</Text>
        <TextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="name@example.com"
          accessibilityLabel="Email input"
          testID="inputEmail"
        />
        <TextField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="********"
          accessibilityLabel="Password input"
          testID="inputPassword"
        />
        <PrimaryButton
          title="Sign In"
          accessibilityLabel="Sign in submit button"
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
