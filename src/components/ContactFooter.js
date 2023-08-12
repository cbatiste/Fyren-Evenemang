import {FaInstagram, FaPhone, FaRegEnvelope, FaTiktok} from "react-icons/fa";

export default function ContactFooter() {
  return (
    <section className={"py-20 mt-24 px-8 lg:px-24 xl:px-36 w-full flex-grow text-slate-50 relative"}
             style={{backgroundColor: '#282f56'}}>
      <div className={'layered-waves'}></div>

      <div className={"relative max-w-[1600px] flex flex-col m-auto z-20"}>
        <h3 className={"flex text-4xl"}>GET IN TOUCH</h3>
        <div className={"flex grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-12 lg:px-12"}>
          <div className={'md:col-span-2 xl:col-span-1'}>
            <p className={"text-2xl sm:text-3xl"}>Contact</p>
          </div>
          <div className={"text-lg sm:text-xl"}>
            <div>
              <a className={"inline-block mb-2"} href={"mailto:info@fyren.se"}>
                <FaRegEnvelope className={"inline mr-4"}/><span className={'break-all'}>info@fyren.se</span></a>
              <label className={"block text-sm text-slate-400 pl-9"}>(General information and questions)</label>
            </div>
            <div className={"pt-6"}>
              <a className={"inline-block mb-2"} href={"mailto:erik@kasizzle.se"}>
                <FaRegEnvelope className={"inline mr-4"}/><span className={'break-all'}>erik@kasizzle.se</span></a>
              <label className={"block text-sm text-slate-400 pl-9"}>(Erik Larsson, CEO)</label>
            </div>
            <div className={"pt-6"}>
              <a className={"inline-block mb-2"} href={"mailto:charles.batiste0@gmail.com"}>
                <FaRegEnvelope className={"inline mr-4"}/><span
                className={'break-all'}>charles.batiste0@gmail.com</span></a>
              <label className={"block text-sm text-slate-400 pl-9"}>(Charles Batiste, CTO)</label>
            </div>
          </div>
          <div className={"text-lg sm:text-xl"}>
            <div>
              <p><FaPhone className={"inline mr-4"}/><span>+46 70 860 19 31</span></p>
              <label className={"text-sm text-slate-400 pl-9"}>(Erik Larsson, CEO)</label>
            </div>
            <div className={"pt-6"}>
              <p><FaPhone className={"inline mr-4"}/><span>+46 73 066 62 84</span></p>
              <label className={"text-sm text-slate-400 pl-9"}>(Oscar Fredell, CFO)</label>
            </div>
            <div className={"pt-6"}>
              <p><FaPhone className={"inline mr-4"}/><span>+46 73 544 66 93</span></p>
              <label className={"text-sm text-slate-400 pl-9"}>(Karl Bellander, Sales Representative)</label>
            </div>
          </div>
          <div className={'sm:pt-5 md:col-span-2 xl:col-span-1'}>
            <p className={"text-2xl sm:text-3xl"}>Social</p>
          </div>
          <div className={"text-lg sm:text-xl pt-2 sm:pt-5"}>
            <a title={"Instagram"} href={"https://instagram.com/fyren.se"} target={"_blank"}><FaInstagram
              className={"inline mr-4 text-3xl"}/><span>@fyren.se</span></a>
          </div>
          <div className={"text-lg sm:text-xl pt-2 sm:pt-5"}>
            <a title={"TikTok"}><FaTiktok className={"inline mr-4 ml-1 text-2xl"}/><span>@fyren</span></a>
          </div>
        </div>
        <p className={"text-center mt-28 mb-4 text-slate-500"}>© Kasizzle AB 2023</p>
      </div>
    </section>
  );
}