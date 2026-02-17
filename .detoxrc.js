/** .detoxrc.js (Windows + Android Emulator + Release) */
module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js',
    },
    jest: {
      setupTimeout: 120000,
    },
  },

  apps: {
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',

      // Windows: use `set VAR=...&&` to set env vars inline
      build:
        'cd android && set NODE_ENV=production&& gradlew.bat assembleRelease assembleAndroidTest -DtestBuildType=release',
    },
  },

  devices: {
    emulator: {
      type: 'android.emulator',
      device: { avdName: 'Medium_Phone_API_36.1' },
    },
  },

  configurations: {
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release',
    },
  },
};
