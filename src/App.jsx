import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import RQSuperHeroes from './pages/RQSuperHeroes';
import RQSuperHeroDetails from './pages/RQSuperHeroDetails.jsx';
import ParallelQueriesPage from './pages/ParallelQueriesPage.jsx';
import DynamicParallelQueriesPage from './pages/DynamicParallelQueriesPage.jsx';
import DependentQueriesPage from './pages/DependentQueriesPage.jsx';
import SuperHeros from './pages/SuperHeros';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/super-heroes" element={<SuperHeros />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
          <Route path="/rq-super-heroes/:heroId" element={<RQSuperHeroDetails />} />
          <Route path="/rq-parallel" element={<ParallelQueriesPage />}></Route>
          <Route path="/rq-dynamic-parallel" element={<DynamicParallelQueriesPage heroIds={[1, 3]} />}></Route>
          <Route path="/rq-dependent" element={<DependentQueriesPage email='puskar@gmail.com' />}></Route>
          <Route path="*" element={<div>Page not found 404</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;