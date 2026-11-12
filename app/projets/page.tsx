import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Paint from "@/components/Paint";
import { initiatives, enCours } from "@/lib/data";

export const metadata: Metadata = { title: "Projets" };

export default function Projets() {
  return (
    <>
      <PageHead
        tag="Nos projets"
        title={
          <>
            Des Actions Réelles. Un <em>Impact Réel</em>.
          </>
        }
        text="Reboisement, océans, communautés : retrouvez nos projets phares et ceux qui recherchent des volontaires."
        actions={
          <Link className="btn" href="/register">
            Devenir bénévole
          </Link>
        }
      />
      <section className="s">
        <div className="grid3">
          {initiatives.map((p) => (
            <Paint key={p.title} {...p} />
          ))}
        </div>
      </section>
      <section className="s">
        <div className="head">
          <div>
            <span className="tag">En cours</span>
            <h2>
              Ils cherchent <em>des bras</em>.
            </h2>
          </div>
        </div>
        <div className="grid3">
          {enCours.map((p) => (
            <Paint key={p.title} {...p} />
          ))}
        </div>
      </section>
    </>
  );
}
