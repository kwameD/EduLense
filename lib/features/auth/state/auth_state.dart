class AuthState {
  final bool isSignedIn;
  final String? email;

  const AuthState({required this.isSignedIn, this.email});

  AuthState copyWith({bool? isSignedIn, String? email}) {
    return AuthState(
      isSignedIn: isSignedIn ?? this.isSignedIn,
      email: email ?? this.email,
    );
  }
}
