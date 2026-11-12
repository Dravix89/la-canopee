import Link from "next/link";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer>
      <div>
        <Brand />
        <p>Ensemble, créons un avenir durable pour les générations à venir.</p>
      </div>
      <div>
        <b>Explorer</b>
        <Link href="/mission">Notre mission</Link>
        <Link href="/projets">Projets</Link>
        <Link href="/ressources">Ressources</Link>
      </div>
      <div>
        <b>S&apos;engager</b>
        <Link href="/register">Devenir membre</Link>
        <Link href="/contact">Bénévolat</Link>
        <Link href="/contact">Partenaires</Link>
      </div>
      <div>
        <b>Aide</b>
        <Link href="/contact">Contact</Link>
        <Link href="/forgot-password">Mot de passe oublié</Link>
        <Link href="/login">Connexion</Link>
      </div>
      <div>
        <b>Suivez-nous</b>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">YouTube</a>
      </div>
    </footer>
  );
}
