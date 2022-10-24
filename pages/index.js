import Head from "next/head";
import { useContext } from "react";
import CartContainer from "../components/CartContainer";
import Navbar from "../components/Navbar";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Home() {
  const { isCartOpen } = useContext(GlobalContext);
  return (
    <div className="scrollbar-hide">
      <Head>
        <title>Alhidaya</title>
      </Head>
      <Navbar />
      {isCartOpen && <CartContainer />}
    </div>
  );
}
