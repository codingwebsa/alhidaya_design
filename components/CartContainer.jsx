import Image from "next/image";
import { useContext, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import EmptyCart from "../assets/emptyCart.svg";
import { GlobalContext } from "../contexts/GlobalContext";
import CartItem from "./CartItem";

const CartContainer = () => {
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);
  const { setIsCartOpen, cartItems, setCartItems } = useContext(GlobalContext);

  return (
    <>
      <div
        className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full flex items-center justify-between py-2 px-4 cursor-pointer">
          <div onClick={() => setIsCartOpen(false)}>
            <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
          </div>
          <p className="text-textColor text-lg font-semibold">Cart</p>

          <p
            className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
            onClick={() => setCartItems([])}
          >
            Clear <RiRefreshFill />
          </p>
        </div>

        {/* bottom section */}
        {cartItems.length > 0 ? (
          <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
            <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-hide">
              {cartItems.map((item, i) => (
                <CartItem key={i} item={item} setFlag={setFlag} flag={flag} />
              ))}
            </div>

            <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-lg">Sub Total</p>
                <p className="text-gray-400 text-lg">$ {tot}</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-lg">Delivery</p>
                <p className="text-gray-400 text-lg">$ 2.5</p>
              </div>

              <div className="w-full border-b border-gray-600 my-2"></div>

              <div className="w-full flex items-center justify-between">
                <p className="text-gray-200 text-xl font-semibold">Total</p>
                <p className="text-gray-200 text-xl font-semibold">
                  ${tot + 2.5}
                </p>
              </div>

              <button
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
              >
                Check Out
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-6">
            <Image width={300} src={EmptyCart} className="w-300" alt="" />
            <p className="text-xl text-textColor font-semibold">
              Add some items to your cart
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartContainer;
