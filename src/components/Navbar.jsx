import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="py-4 flex justify-center gap-12">
          <li><Link className="p-2 bg-gray-300 rounded" to="/">Home</Link></li>
          <li><Link className="p-2 bg-gray-300 rounded" to="/store">Store</Link></li>
          <li><Link className="p-2 bg-gray-300 rounded" to="/about">About</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;