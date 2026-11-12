import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Paint from "@/components/Paint";
import { missions, stats } from "@/lib/data";

export const metadata: Metadata = { title: "Notre mission" };

export default function Mission() {
  return (
    <>
      <PageHead
        tag="Notre mission"
        title={
          <>
            Protéger Le Vivant, <em>Ensemble</em>.
          </>
        }
        text="La Canopée agit pour la sauvegarde de la faune et de la flore, avec les habitants, les scientifiques et les collectivités."
      />
      <section className="info">
        <div>
          <h2>Pourquoi Nous Agissons</h2>
          <p className="mut">
            La biodiversité s&apos;effondre à un rythme sans précédent. Chaque
            habitat restauré, chaque espèce protégée compte. Nous croyons que le
            changement durable naît de l&apos;action locale, de l&apos;éducation
            et de la coopération.
          </p>
        </div>
        <ul>
          <li>
            <b>Protéger</b>
            <span className="mut">
              Préserver les habitats et les espèces menacées.
            </span>
          </li>
          <li>
            <b>Restaurer</b>
            <span className="mut">
              Replanter, dépolluer, reconnecter les écosystèmes.
            </span>
          </li>
          <li>
            <b>Transmettre</b>
            <span className="mut">
              Éduquer et outiller chacun pour agir près de chez soi.
            </span>
          </li>
        </ul>
      </section>
      <div className="stats" style={{ margin: "40px 0 60px" }}>
        {stats.map((s) => (
          <div key={s.s} className={`stat${s.hl ? " hl" : ""}`}>
            <b>{s.b}</b>
            <small>{s.s}</small>
          </div>
        ))}
      </div>
      <section className="s">
        <div className="grid3">
          {missions.map((m) => (
            <Paint key={m.title} {...m} />
          ))}
        </div>
      </section>
    </>
  );
}
