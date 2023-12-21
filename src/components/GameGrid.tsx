import { useState } from 'react';
import Logo from '../assets/logo.svg?react';
import GameRouter, { GameInfo } from '../lib/GameRouter';
import { useNavigate } from 'react-router-dom';

import './GameGrid.css';

interface GameCardProp {
  route: string;
  gameInfo: GameInfo;
}

function GameCard({ route, gameInfo }: GameCardProp) {
  const [hovered, setHovered] = useState(false);

  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`games/${route}`)}
      className={`game--grid group ${hovered ? 'scale-110' : ''}`}
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

function GameGrid() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {Object.entries(GameRouter).map(([gameId, gameInfo]) => (
        <GameCard key={gameId} route={gameId} gameInfo={gameInfo} />
      ))}
    </div>
  );
}

export default GameGrid;
