import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../services/storage_service.dart';
import '../../../state/app_state_notifier.dart';
import 'auth_state.dart';

/// Lightweight, UI-only auth controller.
///
/// This gives you a real "authentication entry point" (Sign In / Sign Up)
/// for the assignment, and you can later swap these methods with Firebase
/// Auth, AWS Cognito, etc., without rewriting the UI screens.
final authControllerProvider =
    StateNotifierProvider<AuthController, AuthState>((ref) {
  final storage = ref.read(storageProvider);
  return AuthController(storage)..loadFromStorage();
});

class AuthController extends StateNotifier<AuthState> {
  final StorageService _storage;

  AuthController(this._storage) : super(const AuthState(isSignedIn: false));

  Future<void> loadFromStorage() async {
    final isSignedIn = await _storage.loadSignedIn();
    final email = await _storage.loadUserEmail();
    state = state.copyWith(isSignedIn: isSignedIn, email: email);
  }

  Future<void> signIn({required String email, required String password}) async {
    // Demo validation (swap with real auth calls later).
    final trimmed = email.trim();
    final looksLikeEmail = RegExp(r'^\S+@\S+\.\S+$').hasMatch(trimmed);
    if (!looksLikeEmail) {
      throw Exception('Please enter a valid email.');
    }
    if (password.length < 6) {
      throw Exception('Password must be at least 6 characters.');
    }

    state = state.copyWith(isSignedIn: true, email: trimmed);
    await _storage.saveSignedIn(true, email: trimmed);
  }

  Future<void> signUp({
    required String email,
    required String password,
    required String confirmPassword,
  }) async {
    if (password != confirmPassword) {
      throw Exception('Passwords do not match.');
    }
    await signIn(email: email, password: password);
  }

  Future<void> signOut() async {
    state = state.copyWith(isSignedIn: false, email: null);
    await _storage.clearAuth();
  }
}
