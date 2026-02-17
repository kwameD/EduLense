import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:flutter_app/main.dart';

/// Accessibility guideline tests for Assignment 5.
///
/// These tests use Flutter's built-in AccessibilityGuideline matchers:
/// https://api.flutter.dev/flutter/flutter_test/AccessibilityGuideline-class.html
///
/// Run:
///   flutter test
void main() {
  group('AccessibilityGuideline - LoginPage', () {
    testWidgets('meets labeled tap target guideline', (tester) async {
      final handle = tester.ensureSemantics();
      await tester.pumpWidget(const MaterialApp(home: LoginPage()));
      await expectLater(tester, meetsGuideline(labeledTapTargetGuideline));
      handle.dispose();
    });

    testWidgets('meets tap target size guideline (Android + iOS)', (tester) async {
      final handle = tester.ensureSemantics();
      await tester.pumpWidget(const MaterialApp(home: LoginPage()));
      await expectLater(tester, meetsGuideline(androidTapTargetGuideline));
      await expectLater(tester, meetsGuideline(iOSTapTargetGuideline));
      handle.dispose();
    });

    testWidgets('meets text contrast guideline', (tester) async {
      final handle = tester.ensureSemantics();
      await tester.pumpWidget(const MaterialApp(home: LoginPage()));
      await expectLater(tester, meetsGuideline(textContrastGuideline));
      handle.dispose();
    });
  });

  group('AccessibilityGuideline - CounterPage', () {
    testWidgets('meets guidelines on CounterPage', (tester) async {
      final handle = tester.ensureSemantics();

      await tester.pumpWidget(const MaterialApp(
        home: CounterPage(userEmail: 'test@example.com'),
      ));

      await expectLater(tester, meetsGuideline(labeledTapTargetGuideline));
      await expectLater(tester, meetsGuideline(androidTapTargetGuideline));
      await expectLater(tester, meetsGuideline(iOSTapTargetGuideline));
      await expectLater(tester, meetsGuideline(textContrastGuideline));

      handle.dispose();
    });
  });
}
