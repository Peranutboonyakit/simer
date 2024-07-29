import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";

import { SimagicImagesCover, SimagicTextCover } from "../../data/data";

const SimagicSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, SimagicImagesCover.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <div className="relative w-full h-full">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={SimagicImagesCover[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 500, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-1/2 md:h-[80%] z-[-1] bg-cover bg-center"
        />
      </AnimatePresence>
      <div
        className="container relative z-[1] h-1/2 md:h-[80%] mx-auto text-white 
      flex items-center justify-between px-4 sm:px-0"
      >
        <SlArrowLeftCircle
          className=" w-10 h-10 cursor-pointer text-[30px] 
          hover:scale-110 transition-all hover:text-primary-100"
          onClick={() => paginate(-1)}
        />

        <div className="w-[80%]">
          <p className="text-[3rem] sm:text-[4rem] font-extrabold">
            {SimagicTextCover[imageIndex].title}
          </p>
          <p className="sm:text-[2rem] font-medium">
            {SimagicTextCover[imageIndex].desc}
          </p>
        </div>

        <SlArrowRightCircle
          className=" w-10 h-10 cursor-pointer text-[30px]  
          hover:scale-110 transition-all hover:text-primary-100"
          onClick={() => paginate(1)}
        />
      </div>

      <div className="relative flex items-center justify-center h-1/2 md:h-[80%] w-full px-4 sm:px-0">
        <img
          src="https://image.simagic.com/profile/upload/2023/12/23/GT_NEO%E7%AC%AC11%E4%B8%AA.png"
          alt="GT Neo"
          className="z-[-1] absolute top-0 left-0 h-full w-full bg-cover bg-center"
        />
        <div className="w-1/2 z-[1] h-full" />
        <div className="text-white z-[1] mt-0 sm:mt-[-10rem] flex flex-col space-y-4 w-1/2">
          <p className="text-[2rem] font-bold">Utilize SimPro Manager</p>
          <p className="">
            Get in-game telemetry through Maglink and customize your NEO to
            perfection!
          </p>
        </div>
      </div>

      <div className="relative flex items-end justify-center h-full bg-black md:items-center">
        <video
          autoPlay
          loop
          muted
          controls={false}
          className="z-[1] absolute top-0 left-0 h-full w-full"
        >
          <source
            src="https://image.simagic.com/profile/upload/2022/09/08/%E5%B1%8F%E5%B9%9550fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="text-white z-[2] text-center hidden w-full lg:w-[50%] md:flex flex-col items-center">
          <p className="text-[3rem] font-extrabold tracking-wide">
            Interested in maximizing your performance? Check FX Pro.
          </p>
          <p className="w-[50%]">
            Sharp and Vivid 4.3" LCD display. Real time data monitoring for
            multiple telemetry systems. Multi-scene screen presets and real-time
            switching make it easy to monitor your vehicles telemetry. POP UP
            alert system notifies you to various race information like flags,
            faults, and race commands *For Supported Titles*.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimagicSection;
