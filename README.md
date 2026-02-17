<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/Assignment5
# EduLense

EduLense is a cross-platform app focused on a UI optimized for left-handed use
(layout flow, dominant-hand ergonomics, control placement, and gesture comfort).

## Team Members
- Serge Kamba (GitHub: ApexEze)
- Erin Ashford (GitHub: Ealeka)
- Kwame Duodu (GitHub: kwameD)

## Team Charter
- [Team Charter](docs/team-charter.md)

## Repo Structure (High Level)
- apps/flutter        -> Flutter mobile app
- apps/react-native   -> React Native mobile app
- apps/electron       -> Electron desktop app
- apps/react-web      -> React web app
- docs/               -> Documentation

---

# EduLense (React Native / Expo)

This React Native app implements the **same EduLense mobile UI features** as the Flutter version using:
- **Expo**
- **React Navigation**
- **Context API** for auth
- **Jest + React Native Testing Library** with a **60%+ coverage threshold**
- Basic accessibility labels/roles on interactive UI

## Setup (React Native)
```bash
cd react-native-app
npm install
<<<<<<< HEAD
=======
# EduLense – Assignment 4 (Flutter Application)

## Project Description
EduLense is an AI-powered educational platform that expands on earlier versions originally designed for K–12 education and now supports higher education use cases. The application assists educators with lesson planning, assignment generation, grading, and student performance analysis.

For Assignment 4, EduLense was implemented as a Flutter mobile application based on previously designed UI mockups. The app includes multiple core screens, structured navigation, state management, accessibility considerations, and comprehensive testing with coverage reporting.

---

## How to Run the App

### Prerequisites
- Flutter SDK (3.x)
- Android Studio (for emulator) or a physical Android device
- VS Code (recommended)

### Run on Emulator or Physical Device
1. Start an Android emulator using Android Studio → Device Manager, or connect a physical Android device with USB debugging enabled.
2. From the project root, run:
```
flutter pub get
flutter run
```

### Run the Release APK
To build the APK:
```
flutter build apk
```

The APK will be generated at:
```
build/app/outputs/flutter-apk/app-release.apk
```

Install and run it using:
```
flutter install
```

---

## How to Run Tests

### Run All Tests
From the project root:
```
flutter test
```

### Run Tests With Coverage
```
flutter test --coverage
```

This generates a coverage data file at:
```
coverage/lcov.info
```

---

## Test Coverage Report
Coverage was generated using:
```
flutter test --coverage
```

Final coverage result:
67.91% total line coverage (exceeds the required 60% minimum).

The coverage file is included in the repository:
```
coverage/lcov.info
```

---

## Known Issues or Limitations
- Uses mock/local data instead of live backend services
- AI-powered features are represented architecturally but not fully integrated
- iOS build not tested due to lack of macOS hardware
- Some UI interactions are simplified for demonstration

---

## Team Member Contributions (This Week)

- Serge Kamba  
  Implemented Flutter app structure, Riverpod state management, GoRouter navigation, core screens, testing, coverage generation, APK build and validation, and GitHub submission.

- Kwame Duodu  
  Maintained GitHub repository and branch structure and supported project coordination. Was responsible for Unit Test, Widget Test and Test Coverage Report

- Erin Ashford  
  Contributed to earlier design and documentation phases that informed the Flutter implementation. Created the 10-15 minute video and reviewed documentation.

---

## AI Usage Summary
AI tools were used as a development assistant to:
- Generate Flutter boilerplate and widget code
- Structure Riverpod state management
- Configure GoRouter navigation
- Write unit and widget tests
- Debug build, test, and coverage issues
- Assist with Git workflows and README documentation

All AI-generated output was reviewed, tested, and refined before submission.

---

## Repository Branch
Assignment 4 work is located on the Assignment-4 branch:
https://github.com/kwameD/EduLense/tree/Assignment-4





## 📱 App Screenshots

### Authentication Entry Screen
![Auth Entry](screenshots/sign_In.png)

### Create Account Screen
![Sign Up](screenshots/sign_Up.png)

### Home Dashboard
![Home](screenshots/home.png)

### Courses Screen
![Courses](screenshots/courses.png)

### Progress Tracking
![Progress](screenshots/progress.png)

### Schedule Screen
![Schedule](screenshots/schedule.png)

### Profile Screen
![Profile](screenshots/profile.png)

### Sign Out Screen
![Profile](screenshots/661_profile_SignOut.png)

---

## How to Run the App

### Prerequisites
- Flutter SDK (3.x)
- Android Studio (for emulator) or physical Android device
- VS Code (recommended)

### Run on Emulator or Device
```bash
flutter pub get
flutter run

>>>>>>> origin/Assignment-4
=======
>>>>>>> origin/Assignment5
