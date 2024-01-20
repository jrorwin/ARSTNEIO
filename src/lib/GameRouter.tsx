import Tester from '../components/Tester';

export interface GameInfo {
  name: string;
  thumbnail?: React.JSX.Element;
  element: React.JSX.Element;
  disabled?: boolean;
}

export interface GameMap {
  [gameId: string]: GameInfo;
}

function LetterKey({ letter }: { letter: string }) {
  return (
    <div className="bg-neutral-100 h-8 w-8 border-4 border-neutral-800 rounded-lg flex justify-center items-center">
      {letter}
    </div>
  );
}

const GAME_MAPPING: GameMap = {
  placeholder1: {
    name: 'Coming Soon!',
    element: <div>Coming soon!</div>,
    disabled: true,
  },
  placeholder2: {
    name: 'Coming Soon!',
    element: <div>Coming soon!</div>,
  },
  tester: {
    name: 'Key Tester',
    thumbnail: (
      <div className="bg-gradient-to-b from-violet-900 via-red-700 to-yellow-300 bg-red-50 w-full h-full flex flex-col justify-center font-[Oswald] font-normal text-sm">
        <div className="flex justify-center space-x-1 mb-3">
          <LetterKey letter="K" />
          <LetterKey letter="E" />
          <LetterKey letter="Y" />
        </div>
        <div className="flex justify-center space-x-1 mb-8">
          <LetterKey letter="T" />
          <LetterKey letter="E" />
          <LetterKey letter="S" />
          <LetterKey letter="T" />
          <LetterKey letter="E" />
          <LetterKey letter="R" />
        </div>
      </div>
    ),
    element: <Tester />,
  },
  placeholder3: {
    name: 'Coming Soon!',
    element: <div>Coming soon!</div>,
  },
  placeholder4: {
    name: 'Coming Soon!',
    element: <div>Coming soon!</div>,
  },
};

export default GAME_MAPPING;
