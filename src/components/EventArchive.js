import React, {useState} from 'react';
import PhotoWallOverlay from 'components/PhotoWallOverlay'
import DynamicImage from "components/DynamicImage";
import {BiImages} from "react-icons/bi";

export default function EventArchive(props) {
  const {
    title,
    location,
    poster,
    date,
    photos = []
  } = props;

  let [galleryVisible, setGalleryVisible] = useState(false);

  return (
    <div className={'flex flex-col md:flex-row justify-center py-12'}>
      <div className={'flex order-2 pt-2 px-4 md:py-0 md:order-1 flex-col justify-center flex-1'}>
        <div className={'text-center md:text-left md:m-auto md:pb-4'}>
          <h2 className={'text-4xl sm:text-5xl font-semibold'}>{title}</h2>
          {location && <p className={'text-xl sm:text-2xl pt-2 sm:pt-4 pb-2'}>{location}</p>}
        </div>
      </div>
      <div className={'order-1 md:order-2 self-center'}>
        <DynamicImage
          className={'md:w-[240px] lg:w-[300px] max-w-[300px]'}
          src={poster.url}
          alt={`Poster for event ${title}`}
          defaultHeight={500}
          showLoadingIndicator
        />

        <div className={'text-center m-4'}>
          {
            (photos?.length) ?
              <div>
                <a className={'hidden md:inline text-2xl font-medium text-sky-500 cursor-pointer hover:text-sky-700'}
                   onClick={() => setGalleryVisible(true)}>
                  <p className={'inline'}><BiImages className={'inline mb-1 mr-2'}/> Photo Album</p>
                </a>

                <PhotoWallOverlay
                  title={title}
                  description={date}
                  photos={photos}
                  visible={galleryVisible}
                  onClose={() => setGalleryVisible(false)}
                />
              </div> : ''
          }
        </div>
      </div>
      <div className={'flex order-3 pt-2 md:pl-4 md:py-0 flex-col justify-center flex-1 text-center'}>
        <p className={'text-2xl md:text-3xl md:pb-6'}>{date}</p>

        <div className={'block md:hidden pt-4'}>
          <a className={'text-xl font-semibold text-sky-500 cursor-pointer hover:text-sky-700'}
             onClick={() => setGalleryVisible(true)}>
            {(photos?.length) ?
              <p className={'inline'}><BiImages className={'inline mb-1 mr-2'}/> Photo Album</p> : ''}
          </a>
        </div>
      </div>
    </div>
  );
}