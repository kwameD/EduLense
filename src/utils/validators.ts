export function validateEmail(email: string): boolean {
  const value = email.trim().toLowerCase();
  // simple, readable validation for assignment scope
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validatePassword(password: string): boolean {
  // 8+ chars, at least one digit
  return /^(?=.*\d).{8,}$/.test(password);
}
