import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
import './MainNav.css'


const MainNav = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link id="logo-container" to="/">
          <img className='logo' src={Logo} alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/#we-are-best-in">We are best in</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">Noticias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/why-us">Inversiones</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shortcodes
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MainNav