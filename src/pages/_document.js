import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <title>Fyren Evenemang</title>
        <meta name="description" content="Fyren Evenemang. Stockholm. Next event TBA."></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
