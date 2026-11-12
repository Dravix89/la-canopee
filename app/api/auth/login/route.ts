import { NextResponse } from "next/server";
import { checkPw, setSession, users } from "@/lib/auth";

export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  const u = users.get(String(b.email ?? "").trim().toLowerCase());
  if (!u || !checkPw(String(b.password ?? ""), u.hash))
    return NextResponse.json({ error: "E-mail ou mot de passe incorrect." }, { status: 401 });
  await setSession(u.email);
  return NextResponse.json({ ok: true });
}
