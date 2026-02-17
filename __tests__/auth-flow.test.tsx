import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "../src/context/AuthContext";
import { RootNavigator } from "../src/nav/RootNavigator";

describe("auth flow", () => {
  test("user can sign up and reach the app tabs", async () => {
    const ui = render(
      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    );

    fireEvent.press(ui.getByTestId("btnSignUp"));
    fireEvent.changeText(ui.getByTestId("inputName"), "Serge");
    fireEvent.changeText(ui.getByTestId("inputEmail"), "serge@example.com");
    fireEvent.changeText(ui.getByTestId("inputPassword"), "password1");
    fireEvent.press(ui.getByTestId("btnSubmitSignUp"));

    await waitFor(() => {
      expect(ui.getByText("Dashboard")).toBeTruthy();
    });
  });
});
