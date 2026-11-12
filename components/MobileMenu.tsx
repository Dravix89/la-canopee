"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const items = [
  ["/", "Accueil"],
  ["/mission", "Notre mission"],
  ["/projets", "Projets"],
  ["/ressources", "Ressources"],
  ["/contact", "Contact"],
];

export default function MobileMenu({ loggedIn }: { loggedIn: boolean }) {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        className="burger"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
      <div
        className={`mmenu${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <div className="mpanel" onClick={(e) => e.stopPropagation()}>
          {items.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`l${path === href ? " on" : ""}`}
            >
              {label}
            </Link>
          ))}
          <Link className="pill" href={loggedIn ? "/compte" : "/register"}>
            {loggedIn ? "Mon compte" : "Rejoindre"}
          </Link>
        </div>
      </div>
    </>
  );
}
