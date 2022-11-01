import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const CartItem = ({ item, setFlag, flag }) => {
  const [qty, setQty] = useState(1);
  console.log(item);

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        src={item?.imgUrl}
        className="w-20 h-20 max-w-[60px] rounded-xl object-contain"
        alt=""
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          $ {parseFloat(item?.price) * qty}
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <div>
          <BiMinus className="text-gray-50 " />
        </div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {qty}
        </p>

        <div>
          <BiPlus className="text-gray-50 " />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
