import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>For Kitchen | Kitchen Design, Renovation and Manufacture</title>
        <meta
          name="description"
          content="Kitchen design, renovation and manufacture | For Kitchen. With over 5 years of experience in designing kitchens of all types and as a family-owned and operated business in Adelaide, For Kitchen offer customers a more personalized approach to business, along with in-depth expertise in the Kitchen industry."
        />
        <meta
          name="keywords"
          content="custom kitchen design, kitchen construction, kitchen renovation, Adelaide kitchen design, Adelaide kitchen construction, Adelaide kitchen renovation, cabinet construction, Adelaide cabinet construction, Adelaide cabinet design, Adelaide cabinet renovation"
        />
        <meta name="author" content="Tong Lin | For Kitchen PTY Ltd"></meta>
        <meta
          property="og:title"
          content="For Kitchen | Kitchen Design, Renovation and Manufacture"
        />
        <meta
          property="og:description"
          content="Kitchen design, renovation and manufacture | For Kitchen. With over 5 years of experience in designing kitchens of all types and as a family-owned and operated business in Adelaide, For Kitchen offer customers a more personalized approach to business, along with in-depth expertise in the Kitchen industry."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.forkitchenadelaide.com.au/" />
        <meta property="og:site_name" content="For Kitchen" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
