import type { AppProps } from "next/app";
import "../styles/master.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
