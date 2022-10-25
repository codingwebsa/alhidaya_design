import { GlobalContextProvider } from "../contexts/GlobalContext";
import "../styles/tailwind.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalContextProvider>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </GlobalContextProvider>
    </>
  );
}

export default MyApp;
