import 'styles/globals.css'
import Head from "next/head";
import {Urbanist, Work_Sans} from 'next/font/google'

const work_sans = Work_Sans({subsets: ['latin']});
const urbanist = Urbanist({subsets: ['latin']});

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Fyren Evenemang</title>
      </Head>
      <style jsx global>{`
        html {
          font-family: ${work_sans.style.fontFamily};
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ${urbanist.style.fontFamily};
        }
      `}</style>
        <Component {...pageProps} />
    </>
  );
}
