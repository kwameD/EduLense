describe('EduLense E2E', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('can open Sign In and see fields', async () => {
    await expect(element(by.id('signin-email'))).toBeVisible();
    await expect(element(by.id('signin-password'))).toBeVisible();
  });
});
