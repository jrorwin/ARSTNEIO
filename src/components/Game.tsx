import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import GameRouter from '../lib/GameRouter';
import NoMatch from './NoMatch';

function Game() {
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      console.log(e.key);
    });
  }, []);
  const params = useParams();
  return params.gameId in GameRouter ? (
    <article className="text-center" onKeyDown={(e) => console.log(e.key)}>
      <h1 className="text-2xl font-bold text-neutral-700">
        {GameRouter[params.gameId].name}
      </h1>
      {GameRouter[params.gameId].element}
    </article>
  ) : (
    <NoMatch />
  );
}

export default Game;
