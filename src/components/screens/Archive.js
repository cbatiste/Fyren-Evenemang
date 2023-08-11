import {useContext} from "react";
import {motion} from "framer-motion";

import {DataContext} from "pages";
import EventArchive from 'components/EventArchive';

const datePassed = (date1, date2) =>
  new Date(date1).setHours(0, 0, 0, 0) < new Date(date2).setHours(0, 0, 0, 0);

export default function Archive() {
  const eventData = useContext(DataContext).events;

  let events = eventData?.filter(event =>
    datePassed(event.date, Date.now())
  );

  return (
    <section className={'pb-8'}>
      {
        events?.length ? events.map((event, i) => (
          <motion.div
            initial={{opacity: 0, translateY: 30}}
            whileInView={{opacity: 1, translateY: 0}}
            viewport={{margin: '-120px', once: true}}
            transition={{ease: 'easeInOut', duration: 0.5}}
            key={i}
          >
            <EventArchive
              title={event.name}
              poster={event.poster}
              posterCaption={event.poster_caption}
              location={event.location}
              date={event.date}
              photos={event.photoAlbum}
              photosCredit={event.photosCredit}
            />
          </motion.div>
        )) : <p className={'text-center text-lg sm:text-xl pt-12 pb-8'}>No events to show here...</p>
      }
    </section>
  );
}