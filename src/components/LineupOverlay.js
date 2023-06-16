import React, {useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Gallery from "react-photo-gallery";
import {FaTimes} from "react-icons/fa";

export default function LineupOverlay(props) {
  useEffect(() => {
    document.body.style.overflow = props.visible ? 'hidden' : 'initial';
  }, [props.visible]);

  return (
    <AnimatePresence>
      {(props.visible &&
        <motion.div
          className={'fixed inset-0 bg-neutral-900 text-white p-4 pt-16 z-10 overflow-auto'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={'flex flex-row w-full justify-between px-8'}>
            <div className={'text-left'}>
              <h3 className={'text-4xl font-bold'}>{props.title}</h3>
            </div>
            <div className={'pt-[3px]'}>
              <FaTimes className={'cursor-pointer text-4xl'} title={'Close event lineup'} onClick={() => props.onClose()} />
            </div>
          </div>
          <div className={'p-6 pt-12'}>
            {props.artistLineup.length &&
              <div className={'pb-8 text-2xl'}>
                <h3 className={'font-black'}>LINEUP</h3>
                {props.artistLineup.map((artist, i) => <p key={i}>{artist}</p>)}
              </div>
            }
            {props.DJLineup.length &&
              <div className={'pb-8 text-2xl'}>
                <h3 className={'font-black'}>DJ LINEUP</h3>
                {props.DJLineup.map((artist, i) => <p key={i}>{artist}</p>)}
              </div>
            }
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}