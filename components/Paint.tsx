/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Card } from "@/lib/data";

export default function Paint({
  c,
  title,
  text,
  img,
  alt,
  href,
  cta,
  pos,
}: Card) {
  return (
    <div className={`paint ${c}${img ? "" : " plain"}`}>
      <i className="p">
        <b />
      </i>
      <h3>{title}</h3>
      {img && (
        <div
          className="img"
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "2 / 3",
            borderRadius: 24,
            overflow: "hidden",
            marginBottom: 24,
            boxShadow: "0 10px 24px #071b1640",
          }}
        >
          <img
            src={img}
            alt={alt ?? title}
            loading="lazy"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: pos ?? "center",
            }}
          />
        </div>
      )}
      <p>{text}</p>
      <Link className="mini" href={href}>
        {cta}
      </Link>
    </div>
  );
}
