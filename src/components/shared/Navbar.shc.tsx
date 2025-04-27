import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <div className="font-bold">Simple Shop</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/products/add">Add Product</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;