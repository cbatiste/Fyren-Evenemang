import {useContext} from "react";
import {motion} from "framer-motion";

import {DataContext} from "pages";
import EventDetailed from 'components/EventDetailed';

const datePassed = (date1, date2) =>
  new Date(date1).setHours(0, 0, 0, 0) < new Date(date2).setHours(0, 0, 0, 0);

export default function Upcoming() {
  const eventData = useContext(DataContext).events;

  let events = eventData?.filter(event =>
    !datePassed(event.date, Date.now())
  ).sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className={'pb-8'}>
      {
        events?.length ? events.map((event, i) => {
          let venue = [
            event.time && {key: 'Time', value: `${event.time.start} - ${event.time.end}`},
            event.location && {key: 'Location', value: event.location},
            event.address && {key: 'Address', value: event.address},
            event.tickets && {key: 'Tickets', value: event.tickets}
          ];

          let booking = {
            description: event.bookingDescription,
            buttonLabel: event.bookingButton,
            url: event.bookingURL,
            email: event.bookingEmail
          };

          return (
            <motion.div
              initial={{opacity: 0, translateY: 30}}
              whileInView={{opacity: 1, translateY: 0}}
              viewport={{margin: '-120px', once: true}}
              transition={{ease: 'easeInOut', duration: 0.5}}
              key={i}
            >
              <EventDetailed
                title={event.name}
                poster={event.poster}
                posterCaption={event.poster_caption}
                date={event.date}
                venue={venue}
                description={event.description}
                booking={booking}
                artistLineup={event.lineupArtists}
                DJLineup={event.lineupDJs}
              />
            </motion.div>
          );
        }) : <p className={'text-center text-lg sm:text-xl pt-12 pb-8'}>Next event TBA, check back soon</p>
      }
    </section>
  )
}