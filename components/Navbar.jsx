import React, { useContext, useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import Avatar from "../assets/avatar.svg";
import Link from "next/link";
import Image from "next/image";
import { GlobalContext } from "../contexts/GlobalContext";
import AlhidayaLogo from "../assets/alhidayaLogo.png";
import CartContainer from "./CartContainer";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const { setIsCartOpen, isCartOpen } = useContext(GlobalContext);

  return (
    <>
      <header className="sticky z-50 w-screen p-2 px-4 md:p-3 md:px-16 bg-primary">
        {/* desktop & tablet */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
          <Link href={"/"} className="flex items-center gap-2">
            {/* <p className="text-ancent text-xl font-bold">Alhidaya</p> */}
            <span className="flex gap-2 items-center">
              <Image src="/favicon.ico" width={30} height={30} alt="favicon" />
              <p className="text-xl font-extrabold font-bangla">আল হিদায়া</p>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-16">
              <li className="text-lg text-ancent font-semibold hover:text-light duration-100 transition-all ease-in-out cursor-pointer">
                Home
              </li>
              <li className="text-lg text-ancent font-semibold hover:text-light duration-100 transition-all ease-in-out cursor-pointer">
                Menu
              </li>
              <li className="text-lg text-ancent font-semibold hover:text-light duration-100 transition-all ease-in-out cursor-pointer">
                About Us
              </li>
              <li className="text-lg text-ancent font-semibold hover:text-light duration-100 transition-all ease-in-out cursor-pointer">
                Service
              </li>
            </ul>

            <div className="relative flex items-center justify-center">
              <MdShoppingBasket
                className="text-ancent text-2xl  cursor-pointer"
                onClick={() => setIsCartOpen(true)}
              />
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">0</p>
              </div>
            </div>

            <div className="relative">
              <Image
                src={Avatar}
                className="w-8 min-w-[20px] h-8 min-h-[20px] cursor-pointer rounded-full"
                alt="userprofile"
                width={50}
                height={50}
                onClick={() => setIsMenu(!isMenu)}
              />
              {isMenu && (
                <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-ancent text-base">
                    Logout <MdLogout />
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="flex items-center justify-between md:hidden w-full h-full py-2">
          <div
            className="relative flex items-center justify-center"
            onClick={() => setIsCartOpen(true)}
          >
            <MdShoppingBasket className="text-ancent text-2xl  cursor-pointer" />
            <div className=" absolute -top-3 -right-3 w-5 h-5 rounded-full bg-light flex items-center justify-center">
              <p className="text-xs text-white font-semibold">0</p>
            </div>
          </div>

          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={AlhidayaLogo}
              alt="logo"
              width={120}
              objectFit="contain"
            />
          </Link>

          <div className="relative">
            <HiMenuAlt3 size={28} onClick={() => setIsMenu(!isMenu)} />
            {isMenu && (
              <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                <ul className="flex flex-col ">
                  <li
                    className="text-base text-ancent font-semibold hover:text-light duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    Home
                  </li>
                  <li
                    className="text-base text-ancent font-semibold hover:text-light duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    Menu
                  </li>
                  <li
                    className="text-base text-ancent font-semibold hover:text-light duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    About Us
                  </li>
                  <li
                    className="text-base text-ancent font-semibold hover:text-light duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    Service
                  </li>
                </ul>

                <p className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-ancent text-base">
                  Logout <MdLogout />
                </p>
              </div>
            )}
          </div>
        </div>
      </header>
      {isCartOpen && <CartContainer />}
    </>
  );
};

export default Header;
