import Image from 'next/image';
import { motion } from "framer-motion";

import Navigator from 'components/screens/Navigator';
import ContactFooter from 'components/ContactFooter';

import UpcomingScreen from 'components/screens/Upcoming';
import ArchiveScreen from 'components/screens/Archive';
import AboutScreen from 'components/screens/About';
import CollaboratorsScreen from 'components/screens/Collaborators';

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
        <motion.div className={'flex flex-row self-center pt-4 select-none'} initial={{opacity: 0}}
                    animate={{opacity: 1}} transition={{duration: 0.5}}>
          <h3 className={'py-20 px-10 text-3xl font-bold'}>FYREN</h3>
          <Image src={'/Fyren-Display-Logo.png'} width={192} height={302} alt={'Fyren logo'} priority />
          <h3 className={'py-20 px-10 text-3xl font-bold'}>ONLINE</h3>
        </motion.div>
        <div className={'flex flex-col pt-24 px-12 lg:px-48'}>
          <Navigator screens={navigationScreens} />
        </div>
      </section>
      <ContactFooter/>
    </main>
  )
}
