import Image from "next/image";

const Book = ({ data }) => {
  return (
    <div className="">
      {data && (
        <Image
          src={data.imgUrl}
          width={140}
          height={170}
          objectFit="cover"
          className="rounded-lg drop-shadow-md"
        />
      )}
    </div>
  );
};

export default Book;
