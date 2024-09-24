import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import RQSuperHeroes from './pages/RQSuperHeroes';
import RQSuperHeroDetails from './pages/RQSuperHeroDetails.jsx';
import SuperHeros from './pages/SuperHeros';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/rq-super-heroes/:heroId" element={<RQSuperHeroDetails />} />
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/super-heroes" element={<SuperHeros />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
          <Route path="*" element={<div>Page not found 404</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;