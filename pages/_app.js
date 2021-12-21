import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Navbar from "../component/Navbar";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    require("../node_modules/bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
