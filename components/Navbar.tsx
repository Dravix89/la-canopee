import Link from "next/link";
import Brand from "./Brand";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { getUser } from "@/lib/auth";

export default async function Navbar() {
  const user = await getUser();
  return (
    <nav>
      <Brand />
      <NavLinks />
      <Link className="pill desk" href={user ? "/compte" : "/register"}>
        {user ? "Mon compte" : "Rejoindre"}
      </Link>
      <MobileMenu loggedIn={!!user} />
    </nav>
  );
}
