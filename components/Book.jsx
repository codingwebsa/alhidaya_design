import Image from "next/image";

const Book = ({ data }) => {
  return (
    <article className="flex flex-col">
      <Image
        src={data.imgUrl}
        width={140}
        height={170}
        objectFit="cover"
        className="rounded-lg drop-shadow-md"
      />
      <p>{data.name}</p>
    </article>
  );
};

export default Book;
