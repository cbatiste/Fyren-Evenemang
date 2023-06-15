import React, {useState, useEffect, useCallback} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Gallery from "react-photo-gallery";
import {FaTimes} from "react-icons/fa";
import {AiOutlineLoading} from "react-icons/ai";

function GalleryImage({index, photo, margin, top, left, direction}) {
  let [loaded, setLoaded] = useState(false);
  let cont = {};

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  return (
    <div
      className={'scale-95 flex justify-center'}
      style={{width: photo.width, minHeight: 200}}
      key={index}
    >
      <AiOutlineLoading className={`animate-spin delay-100 text-4xl ${loaded ? 'hidden' : ''}`} />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{delay: index/15, duration: 0.5}}
        alt={photo.title}
        width={photo.width}
        height={photo.height}
        className={loaded ? '' : 'hidden'}
        {...photo}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default function PhotoWall(props) {
  useEffect(() => {
    document.body.style.overflow = props.visible ? 'hidden' : 'initial';
  }, [props.visible]);

  const imageRenderer = ({index, left, top, key, photo}) => {
    return (
      <GalleryImage
        key={key}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    );
  }

  return (
    <AnimatePresence>
      {(props.visible &&
        <motion.div
          className={'fixed inset-0 bg-neutral-900 text-white p-12 pt-16 z-10 overflow-auto'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={'flex flex-row w-full justify-between px-8'}>
            <div className={'text-left'}>
              <h3 className={'text-5xl font-bold'}>{props.title}</h3>
              {(props.description && <p className={'text-3xl font-light pt-2'}>{props.description}</p>)}
            </div>
            <div className={'rounded-full m-6 p-1 border-2 border-transparent hover:border-white transition ease-in duration-100 cursor-pointer'}
                 onClick={() => props.onClose()}>
              <FaTimes className={'text-4xl'} title={'Close photo gallery'}/>
            </div>
          </div>
          <div className={'p-6 pt-12'}>
            <Gallery
              photos={props.photos.map(photo => (
                {src: photo.url, width: photo.aspectRatio, height: 1}
              ))}
              targetRowHeight={containerWidth => Math.max(Math.min(3 * (containerWidth / props.photos.length), 900), 500)}
              renderImage={imageRenderer}
            />
          </div>
          <div>
            <button className={'transition border-white border-2 rounded px-4 py-2 text-lg hover:bg-neutral-700'}
                    onClick={() => props.onClose()}>
              Close photo album
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}