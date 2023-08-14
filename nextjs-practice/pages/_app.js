import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import "./style/Navbar.css";
// import Header from "components/layout/Header"; // it's work because of jsconfig file. absolute imports and module path
// import Footer from "components/layout/Footer";

import Header from "@/layout/Header"; // it's work because of jsconfig file
import Footer from "@/layout/Footer";

const theme = {
  colors: {
    primary: "blue",
  },
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <SessionProvider session={session}>
      <Head>
        <title>All pages</title>
        <meta name="description" content="Free tutorials on web development" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </SessionProvider>
  );
}
