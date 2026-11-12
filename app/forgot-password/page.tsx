import type { Metadata } from "next";
import Link from "next/link";
import AuthForm from "@/components/AuthForm";

export const metadata: Metadata = { title: "Mot de passe oublié" };

export default function Forgot() {
  return (
    <div className="auth">
      <div className="card">
        <span className="tag">Mot de passe</span>
        <h1>Mot de passe <em>oublié</em> ?</h1>
        <p className="mut">Entrez votre e-mail, nous vous envoyons un lien de réinitialisation valable 1 heure.</p>
        <AuthForm endpoint="/api/auth/forgot" submit="Envoyer le lien" fields={[{ name: "email", label: "E-mail", type: "email", autoComplete: "email" }]} />
        <div className="alt"><Link href="/login">Retour à la connexion</Link></div>
      </div>
    </div>
  );
}
