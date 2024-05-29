import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
const Nav = () => {
  return (
      <div>
          <nav className="nav">
              <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li> <Link to={'/blog'} >blog</Link></li>
                  <li> <Link to={'/about'} >about </Link></li>
                  <li> <Link to={'/portfolio'} >portfolio</Link></li>
              </ul>
          </nav>
    </div>
  )
}

export default Nav