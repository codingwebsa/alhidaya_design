import Image from "next/image";
import Category1 from "../assets/category1.webp";
import Category2 from "../assets/category2.webp";
import Category3 from "../assets/category3.webp";
import Category4 from "../assets/category4.webp";

const HomeCategory = () => {
  return (
    <div className="px-2 py-2">
      <h2 className="text-2xl font-bold pb-3">Categories</h2>
      <div className="HOMECATEGORY">
        <Image
          src={Category1}
          className="relative rounded-xl"
          quality={50}
          data-category="বাংলা হাদিস"
        />
        <Image src={Category2} className="rounded-xl" quality={50} />
        <Image src={Category3} className="rounded-xl" quality={50} />
        <Image src={Category4} className="rounded-xl" quality={50} />
      </div>
    </div>
  );
};

export default HomeCategory;
