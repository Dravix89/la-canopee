import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";

export const metadata: Metadata = { title: "Mon compte" };

export default async function Compte() {
  const user = await getUser();
  if (!user) redirect("/login");
  return (
    <div className="auth">
      <div className="card">
        <span className="tag">Mon compte</span>
        <h1>
          Bonjour, <em>{user.name.split(" ")[0]}</em>
        </h1>
        <p className="mut">
          Connecté avec {user.email}. Merci de rejoindre la communauté La
          Canopée.
        </p>
        <div className="btns" style={{ justifyContent: "flex-start" }}>
          <Link className="btn" href="/projets">
            Voir les projets
          </Link>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
