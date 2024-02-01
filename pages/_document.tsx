import React from "react";
import Document, { Head, Main, NextScript, Html } from "next/document";
import { extractStyles } from "evergreen-ui";

interface DocumentProps {
  css: string;
  hydrationScript: React.ReactChild;
}

export default class MyDocument extends Document<DocumentProps> {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const { css, hydrationScript } = extractStyles();

    return {
      ...page,
      css,
      hydrationScript
    };
  }

  render() {
    const { css, hydrationScript } = this.props;

    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>

        <body>
          <Main />
          {hydrationScript}
          <NextScript />
        </body>
      </Html>
    );
  }
}
