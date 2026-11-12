import { NextResponse } from "next/server";
import { consumeResetToken, hashPw, users } from "@/lib/auth";
import { passwordError } from "@/lib/validate";

export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  const pe = passwordError(b.password);
  if (pe) return NextResponse.json({ error: pe }, { status: 400 });
  if (b.password !== b.confirm) return NextResponse.json({ error: "Les mots de passe ne correspondent pas." }, { status: 400 });
  const email = consumeResetToken(String(b.token ?? ""));
  const u = email ? users.get(email) : undefined;
  if (!u) return NextResponse.json({ error: "Lien invalide ou expiré." }, { status: 400 });
  u.hash = hashPw(b.password);
  return NextResponse.json({ ok: true, message: "Mot de passe mis à jour. Vous pouvez vous connecter." });
}
