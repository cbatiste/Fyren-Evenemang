import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";

function SectionHeader({title, active, onSelect}) {
  const [isActive, setActive] = useState(active);

  useEffect(() => {
    setActive(active);
  }, [active]);

  return (
    <h3
      className={`inline-block text-4xl sm:text-5xl py-2 sm:py-3 font-black cursor-pointer select-none`}
      onClick={(e) => {
        onSelect(e);
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => !active && setActive(false)}
    >
      <p>{title}</p>
      <motion.div
        animate={{scaleX: isActive ? 1 : 0}}
        className={'border-zinc-900'}
        style={{borderBottomWidth: 3, transformOrigin: 'top left'}}>
      </motion.div>
    </h3>
  );
}

export default function Navigator({screens}) {
  let [activeScreen, setActiveScreen] = useState(-1);
  let [selectDisabled, setSelectDisabled] = useState(false);

  const listAnimation = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemAnimation = {
    hidden: {y: 10, opacity: 0},
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const contentAnimation = {
    collapsed: {opacity: [1.0, 0.1, 0.0, 0.0], height: 0},
    open: {opacity: [0.0, 0.0, 0.1, 1.0], height: "auto"}
  };

  const handleSelect = (selected, event) => {
    if (selectDisabled) return;

    setActiveScreen(current => {
      setSelectDisabled(true);

      if (selected !== current && current !== -1) {
        window.requestAnimationFrame(() => {
          window.scrollTo(0, 280 + selected * 60);
        });
      }

      return selected === current ? -1 : selected;
    });
  };

  return (
    <motion.ul variants={listAnimation} initial="hidden" animate="visible">
      {
        screens.map((screen, i) => (
          <motion.li
            key={i}
            variants={itemAnimation}
          >
            <SectionHeader title={screen.title} onSelect={(e) => {
              handleSelect(i, e)
            }} active={i === activeScreen}/>
            <AnimatePresence>
              {i === activeScreen &&
                <motion.div
                  key={'content'}
                  initial={'collapsed'}
                  animate={'open'}
                  exit={'collapsed'}
                  variants={contentAnimation}
                  transition={{duration: 0.5, ease: 'easeInOut'}}
                  onAnimationComplete={() => setSelectDisabled(false)}
                >
                  {screen.component}
                </motion.div>
              }
            </AnimatePresence>
          </motion.li>
        ))
      }
    </motion.ul>
  );
}