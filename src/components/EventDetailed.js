import {useState} from "react";
import LineupOverlay from "components/LineupOverlay";
import DynamicImage from "./DynamicImage";

export default function EventDetailed(props) {
  const {
    title,
    poster,
    details = [],
    artistLineup = [],
    DJLineup = []
  } = props;

  let [lineupVisible, setLineupVisible] = useState(false);

  return (
    <div className={'flex flex-col md:flex-row justify-center py-12'}>
      <div className={'flex order-2 mt-6 md:m-0 md:mr-6 md:order-1 flex-col justify-center flex-1 text-center'}>
        <h2 className={'text-4xl font-semibold'}>{title}</h2>

        <div className={'mt-3 md:m-0'}>
          <a className={'inline md:hidden text-xl font-semibold text-sky-500 cursor-pointer hover:text-sky-700'} onClick={() => setLineupVisible(true)}>
            <h6 className={'inline'}>View Lineup</h6>
          </a>
          <LineupOverlay
            title={title}
            artistLineup={artistLineup}
            DJLineup={DJLineup}
            visible={lineupVisible}
            onClose={() => setLineupVisible(false)}
          />
        </div>

        <div className={'pt-5'}>
          {details.map((detail, i) => (
            <p key={i} className={'mb-2'}>{detail.key}: {detail.value}</p>
          ))}
        </div>
      </div>
      <div className={'order-1 md:order-2 self-center'}>
        <DynamicImage
          className={'md:w-[240px] lg:w-[300px] max-w-[300px]'}
          src={poster}
          alt={`Poster for event ${title}`}
          defaultHeight={500}
          showLoadingIndicator
        />
      </div>
      <div className={'flex order-3 flex-col flex-1 text-center md:pt-8'}>
        <div className={'hidden md:block'}>
          {artistLineup.length &&
            <div className={'pb-8'}>
              <h3 className={'font-bold text-xl'}>LINEUP</h3>
              {artistLineup.map((artist, i) => <p key={i}>{artist}</p>)}
            </div>
          }
          {DJLineup.length &&
            <div className={'pb-8'}>
              <h3 className={'font-bold text-xl'}>DJ LINEUP</h3>
              {DJLineup.map((artist, i) => <p key={i}>{artist}</p>)}
            </div>
          }
        </div>
        <div>
          <button className={'border-slate-900 mt-4 md:m-0 border-2 rounded px-4 py-2 text-xl'}><h6>BUY TICKETS</h6></button>
        </div>
      </div>
    </div>
  );
}