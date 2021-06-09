import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content=" " />
          <meta name="author" content="Taylor Miller" />
          <meta property="og:title" content="Taylor's Portfolio" />
          <meta property="og:image" content=" " />
          <link rel="apple-touch-icon" href="/favicon.ico" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@bluejay_mr" />

          {/* Created by Josh Burgess https://joshb.io */}
        </Head>
        <body>
          <title>Taylor's Portfolio</title>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
