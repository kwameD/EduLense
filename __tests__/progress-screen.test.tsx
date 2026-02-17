import React from "react";
import { render } from "@testing-library/react-native";
import { ProgressScreen } from "../src/screens/ProgressScreen";

describe("ProgressScreen", () => {
  test("renders progress metrics", () => {
    const ui = render(<ProgressScreen />);
    expect(ui.getByText("Progress")).toBeTruthy();
    expect(ui.getByTestId("progress-p1")).toBeTruthy();
    expect(ui.getByTestId("progress-p2")).toBeTruthy();
    expect(ui.getByTestId("progress-p3")).toBeTruthy();
  });
});
