import Image from 'next/Image';
import {FaInstagram, FaPhone, FaRegEnvelope, FaTiktok} from "react-icons/fa";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-6 text-zinc-900`} >
      <section className={'flex flex-row'}>
        <h3 className={'py-20 px-10 text-3xl font-bold'}>FYREN</h3>
        <Image src={'/Fyren-Standard-Logo.png'} className={'w-48'} alt={'Fyren logo'} />
        <h3 className={'py-20 px-10 text-3xl font-bold'}>ONLINE</h3>
      </section>
      <section className={'flex flex-col self-start place-content-start pt-16 px-12 lg:px-48'}>
        <h2 className={'text-5xl py-2 font-bold'}>EVENTS</h2>
        <h2 className={'text-5xl py-2 font-bold'}>ABOUT US</h2>
        <h2 className={'text-5xl py-2 font-bold'}>COLLABORATORS</h2>
      </section>
      <section className={'flex flex-col self-start pt-24 px-8 lg:px-36 w-full'}>
        <h3 className={'flex text-4xl font-semibold'}>CONTACT US</h3>
        <div className={'flex grid grid-cols-3 gap-8 pt-12 px-12'}>
          <div>
            <p className={'text-3xl'}>Contact</p>
          </div>
          <div className={'text-xl'}>
            <div>
              <p><FaRegEnvelope className={'inline mr-4'} /><span>info@fyren.se</span></p>
              <label className={'text-sm text-zinc-600 pl-9'}>(General information and questions)</label>
            </div>
            <div className={'pt-6'}>
              <p><FaRegEnvelope className={'inline mr-4'} /><span>erik@kasizzle.se</span></p>
              <label className={'text-sm text-zinc-600 pl-9'}>(Erik Larsson, CEO)</label>
            </div>
          </div>
          <div className={'text-xl'}>
            <div>
              <p><FaPhone className={'inline mr-4'} /><span>+46 70 860 19 31</span></p>
              <label className={'text-sm text-zinc-600 pl-9'}>(Erik Larsson, CEO)</label>
            </div>
            <div className={'pt-6'}>
              <p><FaPhone className={'inline mr-4'} /><span>+46 73 066 62 84</span></p>
              <label className={'text-sm text-zinc-600 pl-9'}>(Oscar Fredell, CTO)</label>
            </div>
          </div>
          <div>
            <p className={'text-3xl pt-5'}>Social</p>
          </div>
          <div className={'text-xl pt-5'}>
            <p title={'Instagram'}><FaInstagram className={'inline mr-4 text-3xl'} /><span>@fyren.se</span></p>
          </div>
          <div className={'text-xl pt-5'}>
            <p title={'TikTok'}><FaTiktok className={'inline mr-4 text-2xl'} /><span>@fyren</span></p>
          </div>
        </div>
      </section>
    </main>
  )
}
