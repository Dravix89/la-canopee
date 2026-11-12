"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  ["/", "Accueil"],
  ["/mission", "Notre Mission"],
  ["/projets", "Projets"],
  ["/ressources", "Ressources"],
  ["/contact", "Contact"],
];
export default function NavLinks() {
  const path = usePathname();
  return (
    <div className="links">
      {items.map(([href, label]) => (
        <Link key={href} href={href} className={path === href ? "on" : ""}>
          {label}
        </Link>
      ))}
    </div>
  );
}
