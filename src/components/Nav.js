import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Nav = ({ authedUser, signOut}) => {
  return (
    <div className="nav">
      <header className="nav-heading">
        Welcome, {authedUser}
      </header>
      <div className="nav-links">
        <NavLink
          activeClassName="nav-link-active"
          exact
          to="/"
          className="nav-link"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="nav-link-active"
          to="/leaderboard"
          className="nav-link"
        >
          Leaderboard
        </NavLink>
        <NavLink
          activeClassName="nav-link-active"
          to="/add"
          className="nav-link"
        >
          New Question
        </NavLink>
      </div>
      <button onClick={signOut} className="secondary-btn">
        Signout
      </button>
    </div>
  )
}

Nav.propTypes = {
  authedUser: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired
}

export default Nav;