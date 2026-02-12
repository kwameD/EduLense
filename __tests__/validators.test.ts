import { validateEmail, validatePassword } from "../src/utils/validators";

describe("validators", () => {
  test("validateEmail accepts valid and rejects invalid", () => {
    expect(validateEmail("name@example.com")).toBe(true);
    expect(validateEmail("Name@Example.com")).toBe(true);
    expect(validateEmail("bad-email")).toBe(false);
    expect(validateEmail("")).toBe(false);
  });

  test("validatePassword requires 8+ chars with a digit", () => {
    expect(validatePassword("password1")).toBe(true);
    expect(validatePassword("pass1")).toBe(false);
    expect(validatePassword("password")).toBe(false);
  });
});
