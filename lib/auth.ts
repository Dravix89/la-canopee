import crypto from "crypto";
import { cookies } from "next/headers";

// DÉMO : stockage en mémoire. À remplacer par une vraie base (Prisma, Drizzle, Supabase...).
type User = { id: string; name: string; email: string; hash: string };
type Reset = { email: string; exp: number };
const g = globalThis as unknown as { __users?: Map<string, User>; __resets?: Map<string, Reset> };
export const users = (g.__users ??= new Map<string, User>());
export const resets = (g.__resets ??= new Map<string, Reset>());

const SECRET = process.env.AUTH_SECRET ?? "dev-secret-a-changer";
const sign = (v: string) => crypto.createHmac("sha256", SECRET).update(v).digest("hex");
const sha = (v: string) => crypto.createHash("sha256").update(v).digest("hex");

export function hashPw(pw: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  return `${salt}:${crypto.scryptSync(pw, salt, 64).toString("hex")}`;
}
export function checkPw(pw: string, stored: string) {
  const [salt, h] = stored.split(":");
  const a = Buffer.from(h, "hex");
  const b = crypto.scryptSync(pw, salt, 64);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function createResetToken(email: string) {
  const token = crypto.randomBytes(32).toString("hex");
  resets.set(sha(token), { email, exp: Date.now() + 3600_000 });
  return token;
}
export function consumeResetToken(token: string) {
  const r = resets.get(sha(token));
  resets.delete(sha(token));
  return r && r.exp > Date.now() ? r.email : null;
}
export const hasResetToken = (token: string) => {
  const r = resets.get(sha(token));
  return !!r && r.exp > Date.now();
};

export async function setSession(email: string) {
  const v = `${email}|${Date.now() + 7 * 864e5}`;
  (await cookies()).set("session", `${v}|${sign(v)}`, {
    httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 7 * 86400,
  });
}
export async function clearSession() {
  (await cookies()).delete("session");
}
export async function getUser() {
  const c = (await cookies()).get("session")?.value;
  if (!c) return null;
  const [email, exp, sig] = c.split("|");
  if (!sig || sign(`${email}|${exp}`) !== sig || Number(exp) < Date.now()) return null;
  const u = users.get(email);
  return u ? { name: u.name, email: u.email } : null;
}
