import { useParams } from 'react-router-dom';

function Game() {
  const params = useParams();
  return <div>Game (`{params.gameId}`)</div>;
}

export default Game;
