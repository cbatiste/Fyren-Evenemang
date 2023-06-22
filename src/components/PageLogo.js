import {motion} from "framer-motion";
import Image from "next/image";

export default function PageLogo() {
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