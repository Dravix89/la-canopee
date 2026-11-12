import type { ReactNode } from "react";

export default function PageHead({ tag, title, text, actions }: { tag: string; title: ReactNode; text: string; actions?: ReactNode }) {
  return (
    <section className="page-head">
      <div className="head">
        <div>
          <span className="tag">{tag}</span>
          <h2>{title}</h2>
          <p className="mut">{text}</p>
        </div>
        {actions && <div className="btns">{actions}</div>}
      </div>
    </section>
  );
}
