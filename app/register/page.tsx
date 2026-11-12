import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import { getUser } from "@/lib/auth";

export const metadata: Metadata = { title: "Rejoindre" };

export default async function Register({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  if (await getUser()) redirect("/compte");
  const { email } = await searchParams;
  return (
    <div className="auth">
      <div className="card">
        <span className="tag">Rejoindre</span>
        <h1>
          Devenez <em>Membre</em>
        </h1>
        <p className="mut">
          Créez votre compte et agissez avec la communauté La Canopée.
        </p>
        <AuthForm
          endpoint="/api/auth/register"
          submit="Créer mon compte"
          redirectTo="/compte"
          fields={[
            { name: "name", label: "Nom complet", autoComplete: "name" },
            {
              name: "email",
              label: "E-mail",
              type: "email",
              autoComplete: "email",
              defaultValue: email,
            },
            {
              name: "password",
              label: "Mot de passe (8 caractères min., lettres et chiffres)",
              type: "password",
              autoComplete: "new-password",
            },
            {
              name: "confirm",
              label: "Confirmer le mot de passe",
              type: "password",
              autoComplete: "new-password",
            },
          ]}
        />
        <div className="alt">
          <span>Déjà membre ?</span>
          <Link href="/login">Se connecter</Link>
        </div>
      </div>
    </div>
  );
}
