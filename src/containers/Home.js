import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getInitialData } from '../redux/actions/shared'
import { signOutUser } from '../redux/actions/users'
import LoadingBar from 'react-redux-loading'
import Nav from '../components/Nav'
import SelectUser from '../components/SelectUser'
import Dashboard from './Dashboard'

const Home = (props) => {
  const { dispatch, users, authedUser} = props
  useEffect(() => {
    dispatch(getInitialData())
  }, [dispatch]);
  console.log(users)
  return(
    <>
    <LoadingBar />
    <div>
      <Nav authedUser={ authedUser } signOut={ signOutUser }/>
      { authedUser === null ? <SelectUser /> : <Dashboard /> }

    </div>
    </>
    
  )
};

const mapStateToProps = ({ users, authedUser, questions }) => {
  return {
    users,
    authedUser,
    questions,

  };
};

export default connect(mapStateToProps)(Home)