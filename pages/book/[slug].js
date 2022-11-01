import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import Navbar from "../../components/Navbar";
import CartContainer from "../../components/CartContainer";
import { GlobalContext } from "../../contexts/GlobalContext";

const Symble = () => <span>৳</span>;

const BookPage = ({ data }) => {
  const { setIsCartOpen,addToCart, isCartOpen } = useContext(GlobalContext);
  const [readmore, setReadmore] = useState(false);
  const router = useRouter();

  return (
    <>
      <Navbar />
      {/* <nav className="flex justify-between p-5 py-4">
        <span onClick={() => router.push("/")}>
          <MdOutlineKeyboardBackspace size={30} />
        </span>
        <div
          className="relative flex items-center justify-center"
          onClick={() => setIsCartOpen(true)}
        >
          <MdShoppingBasket className="text-ancent text-2xl  cursor-pointer" />
          <div className=" absolute -top-3 -right-3 w-5 h-5 rounded-full bg-light flex items-center justify-center">
            <p className="text-xs text-white font-semibold">0</p>
          </div>
        </div>
      </nav> */}
      <main className="relative pb-5 font-alhidaya">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex justify-center items-center w-[90%] mx-auto md:h-max md:ml-10 md:w-max md:m-4 md:mt-8">
            <Image
              src={data.imgUrl}
              loader={() => data.imgUrl}
              layout="fill"
              objectFit="cover"
              width={400}
              height={600}
              placeholder="blur"
              blurDataURL={data.imgUrl}
              className="shadow-2xl rounded-2xl"
              quality={25}
              alt={data.name}
            />
          </div>

          <div className="px-4 md:max-w-[60%] mt-8">
            {/* name */}
            <h1 className="text-3xl md:text-4xl mb-4 ">{data.name}</h1>

            {/* price */}
            <div className="flex gap-2 items-baseline">
              <span className="flex text-3xl text-light">
                <Symble /> {data.price}
              </span>
              {data.discountPrice && (
                <s className="flex text-gray-500 text-lg">
                  <Symble /> {data.discountPrice}
                </s>
              )}
            </div>

            {/* details */}
            <div className="flex flex-col mt-2">
              <span className="text-md md:text-xl flex gap-1 items-center w-max">
                <span className="font-medium">লেখক: </span>
                <Link href="/" className="text-blue-600 font-thin text-lg">
                  {data.author}
                </Link>
              </span>
              <span className="text-md md:text-xl flex gap-1 items-center w-max">
                <span className="font-medium">বিষয়: </span>
                <Link href="/" className="text-blue-600 font-thin text-lg">
                  {data.category}
                </Link>
              </span>
              <span className="text-md md:text-xl flex gap-1 items-center w-max">
                <span className="font-medium">প্রকাশন: </span>
                <Link href="/" className="text-blue-600 font-thin text-lg">
                  আল-হিদায়া
                </Link>
              </span>
              {/* description */}
              <div className="mt-5 font-medium text-md md:max-w-[80%]">
                {readmore
                  ? data.description
                  : data.description.substring(0, 400)}{" "}
                <span
                  className="font-bold cursor-pointer"
                  onClick={() => setReadmore(!readmore)}
                >
                  {readmore ? "...Show less" : "...Read More"}
                </span>
              </div>
              <button className="w-full md:w-60 md:rounded-lg mx-2 flex items-center justify-center gap-1 my-8 mb-10 bg-gradient-to-tr from-emerald-400 to-green-500 text-gray-50 rounded-full py-2" onClick={()=> addToCart(data)}>
                <span>
                  <MdShoppingBasket size={25} />
                </span>
                <p className="text-lg">Add to Cart</p>
              </button>
            </div>
          </div>
        </div>
      </main>
      {isCartOpen && <CartContainer />}
    </>
  );
};

export default BookPage;

export const getStaticPaths = async () => {
  const slugData = [
    {
      slug: "pup-korbona-ar",
    },
    {
      slug: "al-asmaul-husna",
    },
    {
      slug: "ak-er-ahhan",
    },
    {
      slug: "next-alasmaul-husna",
    },
    {
      slug: "jannater-susongbatprapto-60-sahabi",
    },
    {
      slug: "biye-o-rijik",
    },
    {
      slug: "next-pap-korbona-ar",
    },
    {
      slug: "next-ak-er-ahhan",
    },
    {
      slug: "next-al-asmaul-husna",
    },
  ];
  return {
    paths: slugData.map((book) => ({
      params: {
        slug: book.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const data = [
    {
      name: "পাপ করব না আর",
      slug: "pup-korbona-ar",
      imgUrl:
        "https://ikhlasstore.com/wp-content/uploads/2022/10/1-3-scaled.jpg",
      price: 320,
      discountPrice: 240,
      author: "মুফতি মুহাম্মদ শুয়াইবুল্লাহ খান",
      category: "আত্মশুদ্ধি ও অনুপ্রেরণা",
      description:
        "একবার নবীজির চাচাতো ভাই আব্দুল্লাহ ইবনু আব্বাস (রাযি.)-কে এক ব্যক্তি জিজ্ঞেস করল, ‘ধরুন কেউ কম পাপ করে, আবার নেকিও করে কম। আরেক ব্যক্তি পাপ করে বেশি, আবার নেকিও বেশি করে—এদের দুজনের মধ্যে কে বেশি উত্তম? ইবনু আব্বাস প্রশ্ন শুনে বললেন, ‘আমি কোনো কিছুকে (পাপ থেকে) বেঁচে থাকার মতো উত্তম মনে করি না’ অর্থাৎ পাপ থেকে বেঁচে থাকা এমন আমল, যার বরাবর অন্য কোনো আমল হতে পারে না। এজন্য পূর্বসুরিগণ এর গুরুত্ব বোঝাতে গিয়ে বলতেন, ‘দিনের বেলা আল্লাহকে (শতভাগ ভাগ) ভয় করো এবং পুরো রাত (তাহাজ্জুদ না পড়ে) ঘুমিয়ে থাকো (সমস্যা নেই)।’পাপ থেকে বেঁচে থাকার অনুপ্রেরণা নিয়ে মুফতি মুহাম্মদ শুয়াইবুল্লাহ খানের দরদ মাখা অনবদ্য কাজ—’পাপ করব না আর’। পাপ থেকে বেঁচে থাকার সকল পন্থা এখানে লেখক আলোচনা করেছেন। উন্মাদ হয়ে গুনাহের সামুদ্রে হাবুডুবু খাওয়া উম্মতের জন্য একটি উপকারী বই।",
    },
    {
      name: "আল আসমাউল হুসনা",
      slug: "al-asmaul-husna",
      imgUrl:
        "https://ikhlasstore.com/wp-content/uploads/2022/09/1-10-scaled.jpg",
      price: 360,
      discountPrice: 270,
      author: "উস্তাদ নোমান আলী খান",
      category: "আত্মশুদ্ধি ও অনুপ্রেরণা",
      description:
        "একবার নবীজির চাচাতো ভাই আব্দুল্লাহ ইবনু আব্বাস (রাযি.)-কে এক ব্যক্তি জিজ্ঞেস করল, ‘ধরুন কেউ কম পাপ করে, আবার নেকিও করে কম। আরেক ব্যক্তি পাপ করে বেশি, আবার নেকিও বেশি করে—এদের দুজনের মধ্যে কে বেশি উত্তম? ইবনু আব্বাস প্রশ্ন শুনে বললেন, ‘আমি কোনো কিছুকে (পাপ থেকে) বেঁচে থাকার মতো উত্তম মনে করি না’ অর্থাৎ পাপ থেকে বেঁচে থাকা এমন আমল, যার বরাবর অন্য কোনো আমল হতে পারে না। এজন্য পূর্বসুরিগণ এর গুরুত্ব বোঝাতে গিয়ে বলতেন, ‘দিনের বেলা আল্লাহকে (শতভাগ ভাগ) ভয় করো এবং পুরো রাত (তাহাজ্জুদ না পড়ে) ঘুমিয়ে থাকো (সমস্যা নেই)।’পাপ থেকে বেঁচে থাকার অনুপ্রেরণা নিয়ে মুফতি মুহাম্মদ শুয়াইবুল্লাহ খানের দরদ মাখা অনবদ্য কাজ—’পাপ করব না আর’। পাপ থেকে বেঁচে থাকার সকল পন্থা এখানে লেখক আলোচনা করেছেন। উন্মাদ হয়ে গুনাহের সামুদ্রে হাবুডুবু খাওয়া উম্মতের জন্য একটি উপকারী বই।",
    },
    {
      name: "এক-এর আহ্বান",
      slug: "ak-er-ahhan",
      imgUrl:
        "https://ikhlasstore.com/wp-content/uploads/2022/10/12-scaled.jpg",
      price: 190,
      discountPrice: 0,
      author: "মুহাম্মাদ মুশফিকুর রহমান মিনার",
      category: "ঈমান আক্বিদা-মানহাজ",
      description:
        "একবার নবীজির চাচাতো ভাই আব্দুল্লাহ ইবনু আব্বাস (রাযি.)-কে এক ব্যক্তি জিজ্ঞেস করল, ‘ধরুন কেউ কম পাপ করে, আবার নেকিও করে কম। আরেক ব্যক্তি পাপ করে বেশি, আবার নেকিও বেশি করে—এদের দুজনের মধ্যে কে বেশি উত্তম? ইবনু আব্বাস প্রশ্ন শুনে বললেন, ‘আমি কোনো কিছুকে (পাপ থেকে) বেঁচে থাকার মতো উত্তম মনে করি না’ অর্থাৎ পাপ থেকে বেঁচে থাকা এমন আমল, যার বরাবর অন্য কোনো আমল হতে পারে না। এজন্য পূর্বসুরিগণ এর গুরুত্ব বোঝাতে গিয়ে বলতেন, ‘দিনের বেলা আল্লাহকে (শতভাগ ভাগ) ভয় করো এবং পুরো রাত (তাহাজ্জুদ না পড়ে) ঘুমিয়ে থাকো (সমস্যা নেই)।’পাপ থেকে বেঁচে থাকার অনুপ্রেরণা নিয়ে মুফতি মুহাম্মদ শুয়াইবুল্লাহ খানের দরদ মাখা অনবদ্য কাজ—’পাপ করব না আর’। পাপ থেকে বেঁচে থাকার সকল পন্থা এখানে লেখক আলোচনা করেছেন। উন্মাদ হয়ে গুনাহের সামুদ্রে হাবুডুবু খাওয়া উম্মতের জন্য একটি উপকারী বই।",
    },
    {
      name: "আল আসমাউল হুসনা",
      slug: "next-alasmaul-husna",
      imgUrl:
        "https://ikhlasstore.com/wp-content/uploads/2022/10/1-3-scaled.jpg",
      price: 360,
      discountPrice: 270,
      author: "আহমদ তাম্মাম",
      category: "ঈমান আক্বিদা-মানহাজ",
      description:
        "একবার নবীজির চাচাতো ভাই আব্দুল্লাহ ইবনু আব্বাস (রাযি.)-কে এক ব্যক্তি জিজ্ঞেস করল, ‘ধরুন কেউ কম পাপ করে, আবার নেকিও করে কম। আরেক ব্যক্তি পাপ করে বেশি, আবার নেকিও বেশি করে—এদের দুজনের মধ্যে কে বেশি উত্তম? ইবনু আব্বাস প্রশ্ন শুনে বললেন, ‘আমি কোনো কিছুকে (পাপ থেকে) বেঁচে থাকার মতো উত্তম মনে করি না’ অর্থাৎ পাপ থেকে বেঁচে থাকা এমন আমল, যার বরাবর অন্য কোনো আমল হতে পারে না। এজন্য পূর্বসুরিগণ এর গুরুত্ব বোঝাতে গিয়ে বলতেন, ‘দিনের বেলা আল্লাহকে (শতভাগ ভাগ) ভয় করো এবং পুরো রাত (তাহাজ্জুদ না পড়ে) ঘুমিয়ে থাকো (সমস্যা নেই)।’পাপ থেকে বেঁচে থাকার অনুপ্রেরণা নিয়ে মুফতি মুহাম্মদ শুয়াইবুল্লাহ খানের দরদ মাখা অনবদ্য কাজ—’পাপ করব না আর’। পাপ থেকে বেঁচে থাকার সকল পন্থা এখানে লেখক আলোচনা করেছেন। উন্মাদ হয়ে গুনাহের সামুদ্রে হাবুডুবু খাওয়া উম্মতের জন্য একটি উপকারী বই।",
    },
    {
      name: "জান্নাতের সুসংবাদ প্রাপ্ত ৬০ সাহাবী",
      slug: "jannater-susongbatprapto-60-sahabi",
      imgUrl:
        "https://ikhlasstore.com/wp-content/uploads/2022/10/1-2-scaled.jpg",
      price: 360,
      discountPrice: 270,
      author: "আবূ রুমাইসা",
      category: "সাহাবীদের জীবনী",
      description:
        "একবার নবীজির চাচাতো ভাই আব্দুল্লাহ ইবনু আব্বাস (রাযি.)-কে এক ব্যক্তি জিজ্ঞেস করল, ‘ধরুন কেউ কম পাপ করে, আবার নেকিও করে কম। আরেক ব্যক্তি পাপ করে বেশি, আবার নেকিও বেশি করে—এদের দুজনের মধ্যে কে বেশি উত্তম? ইবনু আব্বাস প্রশ্ন শুনে বললেন, ‘আমি কোনো কিছুকে (পাপ থেকে) বেঁচে থাকার মতো উত্তম মনে করি না’ অর্থাৎ পাপ থেকে বেঁচে থাকা এমন আমল, যার বরাবর অন্য কোনো আমল হতে পারে না। এজন্য পূর্বসুরিগণ এর গুরুত্ব বোঝাতে গিয়ে বলতেন, ‘দিনের বেলা আল্লাহকে (শতভাগ ভাগ) ভয় করো এবং পুরো রাত (তাহাজ্জুদ না পড়ে) ঘুমিয়ে থাকো (সমস্যা নেই)।’পাপ থেকে বেঁচে থাকার অনুপ্রেরণা নিয়ে মুফতি মুহাম্মদ শুয়াইবুল্লাহ খানের দরদ মাখা অনবদ্য কাজ—’পাপ করব না আর’। পাপ থেকে বেঁচে থাকার সকল পন্থা এখানে লেখক আলোচনা করেছেন। উন্মাদ হয়ে গুনাহের সামুদ্রে হাবুডুবু খাওয়া উম্মতের জন্য একটি উপকারী বই।",
    },
    {
      name: "বিয়ে ও রিযিক",
      slug: "biye-o-rijik",
      imgUrl:
        "https://ikhlasstore.com/wp-content/uploads/2022/10/1-5-scaled.jpg",
      price: 360,
      discountPrice: 270,
      author: "মাওলানা আবু দারদা ইরাকি",
      category: "পরিবার ও সামাজিক জীবন",
      description:
        "একবার নবীজির চাচাতো ভাই আব্দুল্লাহ ইবনু আব্বাস (রাযি.)-কে এক ব্যক্তি জিজ্ঞেস করল, ‘ধরুন কেউ কম পাপ করে, আবার নেকিও করে কম। আরেক ব্যক্তি পাপ করে বেশি, আবার নেকিও বেশি করে—এদের দুজনের মধ্যে কে বেশি উত্তম? ইবনু আব্বাস প্রশ্ন শুনে বললেন, ‘আমি কোনো কিছুকে (পাপ থেকে) বেঁচে থাকার মতো উত্তম মনে করি না’ অর্থাৎ পাপ থেকে বেঁচে থাকা এমন আমল, যার বরাবর অন্য কোনো আমল হতে পারে না। এজন্য পূর্বসুরিগণ এর গুরুত্ব বোঝাতে গিয়ে বলতেন, ‘দিনের বেলা আল্লাহকে (শতভাগ ভাগ) ভয় করো এবং পুরো রাত (তাহাজ্জুদ না পড়ে) ঘুমিয়ে থাকো (সমস্যা নেই)।’পাপ থেকে বেঁচে থাকার অনুপ্রেরণা নিয়ে মুফতি মুহাম্মদ শুয়াইবুল্লাহ খানের দরদ মাখা অনবদ্য কাজ—’পাপ করব না আর’। পাপ থেকে বেঁচে থাকার সকল পন্থা এখানে লেখক আলোচনা করেছেন। উন্মাদ হয়ে গুনাহের সামুদ্রে হাবুডুবু খাওয়া উম্মতের জন্য একটি উপকারী বই।",
    },
    {
      name: "পাপ করব না আর",
      slug: "next-pap-korbona-ar",
      imgUrl:
        "https://ikhlasstore.com/wp-content/uploads/2022/10/1-3-scaled.jpg",
      price: 320,
      discountPrice: 240,
      author: "মুফতি মুহাম্মদ শুয়াইবুল্লাহ খান",
      category: "আত্মশুদ্ধি ও অনুপ্রেরণা",
      description:
        "একবার নবীজির চাচাতো ভাই আব্দুল্লাহ ইবনু আব্বাস (রাযি.)-কে এক ব্যক্তি জিজ্ঞেস করল, ‘ধরুন কেউ কম পাপ করে, আবার নেকিও করে কম। আরেক ব্যক্তি পাপ করে বেশি, আবার নেকিও বেশি করে—এদের দুজনের মধ্যে কে বেশি উত্তম? ইবনু আব্বাস প্রশ্ন শুনে বললেন, ‘আমি কোনো কিছুকে (পাপ থেকে) বেঁচে থাকার মতো উত্তম মনে করি না’ অর্থাৎ পাপ থেকে বেঁচে থাকা এমন আমল, যার বরাবর অন্য কোনো আমল হতে পারে না। এজন্য পূর্বসুরিগণ এর গুরুত্ব বোঝাতে গিয়ে বলতেন, ‘দিনের বেলা আল্লাহকে (শতভাগ ভাগ) ভয় করো এবং পুরো রাত (তাহাজ্জুদ না পড়ে) ঘুমিয়ে থাকো (সমস্যা নেই)।’পাপ থেকে বেঁচে থাকার অনুপ্রেরণা নিয়ে মুফতি মুহাম্মদ শুয়াইবুল্লাহ খানের দরদ মাখা অনবদ্য কাজ—’পাপ করব না আর’। পাপ থেকে বেঁচে থাকার সকল পন্থা এখানে লেখক আলোচনা করেছেন। উন্মাদ হয়ে গুনাহের সামুদ্রে হাবুডুবু খাওয়া উম্মতের জন্য একটি উপকারী বই।",
    },
    {
      name: "এক-এর আহ্বান",
      slug: "next-ak-er-ahhan",
      imgUrl:
        "https://ikhlasstore.com/wp-content/uploads/2022/10/12-scaled.jpg",
      price: 190,
      discountPrice: 0,
      author: "মুহাম্মাদ মুশফিকুর রহমান মিনার",
      category: "ঈমান আক্বিদা-মানহাজ",
      description:
        "একবার নবীজির চাচাতো ভাই আব্দুল্লাহ ইবনু আব্বাস (রাযি.)-কে এক ব্যক্তি জিজ্ঞেস করল, ‘ধরুন কেউ কম পাপ করে, আবার নেকিও করে কম। আরেক ব্যক্তি পাপ করে বেশি, আবার নেকিও বেশি করে—এদের দুজনের মধ্যে কে বেশি উত্তম? ইবনু আব্বাস প্রশ্ন শুনে বললেন, ‘আমি কোনো কিছুকে (পাপ থেকে) বেঁচে থাকার মতো উত্তম মনে করি না’ অর্থাৎ পাপ থেকে বেঁচে থাকা এমন আমল, যার বরাবর অন্য কোনো আমল হতে পারে না। এজন্য পূর্বসুরিগণ এর গুরুত্ব বোঝাতে গিয়ে বলতেন, ‘দিনের বেলা আল্লাহকে (শতভাগ ভাগ) ভয় করো এবং পুরো রাত (তাহাজ্জুদ না পড়ে) ঘুমিয়ে থাকো (সমস্যা নেই)।’পাপ থেকে বেঁচে থাকার অনুপ্রেরণা নিয়ে মুফতি মুহাম্মদ শুয়াইবুল্লাহ খানের দরদ মাখা অনবদ্য কাজ—’পাপ করব না আর’। পাপ থেকে বেঁচে থাকার সকল পন্থা এখানে লেখক আলোচনা করেছেন। উন্মাদ হয়ে গুনাহের সামুদ্রে হাবুডুবু খাওয়া উম্মতের জন্য একটি উপকারী বই।",
    },
    {
      name: "আল আসমাউল হুসনা",
      slug: "next-al-asmaul-husna",
      imgUrl:
        "https://ikhlasstore.com/wp-content/uploads/2022/10/1-3-scaled.jpg",
      price: 360,
      discountPrice: 270,
      author: "আহমদ তাম্মাম",
      category: "ঈমান আক্বিদা-মানহাজ",
      description:
        "একবার নবীজির চাচাতো ভাই আব্দুল্লাহ ইবনু আব্বাস (রাযি.)-কে এক ব্যক্তি জিজ্ঞেস করল, ‘ধরুন কেউ কম পাপ করে, আবার নেকিও করে কম। আরেক ব্যক্তি পাপ করে বেশি, আবার নেকিও বেশি করে—এদের দুজনের মধ্যে কে বেশি উত্তম? ইবনু আব্বাস প্রশ্ন শুনে বললেন, ‘আমি কোনো কিছুকে (পাপ থেকে) বেঁচে থাকার মতো উত্তম মনে করি না’ অর্থাৎ পাপ থেকে বেঁচে থাকা এমন আমল, যার বরাবর অন্য কোনো আমল হতে পারে না। এজন্য পূর্বসুরিগণ এর গুরুত্ব বোঝাতে গিয়ে বলতেন, ‘দিনের বেলা আল্লাহকে (শতভাগ ভাগ) ভয় করো এবং পুরো রাত (তাহাজ্জুদ না পড়ে) ঘুমিয়ে থাকো (সমস্যা নেই)।’পাপ থেকে বেঁচে থাকার অনুপ্রেরণা নিয়ে মুফতি মুহাম্মদ শুয়াইবুল্লাহ খানের দরদ মাখা অনবদ্য কাজ—’পাপ করব না আর’। পাপ থেকে বেঁচে থাকার সকল পন্থা এখানে লেখক আলোচনা করেছেন। উন্মাদ হয়ে গুনাহের সামুদ্রে হাবুডুবু খাওয়া উম্মতের জন্য একটি উপকারী বই।",
    },
  ];

  const singlebookData = data.filter((book) => book.slug == slug);
  return {
    props: {
      data: singlebookData[0],
    },
  };
};
