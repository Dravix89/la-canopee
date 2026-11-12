import { NextResponse } from "next/server";
import { createResetToken, users } from "@/lib/auth";
import { isEmail } from "@/lib/validate";

export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  const email = String(b.email ?? "")
    .trim()
    .toLowerCase();
  if (!isEmail(email))
    return NextResponse.json(
      { error: "Adresse e-mail invalide." },
      { status: 400 },
    );
  if (users.has(email)) {
    const token = createResetToken(email);
    // DÉMO : à remplacer par l'envoi d'un vrai e-mail (Resend, Postmark...).
    console.log(
      `[La Canopée] Lien de réinitialisation : http://localhost:3000/reset-password?token=${token}`,
    );
  }
  // Même réponse dans tous les cas : ne révèle pas si le compte existe.
  return NextResponse.json({
    ok: true,
    message:
      "Si un compte existe, un lien de réinitialisation vient d'être envoyé.",
  });
}
