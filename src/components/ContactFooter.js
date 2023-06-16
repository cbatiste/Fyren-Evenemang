import {FaInstagram, FaPhone, FaRegEnvelope, FaTiktok} from "react-icons/fa";

export default function ContactFooter() {
  return (
    <section className={"flex flex-col py-12 px-8 lg:px-24 xl:px-36 w-full flex-grow text-slate-50"} style={{backgroundColor: '#282f56'}}>
      <h3 className={"flex text-4xl font-semibold"}>CONTACT US</h3>
      <div className={"flex grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 lg:px-12"}>
        <div>
          <p className={"text-2xl md:pl-12 lg:p-0 sm:text-3xl"}>Contact</p>
        </div>
        <div className={"text-lg sm:text-xl"}>
          <div>
            <a className={"inline-block"} href={"mailto:info@fyren.se"}><FaRegEnvelope
              className={"inline mr-4"}/><span>info@fyren.se</span></a>
            <label className={"block text-sm text-slate-400 pl-9"}>(General information and questions)</label>
          </div>
          <div className={"pt-6"}>
            <a className={"inline-block"} href={"mailto:erik@kasizzle.se"}><FaRegEnvelope
              className={"inline mr-4"}/><span>erik@kasizzle.se</span></a>
            <label className={"block text-sm text-slate-400 pl-9"}>(Erik Larsson, CEO)</label>
          </div>
        </div>
        <div className={"text-lg sm:text-xl"}>
          <div>
            <p><FaPhone className={"inline mr-4"}/><span>+46 70 860 19 31</span></p>
            <label className={"text-sm text-slate-400 pl-9"}>(Erik Larsson, CEO)</label>
          </div>
          <div className={"pt-6"}>
            <p><FaPhone className={"inline mr-4"}/><span>+46 73 066 62 84</span></p>
            <label className={"text-sm text-slate-400 pl-9"}>(Oscar Fredell, CTO)</label>
          </div>
        </div>
        <div>
          <p className={"text-2xl md:pl-12 lg:p-0 sm:text-3xl pt-5"}>Social</p>
        </div>
        <div className={"text-lg sm:text-xl pt-2 sm:pt-5"}>
          <a title={"Instagram"} href={"https://instagram.com/fyren.se"} target={"_blank"}><FaInstagram
            className={"inline mr-4 text-3xl"}/><span>@fyren.se</span></a>
        </div>
        <div className={"text-lg sm:text-xl pt-2 sm:pt-5"}>
          <a title={"TikTok"}><FaTiktok className={"inline mr-4 ml-1 text-2xl"}/><span>@fyren</span></a>
        </div>
      </div>
      <p className={"text-center mt-6 text-slate-500"}>© Kasizzle AB 2023</p>
    </section>
  );
}