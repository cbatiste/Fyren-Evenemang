import React, {useState} from 'react';
import PhotoWallOverlay from 'components/PhotoWallOverlay'
import DynamicImage from "./DynamicImage";

export default function EventArchive(props) {
  const {
    title,
    poster,
    date,
    photos = []
  } = props;

  let [galleryVisible, setGalleryVisible] = useState(false);

  return (
    <div className={'flex flex-col md:flex-row justify-center py-12'}>
      <div className={'flex order-2 pt-2 px-4 md:py-0 md:order-1 flex-col justify-center flex-1 text-center'}>
        <h2 className={'text-4xl font-semibold'}>{title}</h2>
      </div>
      <div className={'order-1 md:order-2 self-center'}>
        <DynamicImage
          className={'md:w-[240px] lg:w-[300px] max-w-[300px]'}
          src={poster}
          alt={`Poster for event ${title}`}
          defaultHeight={500}
          showLoadingIndicator
        />

        <div className={'text-center m-4'}>
          <a className={'hidden md:inline text-xl font-semibold text-sky-500 cursor-pointer hover:text-sky-700'}
             onClick={() => setGalleryVisible(true)}>
            <h6 className={'inline'}>Photo Album</h6>
          </a>

          <PhotoWallOverlay
            title={title}
            description={date}
            photos={photos}
            visible={galleryVisible}
            onClose={() => setGalleryVisible(false)}
          />
        </div>
      </div>
      <div className={'flex order-3 pt-2 px-4 md:py-0 flex-col justify-center flex-1 text-center'}>
        <h3 className={'text-2xl md:text-3xl'}>{date}</h3>

        <div className={'block md:hidden pt-4'}>
          <a className={'text-xl font-semibold text-sky-500 cursor-pointer hover:text-sky-700'}
             onClick={() => setGalleryVisible(true)}>
            <h6 className={'inline'}>Photo Album</h6>
          </a>
        </div>
      </div>
    </div>
  );
}