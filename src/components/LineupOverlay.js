import React, {useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {FaTimes} from "react-icons/fa";

export default function LineupOverlay(props) {
  useEffect(() => {
    document.body.style.overflow = props.visible ? 'hidden' : 'initial';
  }, [props.visible]);

  return (
    <AnimatePresence>
      {(props.visible &&
        <motion.div
          className={'fixed inset-0 bg-neutral-900 text-white pt-12 z-10 overflow-auto'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={'flex flex-row w-full justify-between px-8'}>
            <div className={'text-left mt-1 mr-6'}>
              <h3 className={'text-4xl font-bold'}>{props.title}</h3>
            </div>

            <div className={'flex flex-col'}>
              <div className={'rounded-full p-1 border-2 border-transparent hover:border-white transition ease-in duration-100 cursor-pointer'}
                   onClick={() => props.onClose()}>
                <FaTimes className={'text-4xl'} title={'Close lineup'}/>
              </div>
            </div>
          </div>
          <div className={'p-6 pt-12'}>
            {(props.artistLineup && props.artistLineup.length) ?
              <div className={'pb-8 text-2xl'}>
                <h3 className={'font-black'}>LINEUP</h3>
                {props.artistLineup.map((artist, i) => <p key={i}>{artist}</p>)}
              </div> : ''
            }
            {(props.DJLineup && props.DJLineup.length) ?
              <div className={'pb-8 text-2xl'}>
                <h3 className={'font-black'}>DJ LINEUP</h3>
                {props.DJLineup.map((artist, i) => <p key={i}>{artist}</p>)}
              </div> : ''
            }
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}