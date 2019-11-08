import Document, { Head, Main, NextScript } from "next/document";

export const title = "HgWsite";
const description =
  "HgWsite starts your progressive web app off with a perfect Google Lighthouse score.";
const url = `https://hgwsite.now.sh`;
//const thumbnail = `${url}/static/graphics/thumbnail.png`;

export default class MyDocument extends Document {

  render() {
    return (
      <html lang="en">
        <Head>
          {/* Progressive Web App: Match the width of app’s content with width of viewport for mobile devices */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Progressive Web App: Have address bar match brand colors */}
          <meta name="theme-color" content="#fff" />

          {/* Progressive Web App: Provide manifest file for metadata */}
          <link rel="manifest" href="/static/manifest.json" />

          {/* SEO: App description for search-engine optimization */}
          <meta name="Description" content={description} />

          {/* Bonus: Have beautiful preview tiles when users share your website on social media */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />

          {/* Bonus: Have app icon and splash screen for PWAs saved to homescreen on iOS devices */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}