describe("EduLense E2E", () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it("can open Sign In and see fields", async () => {
    await expect(element(by.id("btnSignIn"))).toBeVisible();
    await element(by.id("btnSignIn")).tap();

    await expect(element(by.id("inputEmail"))).toBeVisible();
    await expect(element(by.id("inputPassword"))).toBeVisible();
    await expect(element(by.id("btnSubmitSignIn"))).toBeVisible();
  });
});
