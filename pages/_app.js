import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <ToastContainer />
      <Head>
        <title>Perfect Plus - Best Driving School</title>
        {/*====== Favicon Icon ======*/}
        <link
          rel="shortcut icon"
          href="assets/images/favicon2.png"
          type="image/x-icon"
        />
        {/*====== Google Fonts ======*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/*====== Flaticon ======*/}
        <link rel="stylesheet" href="assets/css/flaticon.min.css" />
        {/*====== Font Awesome ======*/}
        <link rel="stylesheet" href="assets/css/font-awesome-5.9.0.min.css" />
        {/*====== Bootstrap ======*/}
        <link rel="stylesheet" href="assets/css/bootstrap-4.5.3.min.css" />
        {/*====== Magnific Popup ======*/}
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        {/*====== Nice Select ======*/}
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />
        {/*====== jQuery UI ======*/}
        <link rel="stylesheet" href="assets/css/jquery-ui.min.css" />
        {/*====== Animate ======*/}
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        {/*====== Slick ======*/}
        <link rel="stylesheet" href="assets/css/slick.min.css" />
        {/*====== Main Style ======*/}
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>
      {loading && <div className="preloader" />}
      <Component {...pageProps} />
      {/* <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> */}
    </Fragment>
  );
}

export default MyApp;
