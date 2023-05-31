import './MainFooter.css'
import { Link } from 'react-router-dom'

const MainFooter = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="d-flex justify-content-between p-5">
          <div>
            <p>
            © 2017 Minim. All rights reserved. Design by <br/>DESIGNTHEMES
            </p>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">
                  <i className="bi bi-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="bi bi-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="bi bi-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="bi bi-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainFooter