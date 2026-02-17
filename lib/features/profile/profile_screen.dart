import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../widgets/app_scaffold.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  Future<void> _handleSignOut(BuildContext context) async {
    final confirm = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: const Text('Sign out?'),
        content: const Text('You will return to the sign in screen.'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('Cancel'),
          ),
          TextButton(
            onPressed: () => Navigator.pop(context, true),
            child: const Text('Sign Out'),
          ),
        ],
      ),
    );

    if (confirm == true) {
      // ✅ Navigate back to your authentication entry screen
      // Change '/auth' if your route is named differently.
      context.go('/auth');
    }
  }

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      currentIndex: 0,
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: ListView(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Profile',
                  style: Theme.of(context).textTheme.headlineSmall,
                ),
                Semantics(
                  button: true,
                  label: 'Settings',
                  child: IconButton(
                    onPressed: () => context.go('/settings'),
                    icon: const Icon(Icons.settings_outlined),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 12),

            Card(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16),
              ),
              child: const Padding(
                padding: EdgeInsets.all(16),
                child: Row(
                  children: [
                    CircleAvatar(radius: 26, child: Text('A')),
                    SizedBox(width: 12),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Alex Johnson',
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(height: 4),
                          Text('alex.johnson@university.edu'),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),

            const SizedBox(height: 12),
            Row(
              children: const [
                Expanded(
                  child: _SmallStat(label: 'Courses', value: '6'),
                ),
                SizedBox(width: 12),
                Expanded(
                  child: _SmallStat(label: 'Lessons Done', value: '142'),
                ),
                SizedBox(width: 12),
                Expanded(
                  child: _SmallStat(label: 'Achievements', value: '24'),
                ),
              ],
            ),

            const SizedBox(height: 16),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Achievements',
                  style: Theme.of(context).textTheme.titleMedium,
                ),
                TextButton(
                  onPressed: () => context.go('/achievements'),
                  child: const Text('View All'),
                ),
              ],
            ),

            Wrap(
              spacing: 12,
              runSpacing: 12,
              children: const [
                _Badge(
                  label: 'Week Warrior',
                  icon: Icons.emoji_events_outlined,
                ),
                _Badge(label: 'Perfect Score', icon: Icons.star_outline),
                _Badge(
                  label: 'Hot Streak',
                  icon: Icons.local_fire_department_outlined,
                ),
                _Badge(
                  label: 'Goal Crusher',
                  icon: Icons.track_changes_outlined,
                ),
              ],
            ),

            const SizedBox(height: 16),
            Text('Settings', style: Theme.of(context).textTheme.titleMedium),
            const SizedBox(height: 8),

            Card(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16),
              ),
              child: Column(
                children: [
                  Semantics(
                    button: true,
                    label: 'Notifications',
                    child: ListTile(
                      leading: const Icon(Icons.notifications_none),
                      title: const Text('Notifications'),
                      trailing: const Icon(Icons.chevron_right),
                      onTap: () => context.go('/notifications'),
                    ),
                  ),

                  const Divider(height: 1),

                  // ✅ NEW: Sign Out option (no AuthService required)
                  Semantics(
                    button: true,
                    label: 'Sign Out',
                    child: ListTile(
                      leading: const Icon(
                        Icons.logout,
                        color: Colors.redAccent,
                      ),
                      title: const Text(
                        'Sign Out',
                        style: TextStyle(color: Colors.redAccent),
                      ),
                      trailing: const Icon(Icons.chevron_right),
                      onTap: () => _handleSignOut(context),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _SmallStat extends StatelessWidget {
  final String label;
  final String value;

  const _SmallStat({required this.label, required this.value});

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          children: [
            Text(value, style: Theme.of(context).textTheme.headlineSmall),
            Text(label, style: Theme.of(context).textTheme.bodySmall),
          ],
        ),
      ),
    );
  }
}

class _Badge extends StatelessWidget {
  final String label;
  final IconData icon;

  const _Badge({required this.label, required this.icon});

  @override
  Widget build(BuildContext context) {
    return Semantics(
      label: label,
      child: Chip(avatar: Icon(icon, size: 18), label: Text(label)),
    );
  }
}
