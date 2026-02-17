import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    final colorScheme =
        ColorScheme.fromSeed(
          seedColor: Colors.black,
          brightness: Brightness.light,
        ).copyWith(
          primary: Colors.black,
          onPrimary: Colors.white,
          secondary: const Color(0xFF1F2937),
          onSecondary: Colors.white,
          surface: Colors.white,
          onSurface: Colors.black,
          error: const Color(0xFFB00020),
          onError: Colors.white,
        );

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'EduLense',
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: colorScheme,
        scaffoldBackgroundColor: colorScheme.surface,
        materialTapTargetSize: MaterialTapTargetSize.padded,
        inputDecorationTheme: const InputDecorationTheme(
          border: OutlineInputBorder(),
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            minimumSize: const Size(48, 48),
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            textStyle: const TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.w600,
            ),
          ),
        ),
      ),
      home: const LoginPage(),
    );
  }
}

/// WCAG 2.1 AA items covered:
/// - Semantics labels/hints for interactive controls
/// - Focus management + logical traversal order
/// - Color contrast via high-contrast theme
/// - Touch targets >= 48x48
/// - Dynamic text scaling up to 200% via scroll/flexible layout
/// - Keyboard navigation via tab traversal + Ctrl+L shortcut to submit
class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _formKey = GlobalKey<FormState>();

  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  final _emailFocus = FocusNode(debugLabel: 'email');
  final _passwordFocus = FocusNode(debugLabel: 'password');
  final _rememberFocus = FocusNode(debugLabel: 'rememberMe');
  final _signInFocus = FocusNode(debugLabel: 'signInButton');

  bool _rememberMe = false;

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    _emailFocus.dispose();
    _passwordFocus.dispose();
    _rememberFocus.dispose();
    _signInFocus.dispose();
    super.dispose();
  }

  void _submit() {
    if (!(_formKey.currentState?.validate() ?? false)) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Please fix the errors in the form.')),
      );
      return;
    }

    Navigator.of(context).push(
      MaterialPageRoute<void>(
        builder: (_) => CounterPage(userEmail: _emailController.text.trim()),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    return Scaffold(
      appBar: AppBar(title: const Text('EduLense')),
      body: Shortcuts(
        shortcuts: const <ShortcutActivator, Intent>{
          SingleActivator(LogicalKeyboardKey.keyL, control: true):
              ActivateIntent(),
        },
        child: Actions(
          actions: <Type, Action<Intent>>{
            ActivateIntent: CallbackAction<ActivateIntent>(
              onInvoke: (intent) {
                _submit();
                return null;
              },
            ),
          },
          child: FocusTraversalGroup(
            policy: OrderedTraversalPolicy(),
            child: SafeArea(
              child: LayoutBuilder(
                builder: (context, constraints) {
                  return SingleChildScrollView(
                    padding: const EdgeInsets.all(16),
                    child: ConstrainedBox(
                      constraints: BoxConstraints(
                        minHeight: constraints.maxHeight - 32,
                      ),
                      child: IntrinsicHeight(
                        child: Form(
                          key: _formKey,
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: [
                              Text(
                                'Welcome back',
                                style: textTheme.headlineMedium?.copyWith(
                                  fontWeight: FontWeight.w700,
                                ),
                              ),
                              const SizedBox(height: 8),
                              Text(
                                'Sign in to continue.',
                                style: textTheme.bodyLarge,
                              ),
                              const SizedBox(height: 24),

                              // Email
                              FocusTraversalOrder(
                                order: const NumericFocusOrder(1),
                                child: Semantics(
                                  label: 'Email address',
                                  hint: 'Double tap to edit. Required.',
                                  textField: true,
                                  child: TextFormField(
                                    controller: _emailController,
                                    focusNode: _emailFocus,
                                    keyboardType: TextInputType.emailAddress,
                                    textInputAction: TextInputAction.next,
                                    autofillHints: const [AutofillHints.email],
                                    decoration: const InputDecoration(
                                      labelText: 'Email',
                                      hintText: 'name@example.com',
                                    ),
                                    onFieldSubmitted: (_) =>
                                        _passwordFocus.requestFocus(),
                                    validator: (v) {
                                      final value = (v ?? '').trim();
                                      if (value.isEmpty)
                                        return 'Email is required.';
                                      final isValid = RegExp(
                                        r'^\S+@\S+\.\S+$',
                                      ).hasMatch(value);
                                      if (!isValid)
                                        return 'Enter a valid email.';
                                      return null;
                                    },
                                  ),
                                ),
                              ),
                              const SizedBox(height: 16),

                              // Password
                              FocusTraversalOrder(
                                order: const NumericFocusOrder(2),
                                child: Semantics(
                                  label: 'Password',
                                  hint: 'Double tap to edit. Required.',
                                  textField: true,
                                  child: TextFormField(
                                    controller: _passwordController,
                                    focusNode: _passwordFocus,
                                    obscureText: true,
                                    textInputAction: TextInputAction.done,
                                    autofillHints: const [
                                      AutofillHints.password,
                                    ],
                                    decoration: const InputDecoration(
                                      labelText: 'Password',
                                    ),
                                    onFieldSubmitted: (_) =>
                                        _signInFocus.requestFocus(),
                                    validator: (v) {
                                      final value = (v ?? '');
                                      if (value.isEmpty)
                                        return 'Password is required.';
                                      if (value.length < 6)
                                        return 'Password must be at least 6 characters.';
                                      return null;
                                    },
                                  ),
                                ),
                              ),
                              const SizedBox(height: 8),

                              // Remember me (FIXED)
                              // CheckboxListTile + MergeSemantics ensures the tappable semantic node has a label.
                              FocusTraversalOrder(
                                order: const NumericFocusOrder(3),
                                child: Focus(
                                  focusNode: _rememberFocus,
                                  child: MergeSemantics(
                                    child: Semantics(
                                      label: 'Remember me',
                                      hint:
                                          'Checkbox. Saves your sign-in on this device.',
                                      toggled: _rememberMe,
                                      child: CheckboxListTile(
                                        value: _rememberMe,
                                        onChanged: (val) => setState(
                                          () => _rememberMe = val ?? false,
                                        ),
                                        title: const Text('Remember me'),
                                        controlAffinity:
                                            ListTileControlAffinity.leading,
                                        contentPadding: EdgeInsets.zero,
                                      ),
                                    ),
                                  ),
                                ),
                              ),

                              const Spacer(),

                              // Sign in
                              FocusTraversalOrder(
                                order: const NumericFocusOrder(4),
                                child: Semantics(
                                  button: true,
                                  label: 'Sign in',
                                  hint:
                                      'Activates sign in. Shortcut: Control plus L.',
                                  child: ElevatedButton.icon(
                                    focusNode: _signInFocus,
                                    onPressed: _submit,
                                    icon: const Icon(Icons.login),
                                    label: const Text('Sign in'),
                                  ),
                                ),
                              ),
                              const SizedBox(height: 12),

                              Semantics(
                                label: 'Accessibility tip',
                                child: Text(
                                  'Tip: Use Tab to move between fields. Press Enter to submit, or Ctrl+L.',
                                  style: textTheme.bodyMedium,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class CounterPage extends StatefulWidget {
  const CounterPage({super.key, required this.userEmail});

  final String userEmail;

  @override
  State<CounterPage> createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  int _counter = 0;
  final _incFocus = FocusNode(debugLabel: 'increment');

  @override
  void dispose() {
    _incFocus.dispose();
    super.dispose();
  }

  void _incrementCounter() {
    setState(() => _counter++);
  }

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    return Scaffold(
      appBar: AppBar(title: const Text('Home')),
      body: Center(
        child: Semantics(
          container: true,
          label: 'Counter screen',
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Semantics(
                label: 'Signed in as ${widget.userEmail}',
                child: Text(
                  widget.userEmail,
                  textAlign: TextAlign.center,
                  style: textTheme.bodyLarge,
                ),
              ),
              const SizedBox(height: 16),
              const Text('You have pressed the increment button:'),
              const SizedBox(height: 8),
              Semantics(
                liveRegion: true,
                label: 'Counter value',
                value: '$_counter',
                child: Text(
                  '$_counter',
                  style: textTheme.displaySmall?.copyWith(
                    fontWeight: FontWeight.w800,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
      floatingActionButton: Semantics(
        button: true,
        label: 'Increment counter',
        hint: 'Adds one to the counter.',
        child: FocusableActionDetector(
          focusNode: _incFocus,
          shortcuts: const <ShortcutActivator, Intent>{
            SingleActivator(LogicalKeyboardKey.enter): ActivateIntent(),
            SingleActivator(LogicalKeyboardKey.space): ActivateIntent(),
          },
          actions: <Type, Action<Intent>>{
            ActivateIntent: CallbackAction<ActivateIntent>(
              onInvoke: (intent) {
                _incrementCounter();
                return null;
              },
            ),
          },
          child: FloatingActionButton(
            onPressed: _incrementCounter,
            tooltip: 'Increment',
            child: const Icon(Icons.add),
          ),
        ),
      ),
    );
  }
}
