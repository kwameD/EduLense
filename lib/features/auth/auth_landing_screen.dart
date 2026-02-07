import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class AuthLandingScreen extends StatelessWidget {
  const AuthLandingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 520),
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  // Simple, clear entry point for auth
                  Text(
                    'EduLense',
                    style: Theme.of(context)
                        .textTheme
                        .headlineLarge
                        ?.copyWith(fontWeight: FontWeight.w800),
                    textAlign: TextAlign.left,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Sign in to access your courses, schedule, and progress.',
                    style: Theme.of(context).textTheme.bodyMedium,
                    textAlign: TextAlign.left,
                  ),
                  const SizedBox(height: 20),
                  Card(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(18),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.all(18),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          FilledButton(
                            onPressed: () => context.go('/auth/sign-in'),
                            child: const Text('Sign In'),
                          ),
                          const SizedBox(height: 10),
                          OutlinedButton(
                            onPressed: () => context.go('/auth/sign-up'),
                            child: const Text('Create Account'),
                          ),
                          const SizedBox(height: 12),
                          Row(
                            children: [
                              Icon(
                                Icons.shield_outlined,
                                size: 18,
                                color: Theme.of(context)
                                    .colorScheme
                                    .secondary,
                              ),
                              const SizedBox(width: 8),
                              Expanded(
                                child: Text(
                                  'Authentication entry point (UI-only). Connect Firebase/Cognito later.',
                                  style: Theme.of(context).textTheme.bodySmall,
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
