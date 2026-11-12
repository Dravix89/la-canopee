import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import { getUser } from "@/lib/auth";

export const metadata: Metadata = { title: "Connexion" };

export default async function Login() {
  if (await getUser()) redirect("/compte");
  return (
    <div className="auth">
      <div className="card">
        <span className="tag">Connexion</span>
        <h1>
          Bon Retour <em>Parmi Nous</em>
        </h1>
        <p className="mut">Connectez-vous pour suivre vos actions.</p>
        <AuthForm
          endpoint="/api/auth/login"
          submit="Se connecter"
          redirectTo="/compte"
          fields={[
            {
              name: "email",
              label: "E-mail",
              type: "email",
              autoComplete: "email",
            },
            {
              name: "password",
              label: "Mot de passe",
              type: "password",
              autoComplete: "current-password",
            },
          ]}
        >
          <div className="row">
            <Link href="/forgot-password">Mot de passe oublié ?</Link>
          </div>
        </AuthForm>
        <div className="alt">
          <span>Pas encore membre ?</span>
          <Link href="/register">Créer un compte</Link>
        </div>
      </div>
    </div>
  );
}
