export function generatePassword(
  length: number,
  {
    uppercase,
    lowercase,
    numbers,
    symbols,
  }: {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  },
) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  const numbersChars = "0123456789";
  const symbolsChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let allChars = "";
  if (uppercase) allChars += chars.toUpperCase();
  if (lowercase) allChars += chars;
  if (numbers) allChars += numbersChars;
  if (symbols) allChars += symbolsChars;
  return Array.from(
    { length },
    () => allChars[Math.floor(Math.random() * allChars.length)],
  ).join("");
}
