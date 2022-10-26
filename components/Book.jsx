import Image from "next/image";

const Book = ({ data }) => {
  return (
    <div className="">
      {data && (
        <Image
          src={data.imgUrl}
          width={200}
          height={270}
          objectFit="cover"
          className="rounded-lg"
        />
      )}
    </div>
  );
};

export default Book;
