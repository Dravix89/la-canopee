import Link from "next/link";
import Image from "next/image";

export default function Brand() {
  return (
    <Link href="/" className="brand brand-logo-wrapper">
      <Image
        src="/logo.png"
        alt="La Canopée"
        fill
        sizes="(max-width: 900px) 44px, 56px"
        priority
        style={{ objectFit: "contain" }}
      />
    </Link>
  );
}
