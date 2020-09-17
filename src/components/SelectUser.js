import React, {useState} from 'react'
import { connect } from 'react-redux'
import { loginUser } from "../redux/actions/users"
import Questions from '../images/question.svg'

const SelectUser = ({ users, dispatch, loading } ) => {
  const [activeUser , setActiveUser] = useState('')
  const loginActiveUser = () => {
    dispatch(loginUser(activeUser))
  }
  const selectAUser = (user) => {
    setActiveUser(user.id)
  }

  return(
    <>
      { loading ? 
        null 
        :
        <section className="select-user-container">
         <section className='left-intro-container'>
          <div className='intro-image'>
            <img src={Questions} alt="woman-3D" />
          </div>
         </section>
         <section className='right-intro-container'>
            <h1 className="intro-heading">Welcome to Would You Rather?</h1>
            <p>Please select user to continue</p>
            <section className="select-user-container">
              {Object.keys(users).map((keyName) => (
                <div
                  className="select-user-item"
                  onClick={() => selectAUser(users[keyName])}
                  key={keyName}
                >
                  <img
                    alt="user-avatar"
                    src={users[keyName].avatarURL}
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
            </section>
            {activeUser !== '' ?
              <button
                style={{
                  width: "20rem",
                }}
                className="primary-btn"
                onClick={loginActiveUser}
              >{`Continue as ${activeUser}`}</button>
              : ''
            }
         </section>
        </section>
      }
    </>
  )
}

function mapStateToProps({ users, loadingBar }) {
  return {
    users,
    loading: loadingBar.default
  }
}

export default connect(mapStateToProps)(SelectUser);