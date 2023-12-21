import { useEffect, useState } from 'react';
import GameRouter, { GameInfo } from '../lib/GameRouter';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/logo.svg?react';

import './Carousel.css';

const getCarouselStyles = (
  focus: number,
  thisIdx: number,
  hovered: boolean,
  count: number,
) => {
  const offset = thisIdx - focus;
  const diff = Math.abs(offset);
  return {
    transform: `translate3D(${offset * 33}cqw, 0, ${
      -120 * diff ** 2
    }px) scale(${hovered ? 1.1 : 1})`,
    zIndex: count - diff,
    filter: `grayscale(${hovered ? 0 : 40 * diff}%) saturate(${
      hovered ? 1 : -(1 / 16) * offset ** 2 + 1
    }) brightness(${hovered ? 1 : -(1 / 5) * diff + 1}`,
  };
};

interface GameCardProp {
  route: string;
  gameInfo: GameInfo;
  cardIdx: number;
  focusIdx: number;
  setFocusIdx: React.Dispatch<React.SetStateAction<number>>;
}

function GameCard({
  route,
  gameInfo,
  cardIdx,
  focusIdx,
  setFocusIdx,
}: GameCardProp) {
  const [hovered, setHovered] = useState(false);
  const [styles, setStyles] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    setStyles(
      getCarouselStyles(
        focusIdx,
        cardIdx,
        hovered,
        Object.keys(GameRouter).length,
      ),
    );
  }, [hovered, focusIdx, cardIdx]);

  return (
    <button
      onClick={() =>
        cardIdx === focusIdx ? navigate(`games/${route}`) : setFocusIdx(cardIdx)
      }
      className="game group"
      style={styles}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Rotate animation */}
      {/* <div className="w-[200%] h-[200%] absolute group-hover:rotate-[135deg] transition ease-in-out duration-300 game-outline"></div> */}
      {/* Slide animation */}
      <div className="w-[210%] h-[100%] absolute -translate-x-1/4 group-hover:translate-x-[1/5] transition ease-out duration-300 game-outline"></div>
      <div className="w-full h-full flex items-center">
        <div className="w-[96%] h-[94.8%] bg-gradient-to-br from-sky-800 to-cyan-600 rounded-r-sm relative flex justify-center">
          <Logo height="12%" className="block w-auto absolute left-0" />
          {gameInfo.thumbnail || (
            <div className="absolute top-1/3 text-2xl text-neutral-300 font-[Oswald]">
              {gameInfo.name}
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

function Carousel() {
  const [focusIdx, setFocusIdx] = useState(2);
  return (
    <div className="flex flex-grow items-center justify-center relative overflow-hidden">
      <div
        className="relative flex items-center justify-center w-[900px] aspect-[1.5/1] sm:aspect-[2/1] md:aspect-[2.5/1] mx-10"
        style={{ perspective: 600, containerType: 'inline-size' }}
      >
        {Object.entries(GameRouter).map(([gameId, gameInfo], idx) => (
          <GameCard
            key={gameId}
            route={gameId}
            gameInfo={gameInfo}
            cardIdx={idx}
            focusIdx={focusIdx}
            setFocusIdx={setFocusIdx}
          />
        ))}
        <button
          type="button"
          className="absolute left-0 z-50 px-3 h-full"
          onClick={() =>
            setFocusIdx((prevFocusIdx) => Math.max(0, prevFocusIdx - 1))
          }
        >
          <span className="material-symbols-outlined text-neutral-800 text-4xl">
            arrow_back_ios_new
          </span>
        </button>
        <button
          type="button"
          className="absolute right-0 z-50 px-3 h-full"
          onClick={() =>
            setFocusIdx((prevFocusIdx) =>
              Math.min(Object.keys(GameRouter).length - 1, prevFocusIdx + 1),
            )
          }
        >
          <span className="material-symbols-outlined text-neutral-800 text-4xl">
            arrow_forward_ios
          </span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
