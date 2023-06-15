import React, {useState} from 'react';
import Image from 'next/image';
import PhotoWall from 'components/PhotoWall'

export default function EventArchive(props) {
  const {
    title,
    poster,
    date,
    photos = []
  } = props;

  let [galleryVisible, setGalleryVisible] = useState(false);

  return (
    <div className={'flex flex-row justify-center py-12'}>
      <div className={'flex flex-col justify-center flex-1 text-center'}>
        <h2 className={'text-4xl font-semibold'}>{title}</h2>
      </div>
      <div>
        <Image src={poster} alt={`Poster for event ${title}`} width={300} height={400} />

        <div className={'text-center m-4'}>
          <a className={'text-xl font-semibold text-sky-500 cursor-pointer hover:text-sky-700'}
             onClick={() => setGalleryVisible(true)}>
            <h6>Photo Album</h6>
          </a>

          <PhotoWall
            title={title}
            description={date}
            photos={photos}
            visible={galleryVisible}
            onClose={() => setGalleryVisible(false)}
          />
        </div>
      </div>
      <div className={'flex flex-col justify-center flex-1 text-center'}>
        <h3 className={'text-3xl'}>{date}</h3>
      </div>
    </div>
  );
}