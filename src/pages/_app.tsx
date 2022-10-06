import type { AppProps } from "next/app";
import "../styles/globals.css";
import { store } from "../utils/store";
import { Provider } from "react-redux";
import Layout from "../comp/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
