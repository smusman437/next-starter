import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Layout from "../component/Layout";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    require("../node_modules/bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
