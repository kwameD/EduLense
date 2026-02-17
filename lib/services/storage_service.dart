import 'package:shared_preferences/shared_preferences.dart';

class StorageService {
  static const _kDayStreak = 'dayStreak';
  static const _kGoals = 'goals';
  static const _kStudyHours = 'studyHours';
  static const _kIsSignedIn = 'isSignedIn';
  static const _kUserEmail = 'userEmail';

  Future<void> saveDayStreak(int value) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt(_kDayStreak, value);
  }

  Future<int> loadDayStreak() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getInt(_kDayStreak) ?? 12;
  }

  Future<void> saveGoals(int value) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt(_kGoals, value);
  }

  Future<int> loadGoals() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getInt(_kGoals) ?? 8;
  }

  Future<void> saveStudyHours(int value) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt(_kStudyHours, value);
  }

  Future<int> loadStudyHours() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getInt(_kStudyHours) ?? 24;
  }

  // --- Auth (UI-only placeholder; swap with real auth later) ---
  Future<void> saveSignedIn(bool value, {String? email}) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool(_kIsSignedIn, value);
    if (email != null) {
      await prefs.setString(_kUserEmail, email);
    }
  }

  Future<bool> loadSignedIn() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getBool(_kIsSignedIn) ?? false;
  }

  Future<String?> loadUserEmail() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString(_kUserEmail);
  }

  Future<void> clearAuth() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_kIsSignedIn);
    await prefs.remove(_kUserEmail);
  }
}
