import Image from "next/image";
import { useState } from "react";

const Symble = () => <span>৳</span>;

const Book = ({ data }) => {
  const [cardHover, setCardHover] = useState(false);
  return (
    <article
      className={`flex flex-col font-bangla shadow-md rounded-lg p-2 hover:-translate-y-3 transition-all ${
        cardHover && "hover:-translate-y-2 hover:shadow-2xl"
      } `}
      onMouseOver={() => setCardHover(true)}
    >
      <Image
        src={data.imgUrl}
        width={140}
        height={165}
        objectFit="cover"
        className="rounded-lg drop-shadow-md"
      />
      <h2 className="max-w-[140px] break-words text-md my-2 font-semibold font-title">
        {data.name}
      </h2>
      <span className="text-xs bg-soft w-max line-clamp-1 leading-6 px-3 rounded-full font-medium">
        {data.author.length > 25
          ? data.author.substring(0, 25) + "..."
          : data.author}
      </span>
      {data.discountPrice ? (
        <div className="flex gap-2 items-end mt-1">
          <span className="text-xl text-light">
            <Symble /> {data.discountPrice}
          </span>
          <s className="text-sm text-gray-600">
            <Symble /> {data.price}
          </s>
        </div>
      ) : (
        <div className="mt-1">
          <span className="text-xl text-light">
            <Symble /> {data.price}
          </span>
        </div>
      )}
    </article>
  );
};

export default Book;
