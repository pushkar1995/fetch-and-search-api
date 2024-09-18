import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SuperHeros from './pages/SuperHeros';
import RQSuperHeroes from './pages/RQSuperHeroes';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/super-heroes" element={<SuperHeros />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
          <Route path="*" element={<div>Page not found 404</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App