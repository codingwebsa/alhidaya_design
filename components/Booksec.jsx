import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Book from "./Book";

const Booksec = ({ title }) => {
  const { bookdata: data } = useContext(GlobalContext);

  return (
    <div className="flex flex-col">
      {title ? (
        <h2 className="text-2xl font-bold leading-10 pl-4 py-2">{title}</h2>
      ) : null}
      <div className="BOOKSEC pb-7 px-4">
        {data?.map((book, i) => (
          <Book data={book} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Booksec;
