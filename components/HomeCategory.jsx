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
      blurURL: "/Category1.webp",
    },
    {
      name: "ইসলামিক",
      imgURL: Category2,
      blurURL: "/Category2.webp",
    },
    {
      name: "ইতিহাস",
      imgURL: Category3,
      blurURL: "/Category3.webp",
    },
    {
      name: "নবী",
      imgURL: Category4,
      blurURL: "/Category4.webp",
    },
  ];
  return (
    <div className="px-2 py-2">
      <h2 className="text-2xl font-bold pb-3">Categories</h2>
      <div className="HOMECATEGORY">
        {data.map((category, i) => (
          <div className="relative flex rounded-xl overflow-hidden" key={i}>
            <Image
              src={category.imgURL}
              alt={category.name}
              blurDataURL={category.blurURL}
              placeholder="blur"
              className="rounded-xl object-cover"
              quality={50}
            />
            <p className="absolute top-0 w-full h-full bg-[rgba(0,0,0,.4)] flex justify-center items-center left-0 text-lg md:text-2xl backdrop-blur-[1px] font-bold text-soft">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
