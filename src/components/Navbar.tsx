import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => (
  <>
    <nav className="flex justify-between w-full h-24 bg-yellow-700">
      <Link to="/" className="mt-4 ml-20">
        {<FaHome size={60} />}
      </Link>
      <h1 className="mt-10 mr-20 font-bold w-36">NAVBAR</h1>
    </nav>
  </>
);

export default Navbar;