// Prompt: Write unit tests for the password strength checker function using Node.js's built-in test module.

import { test } from 'node:test';
import assert from 'node:assert';
import { checkPasswordStrength } from './password_checker.js';

test('returns Weak for passwords shorter than 8 characters', () => {
  assert.strictEqual(checkPasswordStrength('short'), 'Weak');
  assert.strictEqual(checkPasswordStrength('Pass1!'), 'Weak');
});

test('returns Strong for passwords with mixed case and numbers', () => {
  assert.strictEqual(checkPasswordStrength('Password123'), 'Strong');
  assert.strictEqual(checkPasswordStrength('MyPass99'), 'Strong');
});

test('returns Strong for passwords with mixed case and special chars', () => {
  assert.strictEqual(checkPasswordStrength('P@ssword!'), 'Strong');
  assert.strictEqual(checkPasswordStrength('MyP@ssw0rd!'), 'Strong');
});

test('returns Moderate for passwords with length but lacking variety', () => {
  assert.strictEqual(checkPasswordStrength('password'), 'Moderate');
  assert.strictEqual(checkPasswordStrength('PASSWORD'), 'Moderate');
  assert.strictEqual(checkPasswordStrength('12345678'), 'Moderate');
});
