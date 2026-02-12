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
