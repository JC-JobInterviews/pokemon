import { GlobalProvider } from "@/context/global";
import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
