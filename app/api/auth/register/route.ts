import { NextResponse } from "next/server";
import { hashPw, setSession, users } from "@/lib/auth";
import { isEmail, passwordError } from "@/lib/validate";

export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  const name = String(b.name ?? "").trim();
  const email = String(b.email ?? "").trim().toLowerCase();
  if (name.length < 2) return NextResponse.json({ error: "Indiquez votre nom." }, { status: 400 });
  if (!isEmail(email)) return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 400 });
  const pe = passwordError(b.password);
  if (pe) return NextResponse.json({ error: pe }, { status: 400 });
  if (b.password !== b.confirm) return NextResponse.json({ error: "Les mots de passe ne correspondent pas." }, { status: 400 });
  if (users.has(email)) return NextResponse.json({ error: "Un compte existe déjà avec cet e-mail." }, { status: 409 });
  users.set(email, { id: crypto.randomUUID(), name, email, hash: hashPw(b.password) });
  await setSession(email);
  return NextResponse.json({ ok: true });
}
