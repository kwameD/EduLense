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
<<<<<<< HEAD
    <ScreenContainer>
      <View style={{ paddingTop: 18 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Create your account</Text>
=======
    <ScreenContainer accessibilityLabel="Create account screen">
      <View style={{ paddingTop: 18 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Create your account
        </Text>

>>>>>>> assignment6-rn
        <TextField
          label="Name"
          value={name}
          onChangeText={setName}
          placeholder="Your name"
<<<<<<< HEAD
          accessibilityLabel="Name input"
          testID="inputName"
        />
=======
          accessibilityHint="Enter your full name"
          testID="inputName"
        />

>>>>>>> assignment6-rn
        <TextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="name@example.com"
<<<<<<< HEAD
          accessibilityLabel="Email input"
          testID="inputEmail"
        />
=======
          accessibilityHint="Enter your email address"
          testID="inputEmail"
        />

>>>>>>> assignment6-rn
        <TextField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="8+ chars, include a number"
<<<<<<< HEAD
          accessibilityLabel="Password input"
          testID="inputPassword"
        />
        <PrimaryButton
          title="Create Account"
          accessibilityLabel="Create account submit button"
=======
          accessibilityHint="Create a password with at least 8 characters and a number"
          testID="inputPassword"
        />

        <PrimaryButton
          title="Create Account"
          accessibilityLabel="Create account"
          accessibilityHint="Creates a new account with the entered name, email, and password"
>>>>>>> assignment6-rn
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
