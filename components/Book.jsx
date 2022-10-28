import Image from "next/image";

const Symble = () => <span>৳</span>;

const Book = ({ data }) => {
  return (
    <article className="flex flex-col font-bangla">
      <Image
        src={data.imgUrl}
        width={140}
        height={170}
        objectFit="cover"
        className="rounded-lg drop-shadow-md"
      />
      <h2 className="max-w-[140px] break-words text-md text-center line-clamp-1 my-2">
        {data.name}
      </h2>
      <p className="text-xs bg-soft py-1 px-2 leading-5 rounded-full line-clamp-1 mb-1">
        {data.author}
      </p>
      {data.discountPrice ? (
        <div className="flex gap-2 items-end">
          <span className="text-xl">
            <Symble /> {data.discountPrice}
          </span>
          <s className="text-sm">
            <Symble /> {data.price}
          </s>
        </div>
      ) : (
        <div>
          <span className="text-xl">
            <Symble /> {data.price}
          </span>
        </div>
      )}
    </article>
  );
};

export default Book;
