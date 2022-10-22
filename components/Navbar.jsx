import Link from "next/link";
import { BiCartAlt } from "react-icons/bi";
import { HiMenuAlt2, HiHome, HiPhone } from "react-icons/hi";
import { FaBookOpen, FaUserEdit, FaMosque } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import Logo from "../assets/alhidayaLogo.png";
import Avater from "../assets/avatar.svg";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center px-3 z-30">
        <span className="flex-1" onClick={() => setMenuOpened(true)}>
          <HiMenuAlt2 size={28} />
        </span>
        <div className="flex flex-1 justify-center">
          <Link href="/">
            <Image src={Logo} width={120} objectFit="contain" />
          </Link>
        </div>
        <div className="flex flex-1 items-center gap-2 justify-end">
          <Link href="/">
            <Image src={Avater} width={30} />
          </Link>
          <Link href="/">
            <span>
              <BiCartAlt size={28} />
            </span>
          </Link>
        </div>
      </nav>

      {/* menu */}
      <div
        className={`fixed w-screen  h-screen top-0 left-0 bg-[rgba(10,10,10,.5)] z-40 ${
          !menuOpened && "hidden"
        }`}
        onClick={() => setMenuOpened(false)}
      ></div>
      <div
        className={`menu fixed top-0  w-[280px] md:w-[330px] lg:w-[440px] h-screen bg-white z-50 ${
          menuOpened ? "left-0" : "left-[-100vw]"
        }`}
      >
        <div className="flex justify-between p-4">
          <p className="text-xl font-bold text-light">Menu</p>
          <span onClick={() => setMenuOpened(false)}>
            <MdCancel size={28} color="#1cbe8e" />
          </span>
        </div>
        <div className="relative flex flex-col px-4 h-full">
          <Link href="/">
            <span className="flex items-center gap-1 text-xl font-semibold border border-b-[rgba(10,10,10,.2)] py-2">
              <span>
                <HiHome size={22} />
              </span>
              <p>Home</p>
            </span>
          </Link>
          <Link href="/">
            <span className="flex items-center gap-1 text-xl font-semibold border border-b-[rgba(10,10,10,.2)] py-2">
              <span>
                <FaBookOpen size={20} />
              </span>
              <p>New Books</p>
            </span>
          </Link>
          <Link href="/">
            <span className="flex items-center gap-1 text-xl font-semibold border border-b-[rgba(10,10,10,.2)] py-2">
              <span>
                <FaUserEdit size={22} />
              </span>
              <p>Authors</p>
            </span>
          </Link>
          <Link href="/">
            <span className="flex items-center gap-1 text-xl font-semibold border border-b-[rgba(10,10,10,.2)] py-2">
              <span>
                <FaMosque size={22} />
              </span>
              <p>Islamic Books</p>
            </span>
          </Link>
          <Link href="/">
            <span className="flex items-center gap-1 text-xl font-semibold border border-b-[rgba(10,10,10,.2)] py-2">
              <span>
                <TbTruckDelivery size={22} />
              </span>
              <p>Track Order</p>
            </span>
          </Link>
          <Link href="/">
            <span className="flex items-center gap-1 text-xl font-semibold border border-b-[rgba(10,10,10,.2)] py-2">
              <span>
                <HiPhone size={22} />
              </span>
              <p>Contact Us</p>
            </span>
          </Link>
          <Link href="/">
            <span className="flex items-center gap-1 text-xl font-semibold border border-b-[rgba(10,10,10,.2)] py-2">
              <Image src={Avater} width={30} height={30} />
              <p>Account</p>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
