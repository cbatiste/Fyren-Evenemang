import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
        <meta name="description" content="Fyren Evenemang. Stockholm. Next event TBA."></meta>
        <meta name="google-site-verification" content="Ag9aN7GUXxoFGEjon9YPlQIZvxfp8tol2msTx6ljggA" />
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
