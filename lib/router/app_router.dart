import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../features/auth/auth_landing_screen.dart';
import '../features/auth/sign_in_screen.dart';
import '../features/auth/sign_up_screen.dart';
import '../features/courses/course_detail_screen.dart';
import '../features/courses/courses_list_screen.dart';
import '../features/courses/lesson_player_screen.dart';
import '../features/dashboard/dashboard_screen.dart';
import '../features/profile/achievements_screen.dart';
import '../features/profile/notifications_screen.dart';
import '../features/profile/profile_screen.dart';
import '../features/profile/settings_screen.dart';
import '../features/progress/progress_screen.dart';
import '../features/schedule/schedule_screen.dart';
import '../features/auth/state/auth_controller.dart';
import 'go_router_refresh_stream.dart';

/// App routing with a simple auth gate.
///
/// - If the user is NOT signed in, they can only access /auth routes.
/// - If the user IS signed in, /auth routes redirect to /home.
final goRouterProvider = Provider<GoRouter>((ref) {
  final auth = ref.watch(authControllerProvider);

  return GoRouter(
    initialLocation: '/auth',
    debugLogDiagnostics: false,

    // Rebuild / re-run redirects whenever auth changes.
    refreshListenable: GoRouterRefreshStream(
      ref.watch(authControllerProvider.notifier).stream,
    ),

    redirect: (context, state) {
      final isSignedIn = auth.isSignedIn;
      final goingToAuth = state.matchedLocation.startsWith('/auth');

      if (!isSignedIn && !goingToAuth) return '/auth';
      if (isSignedIn && goingToAuth) return '/home';
      return null;
    },

    routes: [
      // Auth entry point
      GoRoute(
        path: '/auth',
        builder: (_, __) => const AuthLandingScreen(),
        routes: [
          GoRoute(path: 'sign-in', builder: (_, __) => const SignInScreen()),
          GoRoute(path: 'sign-up', builder: (_, __) => const SignUpScreen()),
        ],
      ),

      // Main app
      GoRoute(path: '/home', builder: (_, __) => const DashboardScreen()),
      GoRoute(path: '/courses', builder: (_, __) => const CoursesListScreen()),
      GoRoute(
        path: '/courses/:id',
        builder: (_, state) =>
            CourseDetailScreen(courseId: state.pathParameters['id']!),
      ),
      GoRoute(
        path: '/lesson/:courseId/:lessonId',
        builder: (_, state) => LessonPlayerScreen(
          courseId: state.pathParameters['courseId']!,
          lessonId: state.pathParameters['lessonId']!,
        ),
      ),
      GoRoute(path: '/schedule', builder: (_, __) => const ScheduleScreen()),
      GoRoute(path: '/progress', builder: (_, __) => const ProgressScreen()),
      GoRoute(path: '/profile', builder: (_, __) => const ProfileScreen()),
      GoRoute(
        path: '/achievements',
        builder: (_, __) => const AchievementsScreen(),
      ),
      GoRoute(path: '/settings', builder: (_, __) => const SettingsScreen()),
      GoRoute(
        path: '/notifications',
        builder: (_, __) => const NotificationsScreen(),
      ),
    ],
  );
});
