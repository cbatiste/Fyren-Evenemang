import React, {useEffect, useState} from "react";
import imageUrlBuilder from '@sanity/image-url'
import {AnimatePresence, motion} from "framer-motion";
import Gallery from "react-photo-gallery";
import {FaTimes} from "react-icons/fa";
import {SanityClient} from 'components/utility/SanityClient';

const ImageBuilder = imageUrlBuilder(SanityClient);
const image = url => ImageBuilder.image(url);

function GalleryImage({index, photo}) {
  let [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`flex justify-center ${!loaded ? 'animate-pulse' : undefined} m-[10px] bg-[rgba(255,255,255,0.25)]`}
      style={{width: photo.width - 16, height: photo.height - 16}}
      key={index}
    >
      <motion.img
        initial={{opacity: 0}}
        animate={{opacity: loaded ? 1 : 0}}
        transition={{delay: index / 15, duration: 0.5}}
        width={photo.width}
        height={photo.height}
        src={image(photo.src).quality(30).url()}
        alt={photo.title}
        className={!loaded ? 'hidden' : undefined}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default function PhotoWallOverlay(props) {
  useEffect(() => {
    document.body.style.overflow = props.visible ? 'hidden' : 'initial';
  }, [props.visible]);

  const imageRenderer = ({index, left, top, key, photo}) => {
    return (
      <GalleryImage
        key={key}
        index={index}
        photo={photo}
      />
    );
  }

  return (
    <AnimatePresence>
      {(props.visible &&
        <motion.div
          className={'fixed inset-0 bg-neutral-900 text-white md:px-12 py-16 z-50 overflow-auto'}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <div className={'flex flex-row w-full justify-between px-6 sm:px-8'}>
            <div className={'text-left'}>
              <h3 className={'text-4xl md:text-5xl'}>{props.title}</h3>
              {(props.description && <p className={'text-2xl md:text-3xl font-light pt-2'}>{props.description}</p>)}
              {(props.credit && <p className={'text-lg md:text-xl font-light pt-4'}>Photography: {props.credit}</p>)}
            </div>

            <div className={'flex flex-col'}>
              <div
                className={'rounded-full p-1 border-2 border-transparent hover:border-white transition ease-in duration-100 cursor-pointer'}
                onClick={() => props.onClose()}>
                <FaTimes className={'text-4xl'} title={'Close photo album'}/>
              </div>
            </div>
          </div>
          <div className={'p-3 sm:p-6 pt-12'}>
            <Gallery
              photos={props.photos.map(photo => {
                return {src: photo.url, width: photo.dimensions.width, height: photo.dimensions.height}
              })}
              targetRowHeight={containerWidth => Math.max(Math.min(3 * (containerWidth / props.photos.length), 900), 500)}
              renderImage={imageRenderer}
            />
          </div>
          <div>
            <button
              className={'transition border-white border-2 rounded px-4 py-2 text-md sm:text-lg hover:bg-neutral-700'}
              onClick={() => props.onClose()}>
              Close photo album
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}