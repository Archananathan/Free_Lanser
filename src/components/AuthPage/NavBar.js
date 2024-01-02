import '../component/AuthPage/Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/Home" className="nav-link">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/Shop" className="nav-link">SHOP</Link>
        </li>
        <li className="nav-item">
          <Link to="/Blogs" className="nav-link">BLOGS</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link">ABOUT</Link>
        </li>
       
      </ul>
    </nav>
    </div>
  );
}