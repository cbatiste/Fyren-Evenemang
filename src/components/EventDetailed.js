import Image from 'next/image';

export default function EventDetailed(props) {
  const {
    title,
    poster,
    details = [],
    artistLineup = [],
    DJLineup = []
  } = props;

  return (
    <div className={'flex flex-row justify-center py-12'}>
      <div className={'flex flex-col justify-center flex-1 text-center'}>
        <h2 className={'text-4xl'}>{title}</h2>
        <div className={'pt-5'}>
          {details.map((detail, i) => (
            <p key={i}>{detail.key}: {detail.value}</p>
          ))}
        </div>
      </div>
      <div className={''}>
        <Image src={poster} alt={`Poster for event ${title}`} width={300} height={500} />
      </div>
      <div className={'flex flex-col flex-1 text-center pt-8'}>
        <div>
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
          <button className={'border-slate-900 border-2 rounded px-4 py-2 text-xl'}><h6>BUY TICKETS</h6></button>
        </div>
      </div>
    </div>
  );
}