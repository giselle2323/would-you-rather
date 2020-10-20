import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Nav = ({ authedUser, signOut}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleNav = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="nav">
      <header className="nav-heading">
        Welcome, {authedUser}
      </header>
      <div className='toggle-icon'>
        <i onClick={ToggleNav} className="material-icons md-18 md-light">dehaze</i>
      </div>
      <div className={ isOpen ? "nav-open nav-links": " nav-closed nav-links"}>
        <NavLink
          activeClassName="nav-link-active"
          exact
          to="/"
          className="nav-link"
        >
          <span className="material-icons md-light">
            home
          </span>Home 
        </NavLink>
        <NavLink
          activeClassName="nav-link-active"
          to="/leaderboard"
          className="nav-link"
        >
          <span className="material-icons md-light">
            analytics
          </span>Leaderboard
        </NavLink>
        <NavLink
          activeClassName="nav-link-active"
          to="/add"
          className="nav-link"
        >
          <span className="material-icons md-light">
            help
          </span>New Question 
        </NavLink>
      </div>
      <button onClick={signOut} className="secondary-btn">
        Signout
      </button>
    </nav>
  )
}

Nav.propTypes = {
  authedUser: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired
}

export default Nav;