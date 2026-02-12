import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { TextField } from "../components/TextField";
import { PrimaryButton } from "../components/PrimaryButton";
import { useAuth } from "../context/AuthContext";

export function SignUpScreen() {
  const { signUp } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScreenContainer>
      <View style={{ paddingTop: 18 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Create your account</Text>
        <TextField
          label="Name"
          value={name}
          onChangeText={setName}
          placeholder="Your name"
          accessibilityLabel="Name input"
          testID="inputName"
        />
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
          placeholder="8+ chars, include a number"
          accessibilityLabel="Password input"
          testID="inputPassword"
        />
        <PrimaryButton
          title="Create Account"
          accessibilityLabel="Create account submit button"
          testID="btnSubmitSignUp"
          onPress={async () => {
            const res = await signUp(name, email, password);
            if (!res.ok) Alert.alert("Sign up failed", res.error ?? "Unknown error");
          }}
        />
      </View>
    </ScreenContainer>
  );
}
