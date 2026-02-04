import 'package:flutter_test/flutter_test.dart';
import 'package:edulense_flutter/state/app_state_notifier.dart';
import 'package:edulense_flutter/services/storage_service.dart';
import 'package:mocktail/mocktail.dart';

class MockStorage extends Mock implements StorageService {}

void main() {
  test('incrementStreak increases dayStreak by 1', () async {
    final storage = MockStorage();
    when(() => storage.saveDayStreak(any())).thenAnswer((_) async {});
    final notifier = AppStateNotifier(storage);

    final before = notifier.state.dayStreak;
    await notifier.incrementStreak();

    expect(notifier.state.dayStreak, before + 1);
    verify(() => storage.saveDayStreak(before + 1)).called(1);
  });
}
