import Image from 'next/image';
import { motion } from "framer-motion";

import Navigator from 'components/screens/Navigator';
import ContactFooter from 'components/ContactFooter';

import UpcomingScreen from 'components/screens/Upcoming';
import ArchiveScreen from 'components/screens/Archive';
import AboutScreen from 'components/screens/About';
import CollaboratorsScreen from 'components/screens/Collaborators';

function PageLogo() {
  return (
    <motion.div className={"flex flex-row self-center pt-6 select-none"} initial={{opacity: 0}}
                animate={{opacity: 1}} transition={{duration: 0.5}}>
      <h3 className={"py-12 pr-4 sm:pr-6 sm:py-20 sm:px-10 text-2xl sm:text-3xl font-bold"}>FYREN</h3>
      <div className={"sm:w-[192px] sm:h-[302px] w-[128px] h-[201px] relative"}>
        <Image src={"/Fyren-Display-Logo.png"} fill={true} alt={"Fyren logo"} className={"object-contain w-full"}
               priority/>
      </div>
      <h3 className={"py-12 pl-4 sm:pl-6 sm:py-20 sm:px-10 text-2xl sm:text-3xl font-bold"}>ONLINE</h3>
    </motion.div>
  );
}

export default function Home() {
  const navigationScreens = [
    {id: "upcoming", title: "UPCOMING", component: <UpcomingScreen />},
    {id: "archive", title: "ARCHIVE", component: <ArchiveScreen />},
    {id: "about", title: "ABOUT US", component: <AboutScreen />},
    {id: "collaborators", title: "COLLABORATORS", component: <CollaboratorsScreen />},
  ]

  return (
    <main className={`flex min-h-screen flex-col text-zinc-900`}>
      <section className={'flex flex-col mb-64 w-full'}>
        <PageLogo/>
        <div className={'flex flex-col pt-24 px-8 sm:px-[10%] lg:px-[12%]'}>
          <Navigator screens={navigationScreens}/>
        </div>
      </section>
      <ContactFooter/>
    </main>
  )
}
