function caesarCipher(phrase, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const normalizedShift = shift % 26;
  let encryptedPhrase = "";

  for (let i = 0; i < phrase.length; i++) {
    const char = phrase[i];
    if (char.match(/[a-z]/i)) {
      const isUpperCase = char === char.toUpperCase();
      const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
      const charCode = char.charCodeAt(0) - base;
      const newCharCode = (charCode + normalizedShift + 26) % 26;
      const newChar = String.fromCharCode(newCharCode + base);
      encryptedPhrase += newChar;
    } else {
      encryptedPhrase += char;
    }
  }

  return encryptedPhrase;
}

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.log('Usage: node caesarCipher.js "phrase" shift');
  process.exit(1);
}

const phrase = args[0];
const shift = parseInt(args[1], 10);

if (isNaN(shift)) {
  console.log("Shift must be a number.");
  process.exit(1);
}

const encryptedPhrase = caesarCipher(phrase, shift);

console.log(encryptedPhrase);
