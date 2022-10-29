import Image from "next/image";
import Link from "next/link";

const Symble = () => <span>৳</span>;

const Book = ({ data }) => {
  return (
    <Link href={`book/${data.slug}`}>
      <article
        className={`flex flex-col font-bangla shadow-md rounded-xl p-2 px-3 transition-all lg:hover:-translate-y-2 lg:hover:shadow-2xl cursor-pointer`}
      >
        <Image
          src={data.imgUrl}
          width={150}
          height={175}
          objectFit="cover"
          className="rounded-lg drop-shadow-md"
        />
        <h2 className="max-w-[140px] break-words text-md my-2 font-semibold font-title">
          {data.name}
        </h2>
        <span className="text-xs text-main text-left w-max line-clamp-1 leading-6 rounded-full font-medium">
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
        <button
          className="font-sans font-semibold bg-slate-100 mt-auto p-2 rounded-lg drop-shadow-md my-2 active:scale-[.95] lg:hover:bg-slate-200 transition-all duration-300"
          role="add-to-cart"
        >
          Add to Cart
        </button>
      </article>
    </Link>
  );
};

export default Book;
