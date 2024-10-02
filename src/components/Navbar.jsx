import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => (
  <>
    <nav className="flex justify-between w-full h-24 bg-yellow-700">
      <Link to="/" className="mt-4 ml-20">
        {<FaHome size={60} />}
      </Link>
      <h1 className="mt-10 mr-20 font-bold w-36">
        <Link to='/super-heroes'>Traditional Super Heroes</Link>
      </h1>
      <h1 className="mt-10 mr-20 font-bold w-36">
        <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
      </h1>
      <h1 className="mt-10 mr-20 font-bold w-36">
        <Link to='/rq-parallel'>Parallel Queries</Link>
      </h1>
      <h1 className="mt-10 mr-20 font-bold w-36">
        <Link to='/rq-dynamic-parallel'>Dynamic Parallel Queries</Link>
      </h1>
      <h1 className="mt-10 mr-20 font-bold w-36">
        <Link to='/rq-dependent'>Dependent Queries</Link>
      </h1>
      <h1 className="mt-10 mr-20 font-bold w-36">
        <Link to='/rq-paginated'>Paginated Queries</Link>
      </h1>
      <h1 className="mt-10 mr-20 font-bold w-36">
        <Link to='/rq-infinite-queries'>Infinite Queries</Link>
      </h1>
    </nav>
  </>
);

export default Navbar;