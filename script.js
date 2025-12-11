
function checkPasswordStrength(password) {
  // 1. Define the special characters we are looking for
  const specialChars = "!@#$%^&*";
  
  // 2. Initialize checks
  let hasNumber = false;
  let hasSpecial = false;

  // 3. Loop through the password to find specific characters
  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    // Check if the character is a number (0-9)
    // We check if it's between '0' and '9' explicitly
    if (char >= '0' && char <= '9') {
      hasNumber = true;
    }

    // Check if the character is in our list of special characters
    if (specialChars.includes(char)) {
      hasSpecial = true;
    }
  }

  // 4. Determine Strength using Conditions
  if (password.length < 8) {
    console.log(`Password: "${password}" -> Weak (Too short)`);
  } 
  else if (hasNumber && hasSpecial) {
    console.log(`Password: "${password}" -> Strong`);
  } 
  else {
    console.log(`Password: "${password}" -> Medium (Add a number or special char)`);
  }
}

// --- Test Cases ---
checkPasswordStrength("cat");           // Weak
checkPasswordStrength("password123");   // Medium (Missing special char)
checkPasswordStrength("pass@word");     // Medium (Missing number)
checkPasswordStrength("Pass@1234");     // Strong
