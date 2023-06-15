import EventArchive from 'components/EventArchive';
import {motion} from "framer-motion";

export default function Archive() {
  return (
    <section className={'pb-8'}>
      <motion.div initial={{ opacity: 0, translateY: 30 }} whileInView={{ opacity: 1, translateY: 0 }} viewport={{margin: '-120px', once: true}} transition={{ease:'easeInOut',duration:0.5}}>
        <EventArchive
          title={'Fyren X Oxid '}
          poster={'/posters/oxidposterprint3.jpeg'}
          date={'09.03.2023'}
          photos={[
            {url: '/archive/Untitled-1-Recovered_01.JPG', aspectRatio: 3/5},
            {url: '/archive/Untitled-1-Recovered_02.JPG', aspectRatio: 3/5},
            {url: '/archive/Untitled-1-Recovered_03.JPG', aspectRatio: 3/5},
            {url: '/archive/Untitled-1-Recovered_04.JPG', aspectRatio: 3/5},
            {url: '/archive/Untitled-1-Recovered_05.JPG', aspectRatio: 3/5},
          ]}
        />
      </motion.div>

      <motion.div initial={{ opacity: 0, translateY: 30 }} whileInView={{ opacity: 1, translateY: 0 }} viewport={{margin: '-120px', once: true}} transition={{ease:'easeInOut',duration:0.5}}>
        <EventArchive
          title={'Fyren X Oxid 2'}
          poster={'/posters/poster66.jpeg'}
          date={'05.04.2023'}
          photos={[
            {url: '/archive/IMG_3123.JPG', aspectRatio: 2/3},
            {url: '/archive/IMG_3124.JPG', aspectRatio: 2/3},
            {url: '/archive/IMG_3125.JPG', aspectRatio: 2/3},
            {url: '/archive/IMG_3126.JPG', aspectRatio: 2/3},
            {url: '/archive/IMG_3127.JPG', aspectRatio: 1},
            {url: '/archive/IMG_3128.JPG', aspectRatio: 3/2},
            {url: '/archive/IMG_3129.JPG', aspectRatio: 1},
            {url: '/archive/IMG_3130.JPG', aspectRatio: 2/3},
            {url: '/archive/IMG_3131.JPG', aspectRatio: 2/3},
            {url: '/archive/IMG_3132.JPG', aspectRatio: 2/3},
            {url: '/archive/IMG_3133.JPG', aspectRatio: 2/3},
            {url: '/archive/IMG_3134.JPG', aspectRatio: 2/3},
            {url: '/archive/IMG_3135.JPG', aspectRatio: 1},
            {url: '/archive/IMG_3136.JPG', aspectRatio: 3/2},
            {url: '/archive/IMG_3137.JPG', aspectRatio: 1},
            {url: '/archive/IMG_3138.JPG', aspectRatio: 2/3},
            {url: '/archive/IMG_3139.JPG', aspectRatio: 1},
            {url: '/archive/IMG_3140.JPG', aspectRatio: 2/3},
            {url: '/archive/IMG_3141.JPG', aspectRatio: 2/3},
            {url: '/archive/IMG_3142.JPG', aspectRatio: 2/3},
            {url: '/archive/IMG_3143.JPG', aspectRatio: 2/3},
            {url: '/archive/IMG_3144.JPG', aspectRatio: 3/2},
            {url: '/archive/IMG_3145.JPG', aspectRatio: 1},
            {url: '/archive/IMG_3146.JPG', aspectRatio: 3/2}
          ]}
        />
      </motion.div>
    </section>
  );
}