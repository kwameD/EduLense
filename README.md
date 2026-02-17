# EduLense (Flutter) — Assignment 5 Accessibility

This Flutter app includes an **accessibility-first** Login flow and a simple Counter screen, implemented to meet **WCAG 2.1 Level AA** requirements for the assignment.

---

## Accessibility Features Implemented (WCAG 2.1 AA)

### 1) Semantics & Screen Reader Labels
- All interactive elements include explicit **Semantics** labels and/or hints.
- Form fields use clear labels (e.g., “Email address”, “Password”).
- Buttons include action-oriented labels (e.g., “Sign in”, “Increment counter”).

### 2) Focus Management (Logical Navigation Order)
- The Login page is wrapped in a **FocusTraversalGroup** and uses **FocusTraversalOrder** so keyboard and switch-access users move through the UI in a predictable order:
  1. Email field
  2. Password field
  3. Remember me
  4. Sign in button
- Pressing “Next” on the keyboard moves focus from email → password, and submitting password moves to the Sign In action.

### 3) Keyboard Navigation (Tablets / Hardware Keyboards)
- Full **Tab / Shift+Tab** navigation across inputs and controls.
- Sign-in can be triggered using:
  - Enter on the Sign In button
  - **Ctrl + L** shortcut (Login)

### 4) Touch Targets (Minimum 48x48)
- Buttons are configured with a minimum size of **48x48 logical pixels**.
- Tap areas for smaller controls (like “Remember me”) are padded to meet target size guidance.

### 5) Dynamic Text Scaling (Up to 200%)
- The Login page uses **scrollable layout** (SingleChildScrollView) to avoid overflow at large accessibility font sizes (tested up to ~200%).
- Layout spacing is responsive to larger text.

### 6) Color Contrast
- App theme defaults to **high contrast** (black text on white background).
- Primary actions use a black button with white text to ensure contrast.

---

## Accessibility Testing (Part 2)

### A) Run Flutter Accessibility Guideline Tests (Automated)
This project includes automated tests using Flutter’s built-in accessibility guideline matchers:
- `labeledTapTargetGuideline`
- `androidTapTargetGuideline`
- `iOSTapTargetGuideline`
- `textContrastGuideline`

**Run:**
```bash
flutter test
```

**Test file:**
- `test/accessibility_guidelines_test.dart`

> Note: Some guidelines can be sensitive to platform font rendering and theme differences. If a guideline fails on your machine, confirm the UI element reported by the failure output and adjust the offending widget.

---

### B) Manual Screen Reader Testing

#### Android — TalkBack
1. Enable TalkBack:
   - **Settings → Accessibility → TalkBack → On**
2. Open the app on an Android device/emulator.
3. Verify:
   - Swipe right/left moves through controls in a logical order.
   - Email/Password fields read correct labels.
   - “Remember me” announces state (checked/unchecked).
   - “Sign in” announces as a button and activates correctly.

#### iOS — VoiceOver
1. Enable VoiceOver:
   - **Settings → Accessibility → VoiceOver → On**
2. Open the app on an iPhone/iPad simulator or device.
3. Verify the same behaviors as above (labels, order, control types, activation).

---

### C) Video Requirement (2–3 minutes)
Record a 2–3 minute video demonstrating:
- Enabling TalkBack (Android) or VoiceOver (iOS)
- Navigating the Login screen
- Activating Sign In
- Demonstrating that controls are announced correctly

**Android recording (typical):**
- Quick settings → **Screen recorder** → Start

**iOS recording:**
- Control Center → **Screen Recording** → Start

---

## Run the App

```bash
flutter pub get
flutter run
```

---

## Project Notes
- Accessibility implementation is primarily in `lib/main.dart` (LoginPage and CounterPage).
- Automated accessibility tests live in `test/accessibility_guidelines_test.dart`.
