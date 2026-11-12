import Link from "next/link";
import Paint from "@/components/Paint";
import NewsletterBox from "@/components/NewsletterBox";
import { missions, initiatives, stats } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <span className="tag">Ensemble pour une planète plus verte</span>
          <h1>
            Sauvons La <em>Nature</em>,<br />
            Sauvons Demain.
          </h1>
          <p className="lead">
            Nous rassemblons communautés, idées et actions pour protéger notre
            planète et bâtir un avenir durable pour tous.
          </p>
          <form className="sub" action="/register" method="get">
            <input
              type="email"
              name="email"
              placeholder="Votre adresse e-mail"
              required
            />
            <button type="submit">Rejoindre</button>
          </form>
          <div className="stats">
            {stats.map((s) => (
              <div key={s.s} className={`stat${s.hl ? " hl" : ""}`}>
                <b>{s.b}</b>
                <small>{s.s}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="vis">
          <div className="dry" />
          <div className="tree" />
          <div className="gl g1">
            <i />
            <div>
              <b>Reboisement</b>
              <small>Planter des arbres, restaurer les forêts.</small>
            </div>
          </div>
          <div className="gl g2">
            <i />
            <div>
              <b>Océans propres</b>
              <small>Retirer les déchets, protéger la vie marine.</small>
            </div>
          </div>
          <div className="gl g3">
            <i />
            <div>
              <b>Faune sauvage</b>
              <small>Préserver les espèces et leurs habitats.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="s">
        <div className="head">
          <div>
            <span className="tag">Notre mission</span>
            <h2>
              Nous Construisons Un Monde <em>Plus Vert</em>, Plus Propre, Plus
              Fort.
            </h2>
            <p className="mut">
              Par l&apos;éducation, l&apos;action et l&apos;innovation, nous
              aidons chacun à protéger la nature et à créer un changement
              durable.
            </p>
          </div>
          <div className="btns">
            <Link className="btn" href="/projets">
              Explorer les projets
            </Link>
            <Link className="btn o" href="/mission">
              En savoir plus
            </Link>
          </div>
        </div>
        <div className="grid3">
          {missions.map((m) => (
            <Paint key={m.title} {...m} />
          ))}
        </div>
        <div className="trust">
          <span>PARTENAIRES</span>
          <span>ECOVIA</span>
          <span>TERRAFLOW</span>
          <span>BLUEMOSS</span>
          <span>HELIOS</span>
          <span>NATURA+</span>
        </div>
      </section>

      <section className="s">
        <div className="head">
          <div>
            <span className="tag">Nos initiatives</span>
            <h2>
              Des Actions Réelles. Un <em>Impact Réel</em>.
            </h2>
            <p className="mut">
              Découvrez comment nous transformons les idées en projets concrets
              qui protègent la planète et soutiennent les communautés.
            </p>
          </div>
          <NewsletterBox />
        </div>
        <div className="grid3">
          {initiatives.map((m) => (
            <Paint key={m.title} {...m} />
          ))}
        </div>
      </section>
    </>
  );
}
