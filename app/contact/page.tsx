import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import AuthForm from "@/components/AuthForm";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <section className="info" style={{ marginBottom: 70 }}>
        <div>
          <PageHead
            tag="Contact"
            title={
              <>
                Parlons <em>Nature</em>.
              </>
            }
            text="Une question, un projet, une envie de nous aider ? Écrivez-nous."
          />
          <ul>
            <li>
              <b>E-mail</b>
              <span className="mut">bonjour@lacanopee.org</span>
            </li>
            <li>
              <b>Téléphone</b>
              <span className="mut">01 23 45 67 89</span>
            </li>
            <li>
              <b>Adresse</b>
              <span className="mut">12 rue des Tilleuls, 75000 Paris</span>
            </li>
          </ul>
        </div>
        <div
          className="card wide"
          style={{ maxWidth: "none", marginTop: "35px" }}
        >
          <AuthForm
            endpoint="/api/contact"
            submit="Envoyer"
            fields={[
              { name: "name", label: "Nom", autoComplete: "name" },
              {
                name: "email",
                label: "E-mail",
                type: "email",
                autoComplete: "email",
              },
              { name: "subject", label: "Sujet" },
              { name: "message", label: "Message", textarea: true },
            ]}
          />
        </div>
      </section>
    </>
  );
}
