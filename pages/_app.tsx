import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { ChakraProvider } from "@chakra-ui/react";
import "tailwindcss/tailwind.css";
import "../styles/Auth.module.css";
import "../styles/Nav.module.css";
import "../styles/Iphone.module.css";
import { Provider } from "react-redux";
import React from "react";
import store from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Provider>
    </React.StrictMode>
  );
}

export default MyApp;
