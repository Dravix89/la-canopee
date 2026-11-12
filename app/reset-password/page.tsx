import type { Metadata } from "next";
import Link from "next/link";
import AuthForm from "@/components/AuthForm";
import { hasResetToken } from "@/lib/auth";

export const metadata: Metadata = { title: "Nouveau mot de passe" };

export default async function Reset({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
  const { token = "" } = await searchParams;
  const valid = hasResetToken(token);
  return (
    <div className="auth">
      <div className="card">
        <span className="tag">Réinitialisation</span>
        <h1>Nouveau <em>mot de passe</em></h1>
        {valid ? (
          <>
            <p className="mut">Choisissez un mot de passe d&apos;au moins 8 caractères avec lettres et chiffres.</p>
            <AuthForm
              endpoint="/api/auth/reset"
              submit="Mettre à jour"
              hidden={{ token }}
              fields={[
                { name: "password", label: "Nouveau mot de passe", type: "password", autoComplete: "new-password" },
                { name: "confirm", label: "Confirmer", type: "password", autoComplete: "new-password" },
              ]}
            />
          </>
        ) : (
          <div className="msg err">Ce lien est invalide ou a expiré. <Link href="/forgot-password"><b>Demander un nouveau lien</b></Link></div>
        )}
        <div className="alt"><Link href="/login">Retour à la connexion</Link></div>
      </div>
    </div>
  );
}
