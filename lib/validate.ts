export const isEmail = (v: unknown): v is string =>
  typeof v === "string" && /^[^\s@|]+@[^\s@|]+\.[^\s@|]+$/.test(v) && v.length <= 254;

export function passwordError(v: unknown): string | null {
  if (typeof v !== "string" || v.length < 8) return "Le mot de passe doit contenir au moins 8 caractères.";
  if (!/[A-Za-z]/.test(v) || !/\d/.test(v)) return "Le mot de passe doit contenir des lettres et des chiffres.";
  return null;
}
