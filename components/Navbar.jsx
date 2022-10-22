import Link from "next/link";
import { BiCartAlt } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import Logo from "../assets/alhidayaLogo.png";
import Avater from "../assets/avatar.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-3">
      <div className="flex-1">
        <HiMenuAlt2 size={28} />
      </div>
      <div className="flex-1 justify-center items-center">
        <Link href="/">
          <Image src={Logo} width={120} objectFit="contain" />
        </Link>
      </div>
      <div className="flex flex-1 items-center gap-2 justify-end">
        <Link href="/account">
          <Image src={Avater} width={30} />
        </Link>
        <Link href="/cart">
          <span>
            <BiCartAlt size={28} />
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
