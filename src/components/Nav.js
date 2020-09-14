import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ authedUser, signOut}) => {
  console.log(authedUser)
  return (
    <div className="nav">
      <span className="heading">
        Welcome,
        <br /> {authedUser}
      </span>
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
      <button onClick={signOut} className="secondary-cta">
        Signout
      </button>
    </div>
  )
}

export default Nav;