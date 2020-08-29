import React, {useState} from 'react'
import { connect } from 'react-redux'
import { loginUser } from "../redux/actions/users"

const SelectUser = (props) => {
  const { allUsers, dispatch } = props
  const [activeUser , setActiveUser] = useState('')
  const loginActiveUser = () => {
    dispatch(loginUser(activeUser))
  }
  const selectAUser = (user) => {
    setActiveUser(user.name)
  }

  return(
    <div className="container">
      <span className="heading">Welcome to Would You Rather?</span>
      <p>Please select user to continue</p>
      <div className="select-user-grid">
        {Object.keys(allUsers.users).map((keyName) => (
          <div
            className="select-user-item"
            onClick={() => selectAUser(allUsers.users[keyName])}
            key={keyName}
          >
            <img
              alt="user-avatar"
              src={allUsers.users[keyName].avatar}
              className={
                allUsers.users[keyName].name === activeUser
                  ? "select-user-avatar active-user-avatar"
                  : "select-user-avatar"
              }
            />
            <p className="select-user-avatar-name">
              {allUsers.users[keyName].name}
            </p>
          </div>
        ))}
      </div>
      {activeUser !== '' ?
        <button
          style={{
            width: "20rem",
          }}
          className="primary-cta"
          onClick={loginActiveUser}
        >{`Continue as ${activeUser}`}</button>
        : ''
      }
    </div>
  )
}

function mapStateToProps({ allUsers }) {
  return {
    allUsers,
  }
}

export default connect(mapStateToProps)(SelectUser);