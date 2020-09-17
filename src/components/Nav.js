import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ authedUser, signOut}) => {
  return (
    <div className="nav">
      <header className="nav-heading">
        Welcome, {authedUser}
        {/* <span>
          <img src={authedUser.avatarURL} alt="avatar"/>
        </span> */}
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

export default Nav;