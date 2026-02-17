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
<<<<<<< HEAD
<<<<<<< HEAD
    <ScreenContainer>
      <View style={{ paddingTop: 18 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Welcome back</Text>
=======
    <ScreenContainer accessibilityLabel="Sign in screen">
      <View style={{ paddingTop: 18 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Welcome back
        </Text>

>>>>>>> assignment6-rn
=======
    <ScreenContainer>
      <View style={{ paddingTop: 18 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Welcome back</Text>
>>>>>>> Assignment5
        <TextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="name@example.com"
<<<<<<< HEAD
<<<<<<< HEAD
          accessibilityLabel="Email input"
          testID="inputEmail"
        />
=======
          // Let TextField default label; add learnability hint:
          accessibilityHint="Enter your email address"
          testID="inputEmail"
        />

>>>>>>> assignment6-rn
=======
          accessibilityLabel="Email input"
          testID="inputEmail"
        />
>>>>>>> Assignment5
        <TextField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="********"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
          accessibilityLabel="Password input"
          testID="inputPassword"
        />
        <PrimaryButton
          title="Sign In"
          accessibilityLabel="Sign in submit button"
<<<<<<< HEAD
=======
          accessibilityHint="Enter your password"
          testID="inputPassword"
        />

        <PrimaryButton
          title="Sign In"
          accessibilityLabel="Sign in"
          accessibilityHint="Attempts to sign in with the entered email and password"
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
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
