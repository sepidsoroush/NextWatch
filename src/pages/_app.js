import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import ContextProvider from "@/context/ContextProvider";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
