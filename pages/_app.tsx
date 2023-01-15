import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-before-after-slider-component/dist/build.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
