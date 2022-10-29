import Head from "next/head";
import { useContext } from "react";
import Banner from "../components/Banner";
import Booksec from "../components/Booksec";
import HomeCategory from "../components/HomeCategory";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="scrollbar-hide">
      <Head>
        <title>Alhidaya</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <HomeCategory/>
      <Booksec title='Popular' />
    </div>
  );
}
