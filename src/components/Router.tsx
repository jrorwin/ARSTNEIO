import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import Games from './Games';
import Game from './Game';
import About from './About';
import NoMatch from './NoMatch';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Games />} />
          <Route path="about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:gameId" element={<Game />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
