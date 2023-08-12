import {useState} from "react";
import LineupOverlay from "components/LineupOverlay";
import DynamicImage from "components/DynamicImage";

export default function EventDetailed(props) {
  const {
    title,
    poster,
    posterCaption,
    date,
    description,
    venue = [],
    booking,
    artistLineup = [],
    DJLineup = []
  } = props;

  let [lineupVisible, setLineupVisible] = useState(false);

  const handleBooking = () => {
    if (booking.url) {
      window.location.href = booking.url;
    } else {
      console.log(booking.email);
      window.location.href = `mailto:${booking.email.address}?subject=${booking.email.subject}&body=${booking.email.body.replace(/\n/g, '%0d%0a')}`;
    }
  }

  return (
    <div className={'flex flex-col md:flex-row justify-center py-12'}>
      <div className={'flex order-2 mt-6 md:m-0 md:mr-6 md:order-1 flex-col justify-center flex-1 text-center'}>
        <h2 className={'text-3xl sm:text-4xl mb-3'}>{title}</h2>
        <p className={'text-2xl'}>{date}</p>

        <div className={'mt-3 md:m-0'}>
          <a className={'inline md:hidden text-xl font-semibold text-sky-500 cursor-pointer hover:text-sky-700'}
             onClick={() => setLineupVisible(true)}>
            {(DJLineup?.length || artistLineup?.length) && <h6 className={'inline'}>View Lineup</h6>}
          </a>
          <LineupOverlay
            title={title}
            artistLineup={artistLineup}
            DJLineup={DJLineup}
            visible={lineupVisible}
            onClose={() => setLineupVisible(false)}
          />
        </div>

        <div className={'pt-5 mb-4'}>
          {venue.map((detail, i) => {
            if (!detail) return;
            return <p key={i} className={'mb-1'}>{detail.key}: {detail.value}</p>;
          })}
        </div>
      </div>
      <div className={'order-1 md:order-2 self-center'}>
        <DynamicImage
          className={'md:w-[280px] lg:w-[360px] max-w-[400px]'}
          src={poster.url}
          defaultHeight={500}
          alt={`Poster for event ${title}`}
          showLoadingIndicator
        />
        {posterCaption && <p className={'text-center pt-3'}><i>{posterCaption}</i></p>}
      </div>
      <div className={'flex order-3 flex-col justify-center md:mb-4 flex-1 text-center'}>
        <div className={'hidden md:block'}>
          {(artistLineup?.length) ?
            <div className={'pb-8'}>
              <h3 className={'font-bold text-xl'}>LINEUP</h3>
              {artistLineup.map((artist, i) => <p key={i}>{artist}</p>)}
            </div> : ''
          }
          {(DJLineup?.length) ?
            <div className={'pb-8'}>
              <h3 className={'font-bold text-xl'}>DJ LINEUP</h3>
              {DJLineup.map((artist, i) => <p key={i}>{artist}</p>)}
            </div> : ''
          }
        </div>
        <div className={'md:ml-12'}>
          {description && <p className={'mb-6'} style={{whiteSpace: 'pre-wrap'}}>{description}</p>}
          {booking.description && <p className={'mb-6'} style={{whiteSpace: 'pre-wrap'}}>{booking.description}</p>}
          <button
            className={'border-[#2a64f6] text-[#2a64f6] mt-4 md:m-0 border-2 rounded px-4 py-2 text-xl hover:bg-[#ecf1f6]'}
            onClick={() => {
              handleBooking()
            }}>
            <p>{booking.buttonLabel && booking.buttonLabel.toUpperCase()}</p>
          </button>
        </div>
      </div>
    </div>
  );
}