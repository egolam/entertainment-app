import { navLinks } from "@/constants/Navlinks";
import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="h-screen p-8">
      <div className="w-24 bg-semi-dark-blue h-full rounded-2xl flex flex-col items-center py-8">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={32} height={32} />
        </Link>

        <ul className="flex flex-col pt-20 w-full">
          {navLinks.map((link) => (
            <Navlinks key={link.id} {...link} />
          ))}
        </ul>

        <Image
          src="/image-avatar.png"
          alt="profile photo"
          width={40}
          height={40}
          className="border-2 rounded-full justify-self-end mt-auto"
        />
      </div>
    </nav>
  );
};

export default Navbar;
