import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
      <div className="px-6 py-3">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Home</Link>
          </li>
          <li>
            <a href="https://blog.hackillinois.org/about/" className="text-gray-700 hover:text-gray-900 transition-colors duration-200" target="_blank" rel="noopener noreferrer">About</a>
          </li>
          <li>
            <a href="mailto:contact@hackillinois.org" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;