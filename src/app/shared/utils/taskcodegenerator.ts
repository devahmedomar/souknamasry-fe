function generateTaskId(length: number = 5): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const allChars = letters + digits;

  // Ensure at least one digit
  const randomDigit = digits.charAt(Math.floor(Math.random() * digits.length));

  // Fill the rest (length - 1) with any character
  let taskId = randomDigit;
  for (let i = 1; i < length; i++) {
    taskId += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  // Shuffle the string so digit is not always first
  return shuffleString(taskId);
}

function shuffleString(str: string): string {
  return str.split('').sort(() => Math.random() - 0.5).join('');
}

console.log(`Generated Task ID: ${generateTaskId()}`);
