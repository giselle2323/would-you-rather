import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getInitialData } from '../redux/actions/shared'
import SelectUser from '../components/SelectUser'
import Dashboard from './Dashboard'
const Home = (props) => {
  const { dispatch, users, authedUser} = props
  useEffect(() => {
    dispatch(getInitialData())
  }, [dispatch]);
  console.log(users)
  return(
    <div>
      {authedUser === null ? <SelectUser /> : <Dashboard />

      }
        
    </div>
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