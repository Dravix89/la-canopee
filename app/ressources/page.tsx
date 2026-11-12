import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Paint from "@/components/Paint";
import { ressources } from "@/lib/data";

export const metadata: Metadata = { title: "Ressources" };

export default function Ressources() {
  return (
    <>
      <PageHead
        tag="Ressources"
        title={
          <>
            Apprendre Pour Mieux <em>Protéger</em>.
          </>
        }
        text="Guides, fiches et rapports gratuits pour agir au quotidien en faveur de la faune et de la flore."
      />
      <section className="s">
        <div className="grid3">
          {ressources.map((r) => (
            <Paint key={r.title} {...r} />
          ))}
        </div>
      </section>
    </>
  );
}
