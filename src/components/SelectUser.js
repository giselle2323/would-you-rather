import React, {useState} from 'react'
import { connect } from 'react-redux'
import { loginUser } from "../redux/actions/users"

const SelectUser = (props) => {
  const { users, dispatch } = props
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
        {Object.keys(users).map((keyName) => (
          <div
            className="select-user-item"
            onClick={() => selectAUser(users[keyName])}
            key={keyName}
          >
            <img
              alt="user-avatar"
              src={users[keyName].avatar}
              className={
                users[keyName].name === activeUser
                  ? "select-user-avatar active-user-avatar"
                  : "select-user-avatar"
              }
            />
            <p className="select-user-avatar-name">
              {users[keyName].name}
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

function mapStateToProps({ users }) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(SelectUser);