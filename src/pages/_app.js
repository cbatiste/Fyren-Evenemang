import 'styles/globals.css'
import Head from "next/head";
import {Inconsolata, Work_Sans} from 'next/font/google'
import localFont from 'next/font/local'

const Quarto = localFont({
  src: './QuartoRegular.ttf',
  display: 'swap',
})

const work_sans = Work_Sans({subsets: ['latin']});
const inconsolata = Inconsolata({subsets: ['latin']});

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Fyren Evenemang</title>
      </Head>
      <style jsx global>{`
        html {
          font-family: ${inconsolata.style.fontFamily};
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ${Quarto.style.fontFamily};
          letter-spacing: 0.5px;
        }
      `}</style>
        <Component {...pageProps} />
    </>
  );
}
