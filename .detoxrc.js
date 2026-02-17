/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/jest.config.js',
  configurations: {
    android: {
      type: 'android.emulator',
      device: {
        avdName: 'Medium_Phone_API_36.1',
      },
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'cd android && gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
    },
  },
};
