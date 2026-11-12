import { NextResponse } from "next/server";
import { isEmail } from "@/lib/validate";

export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  if (String(b.name ?? "").trim().length < 2)
    return NextResponse.json({ error: "Indiquez votre nom." }, { status: 400 });
  if (!isEmail(String(b.email ?? "").trim()))
    return NextResponse.json(
      { error: "Adresse e-mail invalide." },
      { status: 400 },
    );
  if (String(b.message ?? "").trim().length < 10)
    return NextResponse.json(
      { error: "Message trop court (10 caractères min.)." },
      { status: 400 },
    );
  console.log("[La Canopée] Message de contact :", {
    name: b.name,
    email: b.email,
    subject: b.subject,
  });
  return NextResponse.json({
    ok: true,
    message: "Merci ! Nous vous répondons très vite.",
  });
}
