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
            <p className="absolute bottom-0 left-0 text-md md:text-lg font-bold text-soft bg-ancent py-2 px-4 rounded-tr-xl ">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
