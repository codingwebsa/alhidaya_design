import Image from "next/image";
import Category1 from "../assets/category1.webp";
import Category2 from "../assets/category2.webp";
import Category3 from "../assets/category3.webp";
import Category4 from "../assets/category4.webp";

const HomeCategory = () => {
  const data = [
    {
      name: "সাহিত্য",
      imgURL: Category1,
    },
    {
      name: "ইসলামিক",
      imgURL: Category2,
    },
    {
      name: "ইতিহাস",
      imgURL: Category3,
    },
    {
      name: "নবী",
      imgURL: Category4,
    },
  ];
  return (
    <div className="px-2 py-2">
      <h2 className="text-2xl font-bold pb-3">Categories</h2>
      <div className="HOMECATEGORY">
        {data?.map((category, i) => (
          <div className="relative flex rounded-xl overflow-hidden" key={i}>
            <Image src={category.imgURL} className="rounded-xl" quality={50} />
            <p className="absolute h-full w-full flex justify-center items-center text-2xl font-bold bg-[rgba(0,0,0,0.4)] text-soft">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
