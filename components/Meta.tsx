import Head from "next/head";
import React from "react";

export const Meta = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/images/favicon.svg" type="image/png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <meta content={description} name="description" />
      <meta name="og:url" content={url} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={"https://transform.tools/cover.png"} />
      <meta name="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={"https://transform.tools/cover.png"}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="ritz078" />
      <meta name="baidu-site-verification" content="codeva-fIwaBRXkbW" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <script src="https://hm.baidu.com/hm.js?602ecbdf23efc1cf99cdf0dea622e2c8" />
    </Head>
  );
};
