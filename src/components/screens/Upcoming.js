import EventDetailed from 'components/EventDetailed';
import {motion} from "framer-motion";

export default function Upcoming() {
  return (
    <section className={'pb-8'}>
      <motion.div initial={{ opacity: 0, translateY: 30 }} whileInView={{ opacity: 1, translateY: 0 }} viewport={{margin: '-120px', once: true}} transition={{ease:'easeInOut',duration:0.5}}>
        <EventDetailed title={'Square 1'} poster={'/posters/SQUARE 1PRETTY.JPG'} details={[
          {key: 'Time', value: '21.00 – 02.00'},
          {key: 'Date', value: 'May 10th, 2023'},
          {key: 'Location', value: 'Boqueria'},
          {key: 'Address', value: 'MOOD, Jakobsbergsgalan 17'},
          {key: 'Tickets', value: 'Sign up for list'}
        ]} artistLineup={[
          'Akos',
          'Celina & Ellen',
          'Dexter & Drozin'
        ]} DJLineup={[
          'Erik B2B Christian',
          'Kasizzle'
        ]} />
      </motion.div>

      <motion.div initial={{ opacity: 0, translateY: 30 }} whileInView={{ opacity: 1, translateY: 0 }} viewport={{margin: '-120px', once: true}} transition={{ease:'easeInOut',duration:0.5}}>
        <EventDetailed title={'Fyren by the Sea'} poster={'/posters/final2.jpeg'} details={[
          {key: 'Time', value: '21.00 – 02.00'},
          {key: 'Date', value: 'May 10th, 2023'},
          {key: 'Location', value: 'Boqueria'},
          {key: 'Address', value: 'MOOD, Jakobsbergsgalan 17'},
          {key: 'Tickets', value: 'Sign up for list'}
        ]} artistLineup={[
          'Akos',
          'Celina & Ellen',
          'Dexter & Drozin'
        ]} DJLineup={[
          'Erik B2B Christian',
          'Kasizzle'
        ]} />
      </motion.div>
    </section>
  )
}