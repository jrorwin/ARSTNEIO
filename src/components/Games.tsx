import { useState } from 'react';
import Carousel from './Carousel';
import GameGrid from './GameGrid';

enum ViewType {
  Carousel,
  Grid,
}

function Games() {
  const [viewType, setViewType] = useState(ViewType.Carousel);
  return (
    <div className="flex flex-col flex-grow mx-auto max-w-[900px] w-full">
      <div className="flex justify-between bg-gradient-to-r bg-neutral-100 px-5 py-3 mb-5 rounded-sm text-neutral-700 font-[Oswald] items-center">
        <h2 className="text-2xl">Games</h2>
        <div className="flex items-center">
          <button
            className={
              viewType === ViewType.Carousel
                ? 'text-neutral-700'
                : 'text-neutral-500 hover:text-neutral-700 transition'
            }
            onClick={() => setViewType(ViewType.Carousel)}
            type="button"
          >
            <span className="material-symbols-outlined text-4xl px-2 py-1">
              view_carousel
            </span>
          </button>
          <button
            className={
              viewType === ViewType.Grid
                ? 'text-neutral-700'
                : 'text-neutral-500 hover:text-neutral-700 transition'
            }
            onClick={() => setViewType(ViewType.Grid)}
            type="button"
          >
            <span className="material-symbols-outlined text-3xl px-2 py-1">
              grid_view
            </span>
          </button>
        </div>
      </div>
      {viewType == ViewType.Carousel ? <Carousel /> : <GameGrid />}
    </div>
  );
}

export default Games;
