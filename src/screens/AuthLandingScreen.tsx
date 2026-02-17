import React from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "../nav/types";
import { ScreenContainer } from "../components/ScreenContainer";
import { PrimaryButton } from "../components/PrimaryButton";

type Props = NativeStackScreenProps<AuthStackParamList, "AuthLanding">;

export function AuthLandingScreen({ navigation }: Props) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <ScreenContainer>
=======
    <ScreenContainer accessibilityLabel="Authentication landing screen">
>>>>>>> assignment6-rn
=======
    <ScreenContainer>
>>>>>>> Assignment5
=======
    <ScreenContainer>
>>>>>>> origin/Assignment5
      <View style={{ gap: 12, paddingTop: 24 }}>
        <Text style={{ fontSize: 28, fontWeight: "800" }}>EduLense</Text>
        <Text style={{ color: "#4b5563" }}>
          AI-powered learning support. Sign in to access your courses, schedule, and progress.
        </Text>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
        <View style={{ height: 12 }} />
        <PrimaryButton
          title="Sign In"
          accessibilityLabel="Sign in button"
          testID="btnSignIn"
          onPress={() => navigation.navigate("SignIn")}
        />
        <View style={{ height: 10 }} />
        <PrimaryButton
          title="Create Account"
          accessibilityLabel="Create account button"
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <View accessible={false} style={{ height: 12 }} />

        <PrimaryButton
          title="Sign In"
          accessibilityLabel="Sign in"
          accessibilityHint="Opens the sign in form"
          testID="btnSignIn"
          onPress={() => navigation.navigate("SignIn")}
        />

        <View accessible={false} style={{ height: 10 }} />

        <PrimaryButton
          title="Create Account"
          accessibilityLabel="Create account"
          accessibilityHint="Opens the account creation form"
>>>>>>> assignment6-rn
=======
>>>>>>> Assignment5
=======
>>>>>>> origin/Assignment5
          testID="btnSignUp"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </ScreenContainer>
  );
}
