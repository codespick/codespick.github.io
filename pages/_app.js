import Navbar from "../components/top-level/Navbar";
import "../styles/globals.css";
import "../styles/Navbar.css";
import "../styles/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";
import ContentState from "../contexts/contentState";
import RocketTop from "../components/RocketTop";
import "../styles/RocketTop.css";
import React from "react";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
  NProgress.set(0.1);
  NProgress.inc();
  NProgress.configure({ easing: "easeinout", speed: 230 });
  NProgress.configure({ showSpinner: true });
});

Router.events.on("routeChangeComplete", (url) => {
  NProgress.configure({ showSpinner: false });
  NProgress.done();
});

Router.events.on("hashChangeStart", (url) => {
  NProgress.start();
  NProgress.set(0.1);
  NProgress.inc();
  NProgress.configure({ easing: "easeinout", speed: 230 });
  NProgress.configure({ showSpinner: true });
});

Router.events.on("hashChangeComplete", (url) => {
  NProgress.configure({ showSpinner: false });
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="top" />
      <ContentState>
        <Navbar />
        <Component {...pageProps} />
      </ContentState>
      <RocketTop />
    </>
  );
}

export default MyApp;
