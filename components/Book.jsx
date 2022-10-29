import Image from "next/image";

const Symble = () => <span>৳</span>;

const Book = ({ data }) => {
  return (
    <article
      className={`flex flex-col font-bangla shadow-md rounded-xl p-2 px-3 transition-all lg:hover:-translate-y-2 lg:hover:shadow-2xl`}
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
