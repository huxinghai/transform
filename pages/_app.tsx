import React, { useEffect } from "react";
import { Button, IconButton, Pane, Tooltip } from "evergreen-ui";
import Navigator from "@components/Navigator";
import "@styles/main.css";

import NProgress from "nprogress";
import Router, { useRouter } from "next/router";
import { activeRouteData } from "@utils/routes";
import Head from "next/head";
import { Meta } from "@components/Meta";
import { useDarkMode } from "@hooks/useDarkMode";

const myVisible = {
  overflow: "visible"
};

const myDisplayNone = {
  display: "none"
};

const myColorLogo = {
  color: "#FF7600",
  marginTop: "5px",
  marginLeft: "2px"
};

const logo = (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="32px"
    height="32px"
    viewBox="0 0 60 52.800167083740234"
    preserveAspectRatio="xMidYMid meet"
    color-interpolation-filters="sRGB"
  >
    <rect
      data-v-0dd9719b=""
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="#FFFFFF"
      fill-opacity="1"
      style={myDisplayNone}
    ></rect>
    <rect
      data-v-0dd9719b=""
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="url(#watermark)"
      fill-opacity="1"
      style={myDisplayNone}
    ></rect>
    <g data-v-0dd9719b="">
      <g>
        <rect
          fill="#FF7600"
          fill-opacity="0"
          stroke-width="2"
          x="0"
          y="0"
          width="60"
          height="52.800168960540674"
        ></rect>
        <svg
          filter="url(#colors8319302225)"
          x="0"
          y="0"
          width="60"
          height="52.800168960540674"
          // filtersec=colorsf8922262583
          style={myVisible}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 6 100 88"
            enable-background="new 0 0 100 100"
          >
            <g>
              <path d="M94,6H6c-3.313,0-6,2.687-6,6v76c0,3.313,2.687,6,6,6h88c3.314,0,6-2.688,6-6V12C100,8.686,97.314,6,94,6z M79,10   c2.205,0,4,1.794,4,4s-1.795,4-4,4s-4-1.794-4-4S76.795,10,79,10z M68,10c2.205,0,4,1.794,4,4s-1.795,4-4,4s-4-1.794-4-4   S65.795,10,68,10z M32.674,88C34.101,79.712,41.305,73.4,50,73.4c8.695,0,15.898,6.312,17.325,14.6H32.674z M94,85.721   c0-1.943-1.576-3.479-3.521-3.479h-6.394c-0.833-3.203-2.119-6.288-3.774-9.088l4.535-4.545c1.375-1.375,1.375-3.608,0-4.983   l-7.468-7.47c-1.375-1.375-3.604-1.377-4.978-0.002l-4.559,4.535c-2.799-1.656-5.884-2.942-9.088-3.775V50.52   c0-1.941-1.531-3.52-3.479-3.52H44.72c-1.944,0-3.477,1.576-3.477,3.52v6.396c-3.204,0.833-6.289,2.119-9.087,3.773l-4.546-4.535   c-1.375-1.375-3.609-1.375-4.983,0l-7.47,7.469c-1.375,1.375-1.376,3.604-0.001,4.979l4.535,4.555   c-1.656,2.801-2.943,5.886-3.775,9.089H9.52c-1.944,0-3.52,1.532-3.52,3.479V22h88V85.721z M90,18c-2.205,0-4-1.794-4-4   s1.795-4,4-4s4,1.794,4,4S92.205,18,90,18z"></path>
            </g>
          </svg>
        </svg>
      </g>
    </g>
    <defs>
      <filter id="colors8319302225">
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.99609375  0 0 0 0 0.4609375  0 0 0 0 0  0 0 0 1 0"
        ></feColorMatrix>
      </filter>
      <filter id="colorsf8922262583">
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 1 0"
        ></feColorMatrix>
      </filter>{" "}
      <filter id="colorsb4533402047">
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
        ></feColorMatrix>
      </filter>
    </defs>
  </svg>
);

export default function App(props) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const router = useRouter();

  useEffect(() => {
    let timer;

    const stopProgress = () => {
      clearTimeout(timer);
      NProgress.done();
    };

    const startProgress = () => NProgress.start();

    const showProgressBar = () => {
      timer = setTimeout(startProgress, 300);
      router.events.on("routeChangeComplete", stopProgress);
      router.events.on("routeChangeError", stopProgress);
    };

    router.events.on("routeChangeStart", showProgressBar);

    return () => {
      router.events.off("routeChangeComplete", stopProgress);
      router.events.off("routeChangeError", stopProgress);
      router.events.off("routeChangeStart", showProgressBar);
      timer && clearTimeout(timer);
    };
  }, []);

  const { Component, pageProps } = props;

  const activeRoute = activeRouteData(router.pathname);

  return (
    <>
      {router.pathname === "/" || !router.pathname ? (
        <Meta
          title={"在线代码转换工具 - 云库工具"}
          url={`https://libkit.cn${router.pathname}`}
          description={
            "在线代码转换工具，快速高效的网页转换工具，将为您节省大量时间，云库工具。"
          }
        />
      ) : (
        <Meta
          title={activeRoute?.title}
          url={`https://libkit.cn${router.pathname}`}
          description={activeRoute?.desc}
        />
      )}
      <Pane
        display="flex"
        alignItems="center"
        flexDirection="row"
        is="header"
        height={40}
        backgroundColor="#0e7ccf"
        paddingRight={20}
      >
        <Pane flex={1} display="flex" paddingX={20} className="logo-transform">
          {logo}
          <b style={myColorLogo}>云库工具</b>
        </Pane>
        <Pane display="flex" alignItems={"center"}>
          <Tooltip content="Toggle dark mode">
            <IconButton
              height={20}
              marginRight={10}
              icon="moon"
              onClick={toggleDarkMode}
            />
          </Tooltip>
        </Pane>
      </Pane>

      <Pane
        backgroundColor="#FFFFFF"
        className={isDarkMode ? "dark" : "light"}
        display="flex"
        flexDirection="row"
      >
        <Navigator />
        <Component {...pageProps} />
      </Pane>
    </>
  );
}
