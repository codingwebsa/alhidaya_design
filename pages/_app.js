import { GlobalContextProvider } from "../contexts/GlobalContext";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalContextProvider>
          <Component {...pageProps} />
      </GlobalContextProvider>
    </>
  );
}

export default MyApp;
