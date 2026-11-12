"use client";
import { useState, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";

export type Field = { name: string; label: string; type?: string; autoComplete?: string; defaultValue?: string; textarea?: boolean };

type Props = {
  endpoint: string;
  fields: Field[];
  submit: string;
  hidden?: Record<string, string>;
  redirectTo?: string;
  successMessage?: string;
  children?: ReactNode;
};

export default function AuthForm({ endpoint, fields, submit, hidden, redirectTo, successMessage, children }: Props) {
  const router = useRouter();
  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setErr(""); setOk(""); setBusy(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), ...hidden }),
      });
      const data = await res.json();
      if (!res.ok) return setErr(data.error ?? "Une erreur est survenue.");
      if (redirectTo) { router.push(redirectTo); router.refresh(); return; }
      setOk(successMessage ?? data.message ?? "C'est fait.");
      form.reset();
    } catch {
      setErr("Réseau indisponible, réessayez.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {err && <div className="msg err" role="alert">{err}</div>}
      {ok && <div className="msg ok" role="status">{ok}</div>}
      {fields.map((f) => (
        <label className="field" key={f.name}>
          <span>{f.label}</span>
          {f.textarea ? (
            <textarea name={f.name} required />
          ) : (
            <input name={f.name} type={f.type ?? "text"} autoComplete={f.autoComplete} defaultValue={f.defaultValue} required />
          )}
        </label>
      ))}
      {children}
      <button className="btn full" type="submit" disabled={busy}>{busy ? "Patientez..." : submit}</button>
    </form>
  );
}
