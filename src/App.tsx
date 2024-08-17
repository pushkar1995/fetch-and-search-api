import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/:code" element={<Details />} /> */}
      <Route path="*" element={<div>Page not found 404</div>} />
    </Routes>
  );
}

export default App;