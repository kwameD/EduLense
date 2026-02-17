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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <ScreenContainer>
      <View style={{ paddingTop: 18 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Create your account</Text>
=======
    <ScreenContainer accessibilityLabel="Create account screen">
      <View style={{ paddingTop: 18 }}>
=======
    <ScreenContainer accessibilityLabel="Create account screen">
      <View style={{ paddingTop: 18 }}>
>>>>>>> origin/assignment6-rn
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Create your account
        </Text>

<<<<<<< HEAD
>>>>>>> assignment6-rn
=======
    <ScreenContainer>
      <View style={{ paddingTop: 18 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Create your account</Text>
>>>>>>> Assignment5
=======
    <ScreenContainer>
      <View style={{ paddingTop: 18 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Create your account</Text>
>>>>>>> origin/Assignment5
=======
>>>>>>> origin/assignment6-rn
        <TextField
          label="Name"
          value={name}
          onChangeText={setName}
          placeholder="Your name"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          accessibilityLabel="Name input"
          testID="inputName"
        />
=======
          accessibilityHint="Enter your full name"
          testID="inputName"
        />

>>>>>>> assignment6-rn
=======
          accessibilityLabel="Name input"
          testID="inputName"
        />
>>>>>>> Assignment5
=======
          accessibilityLabel="Name input"
          testID="inputName"
        />
>>>>>>> origin/Assignment5
=======
          accessibilityHint="Enter your full name"
          testID="inputName"
        />

>>>>>>> origin/assignment6-rn
        <TextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="name@example.com"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          accessibilityLabel="Email input"
          testID="inputEmail"
        />
=======
          accessibilityHint="Enter your email address"
          testID="inputEmail"
        />

>>>>>>> assignment6-rn
=======
          accessibilityLabel="Email input"
          testID="inputEmail"
        />
>>>>>>> Assignment5
=======
          accessibilityLabel="Email input"
          testID="inputEmail"
        />
>>>>>>> origin/Assignment5
=======
          accessibilityHint="Enter your email address"
          testID="inputEmail"
        />

>>>>>>> origin/assignment6-rn
        <TextField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="8+ chars, include a number"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
          accessibilityLabel="Password input"
=======
          accessibilityHint="Create a password with at least 8 characters and a number"
>>>>>>> origin/assignment6-rn
          testID="inputPassword"
        />

        <PrimaryButton
          title="Create Account"
<<<<<<< HEAD
          accessibilityLabel="Create account submit button"
<<<<<<< HEAD
<<<<<<< HEAD
=======
          accessibilityHint="Create a password with at least 8 characters and a number"
          testID="inputPassword"
        />

        <PrimaryButton
          title="Create Account"
          accessibilityLabel="Create account"
          accessibilityHint="Creates a new account with the entered name, email, and password"
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
=======
          accessibilityLabel="Create account"
          accessibilityHint="Creates a new account with the entered name, email, and password"
>>>>>>> origin/assignment6-rn
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
