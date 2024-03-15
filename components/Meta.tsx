import Head from "next/head";
import React from "react";

export const Meta = ({ title, description, url, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/static/favicon.ico" type="image/png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon_32.png"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="og:url" content={url} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
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
