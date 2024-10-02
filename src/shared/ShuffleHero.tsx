import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/xbutton";
import slider_01 from "../assets/sliders/slider_01.webp";
import slider_02 from "../assets/sliders/slider_02.webp";
import slider_03 from "../assets/sliders/slider_03.webp";
import slider_04 from "../assets/sliders/slider_04.webp";
import slider_05 from "../assets/sliders/slider_05.webp";
import slider_06 from "../assets/sliders/slider_06.webp";
import slider_07 from "../assets/sliders/slider_07.webp";
import slider_08 from "../assets/sliders/slider_08.webp";
import slider_09 from "../assets/sliders/slider_09.webp";
import slider_10 from "../assets/sliders/slider_10.webp";
import slider_11 from "../assets/sliders/slider_11.webp";
import slider_12 from "../assets/sliders/slider_12.webp";
import slider_13 from "../assets/sliders/slider_13.webp";
import slider_14 from "../assets/sliders/slider_14.webp";
import slider_15 from "../assets/sliders/slider_15.webp";
import slider_16 from "../assets/sliders/slider_16.webp";

// The ShuffleHero component is the main component for the landing page.
// It includes a text section and a grid of images that shuffle every 3 seconds.
const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-[#C7A57C] font-medium">
          #Make Memories with every Klick
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          K Click Selfphoto Studio
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          We provide a relaxed atmosphere where you can snap amazing shots at
          your own pace. Our studio is equipped with everything you need,
          including a camera, remote control, and instant display monitor for
          immediate results. You will get as well a high quality printed copy of
          your selected photos that could last up to a 100 years.
        </p>
        {/* <button className='bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95'>
          Find a class
        </button> */}
        <Button
          variant="ringHover"
          className="mt-4"
          onClick={() =>
            document
              .getElementById("packages")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Get Started
        </Button>{" "}
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  // Start from the last element and work our way backwards
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the current element with the randomly selected element
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
};

// The squareData array contains the data for the images that are displayed in the grid.
const squareData = [
  {
    id: 1,
    src: slider_01,
  },
  {
    id: 2,
    src: slider_02,
  },
  {
    id: 3,
    src: slider_03,
  },
  {
    id: 4,
    src: slider_04,
  },
  {
    id: 5,
    src: slider_05,
  },
  {
    id: 6,
    src: slider_06,
  },
  {
    id: 7,
    src: slider_07,
  },
  {
    id: 8,
    src: slider_08,
  },
  {
    id: 9,
    src: slider_09,
  },
  {
    id: 10,
    src: slider_10,
  },
  {
    id: 11,
    src: slider_11,
  },
  {
    id: 12,
    src: slider_12,
  },
  {
    id: 13,
    src: slider_13,
  },
  {
    id: 14,
    src: slider_14,
  },
  {
    id: 15,
    src: slider_15,
  },
  {
    id: 16,
    src: slider_16,
  },
];

// The generateSquares function generates the squares that are displayed in the grid.
const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

// The ShuffleGrid component is the grid of images that shuffle every 3 seconds.
const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  // The useEffect hook is used to set up a timer that calls the shuffleSquares function every 3 seconds.
  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  // The shuffleSquares function shuffles the order of the squares and sets the squares state to the new array.
  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
