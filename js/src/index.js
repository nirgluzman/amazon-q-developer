// This file tests the password strength checker with various passwords

import { checkPasswordStrength } from './password_checker.js';

const passwordsToTest = ['password', 'Password123', 'P@ssw0rd!', 'short', 'LONGpasswordWITHOUTnumbers'];

passwordsToTest.forEach((pwd) => {
  const strength = checkPasswordStrength(pwd);
  console.log(`Password: "${pwd}" - Strength: ${strength}`);
});
