import 'styles/globals.css'
import Head from "next/head";
import localFont from 'next/font/local';
import {Inconsolata} from 'next/font/google';

const QuartoFont = localFont({
  src: './QuartoRegular.ttf',
  display: 'swap',
})

const InconsolataFont = Inconsolata({subsets: ['latin']});

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Fyren Evenemang</title>
      </Head>
      <style jsx global>{`
        html {
          font-family: ${InconsolataFont.style.fontFamily};
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ${QuartoFont.style.fontFamily};
          letter-spacing: 0.5px;
        }
      `}</style>
        <Component {...pageProps} />
    </>
  );
}
