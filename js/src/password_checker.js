// Evaluates password strength based on length and character variety

export function checkPasswordStrength(password) {
  const minLength = 8;
  // Check for different character types
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // Weak: less than minimum length
  if (password.length < minLength) {
    return 'Weak';
  }

  // Strong: mixed case + numbers or special characters
  if (hasUpperCase && hasLowerCase && (hasNumbers || hasSpecialChars)) {
    return 'Strong';
  }

  // Moderate: meets length but lacks character variety
  return 'Moderate';
}
